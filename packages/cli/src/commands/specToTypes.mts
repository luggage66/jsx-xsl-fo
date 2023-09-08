import { readFile, writeFile } from "node:fs/promises";
import { JSDOM } from "jsdom";
import { SpecElement, SpecAst, SpecAttribute } from "./spec/ast.mjs";
import { analyzeAst } from "./spec/typeModel.mjs";
import { generateTypeScriptCode } from "./spec/codeGenerator.mjs";

export async function specFileToTypes(path: string) {
  const code = await readFile(path, { encoding: 'utf8' });
  return await specToTypes(code);
}

export async function specToTypes(xmlText: string) {
  // 1. Parse original .fo
  const dom = new JSDOM(xmlText, {
    contentType: "application/xml"
  });

  const foElements = dom.window.document.documentElement.querySelectorAll("div3[id^=fo_]");

  const specAst: SpecAst = {
    elements: [],
    attributes: {},
  }

  for (const div3 of foElements) {
    const tagName = div3.querySelector("head")!.textContent!.trim()
    const foElement: SpecElement = {
      tagName,
      attributes: []
    }
    for (const sitem of div3.querySelectorAll("slist sitem")!) {
      const specref = sitem.querySelector("specref")!.getAttribute("ref")!;
      foElement.attributes.push(specref);
    }
    specAst.elements.push(foElement);
  }

  const attributeGroupDivs = dom.window.document.documentElement.querySelectorAll("div1#pr-section div2")!;

  for (const div of attributeGroupDivs) {

    if (div.id) {
      specAst.attributes[div.id] = parseAttributes(div as HTMLElement);
    }
    else {
      specAst.attributes["loose"] = specAst.attributes["loose"] || [];
      specAst.attributes["loose"].push(...parseAttributes(div as HTMLElement));
    }

    // console.log(div.id, div.querySelector("head")?.textContent?.trim());
    // specAst.attributes[""] = parseAttributes(div as HTMLElement);
  }

  await writeFile("spec-ast.json", JSON.stringify(specAst, null, 2), { encoding: 'utf8' });

  const typeModel = analyzeAst(specAst);
  await writeFile("type-model.json", JSON.stringify(typeModel, null, 2), { encoding: 'utf8' });

  await writeFile("spec.ts", generateTypeScriptCode(typeModel), { encoding: 'utf8' });
}

function parseAttributes(element: HTMLElement) {
  const attributes: SpecAttribute[] = [];
  const attributeDivs = element.querySelectorAll("div3")!;

  for (const attributeDiv of attributeDivs) {
    attributes.push(parseAttributeSpec(attributeDiv as HTMLElement));
  }

  return attributes;
}

function parseAttributeSpecTable(table: HTMLTableElement): { media: string; value: string; } {
  let media = "";
  let value = "";

  for (const row of table.querySelectorAll("tr")) {
    const name = row.querySelector("td:nth-child(1)")!.textContent?.trim();
    const cellValue = row.querySelector("td:nth-child(2)")!.textContent!.trim();

    switch (name) {
      case "Value:":
        value = cellValue;
        break;
      case "Media":
        media = cellValue;
        break;
    }
  }

  return { media, value };
}

function parseAttributeSpec(root: HTMLElement): SpecAttribute {
  const name = root.querySelector("head")!.textContent!.trim();

  const propSummaryTable = root.querySelector("table.prop-summary");

  let media: string = "";
  let value: string = "";

  if (propSummaryTable) {
    ({ media, value } = parseAttributeSpecTable(root.querySelector("table.prop-summary")!));
  }

  return {
    name,
    media,
    value,
    values: []
  }
}
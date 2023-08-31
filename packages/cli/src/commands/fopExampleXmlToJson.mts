import generate from "@babel/generator";
import { readFile } from "node:fs/promises";
import t, { JSXAttribute, JSXElement, JSXText } from "@babel/types"
import { JSDOM } from "jsdom";
import { nativeElementNameToJsx } from "@jsx-xsl-fo/core";

type UsedTypes = JSXElement | JSXText;
function nodeToJsAst(node: Node): UsedTypes {
  switch (node.nodeType) {
    case node.ELEMENT_NODE:
      return elementNodeToJsxElement(node as HTMLElement);
    case node.TEXT_NODE:
      return t.jsxText(node.nodeValue || "");
    case node.COMMENT_NODE:
      return t.jsxText("COMMENT: " + node.nodeValue);
    default:
      throw new Error("Unknown node type: " + node.nodeType.toString());
  }
}

function elementNodeToJsxElement(node: HTMLElement): JSXElement {
  if (node.nodeType !== node.ELEMENT_NODE) {
    throw new Error("Expected element node.");
  }

  const childAstNodes = Array.prototype.map.call(node.childNodes, nodeToJsAst) as UsedTypes[];
  const attributeAstNodes = Array.prototype.map.call(node.attributes, attrNodeToJsxAttr) as JSXAttribute[];
  const jsxIdentifier = t.jsxIdentifier(nativeElementNameToJsx(node.nodeName));
  const hasChildren = childAstNodes.length > 0;

  return t.jsxElement(
    t.jsxOpeningElement(
      jsxIdentifier,
      attributeAstNodes,
      hasChildren ? false : true
    ),
    hasChildren ? t.jsxClosingElement(jsxIdentifier) : undefined,
    childAstNodes,
    hasChildren ? false : true,
  )
}

function attrNodeToJsxAttr(node: Attr): JSXAttribute {
  if (node.nodeType !== node.ATTRIBUTE_NODE) {
    throw new Error("Expected attribute node.");
  }

  return t.jsxAttribute(
    t.jsxIdentifier(nativeElementNameToJsx(node.name)),
    t.stringLiteral(node.value || "")
  );
}

export async function fopExampleXmlFileToJson(path: string) {
  const code = await readFile(path, { encoding: 'utf8' });
  return await fopExampleXmlToJson(code);
}

export async function fopExampleXmlToJson(xmlText: string) {
  // 1. Parse original .fo
  const dom = new JSDOM(xmlText, {
    contentType: "application/xml"
  });

  const data: Record<string, string> = {};

  for (const entry of dom.window.document.documentElement.childNodes) {
    if (entry.nodeType === entry.ELEMENT_NODE) {
      let name: string;
      let value: string;
      for (const part of entry.childNodes) {
        if (entry.nodeType === entry.ELEMENT_NODE) {
          if (part.nodeName === "term") {
            name = part.textContent!.trim();
          }
          else if (part.nodeName === "definition") {
            value =  part.textContent!.trim();
          }
        }
      }

      data[name!] = value!;
    }
  }

  console.log(JSON.stringify(data, null, 2));
}

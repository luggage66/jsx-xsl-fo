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

export async function foFileToJsx(path: string) {
  const code = await readFile(path, { encoding: 'utf8' });
  return await foToJsx(code);
}

export async function foToJsx(foText: string) {
  // 1. Parse original .fo
  const dom = new JSDOM(foText, {
    contentType: "application/xml"
  });

  // 2. Transform it into JSX
  const ast = elementNodeToJsxElement(dom.window.document.documentElement);

  // 3. Wrap into a program/function
  const programAst = t.program([
    t.functionDeclaration(
      t.identifier("MyComponent"),
      [],
      t.blockStatement([
        t.returnStatement(ast)
      ])
    )
  ])

  // 4. Generate new code
  const newCode = generate.default(programAst, {});

  console.log(newCode.code);
}

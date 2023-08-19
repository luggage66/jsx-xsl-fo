import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
import { readFile } from "node:fs/promises";

function capitalizeWord(word: string): string {
  if (word.length < 1) return "";

  return word.charAt(0).toUpperCase() + word.slice(1);
}

function camelize(input: string) {
  return input.split(/[-.]/)
    // .map(s => s.toLowerCase())
    .map((s, i) => i > 0 ? capitalizeWord(s) : s)
    .join("");
}

export async function camelizeJsxFile(path: string) {
  const code = await readFile(path, { encoding: 'utf8' });

  // 1. Parse code
  const ast = parser.parse(code, {
    sourceType: "module", // default: "script"
    plugins: ["jsx", "typescript"] // default: []
  });

  // 2. Transform code
  traverse.default(ast, {
    JSXElement(path) {
      for (const attr of path.node.openingElement.attributes) {
        if ("name" in attr) {


          if (attr.name.type === "JSXIdentifier") {
            attr.name.name = camelize(attr.name.name);
          }
          else {
            attr.name.name.name = camelize(attr.name.name.name);
          }
        }

      }
    }
  });

  // 3. Generate new code
  const newCode = generate.default(ast, {}, code);

  console.log(newCode.code);
}
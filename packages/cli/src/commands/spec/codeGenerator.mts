import { CommonType, ElementAttribute, ElementType, TypeModel } from "./typeModel.mjs";
import generate from "@babel/generator";
import t from "@babel/types"

export function generateTypeScriptCode(typeModel: TypeModel): string {
  const programAst = generateTypeScript(typeModel);
  const newCode = generate.default(programAst, {});
  return newCode.code;
}

function generateTypeScript(typeModel: TypeModel): t.Program {
  return t.program([
    ...typeModel.commonTypes.map(generateCommonType),
    ...typeModel.elements.map(generateElementType),
    generateElementListType(typeModel.elements)
  ]);
}

function generateCommonType(commonType: CommonType): t.TSInterfaceDeclaration {
  return t.tsInterfaceDeclaration (
    t.identifier(commonType.name),
    null,
    null,
    t.tsInterfaceBody(commonType.attributes.map(generateElementAttribute))
  );
}

function generateElementType(element: ElementType): t.TSInterfaceDeclaration {
  return t.tsInterfaceDeclaration (
    t.identifier(element.name),
    null,
    null,
    t.tsInterfaceBody(element.attributes.map(generateElementAttribute))
  );
}

function generateElementAttribute(attribute: ElementAttribute): t.TSPropertySignature {
  return t.tsPropertySignature(
    t.identifier(attribute.name),
    t.tsTypeAnnotation(t.tsTypeReference(t.identifier(attribute.type)))
  );
}

function generateElementListType(elements: ElementType[]): t.TSInterfaceDeclaration {
  return t.tsInterfaceDeclaration (
    t.identifier("Elements"),
    null,
    null,
    t.tsInterfaceBody(elements.map(generateElementListAtribute))
  );
}

function generateElementListAtribute(element: ElementType): t.TSPropertySignature {
  return t.tsPropertySignature(
    t.identifier(element.name),
    t.tsTypeAnnotation(t.tsTypeReference(t.identifier(element.name)))
  );
}

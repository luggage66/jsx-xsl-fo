import { CommonType, ElementAttribute, ElementType, TypeModel } from "./typeModel.mjs";

export function generateTypeScript(typeModel: TypeModel) {
  return `// Generated code

type UNKNOWNTYPE = void;

${typeModel.commonTypes.map(generateCommonType).join("\n\n")}

${typeModel.elements.map(generateElementType).join("\n\n")}

${generateElementListType(typeModel.elements)}
`;
}

function generateCommonType(commonType: CommonType): string {
  return `interface ${commonType.name} {
  ${commonType.attributes.map(generateElementAttribute).join("\n  ")}
}`;
}

function generateElementType(element: ElementType): string {
  const extendsText = element.attributeGroups.length > 0
    ? `extends ${element.attributeGroups.join(", ")} `
    : "";

  return `interface ${element.name} ${extendsText}{
  ${element.attributes.map(generateElementAttribute).join("\n  ")}
}`;
}

function generateElementAttribute(attribute: ElementAttribute): string {
  return `${attribute.name}: ${attribute.type}`;
}

function generateElementListType(elements: ElementType[]): string {
  return `interface Elements {
  ${elements.map(generateElementListAtribute).join(",\n  ")}
}`;
}

function generateElementListAtribute(element: ElementType): string {
  return `${element.name}: ${element.name}`;
}

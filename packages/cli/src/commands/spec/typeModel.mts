import { SpecAst, SpecAttribute, SpecElement, isAttributeInGroup } from "./ast.mjs";

export interface TypeModel {
  commonAttributeSets: CommonAttributeSet[];
  elements: ElementType[];
}

export interface CommonAttributeSet{
  name: string;
  attributes: ElementAttribute[];
}

export interface ElementAttribute {
  name: string;
  type: AttributeTypeValue[];
}

export interface ElementType {
  name: string;
  attributeGroups: string[];
  attributes: ElementAttribute[];
}

export type AttributeTypeValue = { string: string } | { ref: string }

function capitalizeWord(word: string): string {
  if (word.length < 1) return "";

  return word.charAt(0).toUpperCase() + word.slice(1);
}

function tagNameToTypeName(tagName: string) {
  return tagName.replace(/fo:/, "").split("-").map(capitalizeWord).join("");
}

function refNameToTypeName(tagName: string) {
  return tagName.split("-").map(capitalizeWord).join("");
}

function refNameToPropertyName(tagName: string) {
  const [first, ...rest] = tagName.split("-");

  return [first, ...(rest.map(capitalizeWord))].join("");
}

function parsePropertyValues(values: string): AttributeTypeValue[] {
  return values.split("|").map(v => v.trim()).map(v => ({ string: v }));
}

function createElementTypeModel(ast: SpecAst, element: SpecElement): ElementType {
  return {
    name: tagNameToTypeName(element.tagName),
    attributes: element.attributes.filter(a => !isAttributeInGroup(ast, a)).map<ElementAttribute>(a => ({
      name: refNameToPropertyName(a),
      type: [ { string: "UNKNOWNTYPE" } ]
    })),
    attributeGroups: element.attributes.filter(a => isAttributeInGroup(ast, a)).map(refNameToTypeName)
  };
}

function createCommonAttributeSetModel(ast: SpecAst, name: string, attributes: SpecAttribute[]): CommonAttributeSet {
  // console.log("createCommonTypeModel", name, attributes);
  
  return {
    name: tagNameToTypeName(name),
    attributes: attributes.map<ElementAttribute>(a => ({
      name: refNameToPropertyName(a.name),
      type: parsePropertyValues(a.value)
    })),
  };
}

export function analyzeAst(ast: SpecAst): TypeModel {
  const elements = ast.elements.map(e => createElementTypeModel(ast, e));
  const commonAttributeSets = Object.entries(ast.attributes)
    .filter(([key, _value]) => key !== "loose")
    .map(([name, attributes]) => createCommonAttributeSetModel(ast, name, attributes));

  return {
    elements,
    commonAttributeSets
  }
}

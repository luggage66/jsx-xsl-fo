import { SpecAst, SpecAttribute, SpecElement, isAttributeInGroup } from "./ast.mjs";

export interface TypeModel {
  commonTypes: CommonType[];
  elements: ElementType[];
}

export interface CommonType {
  name: string;
  attributes: ElementAttribute[];
}

export interface ElementAttribute {
  name: string;
  type: string;
}

export interface ElementType {
  name: string;
  attributeGroups: string[];
  attributes: ElementAttribute[];
}

export interface AttributeType {
  name: string;
  types: AttributeTypeValue[];
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
  return [];
}

function createElementTypeModel(ast: SpecAst, element: SpecElement): ElementType {
  return {
    name: tagNameToTypeName(element.tagName),
    attributes: element.attributes.filter(a => !isAttributeInGroup(ast, a)).map<ElementAttribute>(a => ({
      name: refNameToPropertyName(a),
      type: "UNKNOWNTYPE"
    })),
    attributeGroups: element.attributes.filter(a => isAttributeInGroup(ast, a)).map(refNameToTypeName)
  };
}

function createCommonTypeModel(ast: SpecAst, name: string, attributes: SpecAttribute[]): CommonType {
  // console.log("createCommonTypeModel", name, attributes);
  
  return {
    name: tagNameToTypeName(name),
    attributes: attributes.map<ElementAttribute>(a => ({
      name: refNameToPropertyName(a.name),
      type: "UNKNOWNTYPE"
    })),
  };
}

export function analyzeAst(ast: SpecAst): TypeModel {
  const elements = ast.elements.map(e => createElementTypeModel(ast, e));
  const commonTypes = Object.entries(ast.attributes)
    .filter(([key, _value]) => key !== "loose")
    .map(([name, attributes]) => createCommonTypeModel(ast, name, attributes));

  return {
    elements,
    commonTypes
  }
}

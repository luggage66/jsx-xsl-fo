export interface SpecAst {
  elements: SpecElement[];
  attributes: Record<string, SpecAttribute[]>;
}

export interface SpecAttributeValue {
  type: string;
  description: string;
}

export interface SpecAttribute {
  name: string;
  value: string;
  media: string;
  values: SpecAttributeValue[];
}

export type SpecRef = string;

export interface SpecElement {
  tagName: string;
  attributes: SpecRef[];
}

export function isAttributeInGroup(ast: SpecAst, specRef: string) {
  return Object.entries(ast.attributes).some(([groupName, _attributes]) => groupName === specRef);
}

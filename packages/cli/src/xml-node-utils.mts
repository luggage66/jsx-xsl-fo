export function isElementNode(node: Node): node is HTMLElement {
  return node.nodeType === node.ELEMENT_NODE;
}

export function isTextNode(node: Node): node is Node {
  return node.nodeType === node.TEXT_NODE;
}

export function isCommentNode(node: Node): node is Node {
  return node.nodeType === node.COMMENT_NODE;
}

export abstract class XmlVisitor {
  Node(node: Node) {
    switch (node.nodeType) {
      case node.ELEMENT_NODE:
        return this.ElementNode(node as HTMLElement);
      case node.TEXT_NODE:
        return this.TextNode(node);
      case node.COMMENT_NODE:
        return this.CommentNode(node);
      default:
        throw new Error("Unknown node type: " + node.nodeType.toString());
    }
  }

  ElementNode(element: HTMLElement) {
    // console.log("visitElementNode", element.constructor);

    for (const attribute of element.attributes) {
      this.Attr(attribute);
    }

    for (const childNode of element.childNodes) {
      this.Node(childNode);
    }
  }

  Attr(attr: Attr) {
    // console.log("visitAttr", attr.name, attr.value);
  }

  TextNode(node: Node) {
    // console.log("visitTextNode", node);
  }

  CommentNode(node: Node) {
    // console.log("visitCommentNode", node);
  }
}

export class XslSpecFileVisitor extends XmlVisitor {
  ElementNode(element: HTMLElement): void {
    // if (!(["p", "inform-div1", "specref"].includes(element.tagName))) {
    //   console.log(element.tagName);
    // }

    if (element.tagName === "div1" && element.id === "fo-section") {
      new FoSectionVisitor().ElementNode(element);
    }
    else {
      super.ElementNode(element);
    }
  }
}

class FoSectionVisitor extends XmlVisitor {
  ElementNode(element: HTMLElement): void {
    if (element.tagName === "glist") {
      // console.log(element.innerHTML);
      new FoSectionGlistVisitor().ElementNode(element);
    }
    else {
      super.ElementNode(element);
    }
  }
}

class FoSectionGlistVisitor extends XmlVisitor {
  ElementNode(element: HTMLElement): void {
    if (element.tagName === "gitem") {
      console.log(element.querySelector("label")!.textContent!.trim(), element.querySelector("def")!.textContent!.trim());
    }
    else {
      super.ElementNode(element);
    }
    
  }
}
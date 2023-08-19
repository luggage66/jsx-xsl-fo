import decamelize from 'decamelize';
import XMLWriter from 'xml-writer';
// import { XlsfoComponent } from './xslfoComponent';
import { ComponentClass, XlsfoComponent } from './xslfoComponent.cjs';
import { StatelessComponent, XslfoElement, XslfoNode } from './elements.cjs';

// tslint:disable-next-line:variable-name
const XSLFOElementType = Symbol('xslfo.element');

const twoPartProperties = [
    'block-progression-dimension.maximum',
    'block-progression-dimension.minimum',
    'block-progression-dimension.optimum',
    'border-before-width.conditional',
    'border-before-width.length',
    'border-separation.block-progression-direction',
    'border-separation.inline-progression-direction',
    'inline-progression-dimension.maximum',
    'inline-progression-dimension.minimum',
    'inline-progression-dimension.optimum',
    'keep-together.within-column',
    'keep-together.within-line',
    'keep-together.within-page',
    'keep-with-next.within-line',
    'keep-with-previous.within-line',
    'leader-length.maximum',
    'leader-length.minimum',
    'leader-length.optimum',
    'line-height.conditionality',
    'line-height.maximum',
    'line-height.minimum',
    'line-height.optimum',
    'line-height.precedence',
    'space-after.precedence',
    'space-before.conditionality',
    'space-before.maximum',
    'space-before.minimum',
    'space-before.optimum',
    'space-before.precedence',
    'space.minimum'
].map(p => p.replace(/[.].*/, ''));

export function camelAttrNameToNative(attributeName: string): string {
    attributeName = decamelize(attributeName, '-');

    const splitFrom = twoPartProperties.find(p => attributeName.indexOf(p) === 0);

    if (splitFrom) {
        const postfix = attributeName.substring(splitFrom.length + 1);
        if (postfix) {
            return `${splitFrom}.${attributeName.substring(splitFrom.length + 1)}`;
        }
        else {
            return attributeName;
        }
    }
    else {
        return attributeName;
    }
}

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

export function nativeElementNameToJsx(elementName: string) {
  return camelize(elementName.replace(/^fo:/, ""));
}

export function createElement<P>(type: string | ComponentClass<P> | StatelessComponent<P>, props: P, key?: string): XslfoElement<P> {
    // if (typeof type === 'string') {
    //     console.log("CREATEELEMENT", type, props);
    // }
    const element = {
        $$typeof: XSLFOElementType,
        type,
        props: { ...props }
    };

    return element;
}

function elementToStream(element: string | ProcessedNode | (string | ProcessedNode)[], writer: XMLWriter) {
    if (!element) { return; }

    if (typeof(element) === 'string') {
        writer.text(element);
    }
    else if (Array.isArray(element)) {
        Array.prototype.forEach.call(element, (e) => elementToStream(e, writer));
    }
    else {
        writer.startElementNS('fo', element.tag);

        let innerXML: string | undefined = undefined;

        for (const attributeName in element.attributes) {
            const attributeValue = element.attributes[attributeName];

            if (attributeName === 'dangerouslySetInnerXML') {
                if (typeof attributeValue === "object" && attributeValue !== null && "__xml" in attributeValue) {
                    innerXML = attributeValue.__xml as any;
                }
                else {
                    throw new Error("no '__xml' property in value supplied to dangerouslySetInnerXML");
                }
            }
            else if (typeof attributeValue === 'string') {
                writer.writeAttribute(camelAttrNameToNative(attributeName), attributeValue);
            }
            else if (typeof attributeValue === 'undefined') {
                // do nothing.
            }
            else {
                throw new Error(`Unknown attributes ${attributeName} value type ${typeof attributeValue} expected string or {__xml}`);
            }
        }

        if (innerXML) {
            writer.writeRaw(innerXML);
        }
        else {
            elementToStream(element.children, writer);
        }

        writer.endElement();
    }
}

function renderToXmlWriter(element: XslfoElement<unknown>, writer: XMLWriter) {
    // console.log("ORIGINAL", element);

    const elementTree = processElement(element);

    // console.log("PROCESSED", elementTree);

    writer.startDocument('1.0', 'UTF-8');
    elementToStream(elementTree, writer);
    writer.endDocument();
}

export function renderToString(element: XslfoElement<any>) {
    const writer = new XMLWriter(true);
    renderToXmlWriter(element, writer);

    return writer.toString();
}

export function renderToStream(element: XslfoElement<any>, stream: NodeJS.WritableStream) {
    const writer = new XMLWriter(true, (a, b) => {
        stream.write(a, b);
    });
    renderToXmlWriter(element, writer);
}

type ChildrenList = XslfoElement<any> | XslfoElement<any>[];
// tslint:disable-next-line:variable-name
export const Children = {
    map<R>(children: ChildrenList, fn: (children: XslfoElement<any>) => R, thisArg?: any): R | R[] {
        if (Array.isArray(children)) {
            return Array.prototype.map.call(children, (child:XslfoElement<any>) => fn(child)) as R[];
        }
        else {
            return fn.call(thisArg, children);
        }
    },
    only(children: ChildrenList) {
        if (Array.isArray(children)) {
            throw new Error('XSLFO.Children.only should only be passed a children with exactly one child.');
        }
        if (typeof(children) === 'undefined') {
            throw new Error('XSLFO.Children.only should only be passed a children with exactly one child.');
        }

        return children;
    },
    // prolly not the most performant
    count(children: ChildrenList) {
        let count = 0;
        this.map(children, x => count++);
        return count;
    }
};

interface ProcessedNode {
    tag: string;
    attributes: Record<string, unknown>;
    children: string | ProcessedNode | (string | ProcessedNode)[];
}

export function processElement(element: XslfoNode[]): (string | ProcessedNode)[];
export function processElement(element: XslfoNode): string | ProcessedNode;
export function processElement(element: XslfoNode | XslfoNode[]): string | ProcessedNode | (string | ProcessedNode)[] {

    if (typeof(element) === 'boolean') {
        return element ? "true" : "false";
    }
    if (typeof(element) === 'string') {
        return element;
    }
    else if (typeof(element) === 'number') {
        return element.toString();
    }
    else if (Array.isArray(element)) {
        return element.map(processElement);
    }
    else if (!element) {
        return "";
    }
    else {
        if (element.$$typeof !== XSLFOElementType) {
            throw Error(`Not an XSLFOElement, instead of ${typeof(element)}, ${element.$$typeof.toString()}`);
        }

        // console.log("FF", element);

        if (typeof(element.type) === 'string') {
            const { children, ...attributes } = element.props;

            const processedChildren = processChildren(children);

            return {
                tag: decamelize(element.type, '-'),
                attributes,
                children: processedChildren
            };
        }
        else {
            let childTree;

            if (typeof(element.type) === 'function') {
                let type: XlsfoComponent<any> | XslfoElement<any>;

                try {
                    type = new (element.type as ComponentClass<any>)(element.props);
                }
                catch {
                    type = (element.type as StatelessComponent<any>)(element.props)
                }

                if ("render" in type) {
                    childTree = type.render();
                }
                else {
                    childTree = type;
                }
            }
            else {
                throw new Error("I don't know what this is...");
            }

            return processElement(childTree);
        }
    }
}

export function processChildren(children: ChildrenList) {
    if (Array.isArray(children)) {
        return children.map(processElement)
    }
    else {
        return processElement(children);
    }
}

export function cloneElement<T>(element: XslfoElement<T>, props: T, ...children: XslfoNode[]): XslfoElement<T> {
    const { props: originalProps, ...rest } = element;

    return {
        ...rest,
        props: Object.assign(Object.create(null), originalProps, props)
    };
}

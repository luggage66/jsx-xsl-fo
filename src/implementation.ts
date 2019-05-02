import decamelize from 'decamelize';
import * as XMLWriter from 'xml-writer';
// import { XlsfoComponent } from './xslfoComponent';
import { XlsfoComponent, ComponentClass } from './xslfoComponent';
import { TagProps, XslfoElement, XslfoNode, XslFoIntrinsicAttributes, StatelessComponent } from './elements';
import { Elements } from './fopTypes';

// tslint:disable-next-line:variable-name
const  XSLFOElementType = Symbol('xslfo.element');

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

function fixAttributeName(attributeName: string) {
    attributeName = decamelize(attributeName, '-');

    const splitFrom = twoPartProperties.find(p => attributeName.indexOf(p) === 0);

    if (splitFrom) {
        return `${splitFrom}.${attributeName.substring(splitFrom.length + 1)}`;
    }
    else {
        return attributeName;
    }
}

export function createElement<P>(type, props, ...children: Array<XslfoNode>): XslfoElement<P> {
    const element = {
        $$typeof: XSLFOElementType,
        type,
        props: { ...props }
    };

    if (children) { element.props.children = children.length === 1 ? children[0] : children; }

    return element;
}

export namespace createElement {
    export namespace JSX {
        export interface Element extends XslfoElement<any> {}
        export interface ElementClass extends XlsfoComponent<any> {
            render(): XslfoNode;
        }
        export interface ElementAttributesProperty { props: {}; }

        export interface IntrinsicAttributes extends XslFoIntrinsicAttributes {
            // key?: string | number;
        }
        export interface IntrinsicClassAttributes<T> {}

        export interface IntrinsicElements extends Elements {}
        // interface IntrinsicElements {
        //     [name: string]: any;
        // }
    }
}

function elementToStream(element: ResolvedNode, writer: any) {
    if (!element) { return; }

    if (typeof(element) === 'string') {
        writer.text(element);
    }
    else if (Array.isArray(element)) {
        for (const e of element) {
            elementToStream(e, writer);
        }
    }
    else {
        writer.startElementNS('fo', element.tag);

        let innerXML;

        for (const attributeName in element.attributes) {
            if (attributeName === 'dangerouslySetInnerXML') {
                // HACK: check this better
                innerXML = (element.attributes[attributeName] as any).__xml;
            }
            else {
                writer.writeAttribute(fixAttributeName(attributeName), element.attributes[attributeName]);
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

function renderToXmlWriter(element: XslfoNode, writer: any) {
    const elementTree = processElement(element);

    writer.startDocument('1.0', 'UTF-8');
    elementToStream(elementTree, writer);
    writer.endDocument();
}

export function renderToString(element: XslfoNode) {
    const writer = new XMLWriter(true);
    renderToXmlWriter(element, writer);

    return writer.toString();
}

export function renderToStream(element: XslfoElement<any>, stream: NodeJS.WritableStream) {
    const writer = new XMLWriter(true, (a, b) => {
        stream.write(a, 'utf8');
    });
    renderToXmlWriter(element, writer);
}

// tslint:disable-next-line:variable-name
export const Children = {
    map(children, fn, thisArg?: any) {
        if (Array.isArray(children)) {
            Array.prototype.forEach.call(children, (child) => Children.map(child, fn, thisArg));
        }
        else {
            return fn.call(thisArg, children);
        }
    },
    only(children) {
        if (Array.isArray(children)) {
            throw new Error('XSLFO.Children.only should only be passed a children with exactly one child.');
        }
        if (typeof(children) === 'undefined') {
            throw new Error('XSLFO.Children.only should only be passed a children with exactly one child.');
        }

        return children;
    },
    // prolly not the most performant
    count(children) {
        let count = 0;
        this.map(children, x => count++);
        return count;
    }
};

interface ResolvedElement<T> {
    tag: string;
    attributes: XslFoIntrinsicAttributes & T;
    children: ResolvedNode;
}

export type ResolvedText = string;
export type ResolvedChild = ResolvedElement<any> | ResolvedText;
export interface ResolvedNodeArray extends Array<ResolvedNode> {}
export type ResolvedNode = ResolvedNodeArray | ResolvedChild | null;


export function processElement(element: XslfoNode): ResolvedNode {
    if (!element) { return null; }

    if (typeof(element) === 'string') {
        return element;
    }
    else if (typeof(element) === 'number') {
        return element.toString();
    }
    else if (typeof(element) === 'boolean') {
        return element.toString();
    }
    else if (Array.isArray(element)) {
        return element.map(processElement);
    }
    else {
        if (element.$$typeof !== XSLFOElementType) {
            throw Error(`Not an XSLFOElement, instead of ${typeof(element)}, ${String(element.$$typeof)}`);
        }

        if (typeof(element.type) === 'string') {
            const { children, ...attributes } = element.props;

            const processedChildren = processElement(children);

            return {
                tag: decamelize(element.type, '-'),
                attributes,
                children: processedChildren
            } as ResolvedElement<any>;
        }
        else {
            let childTree: XslfoNode;

            if (typeof(element.type) === 'function') {

                try {
                    const componentInstance = new (element.type as ComponentClass<any>)(element.props);
                    childTree = componentInstance.render();
                } catch (ex) {
                    childTree = (element.type as StatelessComponent<any>)(element.props);
                }
            }
            else {
                throw new Error("I don't know what this is...");
            }

            return processElement(childTree);
        }
    }
}

export function cloneElement<P>(element: XslfoElement<P>, props: Partial<P>, ...children: Array<XslfoNode>) {
    const { props: originalProps, children: originalChildren, ...rest } = element;

    return {
        ...rest,
        props: Object.assign(Object.create(null), originalProps, props),
        children: (children ? children : originalChildren)
    };
}

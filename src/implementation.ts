import * as decamelize from 'decamelize';
import * as XMLWriter from 'xml-writer';
import * as process from 'process';
// import { XlsfoComponent } from './xslfoComponent';
import { XslfoElement } from './elements';

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

function fixAttributeName(attributeName) {
    attributeName = decamelize(attributeName, '-');

    let splitFrom = twoPartProperties.find(p => attributeName.indexOf(p) === 0);

    if (splitFrom) {
        return `${splitFrom}.${attributeName.substring(splitFrom.length + 1)}`;
    }
    else {
        return attributeName;
    }
}

function renderAttributes(attributes) {
    if (!attributes) { return; }

    return Object.keys(attributes).reduce((prev, curr) => {
        return prev + (attributes[curr] !== undefined ? ' ' + fixAttributeName(curr) + '="' + attributes[curr] + '"' : '');
    }, '');
}

export function createElement<P>(type, props, ...children): XslfoElement<P> {
    let element = {
        $$typeof: XSLFOElementType,
        type,
        props: { ...props }
    };

    if (children) { element.props.children = children.length === 1 ? children[0] : children; }

    return element;
}

function elementToStream(element, writer) {
    if (!element) { return; }

    if (typeof(element) === 'string') {
        writer.text(element);
    }
    else if (Array.isArray(element)) {
        Array.prototype.forEach.call(element, (e) => elementToStream(e, writer));
    }
    else {
        writer.startElementNS('fo', element.tag);

        let innerXML;

        for (let attributeName in element.attributes) {
            if (attributeName === 'dangerouslySetInnerXML') {
                innerXML = element.attributes[attributeName].__xml;
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

function renderToXmlWriter(element, writer) {
    let elementTree = processElement(element);

    writer.startDocument('1.0', 'UTF-8');
    elementToStream(elementTree, writer);
    writer.endDocument();
}

export function renderToString(element) {
    let writer = new XMLWriter(true);
    renderToXmlWriter(element, writer);

    return writer.toString();
}

export function renderToStream(element: XslfoElement<any>, stream: NodeJS.WritableStream) {
    let writer = new XMLWriter(true, (a, b) => {
        stream.write(a, 'utf8');
    });
    renderToXmlWriter(element, writer);
}

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
            throw new Error("XSLFO.Children.only should only be passed a children with exactly one child.");
        }
        if (typeof(children) === 'undefined') {
            throw new Error("XSLFO.Children.only should only be passed a children with exactly one child.");
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

export function processElement(element) {
    if (!element) { return element; }

    if (typeof(element) === 'string') {
        return element;
    }
    else if (typeof(element) === 'number') {
        return element.toString();
    }
    else if (Array.isArray(element)) {
        return element.map(processElement);
    }
    else {
        if (element.$$typeof !== XSLFOElementType) {
            throw Error(`Not an XSLFOElement, instead of ${typeof(element)}, ${element.$$typeof}`);
        }

        if (typeof(element.type) === 'string') {
            let { children, ...attributes } = element.props;

            children = processElement(children);

            return {
                tag: decamelize(element.type, '-'),
                attributes,
                children
            };
        }
        else {
            let childTree;

            if (typeof(element.type === 'function')) {
                let type = new element.type(element.props);

                if (type.render) {
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

export function cloneElement(element, props, ...children) {
    let { props: originalProps, children: originalChildren, ...rest } = element;

    return {
        ...rest,
        props: Object.assign(Object.create(null), originalProps, props),
        children: (children ? children : originalChildren)
    };
}

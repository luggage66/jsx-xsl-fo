import decamelize from 'decamelize';

const XSLFOElementType = Symbol('xslfo.element');

const twoPartProperties = [
    'keep-together',
    'keep-with-next',
    'keep-with-previous'
];

function fixAttributeName(attributeName) {
    attributeName = decamelize(attributeName, '-');

    let splitFrom = twoPartProperties.find(p => attributeName.indexOf(p) === 0);

    if (splitFrom) {
        return `${splitFrom}.${attributeName.substring(splitFrom.length + 1)}`
    }
    else {
        return attributeName;
    }
}

function renderAttributes(attributes) {
    if (!attributes) return;

    return Object.keys(attributes).reduce((prev, curr) => prev + (attributes[curr] !== undefined ? ' ' + fixAttributeName(curr) + '="' + attributes[curr] + '"' : ''), '');
}

export function createElement(type, props, ...children) {
    let element = {
        $$typeof: XSLFOElementType,
        type,
        props: { ...props }
    }

    if (children) element.props.children = children;

    return element;
}

export function renderToString(element) {
    let elementTree = process(element);

    return elementToString(elementTree);
}

function elementToString(element) {
    if (!element) return '';

    if (typeof(element) === 'string') {
        return element;
    }
    else if (Array.isArray(element)) {
        return element.reduce((prev, curr) => prev + elementToString(curr), '');
    }
    else {
        let attributesString = renderAttributes(element.attributes);
        let childrenAsString = elementToString(element.children);

        return `<${element.tag} ${attributesString ? attributesString : ''}>${childrenAsString}</${element.tag}>`;
    }
}

export class Component {
    constructor(props) {
        this.props = props;
    }

    render() {
        throw new Error('inherit this class, fool.');
    }
}

const Children = {
    map(children, fn, thisArg) {
        if (Array.isArray(children)) {
            Array.prototype.forEach.call(children, (child) => Children.map(child, fn, thisArg));
        }
        else {
            return fn.call(thisArg, children);
        }
    }
}

function process(element) {
    if (!element) return element;

    if (typeof(element) === 'string') {
        return element;
    }
    else if (Array.isArray(element)) {
        return element.map(process);
    }
    else {
        if (element.$$typeof !== XSLFOElementType) throw Error("Not an XSLFOElement");
        if (typeof(element.type) === 'string') {
            let { children, ...attributes } = element.props;

            children = process(children);

            return {
                tag: 'fo:' + decamelize(element.type, '-'),
                attributes,
                children
            };
        }
        else {
            let type, childTree;

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

            return process(childTree);
        }
    }
}

function cloneElement(element, props, ...children) {
    let { props: originalProps, children: originalChildren, ...rest } = element;

    return {
        ...rest,
        props: Object.assign(Object.create(null), originalProps, props),
        children: (children ? children : originalChildren)
    };
}

export default {
    createElement,
    renderToString,
    Component,
    Children,
    process,
    cloneElement
};

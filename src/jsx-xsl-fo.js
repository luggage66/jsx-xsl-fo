import decamelize from 'decamelize';

function reduceChildren(children) {
    if (!children) return '';

    if (!Array.isArray(children)) {
        if (typeof(children) === 'string') return children;

        return renderToString(children);
    }

    return children.reduce((prev, curr) => prev + reduceChildren(curr), '');
}

function renderAttributes(attributes) {
    if (!attributes) return;

    return Object.keys(attributes).reduce((prev, curr) => prev + ' ' + decamelize(curr, '-') + '="' + attributes[curr] + '"', '');
}

export function createElement(tag, props, ...children) {
    if (typeof(tag) === 'string') return { tag, props, children };

    return new tag(props, children);
}

export function renderToString(element) {

    if (typeof(element.tag) === 'string') {
        let tagString = 'fo:' + decamelize(element.tag, '-');

        let attributesString = renderAttributes(element.props);

        let childrenAsString = reduceChildren(element.children);

        return `<${tagString} ${attributesString ? attributesString : ''}>${childrenAsString}</${tagString}>`;
    }
    else {
        return renderToString(element.render());
    }
}

export class Component {
    constructor(props, children) {
        this.props = props;
        this.children = children;
    }

    render() {
        throw new Error('inherit this class, fool.');
    }
}

const Children {
    map(children, fn, thisArg = null) {
        if (Array.isArray(children)) {

        }
        else {
            return fn.call(thisArg, children);
        }
    }
}

export default {
    createElement,
    renderToString,
    Component,
    Children
};

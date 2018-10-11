export {
    createElement,
    renderToString,
    renderToStream,
    Children,
    processElement,
    cloneElement
} from './implementation';

export {
    Elements,
    BlockType
} from './fopTypes';

export {
    XlsfoComponent as Component,
    ComponentClass
} from './xslfoComponent';

export interface AllowAllProps {
    [elemName: string]: any;
}

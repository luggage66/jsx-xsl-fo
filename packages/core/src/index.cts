export { XslfoElement } from './elements.cjs';

export {
    createElement,
    renderToString,
    renderToStream,
    Children,
    processElement,
    cloneElement,
    camelAttrNameToNative,
    nativeElementNameToJsx
} from './implementation.cjs';

export {
    Elements,
    BlockType,
    InheritableProperties
} from './fopTypes.cjs';

export {
    XlsfoComponent as Component,
    ComponentClass
} from './xslfoComponent.cjs';

export interface AllowAllProps {
    [elemName: string]: any;
}

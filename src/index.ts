import { XlsfoComponent } from './xslfoComponent';
import { TagProps, XslfoElement } from './elements';
import { Elements } from './fopTypes';

export {
    createElement,
    renderToString,
    renderToStream,
    Children,
    processElement,
    cloneElement
} from './implementation';

export {
    Elements
} from './fopTypes';

export {
    BlockType
} from './fopTypes';

export {
    XlsfoComponent as Component,
    ComponentClass
} from './xslfoComponent';

export interface AllowAllProps {
    [elemName: string]: any;
}

declare global {
    namespace JSX {
        interface Element extends XslfoElement<any> {}
        interface ElementClass extends XlsfoComponent<any> {
            render(): JSX.Element | null;
        }
        interface ElementAttributesProperty { props: {}; }

        interface IntrinsicAttributes {
            // key?: string | number;
        }
        interface IntrinsicClassAttributes<T> {}

        interface IntrinsicElements extends Elements {}
        // interface IntrinsicElements {
        //     [name: string]: any;
        // }
    }
}

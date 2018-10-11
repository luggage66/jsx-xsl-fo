import { XlsfoComponent } from './xslfoComponent';
import { TagProps, XslfoElement } from './elements';
import { Elements } from './fopTypes';

export namespace JSX {
    export interface Element extends XslfoElement<any> {}
    export interface ElementClass extends XlsfoComponent<any> {
        render(): Element | null;
    }
    export interface ElementAttributesProperty { props: {}; }

    export interface IntrinsicAttributes {
        // key?: string | number;
    }
    export interface IntrinsicClassAttributes<T> {}

    export interface IntrinsicElements extends Elements {}
    // interface IntrinsicElements {
    //     [name: string]: any;
    // }
}

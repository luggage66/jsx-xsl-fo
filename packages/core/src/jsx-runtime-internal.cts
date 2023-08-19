import { StatelessComponent, XslfoElement } from "./elements.cjs";
import { Elements } from "./fopTypes.cjs";
import { createElement } from "./implementation.cjs";
import { ComponentClass, XlsfoComponent } from "./xslfoComponent.cjs";

export function jsx<P>(component: string | ComponentClass<P> | StatelessComponent<P>, props: P, key?: string): XslfoElement<P> {
    return createElement(component, props, key);
}

export function jsxs<P>(component: string | ComponentClass<P> | StatelessComponent<P>, props: P, key?: string): XslfoElement<P> {
    return createElement(component, props, key);
}

export namespace JSX {
    export interface Element extends XslfoElement<any> {}
    export interface ElementClass extends XlsfoComponent<any> {}
    // interface ElementAttributesProperty extends GlobalJSXElementAttributesProperty {}
    // interface ElementChildrenAttribute extends GlobalJSXElementChildrenAttribute {}

    // type LibraryManagedAttributes<C, P> = GlobalJSXLibraryManagedAttributes<C, P>;

    // interface IntrinsicAttributes extends GlobalJSXIntrinsicAttributes {}
    // interface IntrinsicClassAttributes<T> extends GlobalJSXIntrinsicClassAttributes<T> {}
    export interface IntrinsicElements extends Elements {}
}
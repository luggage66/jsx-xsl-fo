import { XlsfoComponent, ComponentClass } from './xslfoComponent';

export interface TagProps<T> {
    id?: string;
}

export type XslfoText = string | number;
export type XslfoChild = XslfoElement<any> | XslfoText;
export interface XslfoNodeArray extends Array<XslfoNode> {}
export type XslfoNode = XslfoNodeArray | XslfoChild | boolean | null | undefined;

export interface XslfoElement<P> {
    $$typeof: symbol;
    type: string | ComponentClass<P> | StatelessComponent<P>;
    props: P;
}

export interface StatelessComponent<TProps> {
    (props: TProps & { children: XslfoNode }): XslfoElement<any>;
}

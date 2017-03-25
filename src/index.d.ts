interface XslElement<P> {
    type: string | XslComponent<P> | StatelessComponent<P>;
    props: P;
    key: string | null;
}

type XslNode = XslElement<any> | string;

interface StatelessComponent<P> {
    (props: P & { children?: XslNode }, context?: any): XslElement<any> | undefined;
    displayName?: string;
}

interface XslAttributes {
}

declare class XslComponent<P> {
    props: Readonly<{ children? }> & Readonly<P>;
}

declare namespace JSX {
    interface Element { }
    interface ElementClass extends XslComponent<any> {
        props: {};
        render(): JSX.Element | null;
    }
    interface ElementAttributesProperty { props: {}; }

    interface IntrinsicAttributes extends XslAttributes { }
    interface IntrinsicClassAttributes<T> extends XslAttributes { }

    interface IntrinsicElements {
        [elemName: string]: any;
    }
}

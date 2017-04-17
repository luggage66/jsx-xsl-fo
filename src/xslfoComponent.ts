import { XslfoNode, XslfoElement } from './elements';

export abstract class XlsfoComponent<TProps> {
    props: Readonly<{ children?: XslfoNode }> & Readonly<TProps>;

    constructor(props: TProps) {
        this.props = props;
    }

    abstract render(): JSX.Element;
}

export interface ComponentClass<P> {
    new (props?: P): XlsfoComponent<P>;
}

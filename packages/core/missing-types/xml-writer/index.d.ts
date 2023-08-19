declare module "xml-writer" {

    type WritableContent = string | number | Function | XmlWriter;

    export default class XmlWriter {
        constructor(indent: boolean, callback?: (s: string, e: BufferEncoding) => void)
        public write(...s: string[]): void;
        public endElement(): this;
        public writeRaw(content: WritableContent): this;
        public writeAttribute(name: WritableContent, content: WritableContent): this;
        public text(content: WritableContent): this;
        public startElementNS(prefix: WritableContent, name: WritableContent, uri?: string): this;
        public startDocument(version: string, encoding: string, standalone?: boolean): this;
        public endDocument(): this;
    }
}
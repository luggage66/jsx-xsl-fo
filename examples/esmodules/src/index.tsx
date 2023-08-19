import { renderToStream } from "@jsx-xsl-fo/core";

renderToStream(
    <root xmlns:fo="http://www.w3.org/1999/XSL/Format">
        <layoutMasterSet>
            <simplePageMaster masterName="my_page">
                <regionBody />
            </simplePageMaster>
        </layoutMasterSet>
        <pageSequence masterReference="my_page">
            <flow flowName="xsl-region-body">
                <block>Hello World!</block>
            </flow>
        </pageSequence>
    </root>,
    process.stdout
);
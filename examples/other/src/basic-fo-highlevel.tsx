import { renderToStream } from "@jsx-xsl-fo/core";
import { Report, PageSequence, PageContent, PageHeader, PageFooter } from '@jsx-xsl-fo/reporting';

renderToStream(
    <Report>
        <PageSequence>
            <PageHeader>
                <block>page <pageNumber /></block>
            </PageHeader>
            <PageContent>
                <block>Hello World</block>
            </PageContent>
        </PageSequence>
    </Report>,
    process.stdout
);
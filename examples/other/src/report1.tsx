import { Component } from '@jsx-xsl-fo/core';
import { Report, PageSequence, PageContent, PageHeader } from '@jsx-xsl-fo/reporting';

function TableOfContentsItem(props) {
    return <block textAlignLast="justify">
        <basicLink internalDestination={props.sectionId}>
            {props.sectionTitle}
            <leader leaderPattern="dots" />
            <pageNumberCitation refId={props.sectionId} />
        </basicLink>
    </block>;
}

export default function generateReport(data) {
    return <Report>
        <PageSequence>
            <PageContent>
                <TitleBar>A Title</TitleBar>
                <TableOfContentsItem sectionId="section1" sectionTitle="One" />
                <TableOfContentsItem sectionId="section1" sectionTitle="Two" />
            </PageContent>
        </PageSequence>
        <PageSequence>
            <PageHeader>
                <block lineHeight="14pt" fontSize="10pt" textAlign="end">
                    Page <pageNumber />
                </block>
            </PageHeader>
            <PageContent>
                <block id="section1">
                    Names:
                    {data.names.map(name => {
                        return <inline fontStyle="italic">{name}, </inline>;
                    })}
                </block>
            </PageContent>
        </PageSequence>
    </Report>;
}

//make simple react-like components
class TitleBar extends Component<{}> {
  render() {
    return <block fontSize="30pt">{this.props.children}</block>;
  }
}

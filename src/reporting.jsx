/** @jsx XSLFO.createElement */
import XSLFO, { Component } from './jsx-xsl-fo';
import uuid from 'uuid';

export class Report extends Component {
    render() {
        let pageSequences = [];

        let newChildren = XSLFO.Children.map(this.props.children, (child) => {
            if (child) {
                if (child.type !== PageSequence) throw new Error("Unknown child type. needs PageSequence");

                let sequenceId = uuid.v4();

                let { children, pageSize, ...props } = child.props;

                let s ={
                    sequenceId,
                    element: XSLFO.cloneElement(child, { sequenceId }),
                    pageSize,
                    props
                };

                XSLFO.Children.map(children, (flow) => {
                    if (flow) {
                        switch (flow.type) {
                            case PageHeader:
                                s.header = <regionBefore {...flow.props} />;
                                break;
                            case PageFooter:
                                s.footer = <regionAfter {...flow.props} />;
                                break;
                            case PageContent:
                                s.body = <regionBody {...flow.props} />;
                                break;
                            default:
                                throw new Error("Unknown child type. needs PageFooter, PageHeader or PageContent");
                        }
                    }
                });

                pageSequences.push(s);
            }
        });

        return <root {...{"xmlns:fo": "http://www.w3.org/1999/XSL/Format"}} {...this.props}>
            <layoutMasterSet>
                {pageSequences.map(s => {
                    return <simplePageMaster master-name={s.sequenceId} {...s.pageSize} {...s.props} >
                        {[s.body, s.header, s.footer]}
                    </simplePageMaster>
                })}
            </layoutMasterSet>
            {pageSequences.map(s => s.element)}
        </root>
    }
}

export class PageSequence extends Component {

    render() {
        return <pageSequence masterReference={this.props.sequenceId}>
            {this.props.children}
        </pageSequence>;
    }
}

export class PageContent extends Component {
    render() {
        return <flow flowName="xsl-region-body">
            {this.props.children}
        </flow>;
    }
}

export class PageHeader extends Component {
    render() {
        return <staticContent flowName="xsl-region-before">
            {this.props.children}
        </staticContent>;
    }
}

export class PageFooter extends Component {
    render() {
        return <staticContent flowName="xsl-region-after">
            {this.props.children}
        </staticContent>;
    }
}

export const PAGE_SIZES = {
    LETTER_PORTRAIT: {
        'page-height': "29.7cm",
        'page-width': "21.0cm"
    },
    LETTER_LANDSCAPE: {
        'page-height': "21.0cm",
        'page-width': "29.7cm"
    }
}

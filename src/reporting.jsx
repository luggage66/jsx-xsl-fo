/** @jsx XSLFO.createElement */
import XSLFO, { Component } from './jsx-xsl-fo';
import uuid from 'uuid';

export class Report extends Component {
    render() {
        return <root {...{"xmlns:fo": "http://www.w3.org/1999/XSL/Format"}} {...this.props}>
            <layoutMasterSet>
                {this.children.map(sequence => {
                    return <simplePageMaster master-name={sequence.sequenceId} page-height="29.7cm" page-width="21.0cm" margin="2cm">
                        <regionBody />
                        <regionBefore extent="1.2em" />
                    </simplePageMaster>
                })}
            </layoutMasterSet>
            {this.children}
        </root>
    }
}

export class PageSequence extends Component {
    constructor(props, children) {
        super(props, children);

        this.sequenceId = uuid.v4();
    }

    render() {
        return <pageSequence masterReference={this.sequenceId}>
            {this.children}
        </pageSequence>;
    }
}

export class PageContent extends Component {
    render() {
        return <flow flowName="xsl-region-body">
            {this.children}
        </flow>;
    }
}

export class PageHeader extends Component {
    render() {
        return <staticContent flowName="xsl-region-before">
            {this.children}
        </staticContent>;
    }
}

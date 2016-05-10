/** @jsx XSLFO.createElement */
import XSLFO, { Component } from './jsx-xsl-fo';
import uuid from 'uuid';

export class Report extends Component {
    render() {
        let newChildren = this.props.children.map(sequenceElement => {
            let sequenceId = uuid.v4();
            return XSLFO.cloneElement(sequenceElement, { sequenceId });
        });

        return <root {...{"xmlns:fo": "http://www.w3.org/1999/XSL/Format"}} {...this.props}>
            <layoutMasterSet>
                {newChildren.map(sequence => {

                    return <simplePageMaster master-name={sequence.props.sequenceId} page-height="29.7cm" page-width="21.0cm" margin="2cm">
                        <regionBody />
                        <regionBefore extent="1.2em" />
                    </simplePageMaster>
                })}
            </layoutMasterSet>
            {newChildren}
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

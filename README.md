A JSX to XSL-FO templating tool with react-like API.

```js
/** @jsx XSLFO.createElement */
import XSLFO, { Component } from 'jsx-xsl-fo';
import { Report, PageSequence, PageContent, PageHeader, PageFooter } from 'jsx-xsl-fo/reporting';

const styles = {
    document: {
        fontFamily: 'serif'
    },
    title: {
        fontSize: '30pt',
        borderBottom: "0.75pt solid black"
    }
};

// define components as functions.
function AddressBlock(props) {
    return <block space-before="1em" keep-together-within-page="always">
        <block fontWeight="bold">{props.lastName}, {props.firstName}</block>
        <block>{props.streetAddress}</block>
        <block>{props.city}, {props.state} {props.zipCode}</block>
    </block>;
}

// Main report function.
// We use a couple of the helper components that deal with some XSL-FO structures.
function generateReport(data) {
    return <Report {...styles.document}>
        <PageSequence>
            <PageHeader>
                <block textAlign="end">Page <pageNumber /></block>
            </PageHeader>
            <PageContent>
                <block {...styles.title}>Contacts</block>
                {data.contacts.map(contact => <AddressBlock {...contact} />)}
            </PageContent>
        </PageSequence>
    </Report>;
}
```

Generates:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format" font-family="serif">
    <fo:layout-master-set>
        <fo:simple-page-master master-name="74eeea36-c036-465b-8154-6a4335f62553" page-height="29.7cm" page-width="21.0cm" margin="2cm">
            <fo:region-body/>
            <fo:region-before/>
        </fo:simple-page-master>
    </fo:layout-master-set>
    <fo:page-sequence master-reference="74eeea36-c036-465b-8154-6a4335f62553">
        <fo:static-content flow-name="xsl-region-before">
            <fo:block text-align="end">Page
                <fo:page-number/>
            </fo:block>
        </fo:static-content>
        <fo:flow flow-name="xsl-region-body">
            <fo:block font-size="30pt" border-bottom="0.75pt solid black">Contacts</fo:block>
            <fo:block space-before="1em" keep-together.within-page="always">
                <fo:block font-weight="bold">Eichmann, Morgan</fo:block>
                <fo:block>08814 Eudora Village</fo:block>
                <fo:block>New Bianka, CO 48838</fo:block>
            </fo:block>
            ...
            <fo:block space-before="1em" keep-together.within-page="always">
                <fo:block font-weight="bold">Wilderman, Jefferey</fo:block>
                <fo:block>9198 Blair Vista</fo:block>
                <fo:block>New Emersonfurt, NJ 92711-6555</fo:block>
            </fo:block>
        </fo:flow>
    </fo:page-sequence>
</fo:root>
```


[![Join the chat at https://gitter.im/luggage66/jsx-xsl-fo](https://badges.gitter.im/luggage66/jsx-xsl-fo.svg)](https://gitter.im/luggage66/jsx-xsl-fo?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
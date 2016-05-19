A JSX to XSL-FO templating tool with react-like API.

[![Join the chat at https://gitter.im/luggage66/jsx-xsl-fo](https://badges.gitter.im/luggage66/jsx-xsl-fo.svg)](https://gitter.im/luggage66/jsx-xsl-fo?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This library generates xsl-fo output from a react-like API. It may turn into a react renderer in the future, but for now, it's standalone.

```js
/** @jsx XSLFO.createElement */
import XSLFO, { Component } from 'jsx-xsl-fo';

// create an element
var element = XLSFO.createElement('block', { "border-top": "0.5pt solid black" }, "Hello World.");

// or use JSX
var element2 = <block border-top="0.5pt solid black">Hello World.</block>;

// make components as functions
function Greeting(props) {
    return <block>Greetings, {props.firstName} {props.lastName}!</block>;
}

// or as an ES6 class (here we use props.children)
class GoodBye {
    render() {
        return <block>
            So long, <inline font-weight="bold">{this.props.children}</inline>
        </block>;
    }
}

// and build more complex documents with them
let message = {
    to: {
        firstName: "Jimbo",
        lastName: "Jones"
    },
    body: {
        "Ha ha!"
    }
};

let element3 = <block>
    <Greeting {...message.to} />
    <GoodBye>{message.to.firstName}</GoodBye>
</block>;

// components can be nested and manipulate their children with a
// react-like API (e.g. XSLFO.Children.map() and XSLFO.cloneElement()).
// examples coming.
```

Now, you may want to get some output, eventually..

```js

// as a string (probably not good for large documents)
let aString = XLSFO.renderToString(element);

// to a stream.
XLSFO.renderToStream(element, process.stdout);
```

# More examples

More examples can be seen at: https://github.com/luggage66/jsx-xsl-fo-examples

# Helper components

I am also working on a library of helper components to handle some of the setup. e.g.

```js
/** @jsx XSLFO.createElement */
import XSLFO, { Component } from 'jsx-xsl-fo';
import {
    Report,
    PageSequence,
    PageContent,
    PageHeader,
    PageFooter
} from 'jsx-xsl-fo/reporting';

let myReport = <Report>
    <PageSequence>
        <PageHeader>
            <block text-align="end">Page <pageNumber /></block>
        </PageHeader>
        <PageContent>
            "Hello World."
        </PageContent>
    </PageSequence>
</Report>;

XSLFO.renderToStream(myReport, process.stdout);
```

This will render to:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format">
    <fo:layout-master-set>
        <fo:simple-page-master master-name="101c0990-4460-4307-8507-7d2d1ddcae68" page-height="29.7cm" page-width="21.0cm" margin="2cm">
            <fo:region-body/>
            <fo:region-before/>
        </fo:simple-page-master>
    </fo:layout-master-set>
    <fo:page-sequence master-reference="101c0990-4460-4307-8507-7d2d1ddcae68">
        <fo:static-content flow-name="xsl-region-before">
            <fo:block text-align="end">Page
                <fo:page-number/>
            </fo:block>
        </fo:static-content>
        <fo:flow flow-name="xsl-region-body">"Hello World."</fo:flow>
    </fo:page-sequence>
</fo:root>
```

If you need to embed some other xml (e.g. SVG) use `dangerouslySetInnerXML`.

```js
<instream-foreign-object dangerouslySetInnerXML={{__xml: logoLarge}}>
</instream-foreign-object>
```

# Future Plans

* Medium Term
  * More helpful Components for common reporting tasks
* Should I go toward integrating with react, or going standalone and having more helpers for generating PDFs (like dealing for FOP or other xsl-fo renders)?

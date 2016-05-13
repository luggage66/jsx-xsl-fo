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

// components can be nested and manipulate their children with w react-like API (e.g. XSLFO.Children.map() and XSLFO.cloneElement()).
// examples coming.
```

Now, you may want to get some output, eventually..

```js

// as a string (probably not good for large documents)
XLSFO.renderToString(element);

// to a stream.
XLSFO.renderToStream(element, process.stdout); // or pipe to FOP, perhaps.
```

More examples can be seen at: https://github.com/luggage66/jsx-xsl-fo-examples

# Future Plans

* Short Term
  * handle all two-part attributes names (e.g. `space-before.minimum="2.0pt"`)
  * allow embedding other XML (like SVGs) or at least some equivalent to `dangerouslySetInnerHTML`
* Medium Term
  * More helpful Components for common reporting tasks
* Should I go toward integrating with react, or going standalone and having more helpers for generating PDFs (like dealing for FOP or other xsl-fo renders)?

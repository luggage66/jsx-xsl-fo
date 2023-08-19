Create your XSL-FO documents and reports in modern JavaScript (w/types)

## Usage

This library produces XML output in the [XSL FO](https://www.w3.org/TR/xsl11/) format. You then need to pass that through an FO render (e.g. [Apache FOP](https://xmlgraphics.apache.org/fop/)) ([Github](https://github.com/apache/xmlgraphics-fop)) to generate a PDF.

In this example the .fo output from this library is fed into `fop` to generate a PDF:

```sh
node ./my-report.js | fop -fo - -pdf output.pdf
```

### Minimal Example

More examples are available at [./packages/examples](./packages/examples/README.md)

```jsx
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
```

### Using high level components

There are some helper components to handle basic page structure

```jsx
import { renderToStream } from "@jsx-xsl-fo/core";
import { Report, PageSequence, PageContent, PageHeader, PageFooter } from 'jsx-xsl-fo/reporting';

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
```

### Custom Components

You can make your own components similar to React and other JSX libraries.


```jsx
// function components
function Greeting({ firstName, lastName }) {
    return <block>Greetings, {firstName} {lastName}!</block>;
}

// class components
class GoodBye extends Component {
    render() {
        return <block>
            So long, <inline font-weight="bold">{this.props.children}</inline>
        </block>;
    }
}

// and build more complex documents with them
let myBlock = <block>
    <Greeting firstName="Bob" lastName="Smith" />
    <GoodBye>Bob</GoodBye>
</block>;
```

### API

```jsx
import { renderToStream, renderToString } from "@jsx-xsl-fo/core";
// as a string (probably not good for large documents)
let aString = renderToString(<Foo />);

// to a stream.
renderToStream(<Foo />, process.stdout);
```

### dangerouslySetInnerXML

If you need to embed some other xml (e.g. SVG) use `dangerouslySetInnerXML`.

```js
<instream-foreign-object dangerouslySetInnerXML={{__xml: logoLarge}}>
</instream-foreign-object>
```

## Configuration

This library works as a jsx runtime compatible with Babel's `jsxImportSource` and TypeScript's `jsxImportSource`

### TypeScript `tsconfig.json`

```json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "@jsx-xsl-fo/core",
    }
}
```

### Babel/TypeScript Comments:

```js
/** @jsxImportSource custom-jsx-library */

const foo = <block>Hello</block>;
```

## Development

### Prerequisites:

* Node.js 18+ (earlier may work but untested)
* pnpm

### Building:

```sh
pnpm install
pnpm run -r build

# run tests
pnpm run -r test
```

### Project Organization

* `packages/core` - The main library. This gets published to NPM
* `packages/cli` - A CLI tool for converting older files to the current version of jxs-xsl-fo
* `packages/examples` - Example uses of the main library

import { renderToStream } from "@jsx-xsl-fo/core";
import data from "./glossary.json";
import { Glossary } from "./glossary";

renderToStream(
  <Glossary entries={data as any} />,
  process.stdout
)
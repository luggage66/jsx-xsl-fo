import { Command } from "commander";
import { camelizeJsxFile } from "./commands/camelize.mjs";
import { foFileToJsx } from "./commands/foToJsx.mjs";
import { fopExampleXmlFileToJson } from "./commands/fopExampleXmlToJson.mjs";
import { specFileToTypes } from "./commands/specToTypes.mjs";

async function main() {
  const program = new Command();

  program.version('0.0.1');

  program
    .command('camelize')
    .description('camelize props in JSX')
    .argument('<path>', 'File path')
    .action(camelizeJsxFile);

  program
    .command('import-fo')
    .description('Converts an .fo file to .jsx')
    .argument('<path>', 'File path')
    .action(foFileToJsx);

  program
    .command('read-xml')
    .description('Converts an .fo file to .jsx')
    .argument('<path>', 'File path')
    .action(fopExampleXmlFileToJson);

    program
    .command('import-spec')
    .description('Converts the xml spec xml file to TypeScript types')
    .argument('<path>', 'File path')
    .action(specFileToTypes);

  await program.parseAsync(process.argv);
}

// call the async main() and handle any errors.
void main().then(
  () => undefined,
  (err) => {
    console.error(err);
    process.exit(1);
  }
)

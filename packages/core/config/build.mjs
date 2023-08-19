import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/*'],
  // bundle: true,
  outdir: "./dist/cjs"
});

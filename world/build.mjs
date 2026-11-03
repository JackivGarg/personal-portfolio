import { build } from 'esbuild';

await build({
  entryPoints: ['world/index.js'],
  outfile: 'dist/world.js',
  bundle: true,
  minify: true,
  format: 'iife',
  platform: 'browser',
  target: 'es2022',
  legalComments: 'eof',
});

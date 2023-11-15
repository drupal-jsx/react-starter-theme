import * as esbuild from 'esbuild';

const config = {
  logLevel: 'info',
  entryPoints: ['src/index.js'],
  outfile: 'dist/app.js',
  bundle: true,
  minify: true,
  jsx: 'automatic',  
}

await esbuild.build(config);

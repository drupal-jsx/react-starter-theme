import * as esbuild from 'esbuild';

const config = {
  logLevel: 'info',
  entryPoints: ['src/index.js'],
  outfile: 'dist.js',
  bundle: true,
  minify: true,
  jsx: 'automatic',  
}

await esbuild.build(config);

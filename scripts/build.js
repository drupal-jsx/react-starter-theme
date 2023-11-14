import * as esbuild from 'esbuild';

const config = {
  logLevel: 'info',
  entryPoints: ['src/index.js'],
  outfile: 'dist.js',
  bundle: true,
  minify: true,
  jsx: 'automatic',  
}

esbuild.build(config)
.catch(() => process.exit(1));

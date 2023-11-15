import * as esbuild from 'esbuild';
import components from '../src/components';

const config = {
  logLevel: 'info',
  entryPoints: ['src/index.js'],
  outfile: 'dist/app.js',
  bundle: true,
  minify: true,
  jsx: 'automatic',
}

await esbuild.build(config);

for (const tagName in components) {
  if (tagName.startsWith('drupal-') && components[tagName].drupalPropTypes) {
    const templateName = tagName.substring(7);
    await Bun.write(`dist/prop-types/${templateName}.template-info.json`, JSON.stringify({props: components[tagName].drupalPropTypes}));
  }
}

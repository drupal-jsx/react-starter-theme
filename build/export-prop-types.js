import { exportPropTypes, invalidateThemeRegistry } from '@drupal-jsx/drupal-utils-dev';
import { mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { Glob } from 'bun';

await mkdir('dist', { recursive: true });
await rm('dist/prop-types', {recursive: true, force: true});
await mkdir('dist/prop-types');
const glob = new Glob('src/components/Drupal*.jsx');
await exportPropTypes(glob.scan('.'), 'dist/prop-types');

const glob2 = new Glob('*.info.yml');
for await (const file of glob2.scan('.')) {
  const themeName = path.basename(file, '.info.yml');
  invalidateThemeRegistry(themeName, {sqlitePath: '../../../sites/default/files/.sqlite'});
}

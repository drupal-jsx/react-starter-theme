import { exportPropTypes } from '@drupal-jsx/drupal-utils-dev';
import { mkdir } from 'node:fs/promises';
import { Glob } from 'bun';

await mkdir('dist/prop-types', { recursive: true });
const glob = new Glob('src/components/Drupal*.jsx');
await exportPropTypes(glob.scan('.'), 'dist/prop-types');

const drushPath = 'drush';
['theme-registry', 'render'].forEach((type) => Bun.spawn([drushPath, 'cache:clear', type]));

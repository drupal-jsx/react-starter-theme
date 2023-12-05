import { exportPropTypes } from '@drupal-jsx/drupal-utils-dev';
import { mkdir } from 'node:fs/promises';

await mkdir('dist/prop-types', { recursive: true });
await exportPropTypes(process.cwd() + '/src/components.js', 'dist/prop-types');

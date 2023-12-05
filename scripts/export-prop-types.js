import { exportPropTypes } from '@drupal-jsx/drupal-utils/build';

await exportPropTypes(process.cwd() + '/src/components.js', 'dist/prop-types');

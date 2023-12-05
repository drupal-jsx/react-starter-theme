import { exportPropTypes } from '@drupal-jsx/drupal-utils-dev';

await exportPropTypes(process.cwd() + '/src/components.js', 'dist/prop-types');

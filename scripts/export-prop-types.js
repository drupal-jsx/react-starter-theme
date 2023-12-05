import { exportPropTypes } from '@drupal-jsx/drupal-utils/build';

await exportPropTypes(process.cwd() + '/src/components.js', process.cwd() + '/dist/prop-types');

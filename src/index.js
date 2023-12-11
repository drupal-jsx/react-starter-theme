import { main } from '@drupal-jsx/drupal-utils-react';
import './index.css';

import { componentsFromModules } from '@drupal-jsx/drupal-utils';
const modules = import.meta.glob('./components/Drupal*.jsx', { eager: true })
const components = componentsFromModules(modules);

main({ components });

if (import.meta.hot) {
  Drupal.jsxHot = import.meta.hot;
}

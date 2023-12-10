import { componentsFromModules } from '@drupal-jsx/drupal-utils';
const modules = import.meta.glob('./components/Drupal*.jsx', { eager: true })

const components = componentsFromModules(modules);

export default components;

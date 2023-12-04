import { createElement as h, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import hyperscriptify from 'hyperscriptify';
import propsify from 'hyperscriptify/propsify/standard';
import './index.css';

import components from './components';
components['drupal-html-fragment'] = Fragment;

document.querySelectorAll('template[hyperscriptify]').forEach(function(templateElement) {
  const App = hyperscriptify(templateElement.content, h, Fragment, components, { propsify });
  const container = document.createElement('div');
  templateElement.after(container);
  const root = createRoot(container);
  root.render(App);
});

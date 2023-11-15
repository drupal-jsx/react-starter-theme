import PropTypes from 'prop-types';
import { Theme } from '@radix-ui/themes';

export default function DrupalPage({ page }) {
  return (
    <Theme>
      { page.header }
      { page.primaryMenu }
      { page.secondaryMenu }
      { page.breadcrumb }
      { page.highlighted }
      { page.help }
      <main role="main">
        <a id="main-content" tabindex="-1"></a>
        { page.content }
        { page.sidebarFirst }
        { page.sidebarSecond }
      </main>
      { page.footer }
    </Theme>
  )
}

DrupalPage.propTypes = {
  page: PropTypes.shape({
    header: PropTypes.element,
    primaryMenu: PropTypes.element,
    secondaryMenu: PropTypes.element,
    breadcrumb: PropTypes.element,
    highlighted: PropTypes.element,
    help: PropTypes.element,
    content: PropTypes.element,
    sidebarFirst: PropTypes.element,
    sidebarSecond: PropTypes.element,
    footer: PropTypes.element,
  }),
}

// @todo Figure out how to not need this and instead get it from propTypes.
DrupalPage.drupalPropTypes = {
  page: {
    header: 'JSX.Element',
    primaryMenu: 'JSX.Element',
    secondaryMenu: 'JSX.Element',
    breadcrumb: 'JSX.Element',
    highlighted: 'JSX.Element',
    help: 'JSX.Element',
    content: 'JSX.Element',
    sidebarFirst: 'JSX.Element',
    sidebarSecond: 'JSX.Element',
    footer: 'JSX.Element',
  },
}

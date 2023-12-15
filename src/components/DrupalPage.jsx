import PropTypes from 'prop-types';

export default function DrupalPage({ page }) {
  return (
    <>
      <div className="text-center pt-5 pb-10 bg-slate-100">
        <h1 className="font-poppins text-rem-lg mb-2.5 leading-tight text-slate-700">
         ReactJS with
          <span className="text-blue-500"> Drupal</span>
        </h1>
        <p className="font-nunito text-rem-sm text-slate-700">
          Take advantage of Drupal’s low code features with your custom front-end code 💻.
          <br />
          Turn on <strong>Debug JSX</strong> to start building your components.
        </p>
      </div>
      { page.header }
      { page.primaryMenu }
      { page.secondaryMenu }
      { page.breadcrumb }
      { page.highlighted }
      { page.help }
      <main role="main">
        <a id="main-content" tabIndex="-1"></a>
        { page.content }
        { page.sidebarFirst }
        { page.sidebarSecond }
      </main>
      { page.footer }
    </>
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

export default function DrupalPage({ page }) {
  return (
    <>
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
    </>
  );
}

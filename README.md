# React Starter Theme for Drupal

## Overview

This is a template project for creating a new Drupal theme (the front-end of a Drupal website) that uses Drupal's new and still in early stage development [JSX theme engine](https://www.drupal.org/project/jsx) (read: do not use it in production). The basic concept of this is that you develop your Drupal theme just like you would if you were doing it in Twig, but instead of creating Twig files, you create JSX files that are rendered by React (or a different JSX rendering library, but *this* repository uses React).

If you already have a Drupal site setup and the JSX theme engine installed, then starting a new custom theme from this template project only requires:
```
bun create drupal-jsx/starter-react my-theme
```

This template project includes [Vite](https://vitejs.dev/) as a dev dependency, so you can benefit from its HMR and other development productivity features by running:
```
cd my-theme
bun dev
```
*And also within Drupal enabling the "JSX Theme Engine Vite Integration" module that's included in https://www.drupal.org/project/jsx.*

Once you're ready to deploy to production (or rather, to simulate doing so, because per the first sentence of this README, do not actually deploy this to production), you can:
```
bun run build
```
*And also within Drupal uninstall the "JSX Theme Engine Vite Integration" module.*

If you're starting without a Drupal site already installed, then see the [complete installation instructions](#installation-instructions).

## Motivation

There are many reasons you might want to build a modern website with React rather than Twig: the power of modern JavaScript for creating great UIs, the tooling and libraries available in the JavaScript and React ecosystems, the clean expressiveness of JSX, and maybe other reasons. Currently, building a content-driven website in React requires creating the entire front-end from scratch (you can use existing libraries to do a lot of the heavy lifting but you're still creating the overall front-end itself from scratch) and integrating it with a Headless CMS (either running Drupal as a headless CMS or using some other software that can only operate as a headless CMS). While this is okay in some cases, you end up losing a lot of the features that go beyond mere "content management" that make Drupal awesome. Beyond managing content, Drupal has many features optimized for low-code site building: from its contextual links, Block UI, Layout Builder, Entity Display management, Views, and an ecosystem of contrib modules, that enrich how content is displayed and how non-developers can control how the content is displayed.

This idea of a content-driven website's front-end being a collaboration between custom front-end code (the Drupal theme) and configuration that site builders and content editors can modify without writing code is a familiar concept in Drupal, but is not yet well supported by the "React app plus a Headless CMS" model, and might even be a fairly new concept for you if you're a React developer who is used to creating your own full-stack applications or websites with relatively simple content management requirements rather than content-managed websites that require non-developers to be able to make substantial ongoing changes to the website without writing code.

This is the problem that the Drupal JSX theme engine aims to solve. It does so by retaining Drupal's existing mature codebase that aggregates a huge amount of configuration into a Drupal render tree (a deeply nested PHP array of elements to render), but for each element in the tree for which there's a suitable JSX component provided by the theme, it passes control for actually rendering that element to that JSX component.

## Workflow

What the above means is that the workflow for creating a Drupal theme is different than the workflow for creating a typical React app. In a typical React app, you would start from an `<App>` (or similarly named) component or from a layout or route component provided by a framework like Next.js, and then build out your UI hierarchy from the top down, naming all your components along the way whatever you want and naming each component's props whatever you want. Whereas for a Drupal theme, Drupal defines the UI hierarchy of components and their possible props, and the theme can decide which components to implement and how to implement them.

Therefore, the JSX theme engine provides a "JSX Devel" module, which when enabled, displays checkboxes at the bottom of the page for turning on "JSX debugging" and/or "Twig debugging". For JSX debugging, it adds a "?" icon/button for the JSX components rendered on the page, and when this button is clicked, it adds to the browser console information about the possible props that Drupal could send to that component. However, it would be inefficient for Drupal to send all of them, so the component is responsible for declaring (via the [prop-types](https://www.npmjs.com/package/prop-types) library) which ones it needs and their types. The only types currently supported by Drupal are:
- PropTypes.boolean
- PropTypes.number
- PropTypes.string
- PropTypes.element
- PropTypes.shape()
- PropTypes.arrayOf()
- PropTypes.objectOf()
- PropTypes.object

Meanwhile, the "Twig debug" checkbox shows the Drupal elements that were rendered with Twig (because the theme doesn't yet have a JSX component defined for it). Clicking the corresponding tree icon/button provides a link to the source code for the Twig template and a button to replace that Twig template with a JSX component. Clicking that button adds the correctly named file to the theme's `src/components` directory with a bare-bones placeholder implementation. At this point, the next step is to edit this component with a real implementation, declaring the needed props accordingly, which you can do by either inspecting the original Twig source code, or by using the "JSX debug" checkbox to see what Drupal has available to pass in as props to this component.

## Installation instructions

### 0. Install PHP, Composer, and Bun
If you don't already have [PHP](https://www.php.net/manual/en/install.php),
[Composer](https://getcomposer.org/download/), or [Bun](https://bun.sh/) on
your system, install them.

### 1. Install the Drupal codebase
```
composer create-project drupal/recommended-project:^11@dev my-drupal-site
cd my-drupal-site
composer config repositories.drupal/jsx vcs https://git.drupalcode.org/project/jsx.git
composer require drush/drush drupal/jsx:@dev
```

### 2. Install the React codebase
```
mkdir web/themes/custom
cd web/themes/custom
bun create drupal-jsx/starter-react my-theme
cd my-theme
```

The above might show errors with resolving some of the packages (sometimes
Bun is so fast that GitHub can't keep up; this won't be a problem once the
packages are published to npm). If that happens, you can fix it with:
```
# Repeat this until it succeeds:
bun install

# Then do this:
bun run build
```

### 3. Install the Drupal site and leave it running
```
cd ../../../..
php ./web/core/scripts/drupal quick-start
```

*This will leave you in a running process that serves the Drupal site. Don't
exit it. If you accidentally do, you can restart it with
`cd web; php -S 127.0.0.1:8888 .ht.router.php` (replace 8888 with a different
port if the original quick-start command used a different port).*

### 4. Open a new terminal window and cd to the my-drupal-site directory.

### 5. Add Drush to your path
```
export PATH=$(pwd)/vendor/bin:$PATH
```

*If you don't want to add Drush to your path, you could instead edit
`web/themes/custom/my-theme/vite.config.js`, `web/themes/custom/my-theme/build/export-prop-types.js`,
and the commands in the following step to include the path to Drush.*

### 6. Configure the Drupal site to use the React theme
```
drush pm:uninstall big_pipe
drush pm:install jsx_vite jsx_devel
drush theme:install my_theme
drush config:set system.theme default my_theme --no-interaction
```

### 7. Start the React app in development mode
```
cd web/themes/custom/my-theme
bun dev
```

### 8. Refresh the browser page that was launched in step 3.

### 9. Start hacking
When you edit the source code in `src/components/*.jsx`, the browser will
automatically update, either in-place with Vite's HMR or with a full page
reload as needed.

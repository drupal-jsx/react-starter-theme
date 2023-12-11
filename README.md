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

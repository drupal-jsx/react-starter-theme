# React Starter Theme for Drupal

## Installation instructions

1. **Install the Drupal codebase**
```
composer create-project drupal/recommended-project my-drupal-site
cd my-drupal-site
composer config repositories.drupal/jsx vcs https://git.drupalcode.org/project/jsx.git
composer require drush/drush drupal/jsx:@dev
```

2. **Install the React codebase**
```
mkdir web/themes/custom
cd web/themes/custom
bun create drupal-jsx/starter-react my-theme
cd my-theme
```

The above might show errors with resolving some of the package. If that
happens, you can fix it with:
```
# Repeat this until it succeeds:
bun install 

# Then do this:
bun run build
```

3. **Install the Drupal site and leave it running**
```
cd ../../../..
php ./web/core/scripts/drupal quick-start
```

*This will leave you in a running process that serves the Drupal site. Don't exit it. If you accidentally do, you can restart it with `php -S 127.0.0.1:8890 -t web/` (replace 8890 with a different port if the original quick-start command used a different port).*

4. **Open a new terminal window and cd to the my-drupal-site directory.**

5. **Add Drush to your path**
```
export PATH=$(pwd)/vendor/bin:$PATH
```

*If you don't want to add Drush to your path, you could instead edit `web/themes/custom/my-theme/vite.config.js` to specify the path to Drush.*

6. **Configure the Drupal site to use the React theme**
```
drush install jsx_vite jsx_devel
drush theme:install my_theme
drush config:set system.theme default my_theme --no-interaction
```

7. **Start the React app in development mode**
```
cd web/themes/custom/my-theme
bun dev
```

8. Refresh the browser page that was launched in step 3.


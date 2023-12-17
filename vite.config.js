import packageInfo from "./package.json";
import react from "@vitejs/plugin-react-swc";
import drupal from "@drupal-jsx/vite-plugin-drupal";

export default {
  plugins: [
    react(),
    drupal({
      drupalTemplatesDir: 'dist/prop-types',
      drushPath: 'drush',
      sqlitePath: '../../../sites/default/files/.sqlite',
    }),
  ],
  build: {
    outDir: 'dist',
    assetsDir: '',
    rollupOptions: {
      input: 'src/index.js',
      output: {
        format: 'es',
        entryFileNames: 'app.js',
        assetFileNames: ({name}) => (name === 'index.css' ? 'app.css' : '[name][extname]'),
      }
    },
  },
  server: {
    origin: `http://127.0.0.1:8888/themes/custom/${packageInfo.name}`
  }
}

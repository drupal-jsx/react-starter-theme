import react from "@vitejs/plugin-react-swc";
import drupal from "@drupal-jsx/vite-plugin-drupal";

export default defineConfig({
  plugins: [
    react(),
    drupal({
      drupalTemplatesDir: 'dist/prop-types',
      drushPath: 'drush',
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
    origin: "http://127.0.0.1:8888/themes/custom/my-theme"
  }
})

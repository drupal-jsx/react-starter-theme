import react from "@vitejs/plugin-react-swc";
import drupal from "@drupal-jsx/vite-plugin-drupal";

export default {
  plugins: [react(), drupal()],
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
  }
}

import react from "@vitejs/plugin-react-swc";
import drupal from "@drupal-jsx/vite-plugin-drupal";

export default {
  root: 'src',
  plugins: [react(), drupal()],
}

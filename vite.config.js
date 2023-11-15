import react from "@vitejs/plugin-react-swc";

export default {
  plugins: [react()],
  
  // @see https://vitejs.dev/guide/backend-integration.html.
  build: {
    manifest: true,
    rollupOptions: {
      input: 'src/index.js',
    },
  },
}

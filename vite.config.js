export default {
  // @see https://vitejs.dev/guide/backend-integration.html.
  build: {
    manifest: true,
    rollupOptions: {
      input: 'src/index.js',
    },
  },
}

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: 'src/index.js',
    },
  },
})

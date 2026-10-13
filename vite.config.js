import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    rollupOptions: {
      output: { manualChunks: id => id.includes('/vendor/three.') ? 'three' : undefined },
    },
  },
});

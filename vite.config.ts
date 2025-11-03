/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
server: {
  proxy: {
    '/off': {
      target: 'https://world.openfoodfacts.org',
      changeOrigin: true,
      secure: true,
      rewrite: path => path.replace(/^\/off/, ''),
    },
  },
},
  test: {
    globals: true,
    environment: 'jsdom',
  },
});

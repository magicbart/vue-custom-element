import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ce.ts',
      name: 'simple-sample',
      // the proper extensions will be added
      fileName: 'simple-sample'
    }
  },
  define: {
    'process.env': process.env
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

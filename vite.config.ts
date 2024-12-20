import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/ilovezhuip.io/',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [vue()],
  build: {
    outDir: 'docs',
    emptyOutDir: true, // build时清空输出目录
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const pathResolve = (file: string): string => {
  return resolve(__dirname, file)
}
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '@pkg': pathResolve('packages'),
      '@comps': pathResolve('src/components'),
      '@assets': pathResolve('src/assets'),
      find: 'async-validator',
      replacement: 'node_modules/async-validator/dist-web/index.js'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@pkg/scss/var.scss";`
      }
    }
  },
  plugins: [vue()],
  server: {
    open: true
  }
})

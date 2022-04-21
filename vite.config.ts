import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const pathResolve = (file: string): string => {
  return resolve(__dirname, file)
}
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '@pkg': pathResolve('packages'),
      '@comps': pathResolve('src/components'),
      '@assets': pathResolve('src/assets')
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

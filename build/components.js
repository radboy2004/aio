const fs = require('fs')
const path = require('path')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const { startCase } = require('lodash')
const entryDir = path.resolve(__dirname, '../packages/components')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

const rollupOptions = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}
const dirConfig = fs
  .readdirSync(entryDir)
  .filter(item => fs.statSync(path.resolve(entryDir, item)).isDirectory())
  .map(item => {
    const pkg = require(path.resolve(entryDir, item, 'package.json'))
    console.log('pkg', pkg)
    return {
      lib: {
        entry: path.resolve(entryDir, item, 'index.ts'),
        name: startCase(pkg.name).replace(/ /g, ''), // umd的变量名
        fileName: 'index',
        formats: ['es', 'umd']
      },
      outDir: path.resolve(entryDir, item, 'dist')
    }
  })

dirConfig.forEach(async dirObj => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      ...dirObj
    }
  })
})

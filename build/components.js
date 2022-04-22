// bin/build.js
const fs = require('fs')
const path = require('path')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

const entryDir = path.resolve(__dirname, '../packages')
const outDir = path.resolve(__dirname, '../lib')

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
  .filter(
    item =>
      fs.statSync(path.resolve(entryDir, item)).isDirectory() && item !== 'scss'
  )
  .map(item => {
    const pkg = require(path.resolve(entryDir, item, 'package.json'))
    console.log('pkg', item)
    return {
      lib: {
        entry: path.resolve(entryDir, item, 'index.ts'),
        name: pkg.umdVarName, // umd的变量名
        fileName: pkg.name,
        formats: ['es', 'umd']
      },
      outDir: path.resolve(outDir, item)
    }
  })
console.log(dirConfig)
dirConfig.forEach(async dirObj => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      ...dirObj
    }
  })
})

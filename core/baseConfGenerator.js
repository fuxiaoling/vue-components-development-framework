/**
 * 公共配置生成器
 * 傅小凌 blog.fuxiaoling.com
 * 
 */
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const vuePlugin = require('rollup-plugin-vue')
const babel = require('rollup-plugin-babel')
const replace = require('rollup-plugin-replace')
const uglify = require('rollup-plugin-uglify-es')
const json = require("rollup-plugin-json")
// const distFileName = require('./../package.json').distFileName
// const css = require('rollup-plugin-css-only')
// const CleanCSS = require('clean-css')
// const writeFileSync = require('fs').writeFileSync

module.exports = config => {
  const { input, name, file, format } = config
  return {
    input: {
      input,
      external: ['vue'],
      plugins: [
        resolve({
          extensions: ['.vue'],
          preferBuiltins: false
        }),
        replace({
          exclude: 'node_modules/**',
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        json(),
        // css({ output(style) {
        //   writeFileSync(`dist/${distFileName}.css`, new CleanCSS().minify(style).styles)
        // } }),
        vuePlugin(),
        babel({
          "presets": [
            ["env", { "modules": false }],
            "stage-3"
          ],
          "plugins": ["external-helpers", "transform-decorators-legacy"],
          exclude: ["node_modules/**"]
        }),
        commonjs(),
        (process.env.NODE_ENV === 'production' && uglify())
      ]
    },
    output: {
      exports: 'named',
      name,
      file,
      format,
      globals: {
        vue: 'Vue'
      }
    }
  }
}
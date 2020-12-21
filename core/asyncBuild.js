/**
 * 同步构建方法
 * 傅小凌 blog.fuxiaoling.com
 * 
 */
const rollup = require('rollup')
const baseConfig = require('./baseConfGenerator')
module.exports = async (config, cb) => {
  const bundle = await rollup.rollup(baseConfig(config).input)
  await bundle.write(baseConfig(config).output)
  cb()
}
/**
 * 配置生成器
 * 傅小凌 blog.fuxiaoling.com
 * 
 */
module.exports = {
  multipleConf: (format, folderName) => {
    return {
      input: `./src/components/${folderName}/index.js`,
      name: folderName,
      file: `dist/${format}/${folderName}.js`,
      format: format
    }
  },
  singleConf: (format, distFileName) => {
    const suffix = {
      'es': 'esm',
      'iife': 'min',
      'umd': 'umd'
    }
    return {
      input: `./src/index.js`,
      name: distFileName,
      file: `dist/${distFileName}.${suffix[format]}.js`,
      format: format
    }
  }
}
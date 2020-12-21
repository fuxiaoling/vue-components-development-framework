/**
 * 构建任务工厂
 * 傅小凌 blog.fuxiaoling.com
 * 
 */
const asyncBuild = require('./asyncBuild.js')
const distFileName = require('./../package.json').distFileName
const config = require('./configGenerator.js')
const createTask = (type, format, folderName) => {
  switch (type) {
    case 'multiple':
      return () => {
        asyncBuild(config.multipleConf(format, folderName), () => {
          console.log('\033[42;30m DONE \033[40;32m created dist/' + format + '/' + folderName + '.js\033[0m')
        })
      }
    case 'single':
      const suffix = {
        'es': 'esm',
        'iife': 'min',
        'umd': 'umd'
      }
      return () => {
        asyncBuild(config.singleConf(format, distFileName), () => {
          console.log('\033[42;30m DONE \033[40;32m created dist/' + distFileName + '.' + suffix[format] + '.js\033[0m')
        })
      }
    default:
      return () => {}
  }
}
module.exports = (type, format, folderName) => {
  const task = createTask(type, format, folderName)
  return {
    run () { task() }
  }
}
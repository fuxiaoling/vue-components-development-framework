/**
 * 指令：以单例组件的方式构建esm类型
 * 傅小凌 blog.fuxiaoling.com
 * 
 */
const fs = require('fs')
const promisify = require('util').promisify
const componentsDir = require('./../package.json').componentsDir
const taskFactory = require('./../core/taskFactory.js')
const promisifyReadDir = promisify(fs.readdir)
const tasks = async () => {
  const entriesFolder = await promisifyReadDir(componentsDir)
  entriesFolder.forEach((folderName, index) => {
    taskFactory('multiple', 'es', folderName).run()
  })
}
try {
  tasks()
} catch (err) {
  throw new Error(err)
}
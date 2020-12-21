/**
 * 指令：以监听的方式构建所有类型
 * 傅小凌 blog.fuxiaoling.com
 * 
 */
import { distFileName, componentsDir } from './../package.json'
import fs from 'fs'
const config = require('./../core/configGenerator.js')
const baseConfig = require('../core/baseConfGenerator.js')
const promisify = require('util').promisify
const promisifyReadDir = promisify(fs.readdir)

const tasks = async () => {
  const result = []
  const entriesFolder = await promisifyReadDir(componentsDir)
  entriesFolder.forEach((folderName, index) => {
    const multipleCofing = config.multipleConf('es', folderName)
    result.push({...baseConfig(multipleCofing).input, output: baseConfig(multipleCofing).output})
  })
  const formats = ['es', 'iife', 'umd']
  formats.forEach((format, index) => {
    const singleConfig = config.singleConf(format, distFileName)
    result.push({...baseConfig(singleConfig).input, output: baseConfig(singleConfig).output})
  })
  return result
}

const proxyTasks = () => {
  try {
    return tasks()
  } catch (err) {
    throw new Error(err)
  }
}

export default proxyTasks()
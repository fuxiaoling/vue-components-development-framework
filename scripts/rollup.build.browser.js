/**
 * 指令：构建iife类型
 * 傅小凌 blog.fuxiaoling.com
 * 
 */
const taskFactory = require('./../core/taskFactory.js')
try {
  taskFactory('single', 'iife').run()
} catch (err) {
  throw new Error(err)
}
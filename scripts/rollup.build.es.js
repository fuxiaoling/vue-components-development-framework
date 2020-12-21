/**
 * 指令：构建esm类型
 * 傅小凌 blog.fuxiaoling.com
 * 
 */
const taskFactory = require('./../core/taskFactory.js')
try {
  taskFactory('single', 'es').run()
} catch (err) {
  throw new Error(err)
}
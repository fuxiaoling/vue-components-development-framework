/**
 * 指令：构建umd类型
 * 傅小凌 blog.fuxiaoling.com
 * 
 */
const taskFactory = require('./../core/taskFactory.js')
try {
  taskFactory('single', 'umd').run()
} catch (err) {
  throw new Error(err)
}
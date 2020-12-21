/**
 * @author 傅小凌 279811056#qq.com 
 * 
 * 指令：遮罩层
 * 将目标节点修改为遮罩层，通过自定义样式可以变换成骨架屏效果、loading效果等
 * 
 * v-mask="false" // 关闭
 * v-mask="true" // 开启 （默认配置）
 * v-mask="{ }" // 开启 （默认配置）
 * v-mask="{ ... }" // 开启 （自定义配置）
 * 
 */
import { genUUID } from '@/utils'
const DEFAULT = {
  text: 'loading...',
  fontSize: '16px',
  color: '#FFFFFF',
  textPosition: 'center',
  backgroundColor: '#000000',
  opacity: 0.3
}
const mergeCofing = Symbol.for('mergeCofing')
const verification = Symbol.for('verification')
const resetElementStyle = Symbol.for('resetElementStyle')
const resetChildElement = Symbol.for('resetChildElement')
class Mask {
  #pid
  constructor (options) {
    this.#pid = `mask-pid-${genUUID()}`
    this.config = this[mergeCofing](options)
    this.div = null
  }
  init (el, value) {
    this[verification](value)
    if (typeof value === 'boolean') {
      Object.assign(this.config, this[mergeCofing](), { enable: value })
    } else {
      Object.assign(this.config, this[mergeCofing](value), { enable: true })
    }
    this[resetElementStyle](el)
    this[resetChildElement](el)
  }
  [mergeCofing] (options = {}) {
    return Object.assign(JSON.parse(JSON.stringify(DEFAULT)), options)
  }
  [resetElementStyle] (el) {
    const { config } = this
    el.style.position = config.enable ? 'relative' : 'inherit'
    el.style.transition = 'all .2s linear'
    el.style.pointerEvents = config.enable ? 'none' : 'auto'
    el.style.userSelect = config.enable ? 'none' : 'auto'
  }
  [resetChildElement] (el) {
    const { config, div } = this
    const pid = this.#pid
    if (config.enable) {
      const div = document.createElement('div')
      div.id = pid
      div.style.position = 'absolute'
      div.style.top = '0'
      div.style.left = '0'
      div.style.width = '100%'
      div.style.height = '100%'
      div.style.zIndex = '9999'
      div.innerHTML = `<div style="z-index:9999; width:100%; height:100%; color:${config.color}; font-size:${config.fontSize}; display:inline-grid; align-items:center; text-align:${config.textPosition}">${config.text}</div>
      <div style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:-1; background-color:${config.backgroundColor}; opacity:${config.opacity}"></div>`
      el.appendChild(div)
      this.div = div
    } else {
      const maskElement = document.getElementById(pid)
      if (div && maskElement && div.id === maskElement.id) {
        window.setTimeout(() => {
          if (document.body.contains(maskElement)) {
            document.body.removeChild(maskElement)
            this.div = null
          }
        }, 0)
      } 
    }
  }
  [verification] (value) {
    if (!['boolean', 'object'].includes(typeof value)) {
      throw new Error(`mask指令只接受Boolean、Object入参`)
    }
  }
}
export default options => {
  const mask = new Mask(options)
  return {
    bind (el, binding) {
      mask.init(el, binding.value)
    },
    inserted () { },
    update (el, binding) { 
      mask.init(el, binding.value)
     },
    componentUpdated () { },
    unbind() { }
  }
}
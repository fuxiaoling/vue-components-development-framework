/**
 * @author 傅小凌 279811056#qq.com 
 * 
 * 指令：权限点
 * 
 * v-permit="..." // role|funcCode|action
 * 
 */
import store from '@/store'
const permission = {
  checkPermit (el, { value }, { context }) {
    this.verification(value)
    const staticPermissions = context.$route.meta && context.$route.meta.permissions
    const dynamicPermissions = store.getters && store.getters.permissions
    const permissions = [...dynamicPermissions, ...staticPermissions]
    if (typeof value === 'string') value = [value]
    const hasPermit = value.every(item => permissions.includes(item))
    if (!hasPermit) {
      try {
        el.parentNode && el.parentNode.removeChild(el)
      } catch {
        el.style.display = 'none'
      }
    }
  },
  verification (value) {
    if (typeof value !== 'string' || !Array.isArray(value)) {
      throw new Error('permit指令只接受String、Array入参')
    }
  }
}
export default {
  bind () { },
  inserted (el, binding, vnode) {
    permission.checkPermit(el, binding, vnode)
  },
  update (el, binding, vnode) {
    permission.checkPermit(el, binding, vnode)
  },
  componentUpdated () { },
  unbind() { }
}
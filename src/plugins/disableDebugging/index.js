const pluginName = 'disableDebugging'
const text = '为防止黑客入侵，暂时禁止开启浏览器的调试工具，如有需求，请联系本人申请开启'
const install = Vue => {
  Vue.prototype[`$${pluginName}`] = (disable = false, self) => {
    if (!disable) return false
    const warningHandler = () => {
      self.$warning({
        title: "禁止调试 !",
        content: text,
        okText: '我知道了'
      })
    }
    window.addEventListener('keydown', function (e) {
      if (((e.keyCode == 83 || e.keyCode == 85 || e.keyCode == 80) && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey) || (e.keyCode == 123))) {
        warningHandler()
        e.preventDefault()
      }
    })
    const onWindowResize = () => {
      if (window.outerWidth - window.innerWidth > 50 || window.outerHeight - window.innerHeight > 200) {
        console.clear()
        window.location.href = 'https://www.baidu.com/'
      }
    }
    onWindowResize()
    window.addEventListener('resize', onWindowResize)
  }
}
if (window.Vue) { window.Vue.use(install) }
export default { install }
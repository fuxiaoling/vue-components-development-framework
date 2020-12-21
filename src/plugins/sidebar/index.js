import plugin from './sidebar.vue'
const pluginName = 'sidebar'
const install = Vue => {
  Vue.component(pluginName, plugin)
}
if (window.Vue) {
  window[pluginName] = plugin
  window.Vue.use(install)
}
plugin.install = install
export default plugin
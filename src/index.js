import myComponentTags from './components/tags'
import myComponentTabs from './components/tabs'
import myComponentList from './components/list'
const components = [
  myComponentTags,
  myComponentTabs,
  myComponentList
]
const install = Vue => {
  if (install.installed) return
  install.installed = true
  components.map(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) install(window.Vue)
export default install
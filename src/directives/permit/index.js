import directive from './directive'
const directiveName = 'permit'
const install = (Vue) => {
  Vue.directive(directiveName, directive)
}
if (window.Vue) {
  window[directiveName] = directive
  window.Vue.use(install)
}
directive.install = install
export default directive

import directive from './directive'
const directiveName = 'mask'
const install = (Vue, options) => {
  Vue.directive(directiveName, directive(options))
}
if (window.Vue) {
  window[directiveName] = directive
  window.Vue.use(install)
}
directive.install = install
export default directive

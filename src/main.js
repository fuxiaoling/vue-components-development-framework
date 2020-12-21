import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import vueCookies from "vue-cookies"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import "@/assets/stylus/reset.stylus"
import directives from '@/directives'
import plugins from '@/plugins'

Vue.config.productionTip = false

/** Vue.use注册 | 开始 */
const useArray = [
  ...directives,
  ...plugins,
  Antd,
  vueCookies
]
useArray.forEach(item => Vue.use(item))
/** Vue.use注册 | 结束 */

/** Vue.prototype注册 | 开始 */

/** Vue.prototype注册 | 结束 */

console.log('main', router, store)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

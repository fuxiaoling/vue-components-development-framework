import Vue from "vue"
import VueRouter from "vue-router"
import config from "./config"
import guards from "./guards"

Vue.use(VueRouter)
const routerInstance = () => {
  return new VueRouter({
    ...config,
    scrollBehavior (x, y, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    }
  })
}
const router = routerInstance()
export const resetRouter = () => {
  const newRouter = routerInstance()
  router.matcher = newRouter.matcher
}
export default guards(router)



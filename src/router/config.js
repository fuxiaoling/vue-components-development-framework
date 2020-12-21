import resume from '@/data.js'
export default {
  mode: process.env.VUE_APP_ROUTE_MODE,
  routes: [
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "index" */'@/views/system/404'),
      hidden: true
    },
    {
      path: '*',
      redirect: '/404',
      hidden: true
    },
    {
      path: '/',
      redirect: '/resume',
      hidden: true
    },
    {
      component: () => import(/* webpackChunkName: "resume" */ '@/views/resume.vue'),
      path: '/resume',
      name: 'Resume',
      meta: { 
        title: `${resume.myName} | 简历`
      }
    }
  ]
}
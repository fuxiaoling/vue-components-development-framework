import Vue from 'vue'
import App from './App.vue'
import myComponents from './../../' // 指向工程根目录，根据package.json使用入口
Vue.use(myComponents)
new Vue({
  el: '#app',
  render: h => h(App)
})

import Main from './main.vue'
/* istanbul ignore next */
Main.install = (vue) => {
  vue.component(Main.name, Main)
}
export default Main
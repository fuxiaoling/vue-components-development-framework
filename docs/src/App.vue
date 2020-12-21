<template>
  <div id="app">
    组件测试
    <my-component-tags />
    <my-component-list />
  </div>
</template>
<script>
import myComponentList from './../../dist/es/list.js'
export default {
  components: {
    myComponentList
  }
}
</script>
# hi.fuxiaoling.com
基于VUE的个人在线简历，设计和代码都属原创，使用时请署名。

预览：[hi.fuxiaoling.com]((http://hi.fuxiaoling.com))

## 使用
- 关闭Token认证：替换文件src/App.vue内容为以下代码：
```
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
}
</script>
```
- 修改自我评价数据：因为访问策略原因，自我评价数据为后台获取，关闭Token认证后一定要操作此步，修改文件src/views/resume.vue 第285行。
- 修改其他简历数据：替换文件src/data.js内容为自己的简历数据


## 启动
```
npm run serve
```

## 构建
```
npm run build
```

## License

[MIT](LICENSE)
# components-development-framework
基于Rollup.js搭建的组件开发框架，核心特点：便捷开发、监听构建、即时调试、自动发布。

设计和代码都属原创，使用时请署名。

## 使用
- 配置package.json
- 启动监听构建：执行 `npm run serve` 
- 开发组件：组件存放目录为src/components，按照现有Demo组件配置即可，会自动监听构建
- 进入src/docs目录，执行 `npm run dev` 开始调试构建后的组件，支持全局依赖或单独依赖方式调试，具体查看App.vue的例子

## 开启监听构建
```
npm run serve
```

## 开启构建调试
进入src/docs目录，启动一下命令
```
npm run dev
```
## 构建指令
```
构建所有：npm run build:all 或者 npm run build
构建基于单例组件的ESM包：npm run build:components
构建基于所有组件的ESM包：npm run build:es
构建基于所有组件的UMD包：npm run build:umd
构建基于所有组件的IIFE包：npm run build:browser
```

## 自动发布
完成package.json配置后执行：
```
npm run publish
```
## License

[MIT](LICENSE)
const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  lintOnSave: true,
  runtimeCompiler: true, // 运行时增加编译器
  transpileDependencies: [], // 需要babel-loader处理的node_modules依赖包名列表
  productionSourceMap: true, // 构建时是否加入source map
  parallel: require('os').cpus().length > 1, // 是否开启多核构建
  devServer: {
    port: 8080
  },
  configureWebpack:{
    resolve:{
      alias:{
        '@':path.resolve(__dirname, './src')
      }
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 30,
        minChunkSize: 1000
      })
    ].concat((() => {
      if (isProduction) { // production
        return [
          new CompressionPlugin({
            algorithm: 'gzip',
            filename: '[path][base].gz',
            test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
            threshold: 10240,
            minRatio: 0.8
          }),
          new BundleAnalyzerPlugin({
            analyzerPort: 8082
          })
        ]
      } else { // development
        return []
      }
    })())
  }
}

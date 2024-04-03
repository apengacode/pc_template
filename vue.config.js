const { name } = require('./package');
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    open: false,
    port: process.env.VUE_APP_PORT,
    host: "0.0.0.0",
    // proxy: {
    //   "/api": {
    //     target: process.env.VUE_APP_BASE_API, // 本地
    //     secure: true, // false为http访问，true为https访问
    //     changeOrigin: true, // 跨域访问设置，true代表跨域
    //     pathRewrite: {
    //       // 路径改写规则
    //       "^/api": "",
    //     },
    //   },
    // },
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: { outputStyle: "expanded" },
      },
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
}
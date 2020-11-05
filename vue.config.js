module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,
  // chainWebpack: config => {
  //   config.plugins.delete('prefetch')
  // },
  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')

      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        moment: 'moment',
        lodash: '_'
      })

      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })

    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.js')

      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  },
  // productionSourceMap: false,
  devServer: {
    host: 'localhost',
    port: 8081,
    proxy: {
      '/API': {
        target: 'https://crmreport.sakura.com.tw/API',
        changeOrigin: true,
        pathRewrite: {
          '/API': ''
        }
      }
    }
  }
}

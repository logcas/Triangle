module.exports = {
 pages: {
  index: {
    entry: 'example/main.js',
    template: 'public/index.html',
    filename: 'index.html'
  }
 },
 configureWebpack: {
   module: {
     noParse: /iconfont/
   },
   resolve: {
     alias: {
       'common': 'src/common'
     }
   }
 },
 chainWebpack: config => {
  config.module
    .rule('js')
    .include
      .add('/src')
      .end()
    .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
    }
}
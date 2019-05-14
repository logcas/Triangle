const path = require('path');

module.exports = {
  base: '/Triangle/',
  title: 'TriangleUI',
  description: 'Vue 2.x Component Toolkit',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Github', link: 'https://github.com/logcas' },
    ],
    sidebar: [
      {
        title: 'Guide 引导',
        collapsable: false,
        children: [
          '/guide/install'
        ]
      },
      {
        title: 'General 通用',
        collapsable: false,
        children: [
          '/general/icon'
        ]
      },
      {
        title: 'Form 表单',
        collapsable: false,
        children: [
          '/form/button',
          '/form/input'
        ]
      },
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '..', '..', 'src')
      }
    }
  }
}
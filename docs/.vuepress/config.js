const path = require('path')
const timeago = require("timeago.js")

module.exports = {
  title: 'Clipped.js',
  description: 'Clipped.js - How you should configure',
  contentLoading: true,
  themeConfig: {
    repo: 'clippedjs/clippedjs.github.io',
    docsDir: 'docs',
    editLinks: true,
    nav: [
      {text: 'Guide', link: '/guide/'},
      {text: 'Plugin', link: '/reference/plugin/'},
      {text: 'Reference', items: [
        {text: 'Action Hook', link: '/reference/api#hook'},
        {text: 'Helper Methods', link: '/reference/api#helper'},
        {text: 'Plugin Methods', link: '/reference/api#plugin'},
        {text: 'Jointed', link: '/reference/api#jointed'},
        {text: 'Plugin', link: '/reference/plugin/'}
      ]}
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'directory-structure',
            'configuration',
            'hook'
          ]
        }
      ],
      '/reference/plugin/': [
        {
          title: 'Plugin',
          collapsable: false,
          children: [
            '',
            'using-plugin',
            'publish-plugin',
            'official'
          ]
        }
      ],
      '/reference/': [
        {
          title: 'Reference',
          collapsable: false,
          children: [
            'api'
          ]
        }
      ],
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'docs/')
      }
    }
  },
  plugins: {
    'flowchart': true,
    '@vuepress/back-to-top': true,
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/google-analytics': {
      ga: 'UA-108887459-2'
    },
    '@vuepress/last-updated': { transformer: timeago.format },
  }
}

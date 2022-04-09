const navbar = require('./navbar')
const sidebarConf = require('./sidebar')

module.exports = {
  // site config
  lang: 'zh-CN',
  title: '晓同的指南',
  base: '/VuePressWebSite/',
  description: '',

  open: true,

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    displayAllHeaders: true,
    logo: null,
    navbar,
    
    // sidebar: require('./sidebar'),
    sidebar: 'auto',
    sidebar: sidebarConf,

    repo: 'XTsat/VuePressWebSite',
    repoLabel: 'Github文档',

    editLink: true,
    editLinkText: '编辑此页',

    docsRepo: 'XTsat/VuePressWebSite',
    docsBranch: 'main',
    docsDir: 'docs',

    lastUpdated: true,
    lastUpdatedText: '最后更新时间',
    contributors: true,
    contributorsText: '编辑人',

    // 自定义容器 的默认标题
    tip: '提示',
    warning: '警告',
    danger: '危险',
    notFound: ["找不到该页面"],
    backToHome: '返回首页',
},

  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索文档',
            hotKeys: ['/']
          }
        }
      }
    ],
    [
      "vuepress-plugin-auto-sidebar",
      {
        title: {
        // 更多选项: 
        // `default`、`lowercase`、`uppercase`、`capitalize`、`camelcase`、`kebabcase`、`titlecase`
        mode: "titlecase"
        },
        removeEmptyGroup: true,
      }
    ],
  ],
  
}

const navbar = [
  {
    text: '主页',
    link: '/'
  },
  {
    text: '指南',
    children: [
      {
        text: 'Steam 指南',
        link: '/Guide/Steam/'
      },
      {
        text: 'Steam++ 指南',
        link: '/Guide/Steam++/'
      },
      {
        text: 'windows 11 安卓应用指南',
        link: '/Guide/Windows-11-Android/'
      },
      {
        text: '浏览器插件指南',
        link: '/Guide/Browser-Extensions/'
      },
      {
        text: '油猴脚本指南',
        link: '/Guide/Tampermonkey/'
      },
    ]
  },
  {
    text: '关于我',
    children: [
      {
        text: 'BiliBili 📺',
        link: 'https://space.bilibili.com/53283118'
      },
      {
        text: 'Steam 🎮',
        link: 'https://steamcommunity.com/id/XTxiaotong'
      },
      {
        text: 'Playlist 🎵',
        link: 'https://music.163.com/#/user/home?id=283588276'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/XTsat'
      },
    ]
  },
]

module.exports = navbar
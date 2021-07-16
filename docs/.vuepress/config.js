const sidebar = require("./sidebar")
const nav = require("./nav")
const plugin = require("./plugins")
module.exports = {
  //部署到博客
  // base: '/vue_blog/',

  //个人信息
  title: "问安Coding",   //博客标题
  description: "问安又在写bug了",  //博客描述
  // dest: 'dist',   //博客部署时输出的文件夹

  head: [
    //设置网站图标，放在public目录下
    // ['link',{rel: 'icon', href: '/logo.png'}]   //图标
    ['meta',{name: 'author', content: '问安'}],
    ['meta',{name: 'keywords', content: 'Java,python,c,css,js,vue'}],

    // 引入自定义全局搜索的js
    ["script", {"language": "javascript", "type": "text/javascript", "src": "/js/pgmanor-self.js"}]
  ],


  themeConfig: {
    author: 'WenAn',
    //首页设置
    type: 'blog',

    //首页头像
    authorAvatar: '/img_1.png',

    // 博客配置
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/cwenan' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
      ]
    },

    //导航栏
    nav: nav,
    //侧边栏
    sidebar: sidebar,

    //开启搜索
    search: true,
    //搜索结果条数
    searchMaxSuggestions: 10,

    //自动形成侧栏
    subSidebar: 'auto',

    //最后更新时间
    lastUpdated: '最后更新时间',

    //评论
    valineConfig: {
      appId: 'I8xzqVCvfli7qf1YNR1oXUty-gzGzoHsz',// your appId
      appKey: 'l2C3XdNLdXGLDhY7Pe6rTVpc', // your appKey
    },

  },

  //添加插件
  plugins: plugin


}

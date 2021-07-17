const secret = require("secret")
module.exports = [
    //复制代码插件
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
        content: "复制成功!"
      }
    }],
    //流程图插件
    ['flowchart'],

    //标签增强，可以自定义某些名言名句
    ["vuepress-plugin-boxx"],

    //全局搜索
    ['fulltext-search'],

    //上次更新
    ['@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment,如果是多语言，可以重新设置
          const moment = require('moment')
          moment.locale("zh-cn")
          return moment(timestamp).format("LL")
        }
      }],

    //显示当前活动页面
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }],

    //谷歌分析
    [
      '@vuepress/google-analytics',
      {
        'ga': secret.ga
      }
    ],

    //回到顶部
    ['@vuepress/back-to-top'],

    //博客主题
    ['@vuepress/blog'],

    //图片放大缩小
    ['@vuepress/medium-zoom',
      {
        selector: 'img.zoom-custom-imgs',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16
        }
      }
    ],

    //GitHub评论
    ['@vssue/vuepress-plugin-vssue',
      {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',

        // 其他的 Vssue 配置
        owner: 'cwenan',
        repo: 'vuepress_blog',
        clientId: secret.clientId,
        clientSecret: secret.clientSecret,

        //自动创建issue
        autoCreateIssue: true
      }]
]

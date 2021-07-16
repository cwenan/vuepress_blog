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

    // //上次更新
    // ['@vuepress/last-updated',
    //   {
    //     transformer: (timestamp, lang) => {
    //       // 不要忘了安装 moment
    //       const moment = require('moment')
    //       moment.locale(lang)
    //       return moment(timestamp).toString()
    //     }
    //   }]
  ['@vuepress/last-updated', {
    transformer: timestamp => {
      return new Date(timestamp).toISOString()
    }
  }]

]

module.exports = {
  '/docs/backend/java/': [
    {
      title: 'Java基础',
      collapsable: false,  //让这个组是展开状态
      children: [
        '/docs/backend/java/java_base/java',
        '/docs/backend/java/java_base/java02',
        '/docs/backend/java/java_base/java03'
      ]
    },
    {
      title: 'JavaWeb',
      children: [
        ['/docs/backend/python/python', "python目录"]
        // ['/docs/backend/python/python', "python目录"]

      ]
    },
  ],
  '/docs/frontend/': [
    {
      title: "HTML",
      children: [
        '/docs/frontend/html/html',
        '/docs/frontend/vue/vue'
      ]
    }
  ],
  '/docs/tools/git/':[
    {
      title: "Git",
      children: [
          '/docs/tools/git/01',
        '/docs/tools/git/02'
      ]
    }
  ],
  '/': ['']
}

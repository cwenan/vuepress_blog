module.exports = {
  '/docs/backend/': [
    {
      title: 'Java',
      collapsable: false,  //让这个组是展开状态
      children: [
        '/docs/backend/java/java',
        '/docs/backend/java/java02',
        '/docs/backend/java/java03'
      ]
    },
    {
      title: 'python',
      children: [
        ['/docs/backend/python/python', "python目录"]

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
  ]
}

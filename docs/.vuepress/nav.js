module.exports = [
  {text: '主页', link: '/'},
  { text: '时间轴', link: '/timeline/',},
  {
    text: "前端",
    ariaLabel: '分类',
    items: [
      {
        text: "HTML",
        link: "/docs/frontend/html/"
      },
    ]
  },
  {
    text: "后端",
    icon: "reco-message",
    items: [
      {
        text: "Java",
        link: "/docs/backend/java/"
      },
      {
        text: 'python',
        link: "/docs/backend/python/"
      }
    ]
  },
]

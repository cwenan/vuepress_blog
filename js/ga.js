var _hmt = _hmt || [];
(function() {
  //引入百度
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?**********************";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);

  // 引入谷歌,不需要可删除这段
  var hm1 = document.createElement("script");
  hm1.src = "https://www.googletagmanager.com/gtag/js?id=G-H37JMNGJCG";
  var s1 = document.getElementsByTagName("script")[0];
  s1.parentNode.insertBefore(hm1, s1);
})();

// 谷歌加载,不需要可删除
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-H37JMNGJCG');

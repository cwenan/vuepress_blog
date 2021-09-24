(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{449:function(t,a,s){"use strict";s.r(a);var r=s(12),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"什么是版本控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是版本控制"}},[t._v("#")]),t._v(" 什么是版本控制")]),t._v(" "),s("p",[t._v("版本控制是一种"),s("strong",[t._v("记录一个或若干文件内容变化")]),t._v("，以便将来"),s("strong",[t._v("查阅特定版本")]),t._v("修订情况的系统。")]),t._v(" "),s("blockquote",[s("p",[t._v("如果你是位图形或网页设计师，可能会需要保存某一幅图片或页面布局文件的所有修订版本（这或许是你非常渴望拥有的功能），采用版本控制系统（VCS）是个明智的选择。 有了它你就可以将选定的文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态，你可以比较文件的变化细节，查出最后是谁修改了哪个地方，从而找出导致怪异问题出现的原因，又是谁在何时报告了某个功能缺陷等等。 使用版本控制系统通常还意味着，就算你乱来一气把整个项目中的文件改的改删的删，你也照样可以轻松恢复到原先的样子。 但额外增加的工作量却微乎其微。")])]),t._v(" "),s("h2",{attrs:{id:"版本控制系统的分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本控制系统的分类"}},[t._v("#")]),t._v(" 版本控制系统的分类")]),t._v(" "),s("h3",{attrs:{id:"本地版本控制系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地版本控制系统"}},[t._v("#")]),t._v(" 本地版本控制系统")]),t._v(" "),s("p",[t._v("最简单的本地版本控制便是把原来的项目复制一遍，在原来的基础上进行更改，加上备注信息以示区分。")]),t._v(" "),s("p",[t._v("RCS便是本地版本控制系统的一种， RCS的工作原理是在硬盘上保存补丁集（补丁是指文件修订前后的变化）；通过应用所有的补丁，可以重新计算出各个版本的文件内容。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cwenan/blog.img/20210727151313.png",alt:"image-20210727151304693"}})]),t._v(" "),s("p",[t._v("缺点：只能在本地上操控")]),t._v(" "),s("h3",{attrs:{id:"集中式版本控制系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集中式版本控制系统"}},[t._v("#")]),t._v(" 集中式版本控制系统")]),t._v(" "),s("p",[t._v("为了让不同系统上的开发者协同工作，便有了集中化的版本控制系统（CVCS），CVCS有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cwenan/blog.img/20210727151548.png",alt:"image-20210727151546704"}})]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("每个人都可以在一定程度上看到该项目的其他人正在做什么")]),t._v(" "),s("li",[t._v("管理员也可以掌握每个开发者的权限")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("一旦中央服务器出现故障，便会影响到所有的开发者。如果中心数据库所在的磁盘发生损坏，又没有做恰当备份，毫无疑问你将丢失所有数据——包括项目的整个变更历史，只剩下人们在各自机器上保留的单独快照。")]),t._v(" "),s("li",[t._v("受到网络限制")])]),t._v(" "),s("h3",{attrs:{id:"分布式版本控制系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式版本控制系统"}},[t._v("#")]),t._v(" 分布式版本控制系统")]),t._v(" "),s("p",[t._v("在集中化的版本控制系统（CVCS）的基础上，又诞生了分布式版本控制系统（Distributed Version Control System，简称 DVCS）。")]),t._v(" "),s("p",[t._v("在这类系统中，像 "),s("strong",[t._v("Git")]),t._v("、Mercurial、Bazaar 以及 Darcs 等，客户端并不只提取最新版本的文件快照， 而是把代码仓库完整地镜像下来，包括完整的历史记录。 这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。 因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cwenan/blog.img/20210727152239.png",alt:"image-20210727152238262"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);
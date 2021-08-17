(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{167:function(t,e,s){t.exports=s.p+"assets/img/storage.5f1d2bf7.png"},168:function(t,e,s){t.exports=s.p+"assets/img/fromURLtoHTMLshow.drawio.d863e989.png"},626:function(t,e,s){"use strict";s.r(e);var _=[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"☆-虚拟dom提高性能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-虚拟dom提高性能","aria-hidden":"true"}},[this._v("#")]),this._v(" ☆-虚拟DOM提高性能")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[t._v("虚拟 "),s("code",[t._v("dom")]),t._v(" 相当于在 "),s("code",[t._v("js")]),t._v(" 和真实 "),s("code",[t._v("dom")]),t._v(" 中间加了一个缓存，利用 "),s("code",[t._v("dom diff")]),t._v(" 算法避免了没有必\n要的 "),s("code",[t._v("dom")]),t._v(" 操作，从而提高性能。")])]),s("li",[s("p",[t._v("用 "),s("code",[t._v("JavaScript")]),t._v(" 对象结构表示 "),s("code",[t._v("DOM")]),t._v(" 树的结构；然后用这个树构建一个真正的 "),s("code",[t._v("DOM")]),t._v(" 树，插到文档当中，当状态变更的时候，重新构造一棵新的对象树。")])]),s("li",[s("p",[t._v("然后用新的树和旧的树进行比较，记录两棵树差异：把 "),s("code",[t._v("2")]),t._v(" 所记录的差异应用到步骤 "),s("code",[t._v("1")]),t._v(" 所构建的真正的 "),s("code",[t._v("DOM")]),t._v(" 树上，视图就更新了。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"☆-virtual-dom的优势在哪里"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-virtual-dom的优势在哪里","aria-hidden":"true"}},[this._v("#")]),this._v(" ☆-Virtual DOM的优势在哪里")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"virtual-dom-的优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom-的优势","aria-hidden":"true"}},[this._v("#")]),this._v(" Virtual Dom 的优势")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("其实这道题目面试官更想听到的答案不是上来就说 "),e("strong",[this._v("直接操作/频繁操作DOM 的性能差")]),this._v("，如果 "),e("code",[this._v("DOM")]),this._v(" 操作的性能如此不堪，那么 "),e("code",[this._v("jQuery")]),this._v(" 也不至于活到今天。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("所以面试官更想听到 "),e("code",[this._v("VDOM")]),this._v(" 想解决的问题，以及为什么频繁的 "),e("code",[this._v("DOM")]),this._v(" 操作会性能差。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("首先")]),this._v("我们需要知道：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("DOM")]),t._v(" 渲染引擎、"),s("code",[t._v("JS")]),t._v(" 引擎 相互独立，但又工作在同一线程（主线程）")]),s("li",[s("code",[t._v("JS")]),t._v(" 代码调用 "),s("code",[t._v("DOM API")]),t._v("时，必须挂起 "),s("code",[t._v("JS")]),t._v(" 引擎，转换传入参数数据、激活 "),s("code",[t._v("DOM")]),t._v(" 渲染引擎，")]),s("li",[s("code",[t._v("DOM")]),t._v(" 重绘后再转换可能有的返回值，最后激活 "),s("code",[t._v("JS")]),t._v(" 引擎并继续执行")]),s("li",[t._v("若有频繁的 "),s("code",[t._v("DOM API")]),t._v(" 调用，且浏览器厂商不做“批量处理”优化， 引擎间切换的单位代价将迅速积累")]),s("li",[t._v("若其中有强制重绘的 "),s("code",[t._v("DOM API")]),t._v(" 调用，重新计算布局、重新绘制图像会引起更大的性能消耗。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("其次")]),this._v("，"),e("strong",[e("code",[this._v("VDOM")]),this._v(" 和真实 "),e("code",[this._v("DOM")]),this._v(" 的区别和优化")]),this._v("：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("虚拟 "),s("code",[t._v("DOM")]),t._v(" 不会立马进行排版与重绘操作")]),s("li",[t._v("虚拟 "),s("code",[t._v("DOM")]),t._v(" 进行频繁修改，然后一次性比较并修改真实 "),s("code",[t._v("DOM")]),t._v(" 中需要改的部分，")]),s("li",[t._v("最后在真实"),s("code",[t._v("DOM")]),t._v(" 中进行排版与重绘，减少过多"),s("code",[t._v("DOM")]),t._v("节点排版与重绘损耗")]),s("li",[t._v("虚拟 "),s("code",[t._v("DOM")]),t._v(" 有效降低大面积真实 "),s("code",[t._v("DOM")]),t._v(" 的重绘与排版，因为最终与真实 "),s("code",[t._v("DOM")]),t._v("比较差异，可以只渲染局部")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"☆-url和uri的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-url和uri的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" ☆-URL和URI的区别")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("URI: Uniform Resource Identifier")]),this._v(" 指的是"),e("strong",[this._v("统一资源标识符")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("URL: Uniform Resource Location")]),this._v(" 指的是"),e("strong",[this._v("统一资源定位符")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("URI")]),this._v(" 指的是"),e("strong",[this._v("统一资源标识符")]),this._v("，用唯一的标识来确定一个资源，它是一种抽象的定义，也就是说，不管使用什么方法来定义，只要能唯一的标识一个资源，就可以称为 "),e("code",[this._v("URI")]),this._v("。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("URL")]),t._v(" 指的是"),s("strong",[t._v("统一资源定位符")]),t._v("，"),s("code",[t._v("URN")]),t._v("指的是统一资源名称。"),s("code",[t._v("URL")]),t._v(" 和 "),s("code",[t._v("URN")]),t._v(" 是 "),s("code",[t._v("URI")]),t._v(" 的子集，"),s("code",[t._v("URL")]),t._v(" 可以理解为使用地址来标识资源。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"☆-如何实现图片懒加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-如何实现图片懒加载","aria-hidden":"true"}},[this._v("#")]),this._v(" ☆-如何实现图片懒加载")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("懒加载")]),this._v("也叫延迟加载，指的是在长网页中延迟加载图片的时机，当用户需要访问时，再去加载，这样可以提高网站的首屏加载速度，提升用户的体验，并且可以减少服务器的压力。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("它适用于图片很多，页面很长的电商网站的场景")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("懒加载的实现"),e("strong",[this._v("原理")]),this._v("是，将页面上的图片的 "),e("code",[this._v("src")]),this._v(" 属性设置为空字符串，将图片的真实路径保存在一个自定义属性中，当页面滚动的时候，进行判断，如果图片进入页面可视区域内，则从自定义属性中取出真实路径赋值给图片的 "),e("code",[this._v("src")]),this._v(" 属性，以此来实现图片的延迟加载。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"☆-优雅降级和渐进增强"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-优雅降级和渐进增强","aria-hidden":"true"}},[this._v("#")]),this._v(" ☆-优雅降级和渐进增强")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transition"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("webkit"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("transition"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all "),s("span",{attrs:{class:"token number"}},[t._v(".5")]),t._v("s"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("moz"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("transition"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all "),s("span",{attrs:{class:"token number"}},[t._v(".5")]),t._v("s"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("o"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("transition"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all "),s("span",{attrs:{class:"token number"}},[t._v(".5")]),t._v("s"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          transition"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all "),s("span",{attrs:{class:"token number"}},[t._v(".5")]),t._v("s"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("优雅降级")]),this._v("("),e("code",[this._v("graceful degradation")]),this._v(") ：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transition"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　     transition"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all "),s("span",{attrs:{class:"token number"}},[t._v(".5")]),t._v("s"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　  "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("o"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("transition"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all "),s("span",{attrs:{class:"token number"}},[t._v(".5")]),t._v("s"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  　"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("moz"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("transition"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all "),s("span",{attrs:{class:"token number"}},[t._v(".5")]),t._v("s"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("webkit"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("transition"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all "),s("span",{attrs:{class:"token number"}},[t._v(".5")]),t._v("s"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("区别")]),this._v("：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("(1) 优雅降级是从复杂的现状开始，并试图减少用户体验的供给")]),e("li",[this._v("(2) 渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要\n"),e("code",[this._v("function foo(){//code... }()")]),this._v("定义预格式文本，保持文本原有的格式")]),e("li",[this._v("(3) 降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"☆-前端需要注意哪些seo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-前端需要注意哪些seo","aria-hidden":"true"}},[this._v("#")]),this._v(" ☆-前端需要注意哪些SEO")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("（1）合理的 "),s("code",[t._v("title")]),t._v("、"),s("code",[t._v("description")]),t._v("、"),s("code",[t._v("keywords")]),t._v("：搜索对着三项的权重逐个减小，\n"),s("ul",[s("li",[s("code",[t._v("title")]),t._v(" 值强调重点即可，重要关键词出现不要超过"),s("code",[t._v("2")]),t._v("次，而且要靠前，不同页面 "),s("code",[t._v("title")]),t._v(" 要有所不同；")]),s("li",[s("code",[t._v("description")]),t._v(" 把页面内容高度 概括，长度合适，不可过分堆砌关键词，不同页面 "),s("code",[t._v("description")]),t._v(" 有所不同；")]),s("li",[s("code",[t._v("keywords")]),t._v(" 列举出重要 关键词即可。")])])]),s("li",[t._v("（2）语义化的 "),s("code",[t._v("HTML")]),t._v(" 代码，符合 "),s("code",[t._v("W3C")]),t._v(" 规范：语义化代码让搜索引擎容易理解网页。")]),s("li",[t._v("（3）重要内容 "),s("code",[t._v("HTML")]),t._v(" 代码放在最前：搜索引擎抓取 "),s("code",[t._v("HTML")]),t._v(" 顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容肯定被抓取。")]),s("li",[t._v("（4）重要内容不要用 "),s("code",[t._v("js")]),t._v(" 输出：爬虫不会执行 "),s("code",[t._v("js")]),t._v(" 获取内容")]),s("li",[t._v("（5）少用 "),s("code",[t._v("iframe")]),t._v("：搜索引擎不会抓取 "),s("code",[t._v("iframe")]),t._v(" 中的内容")]),s("li",[t._v("（6）非装饰性图片必须加 "),s("code",[t._v("alt")])]),s("li",[t._v("（7）提高网站速度：网站速度是搜索引擎排序的一个重要指标")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"☆-首屏和白屏时间如何计算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-首屏和白屏时间如何计算","aria-hidden":"true"}},[this._v("#")]),this._v(" ☆-首屏和白屏时间如何计算")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",[t._v("首屏")]),t._v("时间的计算，可以由 "),s("code",[t._v("Native WebView")]),t._v(" 提供的类似 "),s("code",[t._v("onload")]),t._v(" 的方法实现，在 "),s("code",[t._v("ios")]),t._v(" 下对应的是\n"),s("code",[t._v("webViewDidFinishLoad")]),t._v("，在 "),s("code",[t._v("android")]),t._v(" 下对应的是"),s("code",[t._v("onPageFinished")]),t._v("事件。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("白屏")]),this._v("的定义有多种。可以认为“没有任何内容”是白屏，可以认为“网络或服务异常”是白屏，可以认为“数据加载中”是白\n屏，可以认为“图片加载不出来”是白屏。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("strong",[t._v("方法1")]),t._v("：当页面的元素数小于"),s("code",[t._v("x")]),t._v("时，则认为页面白屏。比如“没有任何内容”，可以获取页面的"),s("code",[t._v("DOM")]),t._v("\n节点数，判断"),s("code",[t._v("DOM")]),t._v("节点数少于某个阈值"),s("code",[t._v("X")]),t._v("，则认为白屏。")]),s("li",[s("strong",[t._v("方法2")]),t._v("：当页面出现业务定义的错误码时，则认为是白屏。比如“网络或服务异常”。")]),s("li",[s("strong",[t._v("方法3")]),t._v("：当页面出现业务定义的特征值时，则认为是白屏。比如“数据加载中”。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"☆-cookie的作用和弊端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-cookie的作用和弊端","aria-hidden":"true"}},[this._v("#")]),this._v(" ☆-Cookie的作用和弊端")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"cookie作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie作用","aria-hidden":"true"}},[this._v("#")]),this._v(" cookie作用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("1.可以在客户端上保存用户数据，起到简单的缓存和用户身份识别等作用。")])]),e("li",[e("p",[this._v("2.保存用户的登陆状态，用户进行登陆，成功登陆后，服务器生成特定的cookie返回给客户端，客户端下次访问该域名下的任何页面，将该cookie的信息发送给服务器，服务器经过检验，来判断用户是否登陆。")])]),e("li",[e("p",[this._v("3.记录用户的行为。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"cookie弊端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie弊端","aria-hidden":"true"}},[this._v("#")]),this._v(" cookie弊端")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("1.增加流量消耗，每次请求都需要带上"),s("code",[t._v("cookie")]),t._v("信息。")]),s("li",[t._v("2.安全性隐患，"),s("code",[t._v("cookie")]),t._v("使用明文传输。如果"),s("code",[t._v("cookie")]),t._v("被人拦截了，那人就可以取得所有的"),s("code",[t._v("session")]),t._v("信息。")]),s("li",[t._v("3."),s("code",[t._v("Cookie")]),t._v("数量和长度的限制。每个"),s("code",[t._v("domain")]),t._v("最多只能有"),s("code",[t._v("20")]),t._v("条"),s("code",[t._v("cookie")]),t._v("，每个"),s("code",[t._v("cookie")]),t._v("长度不能超过"),s("code",[t._v("4KB")]),t._v("，否则会被截掉。")]),s("li",[t._v("4.缺乏数据操作接口，浏览器端获取和设置"),s("code",[t._v("cookie")]),t._v("只能通过"),s("code",[t._v("document.cookie")]),t._v("实现。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"♥-浏览器输入url到页面呈现出来的过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#♥-浏览器输入url到页面呈现出来的过程","aria-hidden":"true"}},[this._v("#")]),this._v(" ♥-浏览器输入url到页面呈现出来的过程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(168),alt:"img"}})])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[_("p",[_("strong",[t._v("1、输入 "),_("code",[t._v("url")]),t._v(" 后，首先需要找到这个 "),_("code",[t._v("url")]),t._v(" 域名的服务器 "),_("code",[t._v("ip")])]),t._v(",")]),_("ul",[_("li",[_("strong",[t._v("ip")]),t._v(" 查找过程：缓存 -> "),_("strong",[t._v("hosts")]),t._v(" -> "),_("strong",[t._v("DNS")]),_("ul",[_("li",[t._v("为了寻找这个 "),_("strong",[t._v("ip")]),t._v(" ，浏览器首先会寻找 "),_("strong",[t._v("缓存")]),t._v("，查看缓存中是否有记录，缓存的查找记录为：浏览器缓存 -》 系统缓存 -》 路由器缓存，")]),_("li",[t._v("缓存中没有则查找系统的 "),_("strong",[t._v("hosts")]),t._v(" 文件中是否有记录，")]),_("li",[t._v("如果没有则查询 "),_("strong",[t._v("DNS")]),t._v(" 服务器，")])])])])]),_("li",[_("p",[_("strong",[t._v("2、得到服务器的"),_("code",[t._v("ip")]),t._v("地址后，浏览器根据这个"),_("code",[t._v("ip")]),t._v("以及相应的端口号，构造一个 "),_("code",[t._v("http")]),t._v(" 请求，")])]),_("ul",[_("li",[t._v("这个"),_("strong",[t._v("请求报文")]),t._v("会包括这次请求的信息，\n"),_("ul",[_("li",[t._v("主要是请求方法，请求说明和请求附带的数据，")])])]),_("li",[t._v("并将这个 "),_("strong",[t._v("http")]),t._v(" 请求封装在一个 "),_("strong",[t._v("tcp")]),t._v(" 包中，\n"),_("ul",[_("li",[t._v("这个 "),_("strong",[t._v("tcp")]),t._v(" 包会依次经过传输层，网络层，数据链路层，物理层到达服务器，")])])])])]),_("li",[_("p",[_("strong",[t._v("3、服务器解析这个请求来作出响应，返回相应的 "),_("code",[t._v("html")]),t._v(" 给浏览器，")])]),_("ul",[_("li",[t._v("分析客户端请求")]),_("li",[t._v("根据分析结果处理业务逻辑")]),_("li",[t._v("响应处理结果，如返回相应的html")])])]),_("li",[_("p",[_("strong",[t._v("4、因为"),_("code",[t._v("html")]),t._v("是一个树形结构，浏览器根据这个"),_("code",[t._v("html")]),t._v("来构建 "),_("code",[t._v("DOM")]),t._v(" 树，")])]),_("ul",[_("li",[t._v("在 "),_("strong",[t._v("dom")]),t._v(" 树的构建过程中如果遇到 "),_("strong",[t._v("JS")]),t._v(" 脚本和外部 "),_("strong",[t._v("JS")]),t._v(" 连接，则会停止构建 "),_("strong",[t._v("DOM")]),t._v(" 树来执行和下载相应的代码，这会造成阻塞，")]),_("li",[t._v("这就是为什么推荐 "),_("strong",[t._v("JS")]),t._v(" 代码应该放在 "),_("strong",[t._v("html")]),t._v(" 代码的后面，")])])]),_("li",[_("p",[_("strong",[t._v("5、之后根据外部样式，内部样式，内联样式构建一个"),_("code",[t._v("CSS")]),t._v("对象模型树 "),_("code",[t._v("CSSOM")]),t._v(" 树，构建完成后和"),_("code",[t._v("DOM")]),t._v("树合并为渲染树，")])]),_("ul",[_("li",[t._v("这里主要做的是排除非视觉节点，比如 "),_("strong",[t._v("script")]),t._v("， "),_("strong",[t._v("meta")]),t._v(" 标签和排除 "),_("strong",[t._v("display")]),t._v(" 为 "),_("strong",[t._v("none")]),t._v(" 的节点，之后进行布局，")]),_("li",[t._v("布局主要是确定各个元素的位置和尺寸，")])])]),_("li",[_("p",[_("strong",[t._v("6、之后是渲染页面，")])]),_("ul",[_("li",[t._v("因为 "),_("strong",[t._v("html")]),t._v(" 文件中会含有图片，视频，音频等资源，")]),_("li",[t._v("在解析 "),_("strong",[t._v("DOM")]),t._v(" 的过程中，遇到这些都会进行并行下载，")]),_("li",[t._v("浏览器对每个域的并行下载数量有一定的限制，一般是 "),_("strong",[t._v("4-6")]),t._v(" 个，")])])]),_("li",[_("p",[_("strong",[t._v("7、当然在这些所有的请求中我们还需要关注的就是缓存，缓存一般通过 "),_("code",[t._v("Cache-Control")]),t._v("、"),_("code",[t._v("Last-Modify")]),t._v("、"),_("code",[t._v("Expires")]),t._v(" 等首部字段控制。")])]),_("ul",[_("li",[_("strong",[t._v("Cache-Control")]),t._v(" 和 "),_("strong",[t._v("Expires")]),t._v(" 的区别在于\n"),_("ul",[_("li",[_("strong",[t._v("Cache-Control")]),t._v(" 使用相对时间，")]),_("li",[_("strong",[t._v("Expires")]),t._v(" 使用的是基于服务器端的绝对时间，")])])]),_("li",[t._v("因为存在时差问题，一般采用 "),_("strong",[t._v("Cache-Control")]),t._v("，")])])]),_("li",[_("p",[_("strong",[t._v("8、在请求这些有设置了缓存的数据时，会先查看是否过期，")])]),_("ul",[_("li",[_("p",[t._v("如果没有过期则直接使用本地缓存，")])]),_("li",[_("p",[t._v("过期则请求并在服务器校验文件是否修改，")]),_("ul",[_("li",[t._v("如果上一次响应设置了 "),_("strong",[t._v("ETag")]),t._v(" 值，会在这次请求的时候作为 "),_("strong",[t._v("If-None-Match")]),t._v(" 的值交给服务器校验，")]),_("li",[t._v("如果一致，继续校验 "),_("strong",[t._v("Last-Modified")]),t._v("，没有设置 "),_("strong",[t._v("ETag")]),t._v(" 则直接验证 "),_("strong",[t._v("Last-Modified")]),t._v("，再决定是否返回 "),_("strong",[t._v("304")])])]),_("p",[_("img",{attrs:{src:s(167),alt:"img"}})])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"☆-跨域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-跨域","aria-hidden":"true"}},[this._v("#")]),this._v(" ☆-跨域")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("因为浏览器出于安全考虑，有同源策略。也就是说，如果"),e("strong",[this._v("协议、域名或者端口")]),this._v("有一个不同就是跨域，\nAjax 请求会失败。防止CSRF攻击。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-jsonp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-jsonp","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.JSONP")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("JSONP的原理很简单，就是利用"),e("code",[this._v("<script><\/script>")]),this._v("标签没有跨域限制的漏洞。 通过"),e("code",[this._v("<script><\/script>")]),this._v("标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- JSONP 使用简单且兼容性不错，但是只限于 get 请求。 --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("jsonp")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-cors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-cors","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. CORS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 "),e("code",[this._v("XDomainRequest")]),this._v(" 来实现。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-document-domain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-document-domain","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. document.domain")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-webpack配置proxytable设置开发环境跨域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-webpack配置proxytable设置开发环境跨域","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. webpack配置proxyTable设置开发环境跨域")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5-nginx代理跨域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-nginx代理跨域","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. nginx代理跨域")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_6-iframe跨域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-iframe跨域","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. iframe跨域")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_7-postmessage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-postmessage","aria-hidden":"true"}},[this._v("#")]),this._v(" 7. postMessage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"☆-前端性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-前端性能优化","aria-hidden":"true"}},[this._v("#")]),this._v(" ☆-前端性能优化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"一：-webapck优化与开启gzip压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一：-webapck优化与开启gzip压缩","aria-hidden":"true"}},[this._v("#")]),this._v(" 一： webapck优化与开启gzip压缩")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("1.babel-loader用 include 或 exclude来帮我们避免不必要的转译，不转译node_moudules中的js文件 其次在缓存当前转译的js文件，设置\nloader: 'babel-loader?cacheDirectory=true'")]),e("li",[this._v("2.文件采用按需加载等等")]),e("li",[this._v("3.具体的做法非常简单，只需要你在你的 request headers 中加上这么一句： accept-encoding:gzip")]),e("li",[this._v("4.图片优化，采用svg图片或者字体图标")]),e("li",[this._v("5.浏览器缓存机制，它又分为强缓存和协商缓存")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"二：本地存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二：本地存储","aria-hidden":"true"}},[this._v("#")]),this._v(" 二：本地存储")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"三：代码优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三：代码优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 三：代码优化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("1.事件代理")]),e("li",[this._v("2.事件的节流和防抖")]),e("li",[this._v("3.页面的回流和重绘")]),e("li",[this._v("4.EventLoop事件循环机制")]),e("li",[this._v("5.代码优化等等")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"☆-移动端性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-移动端性能优化","aria-hidden":"true"}},[this._v("#")]),this._v(" ☆-移动端性能优化")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("尽量使用css3动画，开启硬件加速")]),s("li",[t._v("适当使用touch时间代替click时间")]),s("li",[t._v("避免使用css3渐变阴影效果")]),s("li",[t._v("可以用transform: translateZ(0) 来开启硬件加速")]),s("li",[t._v("不滥用float。float在渲染时计算量比较大，尽量减少使用")]),s("li",[t._v("不滥用web字体。web字体需要下载，解析，重绘当前页面")]),s("li",[t._v("合理使用requestAnimationFrame动画代替setTimeout")]),s("li",[t._v("css中的属性（css3 transitions、css3 3D transforms、opacity、webGL、video）会触发GUP渲\n染，耗电")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"☆-浏览器缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-浏览器缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" ☆-浏览器缓存")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Memory Cache")]),e("li",[this._v("Service Worker Cache")]),e("li",[this._v("HTTP Cache")]),e("li",[this._v("Push Cache")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("实现强缓存")]),this._v("：过去我们一直用 expires。当服务器返回响应时，在 Response Headers 中将过期时\n间写入 expires 字段，现在一般使用Cache-Control 两者同时出现使用Cache-Control")]),e("li",[e("strong",[this._v("协商缓存")]),this._v("：Last-Modified 是一个时间戳，如果我们启用了协商缓存，它会在首次请求时随着\nResponse Headers 返回：每次请求去判断这个时间戳是否发生变化。从而去决定你是304读取缓\n存还是给你返回最新的数据。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"☆-websocket和ajax轮询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-websocket和ajax轮询","aria-hidden":"true"}},[this._v("#")]),this._v(" ☆-websocket和ajax轮询")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("websocket")]),this._v("是html5中提出的新的协议，可以实现客户端与服务器的通信，实现服务器的推送功能")]),e("li",[this._v("优点是，只要经过一次连接，就可以连续不断的得到服务器推送消息，节省带宽和服务器端的压力")]),e("li",[e("strong",[this._v("ajax轮询")]),this._v("模拟常连接就是每隔一段时间（0.5s）就向服务器发起ajax请求，查询服务器是否有数据更新")]),e("li",[this._v("缺点就是，每次都要建立HTTP连接，即使需要传输的数据非常少，浪费带宽")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"回流（reflow）与重绘（repaint）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回流（reflow）与重绘（repaint）","aria-hidden":"true"}},[this._v("#")]),this._v(" 回流（Reflow）与重绘（Repaint）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("回流")]),this._v("：当我们对 DOM 的修改引发了 DOM 几何尺寸的变化（比如修改元素的宽、高或隐藏元素\n等）时，浏览器需要重新计算元素的几何属性（其他元素的几何属性和位置也会因此受到影\n响），然后再将计算的结果绘制出来。这个过程就是回流（"),e("strong",[this._v("也叫重排")]),this._v("）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("重绘")]),this._v("：当我们对 DOM 的修改导致了样式的变化、却并未影响其几何属性（比如修改了颜色或背\n景色）时，浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式（跳过了上图所示\n的回流环节）。这个过程叫做重绘。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("重绘不一定导致回流，回流一定会导致重绘")])])}],a=s(1),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/iceflorence/archive/2017/03/27/6625466.html#:~:text=%E5%8C%BA%E5%88%AB%EF%BC%9A%E4%BC%98%E9%9B%85%E9%99%8D%E7%BA%A7%E6%98%AF,%E6%9C%AA%E6%9D%A5%E7%8E%AF%E5%A2%83%E7%9A%84%E9%9C%80%E8%A6%81%E3%80%82",target:"_blank",rel:"noopener noreferrer"}},[t._v("你能描述一下渐进增强和优雅降级之间的不同吗?（面试题）"),s("OutboundLink")],1)]),s("ul",[s("li",[t._v("扩展 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions",target:"_blank",rel:"noopener noreferrer"}},[t._v("css-transition"),s("OutboundLink")],1)])]),s("p",[s("strong",[t._v("渐进增强")]),t._v("( "),s("code",[t._v("progressive enhancement")]),t._v(")：针对低版本浏览器进行构建页面，保证最基本的功能，\n然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。"),s("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2010/04/css-%e6%b8%90%e8%bf%9b%e5%a2%9e%e5%bc%ba%e5%9c%a8web%e5%88%b6%e4%bd%9c%e4%b8%ad%e5%b8%b8%e8%a7%81%e5%ba%94%e7%94%a8%e4%b8%be%e4%be%8b/",target:"_blank",rel:"noopener noreferrer"}},[t._v("扩展"),s("OutboundLink")],1)]),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),s("p",[t._v("场景不同，白屏的计算方式就不相同。")]),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42),t._m(43),t._m(44),t._m(45),t._m(46),s("p",[t._v("该方式只能用于二级域名相同的情况下，比如 a.test.com 和 b.test.com 适用于该方式。只需要给页面添加 document.domain = 'test.com' 表示二级域名都相同就可以实现跨域")]),t._m(47),t._m(48),t._m(49),t._m(50),s("p",[t._v("这种方式通常用于获取嵌入页面中的第三方页面数据。一个页面发送消息，另一个页面判断来源并接收消息")]),t._m(51),s("p",[t._v("三个方面来说明前端性能优化：")]),t._m(52),t._m(53),t._m(54),s("p",[t._v("从 Cookie 到 Web Storage、IndexedDB 说明一下SessionStorage和localStorage还有cookie的区别和优缺点")]),t._m(55),t._m(56),t._m(57),t._m(58),t._m(59),s("p",[t._v("缓存可以减少网络 IO 消耗，提高访问速度。")]),s("p",[t._v("浏览器缓存是一种操作简单、效果显著的前端性能优化手段")]),s("p",[t._v("很多时候，大家倾向于将浏览器缓存简单地理解为“HTTP 缓存”。")]),s("p",[t._v("但事实上，浏览器缓存机制有四个方面，它们按照获取资源时请求的优先级依次排列如下：")]),t._m(60),s("p",[t._v("缓存它又分为强缓存和协商缓存。优先级较高的是强缓存，在命中强缓存失败的情况下，才会走协商缓\n存")]),t._m(61),t._m(62),t._m(63),t._m(64),t._m(65),t._m(66),t._m(67),s("p",[t._v("硬要比较的话，回流比重绘做的事情更多，带来的开销也更大。但这两个说到底都是吃性能的，\n所以都不是什么善茬。我们在开发中，要从代码层面出发，尽可能把回流和重绘的次数最小化")])])},_,!1,null,null,null);e.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{168:function(v,_,o){v.exports=o.p+"assets/img/storage.5f1d2bf7.png"},169:function(v,_,o){v.exports=o.p+"assets/img/fromURLtoHTMLshow.drawio.d863e989.png"},501:function(v,_,o){"use strict";o.r(_);var e=[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"content"},[e("h2",{attrs:{id:"☆-虚拟dom提高性能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-虚拟dom提高性能","aria-hidden":"true"}},[v._v("#")]),v._v(" ☆-虚拟DOM提高性能")]),e("ul",[e("li",[e("p",[v._v("虚拟 "),e("code",[v._v("dom")]),v._v(" 相当于在 "),e("code",[v._v("js")]),v._v(" 和真实 "),e("code",[v._v("dom")]),v._v(" 中间加了一个缓存，利用 "),e("code",[v._v("dom diff")]),v._v(" 算法避免了没有必\n要的 "),e("code",[v._v("dom")]),v._v(" 操作，从而提高性能。")])]),e("li",[e("p",[v._v("用 "),e("code",[v._v("JavaScript")]),v._v(" 对象结构表示 "),e("code",[v._v("DOM")]),v._v(" 树的结构；然后用这个树构建一个真正的 "),e("code",[v._v("DOM")]),v._v(" 树，插到文档当中，当状态变更的时候，重新构造一棵新的对象树。")])]),e("li",[e("p",[v._v("然后用新的树和旧的树进行比较，记录两棵树差异：把 "),e("code",[v._v("2")]),v._v(" 所记录的差异应用到步骤 "),e("code",[v._v("1")]),v._v(" 所构建的真正的 "),e("code",[v._v("DOM")]),v._v(" 树上，视图就更新了。")])])]),e("h2",{attrs:{id:"☆-virtual-dom的优势在哪里"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-virtual-dom的优势在哪里","aria-hidden":"true"}},[v._v("#")]),v._v(" ☆-Virtual DOM的优势在哪里")]),e("h3",{attrs:{id:"virtual-dom-的优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom-的优势","aria-hidden":"true"}},[v._v("#")]),v._v(" Virtual Dom 的优势")]),e("p",[v._v("其实这道题目面试官更想听到的答案不是上来就说 "),e("strong",[v._v("直接操作/频繁操作DOM 的性能差")]),v._v("，如果 "),e("code",[v._v("DOM")]),v._v(" 操作的性能如此不堪，那么 "),e("code",[v._v("jQuery")]),v._v(" 也不至于活到今天。")]),e("p",[v._v("所以面试官更想听到 "),e("code",[v._v("VDOM")]),v._v(" 想解决的问题，以及为什么频繁的 "),e("code",[v._v("DOM")]),v._v(" 操作会性能差。")]),e("p",[e("strong",[v._v("首先")]),v._v("我们需要知道：")]),e("ul",[e("li",[e("code",[v._v("DOM")]),v._v(" 渲染引擎、"),e("code",[v._v("JS")]),v._v(" 引擎 相互独立，但又工作在同一线程（主线程）")]),e("li",[e("code",[v._v("JS")]),v._v(" 代码调用 "),e("code",[v._v("DOM API")]),v._v("时，必须挂起 "),e("code",[v._v("JS")]),v._v(" 引擎，转换传入参数数据、激活 "),e("code",[v._v("DOM")]),v._v(" 渲染引擎，")]),e("li",[e("code",[v._v("DOM")]),v._v(" 重绘后再转换可能有的返回值，最后激活 "),e("code",[v._v("JS")]),v._v(" 引擎并继续执行")]),e("li",[v._v("若有频繁的 "),e("code",[v._v("DOM API")]),v._v(" 调用，且浏览器厂商不做“批量处理”优化， 引擎间切换的单位代价将迅速积累")]),e("li",[v._v("若其中有强制重绘的 "),e("code",[v._v("DOM API")]),v._v(" 调用，重新计算布局、重新绘制图像会引起更大的性能消耗。")])]),e("p",[e("strong",[v._v("其次")]),v._v("，"),e("strong",[e("code",[v._v("VDOM")]),v._v(" 和真实 "),e("code",[v._v("DOM")]),v._v(" 的区别和优化")]),v._v("：")]),e("ul",[e("li",[v._v("虚拟 "),e("code",[v._v("DOM")]),v._v(" 不会立马进行排版与重绘操作")]),e("li",[v._v("虚拟 "),e("code",[v._v("DOM")]),v._v(" 进行频繁修改，然后一次性比较并修改真实 "),e("code",[v._v("DOM")]),v._v(" 中需要改的部分，")]),e("li",[v._v("最后在真实"),e("code",[v._v("DOM")]),v._v(" 中进行排版与重绘，减少过多"),e("code",[v._v("DOM")]),v._v("节点排版与重绘损耗")]),e("li",[v._v("虚拟 "),e("code",[v._v("DOM")]),v._v(" 有效降低大面积真实 "),e("code",[v._v("DOM")]),v._v(" 的重绘与排版，因为最终与真实 "),e("code",[v._v("DOM")]),v._v("比较差异，可以只渲染局部")])]),e("h2",{attrs:{id:"☆-url和uri的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-url和uri的区别","aria-hidden":"true"}},[v._v("#")]),v._v(" ☆-URL和URI的区别")]),e("p",[e("code",[v._v("URI: Uniform Resource Identifier")]),v._v(" 指的是"),e("strong",[v._v("统一资源标识符")])]),e("p",[e("code",[v._v("URL: Uniform Resource Location")]),v._v(" 指的是"),e("strong",[v._v("统一资源定位符")])]),e("p",[e("code",[v._v("URI")]),v._v(" 指的是"),e("strong",[v._v("统一资源标识符")]),v._v("，用唯一的标识来确定一个资源，它是一种抽象的定义，也就是说，不管使用什么方法来定义，只要能唯一的标识一个资源，就可以称为 "),e("code",[v._v("URI")]),v._v("。")]),e("p",[e("code",[v._v("URL")]),v._v(" 指的是"),e("strong",[v._v("统一资源定位符")]),v._v("，"),e("code",[v._v("URN")]),v._v("指的是统一资源名称。"),e("code",[v._v("URL")]),v._v(" 和 "),e("code",[v._v("URN")]),v._v(" 是 "),e("code",[v._v("URI")]),v._v(" 的子集，"),e("code",[v._v("URL")]),v._v(" 可以理解为使用地址来标识资源。")]),e("h2",{attrs:{id:"☆-如何实现图片懒加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-如何实现图片懒加载","aria-hidden":"true"}},[v._v("#")]),v._v(" ☆-如何实现图片懒加载")]),e("p",[e("strong",[v._v("懒加载")]),v._v("也叫延迟加载，指的是在长网页中延迟加载图片的时机，当用户需要访问时，再去加载，这样可以提高网站的首屏加载速度，提升用户的体验，并且可以减少服务器的压力。")]),e("p",[e("strong",[v._v("它适用于图片很多，页面很长的电商网站的场景")]),v._v("。")]),e("p",[v._v("懒加载的实现"),e("strong",[v._v("原理")]),v._v("是，将页面上的图片的 "),e("code",[v._v("src")]),v._v(" 属性设置为空字符串，将图片的真实路径保存在一个自定义属性中，当页面滚动的时候，进行判断，如果图片进入页面可视区域内，则从自定义属性中取出真实路径赋值给图片的 "),e("code",[v._v("src")]),v._v(" 属性，以此来实现图片的延迟加载。")]),e("h2",{attrs:{id:"☆-优雅降级和渐进增强"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-优雅降级和渐进增强","aria-hidden":"true"}},[v._v("#")]),v._v(" ☆-优雅降级和渐进增强")]),e("p",[e("strong",[v._v("渐进增强")]),v._v("( "),e("code",[v._v("progressive enhancement")]),v._v(")：针对低版本浏览器进行构建页面，保证最基本的功能，\n然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。")]),e("p",[e("strong",[v._v("优雅降级")]),v._v("("),e("code",[v._v("graceful degradation")]),v._v(") ：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。")]),e("p",[e("strong",[v._v("区别")]),v._v("：")]),e("ul",[e("li",[v._v("(1) 优雅降级是从复杂的现状开始，并试图减少用户体验的供给")]),e("li",[v._v("(2) 渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要\n"),e("code",[v._v("function foo(){//code... }()")]),v._v("定义预格式文本，保持文本原有的格式")]),e("li",[v._v("(3) 降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带")])]),e("h2",{attrs:{id:"☆-前端需要注意哪些seo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-前端需要注意哪些seo","aria-hidden":"true"}},[v._v("#")]),v._v(" ☆-前端需要注意哪些SEO")]),e("ul",[e("li",[v._v("（1）合理的 "),e("code",[v._v("title")]),v._v("、"),e("code",[v._v("description")]),v._v("、"),e("code",[v._v("keywords")]),v._v("：搜索对着三项的权重逐个减小，\n"),e("ul",[e("li",[e("code",[v._v("title")]),v._v(" 值强调重点即可，重要关键词出现不要超过"),e("code",[v._v("2")]),v._v("次，而且要靠前，不同页面 "),e("code",[v._v("title")]),v._v(" 要有所不同；")]),e("li",[e("code",[v._v("description")]),v._v(" 把页面内容高度 概括，长度合适，不可过分堆砌关键词，不同页面 "),e("code",[v._v("description")]),v._v(" 有所不同；")]),e("li",[e("code",[v._v("keywords")]),v._v(" 列举出重要 关键词即可。")])])]),e("li",[v._v("（2）语义化的 "),e("code",[v._v("HTML")]),v._v(" 代码，符合 "),e("code",[v._v("W3C")]),v._v(" 规范：语义化代码让搜索引擎容易理解网页。")]),e("li",[v._v("（3）重要内容 "),e("code",[v._v("HTML")]),v._v(" 代码放在最前：搜索引擎抓取 "),e("code",[v._v("HTML")]),v._v(" 顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容肯定被抓取。")]),e("li",[v._v("（4）重要内容不要用 "),e("code",[v._v("js")]),v._v(" 输出：爬虫不会执行 "),e("code",[v._v("js")]),v._v(" 获取内容")]),e("li",[v._v("（5）少用 "),e("code",[v._v("iframe")]),v._v("：搜索引擎不会抓取 "),e("code",[v._v("iframe")]),v._v(" 中的内容")]),e("li",[v._v("（6）非装饰性图片必须加 "),e("code",[v._v("alt")])]),e("li",[v._v("（7）提高网站速度：网站速度是搜索引擎排序的一个重要指标")])]),e("h2",{attrs:{id:"☆-首屏和白屏时间如何计算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-首屏和白屏时间如何计算","aria-hidden":"true"}},[v._v("#")]),v._v(" ☆-首屏和白屏时间如何计算")]),e("p",[e("strong",[v._v("首屏")]),v._v("时间的计算，可以由 "),e("code",[v._v("Native WebView")]),v._v(" 提供的类似 "),e("code",[v._v("onload")]),v._v(" 的方法实现，在 "),e("code",[v._v("ios")]),v._v(" 下对应的是\n"),e("code",[v._v("webViewDidFinishLoad")]),v._v("，在 "),e("code",[v._v("android")]),v._v(" 下对应的是"),e("code",[v._v("onPageFinished")]),v._v("事件。")]),e("p",[e("strong",[v._v("白屏")]),v._v("的定义有多种。可以认为“没有任何内容”是白屏，可以认为“网络或服务异常”是白屏，可以认为“数据加载中”是白\n屏，可以认为“图片加载不出来”是白屏。")]),e("p",[v._v("场景不同，白屏的计算方式就不相同。")]),e("ul",[e("li",[e("strong",[v._v("方法1")]),v._v("：当页面的元素数小于"),e("code",[v._v("x")]),v._v("时，则认为页面白屏。比如“没有任何内容”，可以获取页面的"),e("code",[v._v("DOM")]),v._v("\n节点数，判断"),e("code",[v._v("DOM")]),v._v("节点数少于某个阈值"),e("code",[v._v("X")]),v._v("，则认为白屏。")]),e("li",[e("strong",[v._v("方法2")]),v._v("：当页面出现业务定义的错误码时，则认为是白屏。比如“网络或服务异常”。")]),e("li",[e("strong",[v._v("方法3")]),v._v("：当页面出现业务定义的特征值时，则认为是白屏。比如“数据加载中”。")])]),e("h2",{attrs:{id:"☆-cookie的作用和弊端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#☆-cookie的作用和弊端","aria-hidden":"true"}},[v._v("#")]),v._v(" ☆-Cookie的作用和弊端")]),e("h3",{attrs:{id:"cookie作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie作用","aria-hidden":"true"}},[v._v("#")]),v._v(" cookie作用")]),e("ul",[e("li",[e("p",[v._v("1.可以在客户端上保存用户数据，起到简单的缓存和用户身份识别等作用。")])]),e("li",[e("p",[v._v("2.保存用户的登陆状态，用户进行登陆，成功登陆后，服务器生成特定的cookie返回给客户端，客户端下次访问该域名下的任何页面，将该cookie的信息发送给服务器，服务器经过检验，来判断用户是否登陆。")])]),e("li",[e("p",[v._v("3.记录用户的行为。")])])]),e("h3",{attrs:{id:"cookie弊端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie弊端","aria-hidden":"true"}},[v._v("#")]),v._v(" cookie弊端")]),e("ul",[e("li",[v._v("1.增加流量消耗，每次请求都需要带上"),e("code",[v._v("cookie")]),v._v("信息。")]),e("li",[v._v("2.安全性隐患，"),e("code",[v._v("cookie")]),v._v("使用明文传输。如果"),e("code",[v._v("cookie")]),v._v("被人拦截了，那人就可以取得所有的"),e("code",[v._v("session")]),v._v("信息。")]),e("li",[v._v("3."),e("code",[v._v("Cookie")]),v._v("数量和长度的限制。每个"),e("code",[v._v("domain")]),v._v("最多只能有"),e("code",[v._v("20")]),v._v("条"),e("code",[v._v("cookie")]),v._v("，每个"),e("code",[v._v("cookie")]),v._v("长度不能超过"),e("code",[v._v("4KB")]),v._v("，否则会被截掉。")]),e("li",[v._v("4.缺乏数据操作接口，浏览器端获取和设置"),e("code",[v._v("cookie")]),v._v("只能通过"),e("code",[v._v("document.cookie")]),v._v("实现。")])]),e("h2",{attrs:{id:"♥-浏览器输入url到页面呈现出来的过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#♥-浏览器输入url到页面呈现出来的过程","aria-hidden":"true"}},[v._v("#")]),v._v(" ♥-浏览器输入url到页面呈现出来的过程")]),e("p",[e("img",{attrs:{src:o(169),alt:"img"}})]),e("ul",[e("li",[e("p",[e("strong",[v._v("1、输入 "),e("code",[v._v("url")]),v._v(" 后，首先需要找到这个 "),e("code",[v._v("url")]),v._v(" 域名的服务器 "),e("code",[v._v("ip")])]),v._v(",")]),e("ul",[e("li",[e("strong",[v._v("ip")]),v._v(" 查找过程：缓存 -> "),e("strong",[v._v("hosts")]),v._v(" -> "),e("strong",[v._v("DNS")]),e("ul",[e("li",[v._v("为了寻找这个 "),e("strong",[v._v("ip")]),v._v(" ，浏览器首先会寻找 "),e("strong",[v._v("缓存")]),v._v("，查看缓存中是否有记录，缓存的查找记录为：浏览器缓存 -》 系统缓存 -》 路由器缓存，")]),e("li",[v._v("缓存中没有则查找系统的 "),e("strong",[v._v("hosts")]),v._v(" 文件中是否有记录，")]),e("li",[v._v("如果没有则查询 "),e("strong",[v._v("DNS")]),v._v(" 服务器，")])])])])]),e("li",[e("p",[e("strong",[v._v("2、得到服务器的"),e("code",[v._v("ip")]),v._v("地址后，浏览器根据这个"),e("code",[v._v("ip")]),v._v("以及相应的端口号，构造一个 "),e("code",[v._v("http")]),v._v(" 请求，")])]),e("ul",[e("li",[v._v("这个"),e("strong",[v._v("请求报文")]),v._v("会包括这次请求的信息，\n"),e("ul",[e("li",[v._v("主要是请求方法，请求说明和请求附带的数据，")])])]),e("li",[v._v("并将这个 "),e("strong",[v._v("http")]),v._v(" 请求封装在一个 "),e("strong",[v._v("tcp")]),v._v(" 包中，\n"),e("ul",[e("li",[v._v("这个 "),e("strong",[v._v("tcp")]),v._v(" 包会依次经过传输层，网络层，数据链路层，物理层到达服务器，")])])])])]),e("li",[e("p",[e("strong",[v._v("3、服务器解析这个请求来作出响应，返回相应的 "),e("code",[v._v("html")]),v._v(" 给浏览器，")])]),e("ul",[e("li",[v._v("分析客户端请求")]),e("li",[v._v("根据分析结果处理业务逻辑")]),e("li",[v._v("响应处理结果，如返回相应的html")])])]),e("li",[e("p",[e("strong",[v._v("4、因为"),e("code",[v._v("html")]),v._v("是一个树形结构，浏览器根据这个"),e("code",[v._v("html")]),v._v("来构建 "),e("code",[v._v("DOM")]),v._v(" 树，")])]),e("ul",[e("li",[v._v("在 "),e("strong",[v._v("dom")]),v._v(" 树的构建过程中如果遇到 "),e("strong",[v._v("JS")]),v._v(" 脚本和外部 "),e("strong",[v._v("JS")]),v._v(" 连接，则会停止构建 "),e("strong",[v._v("DOM")]),v._v(" 树来执行和下载相应的代码，这会造成阻塞，")]),e("li",[v._v("这就是为什么推荐 "),e("strong",[v._v("JS")]),v._v(" 代码应该放在 "),e("strong",[v._v("html")]),v._v(" 代码的后面，")])])]),e("li",[e("p",[e("strong",[v._v("5、之后根据外部样式，内部样式，内联样式构建一个"),e("code",[v._v("CSS")]),v._v("对象模型树 "),e("code",[v._v("CSSOM")]),v._v(" 树，构建完成后和"),e("code",[v._v("DOM")]),v._v("树合并为渲染树，")])]),e("ul",[e("li",[v._v("这里主要做的是排除非视觉节点，比如 "),e("strong",[v._v("script")]),v._v("， "),e("strong",[v._v("meta")]),v._v(" 标签和排除 "),e("strong",[v._v("display")]),v._v(" 为 "),e("strong",[v._v("none")]),v._v(" 的节点，之后进行布局，")]),e("li",[v._v("布局主要是确定各个元素的位置和尺寸，")])])]),e("li",[e("p",[e("strong",[v._v("6、之后是渲染页面，")])]),e("ul",[e("li",[v._v("因为 "),e("strong",[v._v("html")]),v._v(" 文件中会含有图片，视频，音频等资源，")]),e("li",[v._v("在解析 "),e("strong",[v._v("DOM")]),v._v(" 的过程中，遇到这些都会进行并行下载，")]),e("li",[v._v("浏览器对每个域的并行下载数量有一定的限制，一般是 "),e("strong",[v._v("4-6")]),v._v(" 个，")])])]),e("li",[e("p",[e("strong",[v._v("7、当然在这些所有的请求中我们还需要关注的就是缓存，缓存一般通过 "),e("code",[v._v("Cache-Control")]),v._v("、"),e("code",[v._v("Last-Modify")]),v._v("、"),e("code",[v._v("Expires")]),v._v(" 等首部字段控制。")])]),e("ul",[e("li",[e("strong",[v._v("Cache-Control")]),v._v(" 和 "),e("strong",[v._v("Expires")]),v._v(" 的区别在于\n"),e("ul",[e("li",[e("strong",[v._v("Cache-Control")]),v._v(" 使用相对时间，")]),e("li",[e("strong",[v._v("Expires")]),v._v(" 使用的是基于服务器端的绝对时间，")])])]),e("li",[v._v("因为存在时差问题，一般采用 "),e("strong",[v._v("Cache-Control")]),v._v("，")])])]),e("li",[e("p",[e("strong",[v._v("8、在请求这些有设置了缓存的数据时，会先查看是否过期，")])]),e("ul",[e("li",[e("p",[v._v("如果没有过期则直接使用本地缓存，")])]),e("li",[e("p",[v._v("过期则请求并在服务器校验文件是否修改，")]),e("ul",[e("li",[v._v("如果上一次响应设置了 "),e("strong",[v._v("ETag")]),v._v(" 值，会在这次请求的时候作为 "),e("strong",[v._v("If-None-Match")]),v._v(" 的值交给服务器校验，")]),e("li",[v._v("如果一致，继续校验 "),e("strong",[v._v("Last-Modified")]),v._v("，没有设置 "),e("strong",[v._v("ETag")]),v._v(" 则直接验证 "),e("strong",[v._v("Last-Modified")]),v._v("，再决定是否返回 "),e("strong",[v._v("304")])])]),e("p",[e("img",{attrs:{src:o(168),alt:"img"}})])])])])])])}],t=o(1),i=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},e,!1,null,null,null);_.default=i.exports}}]);
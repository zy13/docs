(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{231:function(t,a,s){t.exports=s.p+"assets/img/14.59b6083b.png"},232:function(t,a,s){t.exports=s.p+"assets/img/13.0178e8c3.png"},233:function(t,a,s){t.exports=s.p+"assets/img/12.a5826b5c.png"},234:function(t,a,s){t.exports=s.p+"assets/img/11.8df5f0db.png"},235:function(t,a,s){t.exports=s.p+"assets/img/10.c31b9158.png"},236:function(t,a,s){t.exports=s.p+"assets/img/9-suzhu.drawio.a1d1c311.png"},348:function(t,a,s){"use strict";s.r(a);var n=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"_1、宿主环境概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、宿主环境概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、宿主环境概述")]),n("ul",[n("li",[t._v("宿主环境是微信客户端给小程序提供的一种环境")]),n("li",[t._v("宿主指的是微信客户端，即官方"),n("code",[t._v("API")]),t._v("中的"),n("code",[t._v("wx")]),t._v("对象")])]),n("h2",{attrs:{id:"_2、宿主环境的作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、宿主环境的作用","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、宿主环境的作用")]),n("ul",[n("li",[t._v("宿主环境把"),n("code",[t._v("wxml、wxss、json、js")]),t._v("等各种文件整合到一起，进行解析，然后在微信"),n("code",[t._v("APP")]),t._v(" 里显示")]),n("li",[t._v("宿主环境可以为小程序提供微信客户端的能力，比如微信扫码")])]),n("p",[n("img",{attrs:{src:s(236),alt:"img"}})]),n("h2",{attrs:{id:"_3、双线程下的界面渲染原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、双线程下的界面渲染原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、双线程下的界面渲染原理")]),n("ol",[n("li",[t._v("在渲染层，宿主环境会把"),n("code",[t._v("WXML")]),t._v("转化成对应的"),n("code",[t._v("JS")]),t._v("对象，也就是虚拟"),n("code",[t._v("Dom")]),t._v("。")]),n("li",[t._v("在逻辑层发生数据变更的时候，我们可以用"),n("code",[t._v("setData")]),t._v("方法把数据从逻辑层传递到渲染层。")]),n("li",[t._v("在渲染层对比虚拟"),n("code",[t._v("Dom")]),t._v("的前后差异，把差异应用在真实"),n("code",[t._v("Dom")]),t._v("上，渲染出正确的"),n("code",[t._v("UI")]),t._v("界面。")])]),n("p",[n("img",{attrs:{src:s(235),alt:"img"}})]),n("h2",{attrs:{id:"_4、wxml转化为虚拟dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、wxml转化为虚拟dom","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、WXML转化为虚拟DOM")]),n("ol",[n("li",[n("code",[t._v("WXML")]),t._v("结构实际上等价于一棵"),n("code",[t._v("Dom")]),t._v("树，即真实"),n("code",[t._v("Dom")]),t._v("。")]),n("li",[n("code",[t._v("JS")]),t._v("对象也可以来表达"),n("code",[t._v("Dom")]),t._v("树的结构，即虚拟"),n("code",[t._v("Dom")]),t._v("。")]),n("li",[t._v("一棵"),n("code",[t._v("DOM")]),t._v(" 树，可以用真实"),n("code",[t._v("Dom")]),t._v(" 来描述，也可以用虚拟"),n("code",[t._v("Dom")]),t._v(" 来描述。")])]),n("p",[n("img",{attrs:{src:s(234),alt:"img"}})]),n("h2",{attrs:{id:"_5、app构造器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、app构造器","aria-hidden":"true"}},[t._v("#")]),t._v(" 5、App构造器")]),n("p",[n("code",[t._v("App")]),t._v(" 是宿主环境提供的一个 "),n("code",[t._v("App()")]),t._v(" 构造器，用于注册一个程序"),n("code",[t._v("App")])]),n("ol",[n("li",[n("code",[t._v("App()")]),t._v(" 构造器必须写在项目根目录的"),n("code",[t._v("app.js")]),t._v("里。如："),n("code",[t._v("App({…})")])]),n("li",[n("code",[t._v("App")]),t._v("实例是单例对象，也是一个全局对象，就像网页里的"),n("code",[t._v("window")]),t._v("一样")]),n("li",[t._v("在其他"),n("code",[t._v("JS")]),t._v("脚本中可以使用宿主环境提供的 "),n("code",[t._v("getApp()")]),t._v(" 方法来获取"),n("code",[t._v("App")]),t._v(" 实例。利用"),n("code",[t._v("getApp()")]),t._v(" 我们可以将数据写入全局，或者从全局读取数据")])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("getApp")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalData"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("motto "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'好好学习'")]),t._v("\n")])])]),n("h2",{attrs:{id:"_5、点开微信小程序的一瞬间，微信客户端做了些什么？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、点开微信小程序的一瞬间，微信客户端做了些什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 5、点开微信小程序的一瞬间，微信客户端做了些什么？")]),n("p",[n("img",{attrs:{src:s(233),alt:"img"}})]),n("h2",{attrs:{id:"_6、小程序的后台状态和前台状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、小程序的后台状态和前台状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 6、小程序的后台状态和前台状态")]),n("ul",[n("li",[n("strong",[t._v("后台状态")]),t._v("：用户点击小程序右上角关闭按钮，或手机的"),n("code",[t._v("home")]),t._v(" 键时，会离开小程序，但小程序并不会被销毁，而是进入后台状态。此时，"),n("code",[t._v("APP")]),t._v("构造器参数里的"),n("code",[t._v("onHide")]),t._v(" 方法会被调用。")]),n("li",[n("strong",[t._v("前台状态")]),t._v("：用户再次进入小程序时，微信用户端会唤醒后台状态的微信小程序，微信小程序就进入了前台状态，"),n("code",[t._v("onShow")]),t._v(" 方法会被调用。")])]),n("p",[n("strong",[t._v("注意：App的生命周期是由用户操作主动触发的，开发者不能在代码里主动调用")])]),n("h2",{attrs:{id:"_6、页面构造器page"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、页面构造器page","aria-hidden":"true"}},[t._v("#")]),t._v(" 6、页面构造器Page()")]),n("ul",[n("li",[t._v("页面的"),n("code",[t._v("js")]),t._v(" 里的所有代码都是写在"),n("code",[t._v("Page()")]),t._v("构造器里的。")]),n("li",[n("code",[t._v("Page")]),t._v("构造器接受一个"),n("code",[t._v("Object")]),t._v("参数，在"),n("code",[t._v("Object")]),t._v("中可以绑定数据，监听页面事件")])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("Page")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"This is page data."')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  onLoad"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  onReady"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  onShow"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  onHide"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  onUnload"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  onPullDownRefresh"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  onReachBottom"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  onShareAppMessage"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  onPageScroll"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"_7、页面的生命周期-♥"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7、页面的生命周期-♥","aria-hidden":"true"}},[t._v("#")]),t._v(" 7、页面的生命周期 - ♥")]),n("p",[t._v("页面的生命周期首先要考虑三个事件：")]),n("ol",[n("li",[n("code",[t._v("onLoad")]),t._v("：页面初次加载时，在页面没被销毁之前只会触发"),n("code",[t._v("1")]),t._v("次")]),n("li",[n("code",[t._v("onShow")]),t._v(": 页面显示时，从别的页面返回到当前页面时，都会被调用")]),n("li",[n("code",[t._v("onReady")]),t._v(": 页面初次渲染完成时，在页面没被销毁前只会触发"),n("code",[t._v("1")]),t._v("次，在逻辑层可以和视图层进行交互")])]),n("p",[t._v("页面显示后，随着用户的操作，还会触发其它的事件：")]),n("ol",[n("li",[n("code",[t._v("onHide")]),t._v(": 页面不可见时，"),n("code",[t._v("wx.navigateTo")]),t._v("切换到其他页面、底部"),n("code",[t._v("tab")]),t._v("切换时触发")]),n("li",[n("code",[t._v("onUnload")]),t._v("：返回到其它页时，"),n("code",[t._v("wx.redirectTo")]),t._v("或"),n("code",[t._v("wx.navigateBack")]),t._v("使当前页面会被微信客户端销毁回收时触发")])]),n("h2",{attrs:{id:"_8、页面的用户行为"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8、页面的用户行为","aria-hidden":"true"}},[t._v("#")]),t._v(" 8、页面的用户行为")]),n("ol",[n("li",[n("code",[t._v("onPullDownRefresh")]),t._v(": 下拉刷新，监听用户下拉刷新事件，需要在全局或具体页面的"),n("code",[t._v("json")]),t._v(" 文件中配置"),n("code",[t._v("enablePullDownRefresh")]),t._v("为"),n("code",[t._v("true")])]),n("li",[n("code",[t._v("onReachBottom")]),t._v(": 上拉触底，监听用户上拉触底事件。可以在"),n("code",[t._v("app.json")]),t._v("的"),n("code",[t._v("window")]),t._v("选项中或页面配置"),n("code",[t._v("page.json")]),t._v("中设置触发距离"),n("code",[t._v("onReachBottomDistance")]),t._v("。在触发距离内滑动期间，本事件只会被触发一次。")]),n("li",[n("code",[t._v("onPageScroll")]),t._v(": 页面滚动，监听用户滑动页面事件，参数为 "),n("code",[t._v("Object")]),t._v("，包含 "),n("code",[t._v("scrollTop")]),t._v(" 字段，表示页面在垂直方向已滚动的距离（单位"),n("code",[t._v("px")]),t._v("）。")]),n("li",[n("code",[t._v("onShareAppMessage")]),t._v(": 用户转发，只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮，在用户点击转发按钮的时候会调用，此事件需要"),n("code",[t._v("return")]),t._v("一个"),n("code",[t._v("Object")]),t._v("，包含"),n("code",[t._v("title")]),t._v("和"),n("code",[t._v("path")]),t._v("两个字段，用于自定义转发内容")])]),n("h2",{attrs:{id:"_9、页面数据的注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9、页面数据的注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" 9、页面数据的注意事项")]),n("ul",[n("li",[t._v("用数据驱动视图渲染要用"),n("code",[t._v("this.setData()")]),t._v("，因为用"),n("code",[t._v("this.data")]),t._v("，不仅无法驱动视图，还会造成数据不一致。")]),n("li",[t._v("由于"),n("code",[t._v("setData")]),t._v("是两个线程间的通信，为了提高性能，每次设置的数据不应超过"),n("code",[t._v("1024KB")]),t._v(" 。")]),n("li",[t._v("不要把"),n("code",[t._v("data")]),t._v("中的任意一项的"),n("code",[t._v("value")]),t._v("设为"),n("code",[t._v("undefined")]),t._v("，否则可能会有引起一些不可预料的"),n("code",[t._v("bug")]),t._v("。")])]),n("h2",{attrs:{id:"_10、页面跳转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10、页面跳转","aria-hidden":"true"}},[t._v("#")]),t._v(" 10、页面跳转")]),n("p",[t._v("页面跳转的方式有很多种")]),n("ul",[n("li",[t._v("在"),n("code",[t._v("app.json")]),t._v(" 中用"),n("code",[t._v("tabBar")]),t._v(" 属性设置跳转方式")]),n("li",[t._v("在"),n("code",[t._v("wxml")]),t._v(" 页使用导航组件 "),n("code",[t._v("<navigator>")]),t._v(" 跳转页面")]),n("li",[t._v("在"),n("code",[t._v("js")]),t._v(" 中用路由"),n("code",[t._v("API")]),t._v("跳转")])]),n("h2",{attrs:{id:"_11、运行js时要留心异步事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11、运行js时要留心异步事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 11、运行js时要留心异步事件")]),n("ul",[n("li",[t._v("小程序只有一个"),n("code",[t._v("JSCode")]),t._v(" 线程，页面有多个。")]),n("li",[t._v("小程序切换页面时，小程序的逻辑层依旧运行在同一个"),n("code",[t._v("JsCore")]),t._v("线程中。")]),n("li",[t._v("页面使用了"),n("code",[t._v("setTimeout")]),t._v("或者"),n("code",[t._v("setInterval")]),t._v("的定时器后，跳转到其他页面时，这些定时器并没有被清除，需要开发者自己在页面离开的时候进行清理。")])]),n("h2",{attrs:{id:"_12、组件-自定义组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12、组件-自定义组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 12、组件 & 自定义组件")]),n("ul",[n("li",[t._v("一个小程序的页面是由多个组件组成的。")]),n("li",[t._v("小程序的宿主环境提供了一系列基础组件，如"),n("code",[t._v("view")]),t._v("、"),n("code",[t._v("text")]),t._v("。")]),n("li",[t._v("但有的时候，我们还需要自定义组件。")]),n("li",[t._v("自定义组件的名称要小写："),n("code",[t._v("<kkb-image></kkb-image>")])])]),n("h3",{attrs:{id:"自定义组件的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件的方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义组件的方法")]),n("ol",[n("li",[t._v("在主项目下建立"),n("code",[t._v("components")]),t._v(" 文件夹，在其中建立"),n("code",[t._v("floatball")]),t._v(" 文件夹，在此文件夹上右击“新建 "),n("code",[t._v("Component")]),t._v("”，这样就可以建立出"),n("code",[t._v("json、wxml、wxss、js")]),t._v(" 四个文件")]),n("li",[t._v("组件的"),n("code",[t._v("json")]),t._v("中设置 "),n("code",[t._v('"component": true')])]),n("li",[t._v("组件的"),n("code",[t._v("wxml、wxss")]),t._v("可以正常写")]),n("li",[t._v("组件的"),n("code",[t._v("js")]),t._v("中的"),n("code",[t._v("properties")]),t._v(" 可以接受父组件属性")]),n("li",[t._v("父组件在调用子组件时要在其"),n("code",[t._v("json")]),t._v(" 文件中设置"),n("code",[t._v("usingComponents")]),t._v("，如：")])]),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{attrs:{class:"token property"}},[t._v('"usingComponents"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v('"floatball"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"/components/floatball/floatball"')]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"_13、父子组件的数据传递"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_13、父子组件的数据传递","aria-hidden":"true"}},[t._v("#")]),t._v(" 13、父子组件的数据传递")]),n("ol",[n("li",[t._v("父组件向子组件传递数据：属性")])]),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 父组件 wxml --\x3e")]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("floatball")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("text")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("开课吧"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("floatball")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 子组件 js")]),t._v("\nproperties"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'string'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'悬浮球'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("子组件向父组件传递数据：事件")])]),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 在父组件调用子组件时，为其绑定事件 --\x3e")]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("floatball")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[n("span",{attrs:{class:"token namespace"}},[t._v("bind:")]),t._v("tapBall")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tapBall"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("floatball")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("建议"),n("code",[t._v("onClickBall")]),t._v(" 的属性名和属性值都写成一样，免得把“在父组件中使用属性值，在子组件中触发属性名”记混了。\n在子组件中触发事件的方法是  "),n("code",[t._v("triggerEvent(eventName, detail)")]),t._v("，如"),n("code",[t._v("this.triggerEvent('tapBall',{tap:true})")])]),n("h2",{attrs:{id:"_14、api-api的常见规律"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_14、api-api的常见规律","aria-hidden":"true"}},[t._v("#")]),t._v(" 14、API & API的常见规律")]),n("ul",[n("li",[t._v("宿主环境提供了丰富的API，几乎所有小程序的"),n("code",[t._v("API")]),t._v("都挂载在"),n("code",[t._v("wx")]),t._v("对象底下（除了"),n("code",[t._v("App/Page")]),t._v("等特殊的构造器）")]),n("li",[t._v("小程序提供的"),n("code",[t._v("API")]),t._v("按照功能主要分为：网络、媒体、文件、数据缓存、位置、设备、界面、界面节点信息、特殊的开放接口")])]),n("h3",{attrs:{id:"api的常见规律"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api的常见规律","aria-hidden":"true"}},[t._v("#")]),t._v(" API的常见规律")]),n("ol",[n("li",[n("code",[t._v("wx.on*")]),t._v("开头的 "),n("code",[t._v("API")]),t._v(" 是监听某个事件发生的"),n("code",[t._v("API")]),t._v("接口，接受一个 "),n("code",[t._v("Callback")]),t._v(" 函数作为参数。当该事件触发时，会调用 "),n("code",[t._v("Callback")]),t._v(" 函数。如"),n("code",[t._v("wx.onError()")])]),n("li",[t._v("后缀带"),n("code",[t._v("Sync")]),t._v(" 的方法是同步的方法。如"),n("code",[t._v("wx.getSystemInfoSync()")])]),n("li",[t._v("如未特殊约定，多数 "),n("code",[t._v("API")]),t._v(" 接口为异步接口 ，都接受一个"),n("code",[t._v("Object")]),t._v("作为参数。如"),n("code",[t._v("wx.getSystemInfo()")])]),n("li",[n("code",[t._v("API")]),t._v("的"),n("code",[t._v("Object")]),t._v("参数一般由"),n("code",[t._v("success")]),t._v("、"),n("code",[t._v("fail")]),t._v("、"),n("code",[t._v("complete")]),t._v(" 来接收请求结果的。如"),n("code",[t._v("request")]),t._v(" 接口")]),n("li",[n("code",[t._v("wx.get*")]),t._v(" 开头的"),n("code",[t._v("API")]),t._v("是获取宿主环境数据的接口。如"),n("code",[t._v("wx.getSystemInfo()")])]),n("li",[n("code",[t._v("wx.set*")]),t._v(" 开头的"),n("code",[t._v("API")]),t._v("是写入数据到宿主环境的接口。如"),n("code",[t._v("wx.setNavigationBarTitle(Object object)")])])]),n("h2",{attrs:{id:"_15、用户在渲染层的行为反馈事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_15、用户在渲染层的行为反馈事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 15、用户在渲染层的行为反馈事件")]),n("p",[n("img",{attrs:{src:s(232),alt:"img"}})]),n("h2",{attrs:{id:"_16、事件捕捉和事件冒泡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_16、事件捕捉和事件冒泡","aria-hidden":"true"}},[t._v("#")]),t._v(" 16、事件捕捉和事件冒泡")]),n("ul",[n("li",[n("code",[t._v("bind")]),t._v("前加上"),n("code",[t._v("capture-")]),t._v(" 表示事件捕捉，如"),n("code",[t._v("capture-bind:tap")])]),n("li",[t._v("若不加前缀，"),n("code",[t._v("bind:tap")]),t._v(" 和"),n("code",[t._v("bindtap")]),t._v("是一回事。")])]),n("p",[n("img",{attrs:{src:s(231),alt:"img"}})]),n("h3",{attrs:{id:"事件冒泡和事件捕捉的差异"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件冒泡和事件捕捉的差异","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件冒泡和事件捕捉的差异")]),n("p",[t._v("在"),n("code",[t._v("wxml")]),t._v(" 里建立两个容器对象，里面分别包裹着两个子元素。为容器和子元素添加触摸方法：")]),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("bindtap")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tabWrapper"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("bindtap")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tabText"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("事件冒泡"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[n("span",{attrs:{class:"token namespace"}},[t._v("capture-bind:")]),t._v("tap")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tabWrapper"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("bindtap")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tabText"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("事件捕捉"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[n("code",[t._v("js")]),t._v(" 中的触摸方法")]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("tabWrapper")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'wrapper'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("tabText")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'text'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}],o=s(1),e=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);a.default=e.exports}}]);
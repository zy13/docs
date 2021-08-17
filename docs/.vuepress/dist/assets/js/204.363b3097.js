(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{489:function(a,t,e){"use strict";e.r(t);var r=e(1),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h2",{attrs:{id:"渲染引擎及网页渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎及网页渲染","aria-hidden":"true"}},[a._v("#")]),a._v(" 渲染引擎及网页渲染")]),e("h3",{attrs:{id:"渲染引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎","aria-hidden":"true"}},[a._v("#")]),a._v(" 渲染引擎")]),e("blockquote",[e("p",[a._v("定义： 将资源文件转化为用户可见的结果")])]),e("h3",{attrs:{id:"渲染引擎的类别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎的类别","aria-hidden":"true"}},[a._v("#")]),a._v(" 渲染引擎的类别")]),e("blockquote",[e("p",[a._v("Tridend(IE)、Gecko(FF)、Webkit(Safari, Chrome, Android浏览器)等")])]),e("h3",{attrs:{id:"网页渲染的流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网页渲染的流程","aria-hidden":"true"}},[a._v("#")]),a._v(" 网页渲染的流程")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("从输入URL到生成DOM树\n1、输入url, webkit调用资源加载器加载相应资源\n2、加载器依赖网络模块建立连接，发送请求并接收答复\n3、webkit接收各种网页或者资源数据，其中某些资源可能同步或者异步获取\n4、网页交给html解析器转变为词语\n5、解析器根据词语构成节点，形成DOM树\n6、如果节点是JavaScript代码，调用JavaScript引擎解析并执行\n7、JavaScript代码可能会修复DOM树结构\n8、如果节点是其它资源，比如图片、css、视频等，资源加载器会异步加载它们，不阻碍DOM树继续构建；如果节点是JavaScript资源url(没有标记异步方式)，则需要停止当前DOM树创建，直到JavaScript加载并被JavaScript引擎执行后，才继续DOM树的创建\n\n从DOM树到webkit绘画上下文\n1、CSS文件被CSS解释器解释为内部表示\n2、CSS解释器解释完成后，会在DOM树添加附加信息，形成RenderObject树\n3、RenderObject节点构建的同时，webkit会根据网页结构构建RenderLayer树，同时构建一个虚拟绘画上下文\n\n从绘图上下文到最终的图像呈现\n1、绘图上下文是一个跟平台无关的抽象类，它将每一个绘图操作桥接到不同的具体实现类，也就是绘图具体实现类；\n2、绘图实现类有可能是简单的实现类，也有可能是复杂的实现类，软件渲染、硬件渲染、合成渲染等；\n3、绘图实现类将2D图形库或者3D图形库绘制结果保存，交给浏览器界面进行展示。\n")])])]),e("h3",{attrs:{id:"javascript引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript引擎","aria-hidden":"true"}},[a._v("#")]),a._v(" JavaScript引擎")]),e("blockquote",[e("p",[a._v("编程语言分为解释型语言和解释型语言：编译型语言先编译后执行；解释型语言边解释边编译。前者执行速度要比后者快。")])])])}],!1,null,null,null);t.default=n.exports}}]);
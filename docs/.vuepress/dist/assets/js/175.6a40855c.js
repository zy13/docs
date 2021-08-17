(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{330:function(t,e,a){t.exports=a.p+"assets/img/webpack-error1.30e1e97f.png"},331:function(t,e,a){t.exports=a.p+"assets/img/webpack-cli-i.6963a548.png"},445:function(t,e,a){"use strict";a.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"webpack-v4-16-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-v4-16-4","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack v4.16.4")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"环境准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境准备","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境准备")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("新建"),s("code",[t._v("webpack-study")]),t._v("文件夹")]),s("li",[t._v("命令行生成"),s("code",[t._v("package.json")]),t._v("文件: "),s("code",[t._v("npm init")])]),s("li",[t._v("开发环境安装"),s("code",[t._v("webpack")]),t._v("、"),s("code",[t._v("webpack-cli")]),t._v("、"),s("code",[t._v("webpack-dev-server")]),t._v(": npm i --save-dev webpack webpack-cli webpack-dev-server, 期中：\n"),s("ul",[s("li",[s("p",[t._v("webpack用于构建打包压缩并输出静态资源")])]),s("li",[s("p",[t._v("webpack-dev-server在开发过程中监听文件变化，在内存中构建编译资源文件，并不输出打包压缩好的文件")])]),s("li",[s("p",[t._v("当webpack有配置文件时，例如"),s("code",[t._v("webpack --config=config/webpack.dev.js")]),t._v("会报错:")]),s("p",[s("img",{attrs:{src:a(331),alt:"avatar"}})]),s("p",[t._v("此时必须安装webpack-cli，webpack才能通过配置文件构建打包压缩静态资源文件")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"webpack打包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack打包")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[t._v("终端直接输入"),s("code",[t._v("webpack")]),t._v("命令行会报错")]),s("p",[s("img",{attrs:{src:a(330),alt:"avatar"}})]),s("p",[t._v("因为webpack命令默认打包src下的index.js文件, 且默认输出dist/main.js, 如果没有src/index.js则会报错")])]),s("li",[s("p",[t._v("命令行新建"),s("code",[t._v("src")]),t._v("文件夹："),s("code",[t._v("md src")]),t._v(" 或者 "),s("code",[t._v("mkdir src")])]),s("ul",[s("li",[t._v("删除文件命令："),s("code",[t._v("rd src")]),t._v(" 或者 "),s("code",[t._v("rmdir src")])])])]),s("li",[s("p",[t._v("src文件夹下新建index.js文件")])]),s("li",[s("p",[t._v("终端输入"),s("code",[t._v("webpack")]),t._v("命令，可生成压缩好的静态资源："),s("code",[t._v("dist/main.js")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置文件")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    main"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./src/index.js'")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("config文件夹下，entry打包入口的路劲为什么是"),e("code",[this._v("'./src/index.js'")]),this._v("呢？因为配置文件是相对于跟目录而言的，只有使用相对路径")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'path'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'../dist'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'[name].js'")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],n=a(1),r=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/webpack/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack2/3最优化配置"),a("OutboundLink")],1),a("a",{attrs:{href:"https://medium.com/webpack/webpack-4-released-today-6cdb994702d4",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack4最优化配置"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.webpackjs.com/guides/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack使用指南"),a("OutboundLink")],1)]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.webpackjs.com/concepts/entry-points/#%E5%8D%95%E4%B8%AA%E5%85%A5%E5%8F%A3-%E7%AE%80%E5%86%99-%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("entry入口"),a("OutboundLink")],1)]),t._m(6),t._m(7)]),a("li",[a("p",[a("a",{attrs:{href:"https://www.webpackjs.com/concepts/output/",target:"_blank",rel:"noopener noreferrer"}},[t._v("output输出"),a("OutboundLink")],1)]),t._m(8),a("p",[t._v("[name]是以文件名命名压缩文件名称")])])]),a("p",[t._v("参考链接：")]),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/6712e4e4b8fe",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack4.x入门配置"),a("OutboundLink")],1),a("br"),a("a",{attrs:{href:"https://juejin.im/post/5b2b9a00e51d45587b48075e",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack4.x 入门一篇足矣"),a("OutboundLink")],1)])])},s,!1,null,null,null);e.default=r.exports}}]);
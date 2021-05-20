(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{358:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"webpack代码切割"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack代码切割","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack代码切割")]),a("h3",{attrs:{id:"作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用","aria-hidden":"true"}},[t._v("#")]),t._v(" 作用")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("代码切割器...\n")])])]),a("h3",{attrs:{id:"默认配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认配置项","aria-hidden":"true"}},[t._v("#")]),t._v(" 默认配置项")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("splitChunks"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chunks"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"async"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  minSize"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("30000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  minChunks"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  maxAsyncRequests"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  maxInitialRequests"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  automaticNameDelimiter"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'~'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cacheGroups"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vendors"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/[\\\\/]node_modules[\\\\/]/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      priority"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      minChunks"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      priority"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      reuseExistingChunk"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("chunks：'async'|'initial'|'all'。asyn是针对异步加载做切割，initial是针对初始chunk, all是针对所有chunk")]),a("li",[t._v("minSize：我们切割完要生成的新chunk要>30kb，否则不生成新的chunk")]),a("li",[t._v("minChunks：共享该module的最小chunk数")]),a("li",[t._v("maxAsyncRequests：最多有五个异步加载请求该module")]),a("li",[t._v("maxInitialRequests：初始化的时候最多有三个请求该module")]),a("li",[t._v("automaticNameDelimiter：名字中间的间隔符")]),a("li",[t._v("name：chunk的名字，如果被设为true，会根据被提取的chunk自动生成")]),a("li",[t._v("cacheGroups：重点掌握，要切割成的每一个新chunk就是一个cache group\n"),a("ul",[a("li",[t._v("test")]),a("li",[t._v("priority")])])])])])}],!1,null,null,null);s.default=e.exports}}]);
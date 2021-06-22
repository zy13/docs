(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{390:function(t,s,a){"use strict";a.r(s);var n=a(1),o=Object(n.a)({},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[s("p",[this._v("a## 1、window.requestAnimationFrame - 执行网页动画 - 重流和重绘")]),s("ul",[s("li",[s("router-link",{attrs:{to:"./2-window.html#_3-10-window-requestanimationframe-♥"}},[this._v("window.requestAnimationFrame")])],1),s("li",[s("router-link",{attrs:{to:'./1-intro.html#__3-2-重流和重绘-♥"'}},[this._v("重流和重绘")])],1)]),this._m(0),this._m(1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("模块平滑向右移动端的例子")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n  "),a("span",{attrs:{class:"token selector"}},[t._v("#animation")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("background-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("animation"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" animation "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#animation'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  animation"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'absolute'")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" start "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 记录性能测量开始时间 - 即网页加载的开始时间")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("step")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timestamp"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// timestamp（毫秒）：系统传入的高精度时间戳-performance.now()")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("start"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" start "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" timestamp\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" progress "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" timestamp "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" start "),a("span",{attrs:{class:"token comment"}},[t._v("// 动画执行时长")]),t._v("\n    animation"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Matn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("min")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("progress"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'px'")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 元素不断右移，移动不超过200px")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("progress "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 移动时长不超过2秒")]),t._v("\n      window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 继续向右移动元素")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 推迟step的执行，推迟到浏览器下一次重流时执行，执行完才会进行下一次重绘。")]),t._v("\n  window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])}],!1,null,null,null);s.default=o.exports}}]);
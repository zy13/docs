(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{521:function(t,a,s){"use strict";s.r(a);var n=s(1),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h3",{attrs:{id:"apply与call的异同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apply与call的异同","aria-hidden":"true"}},[t._v("#")]),t._v(" apply与call的异同")]),s("p",[t._v("每一个Function对象都有一个call与apply方法，语法分别为：")]),s("ul",[s("li",[t._v("function.apply(thisObj[,argArray])")]),s("li",[t._v("function.call(thisObj[,arg1[,arg2[,...argN]]])")])]),s("h4",{attrs:{id:"相同之处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相同之处","aria-hidden":"true"}},[t._v("#")]),t._v(" 相同之处")]),s("p",[t._v("apply与call均是调用一个对象的一个方法，用另一个对象替换当前对象。例如：")]),s("ul",[s("li",[t._v("B.apply(A, arguments)，A对象调用B对象的方法")]),s("li",[t._v("B.call(A, args1, args2)，A对象调用B对象的方法")])]),s("h4",{attrs:{id:"不同之处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同之处","aria-hidden":"true"}},[t._v("#")]),t._v(" 不同之处")]),s("p",[t._v("apply和call的主要不同之处在于它们的参数个数不一样")]),s("ul",[s("li",[s("code",[t._v("apply")]),t._v("最多只有两个参数，一个新的thisObj对象以及一个数组argArray")]),s("li",[s("code",[t._v("call")]),t._v("可以接受很多个参数，第一个参数和apply一样，后面则是一串参数列表。")])]),s("h4",{attrs:{id:"基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本用法")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("add")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("b\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("sub")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("b\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b1 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" add"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("apply")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b2 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" sub"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("apply")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// call的用法")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a1 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" add"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("call")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sub"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"实现继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现继承")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("Animal")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("showName")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("Cat")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Animal"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("apply")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cat "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Cat")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'鸟'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncat"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("showName")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}],!1,null,null,null);a.default=o.exports}}]);
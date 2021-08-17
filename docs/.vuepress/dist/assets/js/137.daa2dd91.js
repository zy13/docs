(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{389:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[s("p",[s("a",{attrs:{href:"https://www.wangdoc.com/javascript/oop/prototype.html#instanceof-%E8%BF%90%E7%AE%97%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[this._v("instanceof 运算符"),s("OutboundLink")],1)]),this._m(0),this._m(1),this._m(2),this._m(3)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1、概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、概述","aria-hidden":"true"}},[this._v("#")]),this._v(" 1、概述")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("instanceof")]),this._v("运算符返回一个布尔值，表示"),s("strong",[this._v("对象是否为某个构造函数的实例")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("instanceof")]),t._v("运算符的"),a("strong",[t._v("左边是实例对象，右边是构造函数")]),t._v("。")]),a("li",[t._v("它的"),a("strong",[t._v("原理是，检查右边构造函数的原型对象（"),a("code",[t._v("prototype")]),t._v("），是否在左边对象的原型链上。")])]),a("li",[a("code",[t._v("isPrototypeOf()")]),t._v("方法是 "),a("code",[t._v("JavaScript")]),t._v(" 提供的原生方法，用于检查"),a("strong",[t._v("某个对象是否为另一个对象的原型。"),a("code",[t._v("instanceof")]),t._v("运算符只能用于对象，不适用原始类型的值")])]),a("li",[t._v("由于"),a("code",[t._v("instanceof")]),t._v("检查整个原型链，因此同一个实例对象，可能会对多个构造函数都返回"),a("code",[t._v("true")])]),a("li",[t._v("由于任意对象（除了"),a("code",[t._v("null")]),t._v("）都是"),a("code",[t._v("Object")]),t._v("的实例，所以"),a("code",[t._v("instanceof")]),t._v("运算符可以判断一个值是否为非"),a("code",[t._v("null")]),t._v("的对象。"),a("strong",[t._v("这是唯一的instanceof运算符判断会失真的情况（一个对象的原型是null）")])]),a("li",[a("strong",[t._v("instanceof运算符的一个用处，是判断值的类型。")])]),a("li",[t._v("利用"),a("code",[t._v("instanceof")]),t._v("运算符，还可以巧妙地解决，调用构造函数时，忘了加"),a("code",[t._v("new")]),t._v("命令的问题。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 对象v是构造函数Vehicle的实例，所以返回true")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vehicle")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nv "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vehicle")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 等同于")]),t._v("\nVehicle"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("isPrototypeOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// d同时是Date和Object的实例，因此对这两个构造函数都返回true。")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nd "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nd "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Object.create(null)返回一个新对象obj，它的原型是null")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 右边的构造函数Object的prototype属性，不在左边的原型链上，")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 因此instanceof就认为obj不是Object的实例")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// instanceof运算符判断，变量x是数组，变量y是对象。")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// instanceof运算符只能用于对象，不适用原始类型的值")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nx "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Array")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\ny "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 字符串不是String对象的实例（因为字符串不是对象），所以返回false。")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ns "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 对于undefined和null，instanceof运算符总是返回false")]),t._v("\nundefined "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 使用instanceof运算符，在函数体内部判断this关键字是否为构造函数Fubar的实例。")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 如果不是，就表明忘了加new命令。")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Fubar")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Fubar")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Fubar")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);
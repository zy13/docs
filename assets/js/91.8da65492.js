(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{311:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[a("a",{attrs:{href:"https://www.wangdoc.com/javascript/stdlib/wrapper.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("包装对象"),a("OutboundLink")],1)]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),a("p",[t._v("除了原生的实例方法，包装对象还可以自定义方法和属性，供原始类型的值直接调用。")]),t._m(19)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1、定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、定义","aria-hidden":"true"}},[this._v("#")]),this._v(" 1、定义")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("对象是 "),s("code",[this._v("JavaScript")]),this._v(" 语言最主要的数据类型，三种原始类型的值——数值、字符串、布尔值——在一定条件下，也会自动转为对象，也就是原始类型的“"),s("strong",[this._v("包装对象")]),this._v("”（"),s("code",[this._v("wrapper")]),this._v("）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("所谓“"),s("strong",[this._v("包装对象")]),this._v("”，指的是"),s("strong",[this._v("与数值、字符串、布尔值分别相对应的Number、String、Boolean三个原生对象")]),this._v("。这三个原生对象可以把原始类型的值变成（包装成）对象。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 基于原始类型的值，生成了三个对应的包装对象")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// v1、v2、v3都是对象，且与对应的简单类型值不相等。")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Number")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v3 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Boolean")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" v1 "),a("span",{attrs:{class:"token comment"}},[t._v('// "object"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" v2 "),a("span",{attrs:{class:"token comment"}},[t._v('// "object"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" v3 "),a("span",{attrs:{class:"token comment"}},[t._v('// "object"')]),t._v("\n\nv1 "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nv2 "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'abc'")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nv3 "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("包装对象的设计"),s("strong",[this._v("目的")]),this._v("，")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("首先是使得“对象”这种类型可以覆盖 "),s("code",[this._v("JavaScript")]),this._v(" 所有的值，整门语言有一个通用的数据模型，")]),s("li",[this._v("其次是使得原始类型的值也有办法调用自己的方法。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("Number")]),t._v("、"),a("code",[t._v("String")]),t._v("和"),a("code",[t._v("Boolean")]),t._v("这"),a("strong",[t._v("三个原生对象")]),t._v("，如果不作为构造函数调用（即调用时不加"),a("code",[t._v("new")]),t._v("），而是作为普通函数调用，"),a("strong",[t._v("常常用于将任意类型的值转为数值、字符串和布尔值")]),t._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("这三个对象作为构造函数使用（带有"),a("code",[t._v("new")]),t._v("）时，可以"),a("strong",[t._v("将原始类型的值转为对象")]),t._v("。")]),a("li",[t._v("作为普通函数使用时（不带有"),a("code",[t._v("new")]),t._v("），可以"),a("strong",[t._v("将任意类型的值，转为原始类型的值")]),t._v("。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 字符串转为数值")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("Number")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'123'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 数值转为字符串")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("String")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// "123"')]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 数值转为布尔值")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("Boolean")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2、实例方法-valueof-，tostring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、实例方法-valueof-，tostring","aria-hidden":"true"}},[this._v("#")]),this._v(" 2、实例方法 - valueOf()，toString()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("valueOf()")]),this._v("方法返回"),s("strong",[this._v("包装对象实例对应的原始类型的值")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 返回包装对象实例")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 对应于的原始数据类型的值")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Number")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// "abc"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Boolean")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("toString()")]),this._v("方法返回对应的"),s("strong",[this._v("字符串形式")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 返回字符串")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Number")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// "123"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// "abc"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Boolean")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// "true"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3、原始类型与实例对象的自动转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、原始类型与实例对象的自动转换","aria-hidden":"true"}},[this._v("#")]),this._v(" 3、原始类型与实例对象的自动转换")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("某些场合，原始类型的值会自动当作包装对象调用，即调用包装对象的属性和方法。\n这时，"),s("code",[this._v("JavaScript")]),this._v(" 引擎会自动将原始类型的值转为包装对象实例，并在"),s("strong",[this._v("使用后立刻销毁实例")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 字符串可以调用length属性，返回字符串的长度。")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// abc是一个字符串，本身不是对象，不能调用length属性")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// JavaScript 引擎自动将其转为包装对象，在这个对象上调用length属性")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 调用结束后，这个临时对象就会被销毁")]),t._v("\n"),a("span",{attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 字符串abc的包装对象提供了多个属性，length只是其中之一")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 等同于")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" strObj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// String {")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('//   0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"')]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// }")]),t._v("\nstrObj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 自动转换生成的包装对象是只读的，无法修改")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 所以，字符串无法添加新属性")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 为字符串s添加了一个x属性，结果无效，总是返回undefined")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello World'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("另一方面，"),s("strong",[this._v("调用结束后，包装对象实例会自动销毁")]),this._v("。这意味着，下一次调用字符串的属性时，实际是调用一个新生成的对象，而不是上一次调用时生成的那个对象，所以取不到赋值在上一个对象的属性。"),s("strong",[this._v("如果要为字符串添加属性，只有在它的原型对象"),s("code",[this._v("String.prototype")]),this._v("上定义")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4、自定义方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、自定义方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 4、自定义方法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 新增一个double方法，使得字符串和数字翻倍。")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 在String和Number这两个对象的原型上面，分别自定义了一个方法，从而可以在所有实例对象上调用。")]),t._v("\nString"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("double")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("double")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// abcabc")]),t._v("\n\nNumber"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("double")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 123外面必须要加上圆括号，否则后面的点运算符（.）会被解释成小数点。")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("double")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 246")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);
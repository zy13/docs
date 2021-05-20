(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{378:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[a("a",{attrs:{href:"https://www.wangdoc.com/javascript/bom/storage.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Storage 接口"),a("OutboundLink")],1)]),t._m(0),t._m(1),t._m(2),t._m(3),a("p",[t._v("保存的数据都以“键值对”的形式存在。也就是说，每一项数据都有一个键名和对应的值。所有的数据都是以文本格式保存。")]),t._m(4),t._m(5),t._m(6),t._m(7),a("p",[t._v("Storage 接口只有一个属性。")]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),a("p",[t._v("写入不一定要用这个方法，直接赋值也是可以的。")]),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1、概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、概述","aria-hidden":"true"}},[this._v("#")]),this._v(" 1、概述")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Storage")]),this._v(" 接口用于脚本在浏览器保存数据。两个对象部署了这个接口："),s("code",[this._v("window.sessionStorage")]),this._v("和"),s("code",[this._v("window.localStorage")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"sessionstorage与localstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage与localstorage","aria-hidden":"true"}},[this._v("#")]),this._v(" sessionStorage与localStorage")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("sessionStorage")]),this._v("保存的数据用于浏览器的一次会话（"),s("code",[this._v("session")]),this._v("），当会话结束（通常是窗口关闭），数据被清空；")]),s("li",[s("code",[this._v("localStorage")]),this._v("保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。")]),s("li",[this._v("除了保存期限的长短不同，这两个对象的其他方面都一致。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这个接口很像 "),s("code",[this._v("Cookie")]),this._v(" 的强化版，能够使用大得多的存储空间。目前，每个域名的存储上限视浏览器而定，")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("Chrome")]),t._v(" 是 "),a("code",[t._v("2.5MB")]),t._v("，")]),a("li",[a("code",[t._v("Firefox")]),t._v(" 和 "),a("code",[t._v("Opera")]),t._v(" 是 "),a("code",[t._v("5MB")]),t._v("，")]),a("li",[a("code",[t._v("IE")]),t._v(" 是 "),a("code",[t._v("10MB")]),t._v("。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("其中 "),a("code",[t._v("Firefox")]),t._v(" 的存储空间由一级域名决定，而其他浏览器没有这个限制。也就是说，"),a("code",[t._v("Firefox")]),t._v(" 中，"),a("code",[t._v("a.example.com")]),t._v("和"),a("code",[t._v("b.example.com")]),t._v("共享 "),a("code",[t._v("5MB")]),t._v(" 的存储空间。另外，与 "),a("code",[t._v("Cookie")]),t._v(" 一样，它们也受同域限制。某个网页存入的数据，只有同域下的网页才能读取，如果跨域操作会报错。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2、storage-length属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、storage-length属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 2、Storage.length属性")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Storage.length：返回保存的数据项个数。")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'a'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'b'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'baz'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'c'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3、storage-setitem-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、storage-setitem-方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 3、Storage.setItem()方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Storage.setItem()")]),this._v("方法用于存入数据。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("它接受两个参数，\n"),s("ul",[s("li",[this._v("第一个是键名，")]),s("li",[this._v("第二个是保存的数据。")])])]),s("li",[this._v("如果键名已经存在，该方法会更新已有的键值。")]),s("li",[this._v("该方法没有返回值。")]),s("li",[this._v("如果储存空间已满，该方法会抛错。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Storage.setItem()两个参数都是字符串。如果不是字符串，会自动转成字符串，再存入浏览器。")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'key'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'value'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'key'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'value'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// setItem方法的两个参数都不是字符串，但是存入的值都是字符串。")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'3'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// "[object Object]"')]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 下面三种写法等价")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'123'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'123'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'123'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4、storage-getitem-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、storage-getitem-方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 4、Storage.getItem()方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Storage.getItem()")]),this._v("方法用于读取数据。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("它只有一个参数，就是键名。")]),s("li",[this._v("如果键名不存在，该方法返回"),s("code",[this._v("null")]),this._v("。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 键名应该是一个字符串，否则会被自动转为字符串。")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'key'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'key'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_5、storage-removeitem-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、storage-removeitem-方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 5、Storage.removeItem()方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Storage.removeItem()")]),this._v("方法用于清除某个键名对应的键值。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("它接受键名作为参数，")]),s("li",[this._v("如果键名不存在，该方法不会做任何事情。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("sessionStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("removeItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'key'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocalStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("removeItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'key'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_6、storage-clear-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、storage-clear-方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 6、Storage.clear()方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Storage.clear()")]),this._v("方法用于"),s("strong",[this._v("清除所有保存的数据")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("该方法的返回值是"),s("code",[this._v("undefined")]),this._v("。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("clear")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("clear")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_7、storage-key-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、storage-key-方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 7、Storage.key()方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Storage.key()")]),this._v("方法接受一个整数作为参数（从零开始），返回该位置对应的键名。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'key'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'value'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("key")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// "key"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("结合使用"),s("code",[this._v("Storage.length")]),this._v("属性和"),s("code",[this._v("Storage.key()")]),this._v("方法，可以遍历所有的键。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("key")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_8、storage-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、storage-事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 8、storage 事件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Storage")]),this._v(" 接口储存的数据发生变化时，会触发 "),s("code",[this._v("storage")]),this._v(" 事件，可以指定这个事件的监听函数。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'storage'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onStorageChange"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("监听函数接受一个"),s("code",[this._v("event")]),this._v("实例对象作为参数。这个实例对象继承了 "),s("code",[this._v("StorageEvent")]),this._v(" 接口，有几个特有的属性，都是只读属性。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("StorageEvent.key")]),t._v("：字符串，表示发生变动的键名。如果 "),a("code",[t._v("storage")]),t._v(" 事件是由"),a("code",[t._v("clear()")]),t._v("方法引起，该属性返回"),a("code",[t._v("null")]),t._v("。")]),a("li",[a("code",[t._v("StorageEvent.newValue")]),t._v("：字符串，表示新的键值。如果 "),a("code",[t._v("storage")]),t._v(" 事件是由"),a("code",[t._v("clear()")]),t._v("方法或删除该键值对引发的，该属性返回"),a("code",[t._v("null")]),t._v("。")]),a("li",[a("code",[t._v("StorageEvent.oldValue")]),t._v("：字符串，表示旧的键值。如果该键值对是新增的，该属性返回"),a("code",[t._v("null")]),t._v("。")]),a("li",[a("code",[t._v("StorageEvent.storageArea")]),t._v("：对象，返回键值对所在的整个对象。也说是说，可以从这个属性上面拿到当前域名储存的所有键值对。")]),a("li",[a("code",[t._v("StorageEvent.url")]),t._v("：字符串，表示原始触发 "),a("code",[t._v("storage")]),t._v(" 事件的那个网页的网址。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// StorageEvent.key属性。")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("onStorageChange")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'storage'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onStorageChange"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("注意")]),this._v("，该事件有一个很特别的地方，就是"),s("strong",[this._v("它不在导致数据变化的当前页面触发，而是在同一个域名的其他窗口触发")]),this._v("。也就是说，如果浏览器只打开一个窗口，可能观察不到这个事件。比如同时打开多个窗口，当其中的一个窗口导致储存的数据发生改变时，只有在其他窗口才能观察到监听函数的执行。可以通过这种机制，"),s("strong",[this._v("实现多个窗口之间的通信")]),this._v("。")])}],!1,null,null,null);s.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{459:function(t,s,a){"use strict";a.r(s);var n=a(1),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"_1、pageshow，pagehide-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、pageshow，pagehide-事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、pageshow，pagehide 事件")]),a("p",[t._v("默认情况下，浏览器会在当前会话（"),a("code",[t._v("session")]),t._v("）缓存页面，当用户点击“前进/后退”按钮时，浏览器就会从缓存中加载页面。")]),a("p",[a("strong",[t._v("注意，这两个事件只在浏览器的"),a("code",[t._v("history")]),t._v("对象发生变化时触发，跟网页是否可见没有关系。")])]),a("h3",{attrs:{id:"pageshow-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pageshow-事件","aria-hidden":"true"}},[t._v("#")]),t._v(" pageshow 事件")]),a("p",[a("code",[t._v("pageshow")]),t._v("事件"),a("strong",[t._v("在页面加载时触发，包括第一次加载和从缓存加载两种情况")]),t._v("。如果要指定页面每次加载（不管是不是从浏览器缓存）时都运行的代码，可以放在这个事件的监听函数。")]),a("p",[a("strong",[t._v("第一次加载时，它的触发顺序排在"),a("code",[t._v("load")]),t._v("事件后面。从缓存加载时，"),a("code",[t._v("load")]),t._v("事件不会触发")]),t._v("，因为网页在缓存中的样子通常是"),a("code",[t._v("load")]),t._v("事件的监听函数运行后的样子，所以不必重复执行。同理，如果是从缓存中加载页面，网页内初始化的 "),a("code",[t._v("JavaScript")]),t._v(" 脚本（比如 "),a("code",[t._v("DOMContentLoaded")]),t._v(" 事件的监听函数）也不会执行。")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'pageshow'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'pageshow: '")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("pageshow")]),t._v("事件有一个"),a("code",[t._v("persisted")]),t._v("属性，返回一个布尔值。"),a("strong",[t._v("页面第一次加载时，这个属性是"),a("code",[t._v("false")]),t._v("；当页面从缓存加载时，这个属性是"),a("code",[t._v("true")])]),t._v("。")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 可以判断页面是否为首次加载")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'pageshow'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("persisted"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"pagehide-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pagehide-事件","aria-hidden":"true"}},[t._v("#")]),t._v(" pagehide 事件")]),a("p",[a("code",[t._v("pagehide")]),t._v("事件与"),a("code",[t._v("pageshow")]),t._v("事件类似，"),a("strong",[t._v("当用户通过“前进/后退”按钮，离开当前页面时触发")]),t._v("。")]),a("p",[t._v("它与 "),a("code",[t._v("unload")]),t._v(" 事件的区别在于，如果在 "),a("code",[t._v("window")]),t._v(" 对象上定义"),a("code",[t._v("unload")]),t._v("事件的监听函数之后，页面不会保存在缓存中，而使用"),a("code",[t._v("pagehide")]),t._v("事件，页面会保存在缓存中。")]),a("p",[a("code",[t._v("pagehide")]),t._v("事件实例也有一个"),a("code",[t._v("persisted")]),t._v("属性，"),a("strong",[t._v("将这个属性设为"),a("code",[t._v("true")]),t._v("，就表示页面要保存在缓存中；设为"),a("code",[t._v("false")]),t._v("，表示网页不保存在缓存中")]),t._v("，这时如果设置了"),a("code",[t._v("unload")]),t._v(" 事件的监听函数，该函数将在 "),a("code",[t._v("pagehide")]),t._v(" 事件后立即运行。")]),a("p",[t._v("如果页面包含"),a("code",[t._v("<frame>")]),t._v("或"),a("code",[t._v("<iframe>")]),t._v("元素，则"),a("code",[t._v("<frame>")]),t._v("页面的"),a("code",[t._v("pageshow")]),t._v("事件和"),a("code",[t._v("pagehide")]),t._v("事件，都会在主页面之前触发。")]),a("h2",{attrs:{id:"_2、popstate-事件-♥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、popstate-事件-♥","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、popstate 事件 - ♥")]),a("p",[a("code",[t._v("popstate")]),t._v("事件"),a("strong",[t._v("在浏览器的"),a("code",[t._v("history")]),t._v("对象的当前记录发生显式切换时触发")]),t._v("。注意，调用"),a("code",[t._v("history.pushState()")]),t._v("或"),a("code",[t._v("history.replaceState()")]),t._v("，并不会触发"),a("code",[t._v("popstate")]),t._v("事件。该事件只在用户在"),a("code",[t._v("history")]),t._v("记录之间显式切换时触发，"),a("strong",[t._v("比如鼠标点击“后退/前进”按钮，或者在脚本中调用"),a("code",[t._v("history.back()")]),t._v("、"),a("code",[t._v("history.forward()")]),t._v("、"),a("code",[t._v("history.go()")]),t._v("时触发。")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onpopstate")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'state: '")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" event"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// pushState方法向history添加了两条记录")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 然后replaceState方法替换掉当前记录")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 因此，连续两次back方法，会让当前条目退回到原始网址，它没有附带state对象，")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 所以事件的state属性为null，然后前进两条记录，又回到replaceState方法添加的记录。")]),t._v("\nhistory"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("pushState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("page"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'title 1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'?page=1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhistory"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("pushState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("page"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'title 2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'?page=2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhistory"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replaceState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("page"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'title 3'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'?page=3'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhistory"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("back")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// state: {"page":1}')]),t._v("\nhistory"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("back")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// state: null")]),t._v("\nhistory"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("go")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v('// state: {"page":3}')]),t._v("\n")])])]),a("p",[t._v("浏览器对于页面首次加载，是否触发"),a("code",[t._v("popstate")]),t._v("事件，处理不一样，"),a("code",[t._v("Firefox")]),t._v(" 不触发该事件。")]),a("h2",{attrs:{id:"_3、hashchange-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、hashchange-事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、hashchange 事件")]),a("p",[a("code",[t._v("hashchange")]),t._v("事件在 "),a("code",[t._v("URL")]),t._v(" 的 "),a("code",[t._v("hash")]),t._v(" 部分（即#号后面的部分，包括"),a("code",[t._v("#")]),t._v("号）发生变化时触发。该事件一般在"),a("code",[t._v("window")]),t._v("对象上监听。")]),a("p",[a("code",[t._v("hashchange")]),t._v("的事件实例具有两个特有属性："),a("code",[t._v("oldURL")]),t._v("属性和"),a("code",[t._v("newURL")]),t._v("属性，分别表示变化前后的完整 "),a("code",[t._v("URL")]),t._v("。")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// URL 是 http://www.example.com/")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'hashchange'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" myFunction"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("myFunction")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("oldURL"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newURL"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nlocation"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'part2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// http://www.example.com/")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// http://www.example.com/#part2")]),t._v("\n")])])])])}],!1,null,null,null);s.default=o.exports}}]);
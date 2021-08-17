(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{437:function(t,n,s){"use strict";s.r(n);var a=s(1),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("p",[s("a",{attrs:{href:"https://www.wangdoc.com/javascript/events/form.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("表单事件"),s("OutboundLink")],1)]),t._m(0),s("p",[t._v("表单事件有以下几种：")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"_1、表单事件的种类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、表单事件的种类","aria-hidden":"true"}},[this._v("#")]),this._v(" 1、表单事件的种类")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",[s("li",[s("code",[t._v("input")]),t._v(" 事件")]),s("li",[s("code",[t._v("select")]),t._v(" 事件")]),s("li",[s("code",[t._v("change")]),t._v(" 事件")]),s("li",[s("code",[t._v("invalid")]),t._v(" 事件")]),s("li",[s("code",[t._v("reset")]),t._v(" 事件，"),s("code",[t._v("submit")]),t._v(" 事件")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"_2、input-事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、input-事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 2、input 事件")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",[s("li",[s("code",[t._v("input")]),t._v("事件当"),s("code",[t._v("<input>、<select>、<textarea>")]),t._v("的值发生变化时触发。")]),s("li",[t._v("对于复选框（"),s("code",[t._v("<input type=checkbox>")]),t._v("）或单选框（"),s("code",[t._v("<input type=radio>")]),t._v("），用户改变选项时，也会触发这个事件。")]),s("li",[t._v("另外，对于打开"),s("code",[t._v("contenteditable")]),t._v("属性的元素，只要值发生变化，也会触发"),s("code",[t._v("inpu")]),t._v("t事件。")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("p",[s("code",[t._v("input")]),t._v("事件的一个特点，就是会连续触发，比如用户每按下一次按键，就会触发一次"),s("code",[t._v("input")]),t._v("事件。"),s("code",[t._v("input")]),t._v("事件对象继承了"),s("code",[t._v("InputEvent")]),t._v("接口。")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("p",[t._v("该事件跟"),s("code",[t._v("change")]),t._v("事件很像，不同之处在于"),s("code",[t._v("input")]),t._v("事件在元素的值发生变化后立即发生，而"),s("code",[t._v("change")]),t._v("在元素失去焦点时发生，而内容此时可能已经变化多次。也就是说，"),s("strong",[t._v("如果有连续变化，"),s("code",[t._v("input")]),t._v("事件会触发多次，而"),s("code",[t._v("change")]),t._v("事件只在失去焦点时触发一次。")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v('/* HTML 代码如下\n<select id="mySelect">\n  <option value="1">1</option>\n  <option value="2">2</option>\n  <option value="3">3</option>\n</select>\n*/')]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 改变下拉框选项时，会触发input事件，从而执行回调函数inputHandler")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("inputHandler")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mySelect "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'#mySelect'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmySelect"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'input'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inputHandler"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"_3、select-事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、select-事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 3、select 事件")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("code",[this._v("select")]),this._v("事件当在"),n("code",[this._v("<input>、<textarea>")]),this._v("里面"),n("strong",[this._v("选中文本时触发")]),this._v("。")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// HTML 代码如下")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v('// <input id="test" type="text" value="Select me!" />')]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 选中的文本可以通过event.target元素的")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// selectionDirection、selectionEnd、selectionStart和value属性拿到。")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" elem "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'test'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nelem"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'select'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v('// "select"')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"_4、change-事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、change-事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 4、change 事件")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("p",[s("code",[t._v("change")]),t._v("事件当"),s("code",[t._v("<input>、<select>、<textarea>")]),t._v("的值发生变化时触发。它与"),s("code",[t._v("input")]),t._v("事件的最大不同，就是"),s("strong",[t._v("不会连续触发，只有当全部修改完成时才会触发")]),t._v("，另一方面"),s("code",[t._v("input")]),t._v("事件必然伴随"),s("code",[t._v("change")]),t._v("事件。具体来说，分成以下几种情况。")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",[s("li",[t._v("激活单选框（"),s("code",[t._v("radio")]),t._v("）或复选框（"),s("code",[t._v("checkbox")]),t._v("）时触发。")]),s("li",[t._v("用户提交时触发。比如，从下列列表（"),s("code",[t._v("select")]),t._v("）完成选择，在日期或文件输入框完成选择。")]),s("li",[t._v("当文本框或"),s("code",[t._v("<textarea>")]),t._v("元素的值发生改变，并且丧失焦点时触发。")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// HTML 代码如下")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v('// <select size="1" onchange="changeEventHandler(event);">')]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//   <option>chocolate</option>")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//   <option>strawberry</option>")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//   <option>vanilla</option>")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// </select>")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 对于<select>元素来说，input和change事件基本是等价的")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("changeEventHandler")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"_5、invalid-事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、invalid-事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 5、invalid 事件")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("用户提交表单时，如果表单元素的值不满足校验条件，就会触发"),n("code",[this._v("invalid")]),this._v("事件。")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 输入框是必填的。如果不填，用户点击按钮提交时，就会触发输入框的invalid事件，导致提交被取消。")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("form"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"text"')]),t._v(" required oninvalid"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("\"console.log('invalid input')\"")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("button type"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"submit"')]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("提交"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"_6、reset-事件，submit-事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、reset-事件，submit-事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 6、reset 事件，submit 事件")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("这两个事件发生在表单对象"),n("code",[this._v("<form>")]),this._v("上，而不是发生在表单的成员上。")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",[s("li",[s("code",[t._v("reset")]),t._v("事件当表单重置（所有表单成员变回默认值）时触发。")]),s("li",[s("code",[t._v("submit")]),t._v("事件当表单数据向服务器提交时触发。注意，"),s("code",[t._v("submit")]),t._v("事件的发生对象是"),s("code",[t._v("<form>")]),t._v("元素，而不是"),s("code",[t._v("<button>")]),t._v("元素，因为提交的是表单，而不是按钮。")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"_7、inputevent-接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7、inputevent-接口","aria-hidden":"true"}},[this._v("#")]),this._v(" 7、InputEvent 接口")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("p",[s("code",[t._v("InputEvent")]),t._v("接口主要用来描述"),s("code",[t._v("input")]),t._v("事件的实例。该接口继承了"),s("code",[t._v("Event")]),t._v("接口，还定义了一些自己的实例属性和实例方法。浏览器原生提供"),s("code",[t._v("InputEvent()")]),t._v("构造函数，用来生成实例对象。")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 可以接受两个参数")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 第一个参数是字符串，表示事件名称，该参数是必需的。")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 第二个参数是一个配置对象，用来设置事件实例的属性，该参数是可选的")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("InputEvent")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// options对象的字段除了Event构造函数的配置属性，还可以设置下面的字段，这些字段都是可选的。")]),t._v("\n"),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`inputType`")])]),t._v("：字符串，表示发生变更的类型（详见下文）。\n"),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`data`")])]),t._v("：字符串，表示插入的字符串。如果没有插入的字符串（比如删除操作），则返回"),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("或空字符串。\n"),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`dataTransfer`")])]),t._v("：返回一个 "),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`DataTransfer`")])]),t._v(" 对象实例，该属性通常只在输入框接受富文本输入时有效。\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"_8、inputevent-data-属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8、inputevent-data-属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 8、InputEvent.data 属性")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("code",[this._v("InputEvent.data")]),this._v("属性返回一个字符串，表示变动的内容。")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// HTML 代码如下")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v('// <input type="text" id="myInput">')]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 如果手动在输入框里面输入abc，控制台会先输出a，再在下一行输出b，再在下一行输出c。")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 然后选中abc，一次性将它们删除，控制台会输出null或一个空字符串")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" input "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'myInput'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninput"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'input'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" myFunction"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("myFunction")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"_9、inputevent-inputtype-属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9、inputevent-inputtype-属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 9、InputEvent.inputType 属性")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("code",[this._v("InputEvent.inputType")]),this._v("属性返回一个字符串，表示字符串发生变更的类型。")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("对于常见情况，"),n("code",[this._v("Chrome")]),this._v(" 浏览器的返回值如下。完整列表可以参考文档。")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",[s("li",[t._v("手动插入文本："),s("code",[t._v("insertText")])]),s("li",[t._v("粘贴插入文本："),s("code",[t._v("insertFromPaste")])]),s("li",[t._v("向后删除："),s("code",[t._v("deleteContentBackward")])]),s("li",[t._v("向前删除："),s("code",[t._v("deleteContentForward")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"_10、inputevent-datatransfer-属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10、inputevent-datatransfer-属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 10、InputEvent.dataTransfer 属性")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("p",[s("code",[t._v("InputEvent.dataTransfer")]),t._v("属性返回一个 "),s("code",[t._v("DataTransfer")]),t._v(" 实例。该属性只在文本框接受粘贴内容（"),s("code",[t._v("insertFromPaste")]),t._v("）或拖拽内容（"),s("code",[t._v("insertFromDrop")]),t._v("）时才有效。")])}],!1,null,null,null);n.default=e.exports}}]);
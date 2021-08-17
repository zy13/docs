(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{432:function(t,s,n){"use strict";n.r(s);var a=n(1),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("ul",[n("li",[t._v("常用的关于时间的处理")])]),n("blockquote",[n("p",[t._v("获取时间戳："),n("code",[t._v("Date.parse(new Date('2019-2-21'))")]),t._v(" or "),n("code",[t._v("new Date().getTime()")]),n("br"),t._v("\n获取当前时间："),n("code",[t._v("new Date()")]),n("br"),t._v("\n获取当前年："),n("code",[t._v("new Date().getFullYear()")]),n("br"),t._v("\n获取月："),n("code",[t._v("new Date().getMonth()+1")]),n("br"),t._v("\n获取日："),n("code",[t._v("new Date().getDate()")]),n("br"),t._v("\n获取时: "),n("code",[t._v("new Date().getHours()")]),n("br"),t._v("\n获取分: "),n("code",[t._v("new Date().getMinutes()")]),n("br"),t._v("\n获取秒: "),n("code",[t._v("new Date().getSeconds()")]),n("br"),t._v("\n浮点数保留两位小数："),n("code",[t._v("(123).toFixed(2)")])])]),n("ul",[n("li",[t._v("60秒倒计时：日化汇小程序登录页")])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("setTimeLimit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" that "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" countdown "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("60")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" intervalid\n\n  that"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setState")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    counting"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  intervalid "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("setInterval")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("countdown "),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      that"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setState")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        timeStr"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("countdown"),n("span",{attrs:{class:"token operator"}},[t._v("--")]),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("后获取`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token function"}},[t._v("clearInterval")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intervalid"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      that"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setState")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        timeStr"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'重新获取验证码'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        counting"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      countdown "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ul",[n("li",[t._v("时分秒倒计时：倍智-考试系统")])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("countdown")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hours"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" munites"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" seconds"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" totalSecondTime "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" hours "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("60")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("60")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" munites "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("60")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" seconds  \n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" hour"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" munite"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" second\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" intervalid "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("setInterval")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("totalSecondTime "),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      hour "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("parseInt")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("totalSecondTime "),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("60")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("60")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      munite "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("parseInt")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("totalSecondTime "),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("60")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("60")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      second "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" totalSecondTime "),n("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("60")]),t._v("\n      totalSecondTime"),n("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("\n      console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("totalSecondTime"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("hour"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v(":")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("munite"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v(":")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("second"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token function"}},[t._v("clearInterval")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intervalid"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);s.default=o.exports}}]);
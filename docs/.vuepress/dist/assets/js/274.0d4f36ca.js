(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{594:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),a("p",[t._v("一个提案只要能进入 Stage 2，就差不多肯定会包括在以后的正式标准里面。ECMAScript 当前的所有提案，可以在 TC39 的官方网站"),a("a",{attrs:{href:"https://github.com/tc39/ecma262",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub.com/tc39/ecma262"),a("OutboundLink")],1),t._v("查看。")]),t._m(6),a("p",[t._v("ES6 从开始制定到最后发布，整整用了 15 年。")]),t._m(7),a("p",[t._v("2000 年，ECMAScript 4.0 开始酝酿。这个版本最后没有通过，但是它的大部分内容被 ES6 继承了。因此，ES6 制定的起点其实是 2000 年。")]),a("p",[t._v("为什么 ES4 没有通过呢？因为这个版本太激进了，对 ES3 做了彻底升级，导致标准委员会的一些成员不愿意接受。ECMA 的第 39 号技术专家委员会（Technical Committee 39，简称 TC39）负责制订 ECMAScript 标准，成员包括 Microsoft、Mozilla、Google 等大公司。")]),a("p",[t._v("2007 年 10 月，ECMAScript 4.0 版草案发布，本来预计次年 8 月发布正式版本。但是，各方对于是否通过这个标准，发生了严重分歧。以 Yahoo、Microsoft、Google 为首的大公司，反对 JavaScript 的大幅升级，主张小幅改动；以 JavaScript 创造者 Brendan Eich 为首的 Mozilla 公司，则坚持当前的草案。")]),a("p",[t._v("2008 年 7 月，由于对于下一个版本应该包括哪些功能，各方分歧太大，争论过于激烈，ECMA 开会决定，中止 ECMAScript 4.0 的开发，将其中涉及现有功能改善的一小部分，发布为 ECMAScript 3.1，而将其他激进的设想扩大范围，放入以后的版本，由于会议的气氛，该版本的项目代号起名为 Harmony（和谐）。会后不久，ECMAScript 3.1 就改名为 ECMAScript 5。")]),a("p",[t._v("2009 年 12 月，ECMAScript 5.0 版正式发布。Harmony 项目则一分为二，一些较为可行的设想定名为 JavaScript.next 继续开发，后来演变成 ECMAScript 6；一些不是很成熟的设想，则被视为 JavaScript.next.next，在更远的将来再考虑推出。TC39 委员会的总体考虑是，ES5 与 ES3 基本保持兼容，较大的语法修正和新功能加入，将由 JavaScript.next 完成。当时，JavaScript.next 指的是 ES6，第六版发布以后，就指 ES7。TC39 的判断是，ES5 会在 2013 年的年中成为 JavaScript 开发的主流标准，并在此后五年中一直保持这个位置。")]),a("p",[t._v("2011 年 6 月，ECMAScript 5.1 版发布，并且成为 ISO 国际标准（ISO/IEC 16262:2011）。")]),a("p",[t._v("2013 年 3 月，ECMAScript 6 草案冻结，不再添加新功能。新的功能设想将被放到 ECMAScript 7。")]),a("p",[t._v("2013 年 12 月，ECMAScript 6 草案发布。然后是 12 个月的讨论期，听取各方反馈。")]),a("p",[t._v("2015 年 6 月，ECMAScript 6 正式通过，成为国际标准。从 2000 年算起，这时已经过去了 15 年。")]),a("p",[t._v("目前，各大浏览器对 ES6 的支持可以查看kangax.github.io/compat-table/es6/。")]),a("p",[t._v("Node.js 是 JavaScript 的服务器运行环境（runtime）。它对 ES6 的支持度更高。除了那些默认打开的功能，还有一些语法功能已经实现了，但是默认没有打开。使用下面的命令，可以查看 Node.js 默认没有打开的 ES6 实验性语法。")]),t._m(8),a("p",[a("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel"),a("OutboundLink")],1),t._v("是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。下面是一个例子。")]),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),a("p",[t._v("Babel 默认不转码的 API 非常多，详细清单可以查看"),a("code",[t._v("babel-plugin-transform-runtime")]),t._v("模块的"),a("a",{attrs:{href:"https://github.com/babel/babel/blob/master/packages/babel-plugin-transform-runtime/src/runtime-corejs3-definitions.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("definitions.js"),a("OutboundLink")],1),t._v("文件。")]),t._m(27),a("p",[t._v("Babel 也可以用于浏览器环境，使用"),a("a",{attrs:{href:"https://babeljs.io/docs/en/next/babel-standalone.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/standalone"),a("OutboundLink")],1),t._v("模块提供的浏览器版本，将其插入网页。")]),t._m(28),a("p",[t._v("注意，网页实时将 ES6 代码转为 ES5，对性能会有影响。生产环境需要加载已经转码完成的脚本。")]),a("p",[t._v("Babel 提供一个REPL "),a("a",{attrs:{href:"https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.14.8&externalPlugins=",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线编译器"),a("OutboundLink")],1),t._v("，可以在线将 ES6 代码转为 ES5 代码。转换后的代码，可以直接作为 ES5 代码插入网页运行。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-ecmascript-和-javascript-的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-ecmascript-和-javascript-的关系","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. ECMAScript 和 JavaScript 的关系")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("ECMA")]),this._v("(European Computer Manufacturers Association, 欧洲计算机制造商协会, 一个标准化组织)")]),s("li",[this._v("前者规定了浏览器脚本语言的标准，是针对JavaScript语言指定的国际标准；后者是由Netscape 公司创造")]),s("li",[this._v("前者是后者的规格，后者是前者的体现。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-es6-与-ecmascript-2015-的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-es6-与-ecmascript-2015-的关系","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. ES6 与 ECMAScript 2015 的关系")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("ES6 是指 JavaScript 语言的下一个版本，它既是一个历史名词，也是一个泛指，含义是ES5以后的JavaScript的下一代标准，涵盖了ES2015、ES2016、ES2017等等。")]),s("li",[this._v("ECMASCript在每年的6月份正式发布一次，作为当年的正式版本，并且以年份作为标记。")]),s("li",[this._v("ES6的第一个版本，于2015年6月发布，正式名称为《ECMAScript 2015 标准》（简称 ES2015）。")]),s("li",[this._v('本书提到ES6的地方，一般指ES2015标准，有时也泛指"下一代JavaScript语言。')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-语法提案的批准流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-语法提案的批准流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 语法提案的批准流程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("任何人都可以向标准委员会（又称TC39委员会）提案，要修修改语言标准。")]),s("li",[this._v("一种新的语法从提案到变成正式标准，需要经历五个阶段。每个阶段的变动都需要由 TC39 委员会批准。")]),s("li",[this._v("Stage 0 - Strawman（展示阶段）")]),s("li",[this._v("Stage 1 - Proposal（征求意见阶段）")]),s("li",[this._v("Stage 2 - Draft（草案阶段）")]),s("li",[this._v("Stage 3 - Candidate（候选人阶段）")]),s("li",[this._v("Stage 4 - Finished（定案阶段）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4、ecmascript-的历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、ecmascript-的历史","aria-hidden":"true"}},[this._v("#")]),this._v(" 4、ECMAScript 的历史")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("ECMAScript 1.0 是 1997 年发布的，接下来的两年，连续发布了 ECMAScript 2.0（1998 年 6 月）和 ECMAScript 3.0（1999 年 12 月）。"),s("strong",[this._v("3.0 版是一个巨大的成功，在业界得到广泛支持，成为通行标准，奠定了 JavaScript 语言的基本语法，以后的版本完全继承。直到今天，初学者一开始学习 JavaScript，其实就是在学 3.0 版的语法。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_5-babel-转码器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-babel-转码器","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. Babel 转码器")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 原始代码用了箭头函数，Babel 将其转为普通函数")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 就能在不支持箭头函数的 JavaScript 环境执行了")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 转码前")]),t._v("\ninput"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("map")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 转码后")]),t._v("\ninput"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("map")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 在项目目录中，安装 Babel")]),t._v("\n$ npm install "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("dev @babel"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("core\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_6-配置文件-babelrc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-配置文件-babelrc","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. 配置文件.babelrc")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Babel 的配置文件是"),s("code",[this._v(".babelrc")]),this._v("，存放在项目的根目录下。使用 Babel 的第一步，就是配置这个文件。\n该文件用来"),s("strong",[this._v("设置转码规则和插件")]),this._v("，基本格式如下。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"presets"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"plugins"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// presets字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 最新转码规则")]),t._v("\n$ npm install "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("dev @babel"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("preset"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("env\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// react 转码规则")]),t._v("\n$ npm install "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("dev @babel"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("preset"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("react\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 将这些规则加入.babelrc。")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"presets"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"@babel/preset-react"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"plugins"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 注意，以下所有 Babel 工具和模块的使用，都必须先写好.babelrc。")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_7-命令行转码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-命令行转码","aria-hidden":"true"}},[this._v("#")]),this._v(" 7. 命令行转码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Babel 提供命令行工具"),s("code",[this._v("@babel/cli")]),this._v("，用于命令行转码。它的安装命令如下。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$ npm install "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("dev @babel"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cli\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 基本用法如下。")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// # 转码结果输出到标准输出")]),t._v("\n$ npx babel example"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// # 转码结果写入一个文件")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// # --out-file 或 -o 参数指定输出文件")]),t._v("\n$ npx babel example"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("out"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("file compiled"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{attrs:{class:"token comment"}},[t._v("// # 或者")]),t._v("\n$ npx babel example"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("o compiled"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// # 整个目录转码")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// # --out-dir 或 -d 参数指定输出目录")]),t._v("\n$ npx babel src "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("out"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("dir lib\n"),a("span",{attrs:{class:"token comment"}},[t._v("// # 或者")]),t._v("\n$ npx babel src "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("d lib\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// # -s 参数生成source map文件")]),t._v("\n$ npx babel src "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("d lib "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("s\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_8-babel-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-babel-node","aria-hidden":"true"}},[this._v("#")]),this._v(" 8. babel-node")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("@babel/node")]),this._v("模块的"),s("code",[this._v("babel-node")]),this._v("命令，提供一个支持 ES6 的 REPL("),s("code",[this._v("read-eval-print loop")]),this._v(", 交互式解释器) 环境。它支持 Node 的 REPL 环境的所有功能，而且可以直接运行 ES6 代码。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 首先，安装这个模块。")]),t._v("\n$ npm install "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("dev @babel"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("node\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 然后，执行babel-node就进入 REPL 环境。")]),t._v("\n$ npx babel"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("node\n"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// babel-node命令可以直接运行 ES6 脚本。将上面的代码放入脚本文件es6.js，然后直接运行。")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// # es6.js 的代码")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// # console.log((x => x * 2)(1));")]),t._v("\n$ npx babel"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("node es6"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_9-babel-register-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-babel-register-模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 9. @babel/register 模块")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("@babel/register")]),t._v("模块改写require命令，为它加上一个钩子。此后，每当使用require加载"),a("code",[t._v(".js")]),t._v("、"),a("code",[t._v(".jsx")]),t._v("、"),a("code",[t._v(".es")]),t._v("和"),a("code",[t._v(".es6")]),t._v("后缀名的文件，就会先用 Babel 进行转码。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$ npm install "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("dev @babel"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("register\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 使用时，必须首先加载@babel/register")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'@babel/register'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./es6.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 然后，就不需要手动对index.js转码了。")]),t._v("\n$ node index"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("需要注意的是，"),s("code",[this._v("@babel/register")]),this._v("只会对require命令加载的文件转码，而不会对当前文件转码。另外，由于它是实时转码，所以"),s("strong",[this._v("只适合在开发环境使用")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_10-polyfill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-polyfill","aria-hidden":"true"}},[this._v("#")]),this._v(" 10. polyfill")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如"),a("code",[t._v("Iterator")]),t._v("、"),a("code",[t._v("Generator")]),t._v("、"),a("code",[t._v("Set")]),t._v("、"),a("code",[t._v("Map")]),t._v("、"),a("code",[t._v("Proxy")]),t._v("、"),a("code",[t._v("Reflect")]),t._v("、"),a("code",[t._v("Symbol")]),t._v("、"),a("code",[t._v("Promise")]),t._v("等全局对象，以及一些定义在全局对象上的方法（比如"),a("code",[t._v("Object.assign")]),t._v("）都不会转码。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("举例来说，ES6 在Array对象上新增了"),a("code",[t._v("Array.from")]),t._v("方法。Babel 就不会转码这个方法。如果想让这个方法运行，可以使用"),a("code",[t._v("core-js")]),t._v("和"),a("code",[t._v("regenerator-runtime")]),t._v("(后者提供"),a("code",[t._v("generator")]),t._v("函数的转码)，为当前环境提供一个垫片。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 安装命令如下")]),t._v("\n$ npm install "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("dev core"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("js regenerator"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("runtime\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 然后，在脚本头部，加入如下两行代码。")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'core-js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'regenerator-runtime/runtime'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 或者")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'core-js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'regenerator-runtime/runtime'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_11-浏览器环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-浏览器环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 11. 浏览器环境")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"https://unpkg.com/@babel/standalone/babel.min.js"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"text/babel"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Your ES6 code")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);
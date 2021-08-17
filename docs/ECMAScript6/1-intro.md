## 1. ECMAScript 和 JavaScript 的关系
- **ECMA**(European Computer Manufacturers Association, 欧洲计算机制造商协会, 一个标准化组织)
- 前者规定了浏览器脚本语言的标准，是针对JavaScript语言指定的国际标准；后者是由Netscape 公司创造
- 前者是后者的规格，后者是前者的体现。

## 2. ES6 与 ECMAScript 2015 的关系
- ES6 是指 JavaScript 语言的下一个版本，它既是一个历史名词，也是一个泛指，含义是ES5以后的JavaScript的下一代标准，涵盖了ES2015、ES2016、ES2017等等。
- ECMASCript在每年的6月份正式发布一次，作为当年的正式版本，并且以年份作为标记。
- ES6的第一个版本，于2015年6月发布，正式名称为《ECMAScript 2015 标准》（简称 ES2015）。
- 本书提到ES6的地方，一般指ES2015标准，有时也泛指"下一代JavaScript语言。

## 3. 语法提案的批准流程
- 任何人都可以向标准委员会（又称TC39委员会）提案，要修修改语言标准。
- 一种新的语法从提案到变成正式标准，需要经历五个阶段。每个阶段的变动都需要由 TC39 委员会批准。
- Stage 0 - Strawman（展示阶段）
- Stage 1 - Proposal（征求意见阶段）
- Stage 2 - Draft（草案阶段）
- Stage 3 - Candidate（候选人阶段）
- Stage 4 - Finished（定案阶段）

一个提案只要能进入 Stage 2，就差不多肯定会包括在以后的正式标准里面。ECMAScript 当前的所有提案，可以在 TC39 的官方网站[GitHub.com/tc39/ecma262](https://github.com/tc39/ecma262)查看。
## 4、ECMAScript 的历史

ES6 从开始制定到最后发布，整整用了 15 年。

ECMAScript 1.0 是 1997 年发布的，接下来的两年，连续发布了 ECMAScript 2.0（1998 年 6 月）和 ECMAScript 3.0（1999 年 12 月）。**3.0 版是一个巨大的成功，在业界得到广泛支持，成为通行标准，奠定了 JavaScript 语言的基本语法，以后的版本完全继承。直到今天，初学者一开始学习 JavaScript，其实就是在学 3.0 版的语法。**

2000 年，ECMAScript 4.0 开始酝酿。这个版本最后没有通过，但是它的大部分内容被 ES6 继承了。因此，ES6 制定的起点其实是 2000 年。

为什么 ES4 没有通过呢？因为这个版本太激进了，对 ES3 做了彻底升级，导致标准委员会的一些成员不愿意接受。ECMA 的第 39 号技术专家委员会（Technical Committee 39，简称 TC39）负责制订 ECMAScript 标准，成员包括 Microsoft、Mozilla、Google 等大公司。

2007 年 10 月，ECMAScript 4.0 版草案发布，本来预计次年 8 月发布正式版本。但是，各方对于是否通过这个标准，发生了严重分歧。以 Yahoo、Microsoft、Google 为首的大公司，反对 JavaScript 的大幅升级，主张小幅改动；以 JavaScript 创造者 Brendan Eich 为首的 Mozilla 公司，则坚持当前的草案。

2008 年 7 月，由于对于下一个版本应该包括哪些功能，各方分歧太大，争论过于激烈，ECMA 开会决定，中止 ECMAScript 4.0 的开发，将其中涉及现有功能改善的一小部分，发布为 ECMAScript 3.1，而将其他激进的设想扩大范围，放入以后的版本，由于会议的气氛，该版本的项目代号起名为 Harmony（和谐）。会后不久，ECMAScript 3.1 就改名为 ECMAScript 5。

2009 年 12 月，ECMAScript 5.0 版正式发布。Harmony 项目则一分为二，一些较为可行的设想定名为 JavaScript.next 继续开发，后来演变成 ECMAScript 6；一些不是很成熟的设想，则被视为 JavaScript.next.next，在更远的将来再考虑推出。TC39 委员会的总体考虑是，ES5 与 ES3 基本保持兼容，较大的语法修正和新功能加入，将由 JavaScript.next 完成。当时，JavaScript.next 指的是 ES6，第六版发布以后，就指 ES7。TC39 的判断是，ES5 会在 2013 年的年中成为 JavaScript 开发的主流标准，并在此后五年中一直保持这个位置。

2011 年 6 月，ECMAScript 5.1 版发布，并且成为 ISO 国际标准（ISO/IEC 16262:2011）。

2013 年 3 月，ECMAScript 6 草案冻结，不再添加新功能。新的功能设想将被放到 ECMAScript 7。

2013 年 12 月，ECMAScript 6 草案发布。然后是 12 个月的讨论期，听取各方反馈。

2015 年 6 月，ECMAScript 6 正式通过，成为国际标准。从 2000 年算起，这时已经过去了 15 年。

目前，各大浏览器对 ES6 的支持可以查看kangax.github.io/compat-table/es6/。

Node.js 是 JavaScript 的服务器运行环境（runtime）。它对 ES6 的支持度更高。除了那些默认打开的功能，还有一些语法功能已经实现了，但是默认没有打开。使用下面的命令，可以查看 Node.js 默认没有打开的 ES6 实验性语法。

## 5. Babel 转码器

[Babel](https://babeljs.io/)是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。下面是一个例子。
```js
// 原始代码用了箭头函数，Babel 将其转为普通函数
// 就能在不支持箭头函数的 JavaScript 环境执行了

// 转码前
input.map(item => item + 1);

// 转码后
input.map(function (item) {
  return item + 1;
});

// 在项目目录中，安装 Babel
$ npm install --save-dev @babel/core
```

## 6. 配置文件.babelrc

Babel 的配置文件是`.babelrc`，存放在项目的根目录下。使用 Babel 的第一步，就是配置这个文件。
该文件用来**设置转码规则和插件**，基本格式如下。
```js
{
  "presets": [],
  "plugins": []
}

// presets字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。
// 最新转码规则
$ npm install --save-dev @babel/preset-env

// react 转码规则
$ npm install --save-dev @babel/preset-react

// 将这些规则加入.babelrc。
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": []
}

// 注意，以下所有 Babel 工具和模块的使用，都必须先写好.babelrc。
```

## 7. 命令行转码
Babel 提供命令行工具`@babel/cli`，用于命令行转码。它的安装命令如下。
```js
$ npm install --save-dev @babel/cli

// 基本用法如下。

// # 转码结果输出到标准输出
$ npx babel example.js

// # 转码结果写入一个文件
// # --out-file 或 -o 参数指定输出文件
$ npx babel example.js --out-file compiled.js
// # 或者
$ npx babel example.js -o compiled.js

// # 整个目录转码
// # --out-dir 或 -d 参数指定输出目录
$ npx babel src --out-dir lib
// # 或者
$ npx babel src -d lib

// # -s 参数生成source map文件
$ npx babel src -d lib -s
```

## 8. babel-node
`@babel/node`模块的`babel-node`命令，提供一个支持 ES6 的 REPL(`read-eval-print loop`, 交互式解释器) 环境。它支持 Node 的 REPL 环境的所有功能，而且可以直接运行 ES6 代码。
```js
// 首先，安装这个模块。
$ npm install --save-dev @babel/node

// 然后，执行babel-node就进入 REPL 环境。
$ npx babel-node
> (x => x * 2)(1)
2

// babel-node命令可以直接运行 ES6 脚本。将上面的代码放入脚本文件es6.js，然后直接运行。

// # es6.js 的代码
// # console.log((x => x * 2)(1));
$ npx babel-node es6.js
2
```

## 9. @babel/register 模块
`@babel/register`模块改写require命令，为它加上一个钩子。此后，每当使用require加载`.js`、`.jsx`、`.es`和`.es6`后缀名的文件，就会先用 Babel 进行转码。
```js
$ npm install --save-dev @babel/register

// 使用时，必须首先加载@babel/register

// index.js
require('@babel/register');
require('./es6.js');

// 然后，就不需要手动对index.js转码了。
$ node index.js
2
```
需要注意的是，`@babel/register`只会对require命令加载的文件转码，而不会对当前文件转码。另外，由于它是实时转码，所以**只适合在开发环境使用**。

## 10. polyfill
Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如`Iterator`、`Generator`、`Set`、`Map`、`Proxy`、`Reflect`、`Symbol`、`Promise`等全局对象，以及一些定义在全局对象上的方法（比如`Object.assign`）都不会转码。

举例来说，ES6 在Array对象上新增了`Array.from`方法。Babel 就不会转码这个方法。如果想让这个方法运行，可以使用`core-js`和`regenerator-runtime`(后者提供`generator`函数的转码)，为当前环境提供一个垫片。
```js
// 安装命令如下
$ npm install --save-dev core-js regenerator-runtime

// 然后，在脚本头部，加入如下两行代码。
import 'core-js';
import 'regenerator-runtime/runtime';
// 或者
require('core-js');
require('regenerator-runtime/runtime');
```
Babel 默认不转码的 API 非常多，详细清单可以查看`babel-plugin-transform-runtime`模块的[definitions.js](https://github.com/babel/babel/blob/master/packages/babel-plugin-transform-runtime/src/runtime-corejs3-definitions.js)文件。

## 11. 浏览器环境
Babel 也可以用于浏览器环境，使用[@babel/standalone](https://babeljs.io/docs/en/next/babel-standalone.html)模块提供的浏览器版本，将其插入网页。
```js
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
// Your ES6 code
</script>
```
注意，网页实时将 ES6 代码转为 ES5，对性能会有影响。生产环境需要加载已经转码完成的脚本。

Babel 提供一个REPL [在线编译器](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.14.8&externalPlugins=)，可以在线将 ES6 代码转为 ES5 代码。转换后的代码，可以直接作为 ES5 代码插入网页运行。
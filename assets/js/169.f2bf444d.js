(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{403:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[t._v("基于koa框架的服务端架构，其中渲染模板为pug")]),a("p",[t._v("koa依赖集")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("koa\nkoa-router\nkoa-pug\n")])])]),a("p",[t._v("服务端使用es6语法,需要安装以下babel解析器")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("babel\nbabel-cli\n")])])]),a("h3",{attrs:{id:"搭建服务端框架步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建服务端框架步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 搭建服务端框架步骤")]),a("p",[a("code",[t._v("1️⃣")]),t._v(" 新建项目文件夹，打开终端，输入"),a("code",[t._v("npm init")]),t._v(",生成package.json文件"),a("br"),a("code",[t._v("2️⃣")]),t._v(" 安装服务器依赖koa,koa-router,koa-pug，以及es6解析器babel、babel-cli、babel-preset-es2015、babel-preset-stage-3等"),a("br"),a("code",[t._v("3️⃣")]),t._v(" 新建文件"),a("code",[t._v(".babelrc")]),t._v(",用于引用babel的preset依赖"),a("br"),a("code",[t._v("4️⃣")]),t._v(" 新建文件夹app,views,routes,以及文件"),a("code",[t._v("app/app.js")]),t._v("作为服务器启动文件，"),a("code",[t._v("routes/index.js")]),t._v("作为路由入口"),a("br"),a("code",[t._v("5️⃣")]),a("code",[t._v("app.js")]),t._v("文件，添加服务启动代码：")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Koa "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'koa'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Pug "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'koa-pug'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" path "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'path'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" router "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'../router'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Koa")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pug "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Pug")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  viewPath"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'../views'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\npug"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pug"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("routes")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("allowedMethods")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("listen")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("9002")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[a("code",[t._v("6️⃣")]),a("code",[t._v("routes/index.js")]),t._v("文件，添加首页路由代码：")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Router "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'koa-router'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Router")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nrouter"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" ctx "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'首页'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    list"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'列表数据'")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" router\n")])])]),a("p",[a("code",[t._v("7️⃣")]),a("code",[t._v("views/index.pug")]),t._v(",添加首页模板：")]),a("div",{staticClass:"language-pug extra-class"},[a("pre",{pre:!0,attrs:{class:"language-pug"}},[a("code",[a("span",{attrs:{class:"token markup"}},[a("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[t._v("html"),a("span",{attrs:{class:"token attributes"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token string"}},[t._v('"en"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[t._v("head")]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[t._v("meta"),a("span",{attrs:{class:"token attributes"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token string"}},[t._v('"UTF-8"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[t._v("meta"),a("span",{attrs:{class:"token attributes"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token string"}},[t._v('"viewport"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[t._v('"width'),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("device"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("initial-scale")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token number"}},[t._v("1.0")]),t._v('"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[t._v("meta"),a("span",{attrs:{class:"token attributes"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("http-equiv")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token string"}},[t._v('"X-UA-Compatible"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token string"}},[t._v('"ie=edge"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[t._v("title")]),t._v(" "),a("span",{attrs:{class:"token plain-text"}},[t._v("Document")]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[t._v("body")]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[t._v("h1")]),t._v(" "),a("span",{attrs:{class:"token plain-text"}},[t._v("首页demo")]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token code"}},[t._v("list")]),t._v("\n")])])]),a("p",[a("code",[t._v("8️⃣")]),t._v(" 通过浏览查，输入"),a("code",[t._v("localhost:9002")]),t._v("查看页面效果")])])}],!1,null,null,null);s.default=e.exports}}]);
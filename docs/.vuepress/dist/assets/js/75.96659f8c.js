(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{485:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("p",[s("a",{attrs:{href:"https://www.wangdoc.com/javascript/bom/cors.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CORS 通信"),s("OutboundLink")],1)]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),s("ul",[s("li",[t._v("基本流程："),s("router-link",{attrs:{to:"./7-cors.html#_3-1-基本流程"}},[t._v("link")])],1),s("li",[t._v("withCredentials 属性："),s("router-link",{attrs:{to:"./7-cors.html#_3-2-withcredentials-属性"}},[t._v("link")])],1)]),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42),t._m(43),t._m(44),t._m(45),s("ul",[s("li",[t._v("预检请求："),s("router-link",{attrs:{to:"./7-cors.html#_4-1-预检请求"}},[t._v("link")])],1),s("li",[t._v("预检请求的回应："),s("router-link",{attrs:{to:"./7-cors.html#_4-2-预检请求的回应"}},[t._v("link")])],1),s("li",[t._v("浏览器的正常请求和回应："),s("router-link",{attrs:{to:"./7-cors.html#_4-3-浏览器的正常请求和回应"}},[t._v("link")])],1)]),t._m(46),t._m(47),t._m(48),t._m(49),t._m(50),t._m(51),t._m(52),t._m(53),t._m(54),t._m(55),t._m(56),t._m(57),t._m(58),t._m(59),t._m(60),s("p",[t._v("服务器收到“预检”请求以后，检查了")]),t._m(61),s("p",[t._v("字段以后，确认允许跨源请求，就可以做出回应。")]),t._m(62),t._m(63),t._m(64),t._m(65),t._m(66),t._m(67),t._m(68),t._m(69),t._m(70),t._m(71),t._m(72),t._m(73),t._m(74),t._m(75),t._m(76),s("p",[t._v("该字段与简单请求时的含义相同。")]),t._m(77),t._m(78),t._m(79),t._m(80),t._m(81),t._m(82),t._m(83),t._m(84),t._m(85),t._m(86),t._m(87),t._m(88)])},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("CORS")]),t._v(" 是一个 "),s("code",[t._v("W3C")]),t._v(" 标准，全称是“跨域资源共享”（"),s("code",[t._v("Cross-origin resource sharing")]),t._v("）。它允许浏览器向跨域的服务器，发出"),s("code",[t._v("XMLHttpRequest")]),t._v("请求，从而克服了 "),s("code",[t._v("AJAX")]),t._v(" 只能同源使用的限制。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1、简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 1、简介")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("CORS")]),this._v(" 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("整个 "),e("code",[this._v("CORS")]),this._v(" 通信过程，都是浏览器自动完成，不需要用户参与。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("对于开发者来说，"),s("code",[t._v("CORS")]),t._v(" 通信与普通的 "),s("code",[t._v("AJAX")]),t._v(" 通信没有差别，代码完全一样。")]),s("li",[t._v("浏览器一旦发现 "),s("code",[t._v("AJAX")]),t._v(" 请求跨域，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感知。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("因此，实现 "),e("code",[this._v("CORS")]),this._v(" 通信的"),e("strong",[this._v("关键是服务器")]),this._v("。只要服务器实现了 "),e("code",[this._v("CORS")]),this._v(" 接口，就可以跨域通信。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2、两种请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、两种请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 2、两种请求")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("CORS")]),this._v(" 请求分成两类：简单请求（"),e("code",[this._v("simple request")]),this._v("）和非简单请求（"),e("code",[this._v("not-so-simple request")]),this._v("）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("只要同时满足以下两大条件，就属于"),e("strong",[this._v("简单请求")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("（1）请求方法是以下三种方法之一。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("HEAD\nGET\nPOST\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("（2）"),e("code",[this._v("HTTP")]),this._v(" 的头信息不超出以下几种字段。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Accept\nAccept-Language\nContent-Language\nLast-Event-ID\nContent-Type：application/x-www-form-urlencoded、multipart/form-data、text/plain // 只限于三个值\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("凡是不同时满足上面两个条件，就属于"),e("strong",[this._v("非简单请求")]),this._v("。一句话，简单请求就是简单的 "),e("code",[this._v("HTTP")]),this._v(" 方法与简单的 "),e("code",[this._v("HTTP")]),this._v(" 头信息的结合。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这样划分的原因是，"),e("strong",[this._v("表单在历史上一直可以跨域发出请求")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("简单请求就是表单请求，浏览器沿袭了传统的处理方式，不把行为复杂化，否则开发者可能转而使用表单，规避 "),e("code",[this._v("CORS")]),this._v(" 的限制。")]),e("li",[this._v("对于非简单请求，浏览器会采用新的处理方式。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3、简单请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、简单请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 3、简单请求")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-1-基本流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-基本流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.1 基本流程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("对于简单请求，浏览器直接发出 "),e("code",[this._v("CORS")]),this._v(" 请求。具体来说，就是在头信息之中，增加一个"),e("code",[this._v("Origin")]),this._v("字段。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("简单请求 - 自动在头信息添加"),e("code",[this._v("Origin")]),this._v("字段")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("下面是一个例子，浏览器发现这次跨域 "),e("code",[this._v("AJAX")]),this._v(" 请求是简单请求，就自动在头信息之中，添加一个"),e("code",[this._v("Origin")]),this._v("字段。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("GET /cors HTTP/1.1\nOrigin: http://api.bob.com\nHost: api.alice.com\nAccept-Language: en-US\nConnection: keep-alive\nUser-Agent: Mozilla/5.0...\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面的头信息中，"),e("code",[this._v("Origin")]),this._v("字段用来说明，本次请求来自哪个域（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("如果"),s("code",[t._v("Origin")]),t._v("指定的源，不在许可范围内，服务器会返回一个正常的 "),s("code",[t._v("HTTP")]),t._v(" 回应。浏览器发现，这个回应的头信息没有包含"),s("code",[t._v("Access-Control-Allow-Origin")]),t._v("字段（详见下文），就知道出错了，从而抛出一个错误，被"),s("code",[t._v("XMLHttpRequest")]),t._v("的"),s("code",[t._v("onerror")]),t._v("回调函数捕获。注意，这"),s("strong",[t._v("种错误无法通过状态码识别")]),t._v("，因为 "),s("code",[t._v("HTTP")]),t._v(" 回应的状态码有可能是"),s("code",[t._v("200")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果"),e("code",[this._v("Origin")]),this._v("指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Access-Control-Allow-Origin: http://api.bob.com\nAccess-Control-Allow-Credentials: true\nAccess-Control-Expose-Headers: FooBar\nContent-Type: text/html; charset=utf-8\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面的头信息之中，有三个与 "),e("code",[this._v("CORS")]),this._v(" 请求相关的字段，都以"),e("code",[this._v("Access-Control-开头")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"（1）access-control-allow-origin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（1）access-control-allow-origin","aria-hidden":"true"}},[this._v("#")]),this._v(" （1）Access-Control-Allow-Origin")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("该字段是必须的。它的值要么是请求时"),e("code",[this._v("Origin")]),this._v("字段的值，要么是一个*，表示接受任意域名的请求。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"（2）access-control-allow-credentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（2）access-control-allow-credentials","aria-hidden":"true"}},[this._v("#")]),this._v(" （2）Access-Control-Allow-Credentials")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("该字段可选。它的值是一个布尔值，表示是否允许发送 "),s("code",[t._v("Cookie")]),t._v("。默认情况下，"),s("code",[t._v("Cookie")]),t._v("不包括在 "),s("code",[t._v("CORS")]),t._v(" 请求之中。设为"),s("code",[t._v("true")]),t._v("，即表示服务器明确许可，浏览器可以把 "),s("code",[t._v("Cookie")]),t._v(" 包含在请求中，一起发给服务器。这个值也只能设为"),s("code",[t._v("true")]),t._v("，如果服务器不要浏览器发送 "),s("code",[t._v("Cookie")]),t._v("，不发送该字段即可。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"（3）access-control-expose-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（3）access-control-expose-headers","aria-hidden":"true"}},[this._v("#")]),this._v(" （3）Access-Control-Expose-Headers")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("该字段可选。"),s("code",[t._v("CORS")]),t._v(" 请求时，"),s("code",[t._v("XMLHttpRequest")]),t._v("对象的"),s("code",[t._v("getResponseHeader()")]),t._v("方法只能拿到"),s("code",[t._v("6")]),t._v("个服务器返回的基本字段：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("Cache-Control")])]),e("li",[e("code",[this._v("Content-Language")])]),e("li",[e("code",[this._v("Content-Type")])]),e("li",[e("code",[this._v("Expires")])]),e("li",[e("code",[this._v("Last-Modified")])]),e("li",[e("code",[this._v("Pragma")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果想拿到其他字段，就必须在"),e("code",[this._v("Access-Control-Expose-Headers")]),this._v("里面指定。上面的例子指定，"),e("code",[this._v("getResponseHeader('FooBar')")]),this._v("可以返回"),e("code",[this._v("FooBar")]),this._v("字段的值。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-2-withcredentials-属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-withcredentials-属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.2 withCredentials 属性")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("上面说到，"),s("code",[t._v("CORS")]),t._v(" 请求默认不包含 "),s("code",[t._v("Cookie")]),t._v(" 信息（以及 "),s("code",[t._v("HTTP")]),t._v(" 认证信息等），这是为了降低 "),s("code",[t._v("CSRF")]),t._v(" 攻击的风险。但是某些场合，服务器可能需要拿到 "),s("code",[t._v("Cookie")]),t._v("，这时需要服务器显式指定"),s("code",[t._v("Access-Control-Allow-Credentials")]),t._v("字段，告诉浏览器可以发送 "),s("code",[t._v("Cookie")]),t._v("。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Access"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("Allow"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("Credentials"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("同时，开发者必须在 "),e("code",[this._v("AJAX")]),this._v(" 请求中打开"),e("code",[this._v("withCredentials")]),this._v("属性。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withCredentials "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("否则，即使服务器要求发送 "),e("code",[this._v("Cookie")]),this._v("，浏览器也不会发送。或者，服务器要求设置 "),e("code",[this._v("Cookie")]),this._v("，浏览器也不会处理。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("但是，有的浏览器默认将"),s("code",[t._v("withCredentials")]),t._v("属性设为true。这导致如果省略"),s("code",[t._v("withCredentials")]),t._v("设置，这些浏览器可能还是会一起发送 "),s("code",[t._v("Cookie")]),t._v("。这时，可以显式关闭"),s("code",[t._v("withCredentials")]),t._v("。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("xhr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withCredentials "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("需要注意的是")]),this._v("，")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("如果服务器要求浏览器发送 "),s("code",[t._v("Cookie")]),t._v("，"),s("code",[t._v("Access-Control-Allow-Origin")]),t._v("就不能设为星号，必须指定明确的、与请求网页一致的域名。")]),s("li",[t._v("同时，"),s("code",[t._v("Cookie")]),t._v(" 依然遵循同源政策，只有用服务器域名设置的"),s("code",[t._v("Cookie")]),t._v(" 才会上传，其他域名的 "),s("code",[t._v("Cookie")]),t._v(" 并不会上传，且（跨域）原网页代码中的"),s("code",[t._v("document.cookie")]),t._v("也无法读取服务器域名下的 "),s("code",[t._v("Cookie")]),t._v("。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4、非简单请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、非简单请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 4、非简单请求")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-1-预检请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-预检请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.1 预检请求")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",[t._v("非简单请求")]),t._v("是那种"),s("strong",[t._v("对服务器提出特殊要求的请求")]),t._v("，比如请求方法是"),s("code",[t._v("PUT")]),t._v("或"),s("code",[t._v("DELETE")]),t._v("，或者"),s("code",[t._v("Content-Type")]),t._v("字段的类型是"),s("code",[t._v("application/json")]),t._v("。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("非简单请求的 "),s("code",[t._v("CORS")]),t._v(" 请求，会在正式通信之前，增加一次 "),s("code",[t._v("HTTP")]),t._v(" 查询请求，称为"),s("code",[t._v("preflight")]),s("strong",[t._v("预检请求")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些 "),e("code",[this._v("HTTP")]),this._v(" 方法和头信息字段。- 只有得到肯定答复，浏览器才会发出正式的"),e("code",[this._v("XMLHttpRequest")]),this._v("请求，否则就报错。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这是为了防止这些新增的请求，对传统的没有 "),e("code",[this._v("CORS")]),this._v(" 支持的服务器形成压力，给服务器一个提前拒绝的机会，这样可以防止服务器收到大量"),e("code",[this._v("DELETE")]),this._v("和"),e("code",[this._v("PUT")]),this._v("请求，这些传统的表单不可能跨域发出的请求。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// HTTP 请求的方法是PUT，并且发送一个自定义头信息X-Custom-Header")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'http://api.alice.com/cors'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("open")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'PUT'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setRequestHeader")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'X-Custom-Header'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'value'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("send")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("浏览器发现，这是一个非简单请求，就自动发出一个“预检”请求，要求服务器确认可以这样请求。下面是这个“预检”请求的 "),e("code",[this._v("HTTP")]),this._v(" 头信息。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("OPTIONS /cors HTTP/1.1\nOrigin: http://api.bob.com\nAccess-Control-Request-Method: PUT\nAccess-Control-Request-Headers: X-Custom-Header\nHost: api.alice.com\nAccept-Language: en-US\nConnection: keep-alive\nUser-Agent: Mozilla/5.0...\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("“预检”请求用的请求方法是"),e("code",[this._v("OPTIONS")]),this._v("，"),e("strong",[this._v("表示这个请求是用来询问的")]),this._v("。头信息里面，关键字段是"),e("code",[this._v("Origin")]),this._v("，表示请求来自哪个源。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("除了"),e("code",[this._v("Origin")]),this._v("字段，“预检”请求的头信息包括两个特殊字段。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"（1）access-control-request-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（1）access-control-request-method","aria-hidden":"true"}},[this._v("#")]),this._v(" （1）Access-Control-Request-Method")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("该字段是必须的，用来列出浏览器的 "),e("code",[this._v("CORS")]),this._v(" 请求会用到哪些 "),e("code",[this._v("HTTP")]),this._v(" 方法，上例是"),e("code",[this._v("PUT")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"（2）access-control-request-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（2）access-control-request-headers","aria-hidden":"true"}},[this._v("#")]),this._v(" （2）Access-Control-Request-Headers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("该字段是一个逗号分隔的字符串，指定浏览器 "),e("code",[this._v("CORS")]),this._v(" 请求会额外发送的头信息字段，上例是"),e("code",[this._v("X-Custom-Header")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-2-预检请求的回应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-预检请求的回应","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.2 预检请求的回应")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Origin")]),e("li",[this._v("Access-Control-Request-Method")]),e("li",[this._v("Access-Control-Request-Headers")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("HTTP/1.1 200 OK\nDate: Mon, 01 Dec 2008 01:15:39 GMT\nServer: Apache/2.0.61 (Unix)\nAccess-Control-Allow-Origin: http://api.bob.com\nAccess-Control-Allow-Methods: GET, POST, PUT\nAccess-Control-Allow-Headers: X-Custom-Header\nContent-Type: text/html; charset=utf-8\nContent-Encoding: gzip\nContent-Length: 0\nKeep-Alive: timeout=2, max=100\nConnection: Keep-Alive\nContent-Type: text/plain\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面的 "),e("code",[this._v("HTTP")]),this._v(" 回应中，关键的是"),e("code",[this._v("Access-Control-Allow-Origin")]),this._v("字段，表示"),e("code",[this._v("http://api.bob.com")]),this._v("可以请求数据。该字段也可以设为星号，表示同意任意跨源请求。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Access-Control-Allow-Origin: *\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果服务器否定了“预检”请求，会返回一个正常的 "),e("code",[this._v("HTTP")]),this._v(" 回应，但是没有任何 "),e("code",[this._v("CORS")]),this._v(" 相关的头信息字段，或者明确表示请求不符合条件。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("OPTIONS http://api.bob.com HTTP/1.1\nStatus: 200\nAccess-Control-Allow-Origin: https://notyourdomain.com\nAccess-Control-Allow-Method: POST\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面的服务器回应，"),e("code",[this._v("Access-Control-Allow-Origin")]),this._v("字段明确不包括发出请求的"),e("code",[this._v("http://api.bob.com")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这时，浏览器就会认定，服务器不同意预检请求，因此触发一个错误，被"),e("code",[this._v("XMLHttpRequest")]),this._v("对象的"),e("code",[this._v("onerror")]),this._v("回调函数捕获。控制台会打印出如下的报错信息。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("XMLHttpRequest cannot load http://api.alice.com.\nOrigin http://api.bob.com is not allowed by Access-Control-Allow-Origin.\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("服务器回应的其他 "),e("code",[this._v("CORS")]),this._v(" 相关字段如下。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Access-Control-Allow-Methods: GET, POST, PUT\nAccess-Control-Allow-Headers: X-Custom-Header\nAccess-Control-Allow-Credentials: true\nAccess-Control-Max-Age: 1728000\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"（1）access-control-allow-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（1）access-control-allow-methods","aria-hidden":"true"}},[this._v("#")]),this._v(" （1）Access-Control-Allow-Methods")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，"),e("strong",[this._v("返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次“预检”请求。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"（2）access-control-allow-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（2）access-control-allow-headers","aria-hidden":"true"}},[this._v("#")]),this._v(" （2）Access-Control-Allow-Headers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果浏览器请求包括"),e("code",[this._v("Access-Control-Request-Headers")]),this._v("字段，则"),e("code",[this._v("Access-Control-Allow-Headers")]),this._v("字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在“预检”中请求的字段。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"（3）access-control-allow-credentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（3）access-control-allow-credentials","aria-hidden":"true"}},[this._v("#")]),this._v(" （3）Access-Control-Allow-Credentials")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"（4）access-control-max-age"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（4）access-control-max-age","aria-hidden":"true"}},[this._v("#")]),this._v(" （4）Access-Control-Max-Age")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("该字段可选，用来指定本次预检请求的有效期，单位为秒。上面结果中，有效期是"),s("code",[t._v("20")]),t._v("天（"),s("code",[t._v("1728000")]),t._v("秒），即允许缓存该条回应"),s("code",[t._v("1728000")]),t._v("秒（即"),s("code",[t._v("20")]),t._v("天），在此期间，不用发出另一条预检请求。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-3-浏览器的正常请求和回应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-浏览器的正常请求和回应","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.3 浏览器的正常请求和回应")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("一旦服务器通过了“预检”请求，以后每次浏览器正常的 "),e("code",[this._v("CORS")]),this._v(" 请求，就都跟简单请求一样，会有一个"),e("code",[this._v("Origin")]),this._v("头信息字段。服务器的回应，也都会有一个"),e("code",[this._v("Access-Control-Allow-Origin")]),this._v("头信息字段。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"“预检”请求后，浏览器的正常-cors-请求。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#“预检”请求后，浏览器的正常-cors-请求。","aria-hidden":"true"}},[this._v("#")]),this._v(" “预检”请求后，浏览器的正常 "),e("code",[this._v("CORS")]),this._v(" 请求。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("PUT /cors HTTP/1.1\nOrigin: http://api.bob.com\nHost: api.alice.com\nX-Custom-Header: value\nAccept-Language: en-US\nConnection: keep-alive\nUser-Agent: Mozilla/5.0...\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面头信息的"),e("code",[this._v("Origin")]),this._v("字段是浏览器自动添加的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"服务器正常的回应。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器正常的回应。","aria-hidden":"true"}},[this._v("#")]),this._v(" 服务器正常的回应。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Access-Control-Allow-Origin: http://api.bob.com\nContent-Type: text/html; charset=utf-8\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面头信息中，"),e("code",[this._v("Access-Control-Allow-Origin")]),this._v("字段是每次回应都必定包含的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_5、与-jsonp-的比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、与-jsonp-的比较","aria-hidden":"true"}},[this._v("#")]),this._v(" 5、与 JSONP 的比较")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("CORS")]),t._v(" 与 "),s("code",[t._v("JSONP")]),t._v(" 的使用目的相同，但是比 "),s("code",[t._v("JSONP")]),t._v(" 更强大。")]),s("li",[s("code",[t._v("JSONP")]),t._v(" 只支持"),s("code",[t._v("GET")]),t._v("请求，"),s("code",[t._v("CORS")]),t._v(" 支持所有类型的 "),s("code",[t._v("HTTP")]),t._v(" 请求。")]),s("li",[s("code",[t._v("JSONP")]),t._v(" 的优势在于支持老式浏览器，以及可以向不支持 "),s("code",[t._v("CORS")]),t._v(" 的网站请求数据。")])])}],!1,null,null,null);e.default=n.exports}}]);
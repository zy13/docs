(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{160:function(e,t,r){},181:function(e,t,r){"use strict";var a=r(160);r.n(a).a},182:function(e,t,r){e.exports=r.p+"assets/img/grid-1.4c262369.png"},261:function(e,t,r){"use strict";r.r(t);var a=[function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"什么是网格布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是网格布局","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是网格布局")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("blockquote",[r("p",[e._v("网格布局将页面分割成数个主要区域，或者用来定义组件元素间大小、位置、图层之间的关系。它和css表格一样，可以按行或者列对齐元素，而且网格子元素可以自己定位，具有重叠和层次。网格分为显示网格和隐士网格："),r("br"),e._v("\n显示网格：通过"),r("code",[e._v("grid-template-columns")]),e._v("(垂直轨道)、"),r("code",[e._v("grid-template-rows")]),e._v("(水平轨道)、"),r("code",[e._v("grid-template-areas")]),e._v("几个属性定义固定的网格线名称和网格轨道。"),r("br"),e._v("\n层级："),r("code",[e._v("z-index")]),e._v("控制层级\n控制顺序："),r("code",[e._v("start、end")]),e._v("的序号")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本概念")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("网格：一个网格是由一组交叉的水平线与垂直线组成-它定义了网格的行和列。网格元素可以放在这些行和列中。"),t("br"),this._v("\n网格轨道：一个网格轨道就是任意相交的两条线之间的空间，包括垂直(列)轨道和水平(行)轨道。"),t("br"),this._v("\n网格容器：由元素"),t("code",[this._v("display:grid;")]),this._v("属性定义的元素。"),t("br"),this._v("\nfr单位：分数单位轨道，用于创建灵活网格。1fr表示网格可用空间的一等分，轨道会随着可用空间而增长或者收缩。"),t("br"),this._v("\n网格线：行网格线从上到下，列网格线从左到右。"),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点","aria-hidden":"true"}},[this._v("#")]),this._v(" 特点")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("通过给元素声明"),r("code",[e._v("display:grid/inline-grid;")]),e._v("来创建网格,元素下面的所有直系子元素将成为网格元素")]),r("li",[e._v("通过"),r("code",[e._v("grid-template-columns")]),e._v("和"),r("code",[e._v("grid-template-rows")]),e._v("定义网格的轨道(行和列),单位可以用分数单位fr以及绝对单位px")]),r("li",[r("code",[e._v("grid-template-columns/row")]),e._v("值：值的个数定义了列/行的个数与宽度/高度")]),r("li",[e._v("fr将网格分为等分空间，"),r("code",[e._v("1fr 1fr")]),e._v("分为两等份，"),r("code",[e._v("2fr 1fr 1fr")]),e._v("分为四等份")]),r("li",[r("code",[e._v("repeat()")]),e._v("用于标记重复的网格轨道或者整个网格列表，例如"),r("code",[e._v("grid-template-columns:1fr 1fr 1fr;")]),e._v("可以写成"),r("code",[e._v("grid-template-columns:repeat(3,1fr);")]),e._v(", "),r("code",[e._v("grid-template-columns:200px 1fr 1fr;")]),e._v("可以写成"),r("code",[e._v("grid-template-columns:200px repeat(2,1fr);")]),e._v(",所以repeat只能重复相等的轨道。第一个参数为数字，为重复次数，第二/三/...个参数为轨道排列")]),r("li",[r("code",[e._v("minmax()")]),e._v("函数定义轨道的最小和最大尺寸，例如"),r("code",[e._v("minmax(100px,auto)")])]),r("li",[e._v("跨轨道放置网格元素："),r("code",[e._v("grid-column-start、grid-column-end、grid-row-start、grid-row-end")])]),r("li")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("blockquote",[r("p",[e._v("显式网格属性："),r("code",[e._v("grid-template-columns")]),e._v("、"),r("code",[e._v("grid-template-rows")]),e._v("、"),r("code",[e._v("grid-template-areas")]),r("br"),e._v("\n隐式网格属性："),r("code",[e._v("grid-auto-columns")]),e._v("、"),r("code",[e._v("grid-auto-rows")]),e._v("、"),r("code",[e._v("grid-auto-flow")]),r("br"),e._v("\n间距属性："),r("code",[e._v("grid-row-gap")]),e._v("、"),r("code",[e._v("grid-columns-gap")]),r("br"),r("code",[e._v("grid")]),e._v(": 是一个CSS简写属性，可以用来设置grid开头的属性，例如显式网格属性、隐式网格属性和间距属性")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(182),alt:"avatar"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("IE浏览器不支持css grid，所以grid网格布局适合手机端，不适合pc端")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[this._v("#")]),this._v(" demo")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"附录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附录","aria-hidden":"true"}},[this._v("#")]),this._v(" 附录")])}],i=(r(181),r(0)),s=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h3",{attrs:{id:"网格布局"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网格布局","aria-hidden":"true"}},[e._v("#")]),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",target:"_blank",rel:"noopener noreferrer"}},[e._v("网格布局"),r("OutboundLink")],1)]),e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),r("h4",{attrs:{id:"浏览器兼容性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容性","aria-hidden":"true"}},[e._v("#")]),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器兼容性"),r("OutboundLink")],1)]),e._m(8),e._m(9),e._m(10),r("ul",[r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/33033110",target:"_blank",rel:"noopener noreferrer"}},[e._v("css grid构建首页布局"),r("OutboundLink")],1)]),r("li",[r("a",{attrs:{href:"https://gridbyexample.com/examples/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gridbyexample"),r("OutboundLink")],1)])]),e._m(11),r("blockquote",[r("p",[r("a",{attrs:{href:"https://www.w3cplus.com/css3/difference-explicit-implicit-grids.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("显性网格与隐性网格"),r("OutboundLink")],1)])])])},a,!1,null,null,null);t.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{187:function(e,c,t){},290:function(e,c,t){"use strict";var l=t(187);t.n(l).a},513:function(e,c,t){"use strict";t.r(c);t(59),t(22),t(49);var l={data:function(){return{inputValue:"",list:[{id:1,title:"残酷月光 - 费启鸣",checked:!1,collect:!0},{id:2,title:"兄弟 - 艾热",checked:!0,collect:!1},{id:3,title:"毕生 - 夏增祥",checked:!0,collect:!0},{id:4,title:"公子向北去 - 李春花",checked:!1,collect:!1},{id:5,title:"战场 - 沙漠五子",checked:!0,collect:!1}]}},methods:{clickEvent:function(e,c){switch(c){case"check":e.checked=!e.checked;break;case"collect":e.collect=!0;break;case"cancelCollect":e.collect=!1;break;case"remove":this.list.splice(this.list.indexOf(e),1)}},checkAll:function(e){this.list=this.list.map(function(c){return c.checked=e.target.checked,c})},remove:function(){this.list=this.list.filter(function(e){return!e.checked})},add:function(){this.inputValue&&this.list.push({id:this.list.length+1,title:this.inputValue,checked:!1,collect:!1})}}},i=(t(290),t(1)),n=Object(i.a)(l,function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",[t("div",[t("ul",e._l(e.list,function(c){return t("li",{key:c.id},[t("input",{staticClass:"check",attrs:{type:"checkbox"},domProps:{checked:c.checked},on:{click:function(t){e.clickEvent(c,"check")}}}),t("span",[e._v(e._s(c.title))]),t("a",{class:c.collect?"cancelCollect":"collect",on:{click:function(t){e.clickEvent(c,c.collect?"cancelCollect":"collect")}}},[e._v(e._s(c.collect?"取消收藏":"收藏"))]),t("a",{staticClass:"remove",on:{click:function(t){e.clickEvent(c,"remove")}}},[e._v("删除")])])})),t("footer",[t("label",[t("input",{attrs:{type:"checkbox",id:"checkAll"},on:{click:e.checkAll}}),e._v("\n        全选/全不选\n      ")]),t("a",{attrs:{id:"remove"},on:{click:e.remove}},[e._v(" 删除")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],attrs:{type:"text",id:"newInfo"},domProps:{value:e.inputValue},on:{input:function(c){c.target.composing||(e.inputValue=c.target.value)}}}),t("a",{attrs:{id:"add"},on:{click:e.add}},[e._v("添加")])])])])},[],!1,null,null,null);c.default=n.exports}}]);
module.exports = {
  title: "zy's docs",
  description: "Welcome!",
  base: '/docs/',
  port: 8000,
  head: [
    ['limk', {
      rel: 'icon',
      href: `/logo.png`
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#ccc'
    }]
  ],
  themeConfig: {
    nav: [{
        text: '高级前端',
        link: '/kkb/'
      },
      {
        text: '前端资源',
        link: '/resource/'
      },
      // {
      //   text: '全栈进阶',
      //   link: '/full-stack/'
      // },
      // {
      //   text: '算法',
      //   link: '/algorithm/'
      // },
      {
        text: 'JavaScript深入简出',
        link: '/javascript/'
      },
      {
        text: 'JavaScript教程(ES5)-网道',
        link: '/javascript-wd/'
      },
      {
        text: 'JavaScript高级程序设计(第四版) - 学习笔记',
        link: '/javascript-4v/'
      },
      {
        text: 'HTTP权威指南',
        link: '/http/'
      },
      // {text: 'categories', link: '/categories/'},
      // {text: 'components', link: '/components/'},
    ],
    sidebar: {
      '/kkb/': [{
          title: '第一章 ECMAScript6基础',
          collapsable: true,
          children: [
            ['1-ECMAScript6/1-es6-base.md', '第1节 ECMAScript6基础']
          ]
        },
        {
          title: '第二章 面向对象编程',
          collapsable: true,
          children: [
            ['2-object-oriented/1-object.md', '第1节 对象、构造函数、原型-ES5'],
            ['2-object-oriented/2-object.md', '第2节 类及其继承、模块化-ES6'],
            ['2-object-oriented/3-design-mode.md', '第3节 设计模式'],
            ['2-object-oriented/4-components.md', '第4节 组件'],
            ['2-object-oriented/5-jquery.md', '第5节 jquery插件'],
          ]
        },
        {
          title: '第四章 正则表达式',
          collapsable: true,
          children: [
            // ['4-reg-exp/reg-exp.md', '正则表达式']
          ]
        },
        {
          title: '第五章 ES6高阶函数',
          collapsable: true,
          children: [
            ['5-es6-higher/1-async.md', '第1节 异步专题'],
            ['5-es6-higher/2-data.md', '第2节 数据响应式原理'],
            ['5-es6-higher/3-promise.md', '第3节 Promise原理'],
          ]
        },
        {
          title: '第六章 Git',
          collapsable: true,
          // children: [
          //   ['6-git/1-base', '第1节 git基础']
          // ]
        },
        {
          title: '第七章 函数式编程',
          collapsable: true,
          children: [
            // ['7-function-coding/1-base', '第1节 git基础']
          ]
        },
        {
          title: '第八章 Node.js',
          collapsable: true,
          children: [
            ['8-nodejs/1-webServer', '第1节 搭建webServer'],
            ['8-nodejs/2-koa', '第2节 koa框架'],
            ['8-nodejs/3-mysql', '第3节 koa连接mysql'],
            ['8-nodejs/4-authorization', '第4节 文件上传与用户鉴权'],
          ]
        },
        {
          title: '第九章 前后端交互',
          collapsable: true,
          children: [
            ['9-ajax/1-ajax.md', '第1节 ajax之XMLHttpRequest和Fetch'],
            ['9-ajax/2-cors-jwt.md', '第2节 ajax跨域和jwt'],
            ['9-ajax/3-axios.md', '第3节 axios.js库'],
            ['9-ajax/4-websocket.md', '第4节 websocket实现即时聊天系统'],
          ]
        },
        {
          title: '第十章 客户端存储',
          collapsable: true,
          children: [
            ['10-client-store/client-store.md', '客户端存储']
          ]
        },
        {
          title: '第十一章 webpack',
          collapsable: true,
          children: [
            ['11-webpack/1-modules.md', '第1节 模块化'],
            ['11-webpack/2-webpack-base.md', '第2节 webpack核心配置'],
            ['11-webpack/3-webpack-plugins.md', '第3节 webpack之pugins配置'],
            ['11-webpack/problems.md', 'Webpack 问题集锦'],
          ]
        },
        {
          title: '第十二章 TypeScript',
          collapsable: true,
          children: [
            // ['12-typescript/ts.md', 'Typescript'],
          ]
        },
        {
          title: '第十三章 Vue',
          collapsable: true,
          children: [
            ['13-vue/1-vue2.x-1.md', '第1节 vue基础'],
            ['13-vue/2-components-lifecycle.md', '第2节 组件基础-生命周期'],
            ['13-vue/3-vueCli-SFC-CT.md', '第3节 vue-cli-单文件组件-组件测试'],
            ['13-vue/4-vue-router.md', '第4节 vue-router'],
            ['13-vue/5-vuex.md', '第5节 vuex'],
            ['13-vue/6-project-vue-vueRouter-vuex.md', '第6节 项目应用-vue-vuerouter-vuex'],
            ['13-vue/7-vue3.x.md', '第7节 vue3.x基础'],
            ['13-vue/problems.md', 'vue 问题集锦'],
          ]
        },
        {
          title: '第十四章 React',
          collapsable: true,
          children: [
            ['14-react/1-react-base.md', '第1节 react基础-1'],
            ['14-react/2-component-lifecycle.md', '第2节 组件通信和生命周'],
            ['14-react/3-react-base.md', '第3节 react基础-2'],
          ]
        },
        {
          title: '第十八章 移动端专题',
          collapsable: true,
          children: [
            ['18-mobile/1-mobile.md','第1节 移动端-适配'],
            ['18-mobile/2-mobile-event.md','第2节 移动端-事件'],
            ['18-mobile/3-mobile.md','第3节 移动端-综合-⭐'],
          ]
        },
        {
          title: '第二十一章 微信小程序',
          collapsable: true,
          children: [
            ['21-wx/1-wx.md','第1节 小程序基础_1'],
            ['21-wx/2-wx.md','第2节 小程序基础_2'],
            ['21-wx/3-wx.md','第3节 应用场景&云开发'],
            ['21-wx/4-wx.md','第4节 底层框架&性能优化&发布'],
          ]
        }
      ],
      '/resource/': [{
        collapsable: false,
        children: [
          ['link','☆-线上资源链接'],
          // ['1-projects','一、项目'],
          ['http', '☆-HTTP协议'],
          ['cache', '☆-HTTP缓存体系'],
          ['css','☆-CSS&HTML'],
          ['javascript','☆-JavaScript'],
          ['react','☆-react'],
          ['vue','☆-vue'],
          ['bs','☆-浏览器'],
          ['http-1','☆-http'],
          ['coding','☆-手撕代码'],
          // ['frontEnd', '1、前端资源'],
          // ['browser', '2、浏览器相关'],
          // ['javascript', '3、javascript相关'],
          // ['code', '4、手撕代码'],
          // ['http', '5、http相关'],
          // ['www','6、网络资源'],
          // ['tikTop.md','7、字节跳动'],
        ]
      }],
      '/full-stack': [],
      '/algorithm': [],
      '/javascript-wd/': [
        {
          title: '第一章 数据类型',
          collapsable: true,
          children: [
            ['1-ES5/1-datatype.md','第一节 JavaScript 的基本语法'],
            ['1-ES5/2-intro.md','第二节 数据类型概述'],
            ['1-ES5/3-null-undefined-boolean.md', '第三节 null, undefined 和 boolean'],
            ['1-ES5/4-number.md', '第四节 number 数值'],
            ['1-ES5/5-string.md', '第五节 string 字符串'],
            ['1-ES5/6-object.md', '第六节 object 对象'],
            ['1-ES5/7-function.md', '第七节 function 函数'],
            ['1-ES5/8-array.md', '第八节 array 数组'],
            ['1-ES5/9-conclusion.md', '第九节 小结-♥'],
          ]
        },
        {
          title: '第二章 运算符',
          collapsable: true,
          children: [
            ['2-operator/1-algorism.md','第一节 算术运算符'],
            ['2-operator/2-comparison.md','第二节 比较运算符'],
            ['2-operator/3-boolean.md','第三节 布尔运算符'],
            ['2-operator/4-binary.md','第四节 二进制位运算符'],
            ['2-operator/5-other.md','第五节 其它运算符，运算顺序'],
            ['2-operator/6-instanceof.md','第六节 instanceof运算符'],
          ]
        },
        {
          title: '第三章 语法专题',
          collapsable: true,
          children: [
            ['3-syntax/1-type-toggle.md','第一节 数据类型的转换 - ♥'],
            ['3-syntax/2-error.md','第二节 错误处理机制'],
            ['3-syntax/3-coding-style.md','第三节 编程风格'],
            ['3-syntax/4-console.md','第四节 console 对象与控制台'],
            ['3-syntax/5-strict.md','第五节 严格模式'],
          ]
        },
        {
          title: '第四章 标准库',
          collapsable: true,
          children: [
            ['4-standard/1-object.md','第一节 Object对象'],
            ['4-standard/2-object.md','第二节 属性描述对象'],
            ['4-standard/3-array.md','第三节 Array对象'],
            ['4-standard/4-packing.md','第四节 包装对象'],
            ['4-standard/5-boolean.md','第五节 Boolean对象'],
            ['4-standard/6-number.md','第六节 Number对象'],
            ['4-standard/7-string.md','第七节 String对象'],
            ['4-standard/8-math.md','第八节 Math对象'],
            ['4-standard/9-date.md','第九节 Date对象'],
            ['4-standard/10-regexp.md','第十节 RegExp对象'],
            ['4-standard/11-json.md','第十一节 JSON对象'],
          ]
        },
        {
          title: '第五章 面向对象编程',
          collapsable: true,
          children: [
            ['5-oop/1-instance-object.md', '第一节 实例对象和new命令'],
            ['5-oop/2-this.md', '第二节 this关键字 - ♥'],
            ['5-oop/3-obj-inherit.md', '第三节 对象的继承 - ♥'],
            ['5-oop/4-obj-methods.md', '第四节 Object对象的相关方法'],
          ]
        },
        {
          title: '第六章 异步操作',
          collapsable: true,
          children: [
            ['6-async/1-intro.md', '第一节 异步操作概述 - ♥'],
            ['6-async/2-timer.md', '第二节 定时器 - ♥'],
            ['6-async/3-Promise.md', '第三节 Promise对象-ES6 - ♥'],
          ]
        },
        {
          title: '第七章 DOM',
          collapsable: true,
          children: [
            ['7-DOM/1-intro.md', '第1节 DOM概述'],
            ['7-DOM/2-Node.md', '第2节 Node接口'],
            ['7-DOM/3-NodeList-HTMLCollection.md', '第3节 NodeList 接口，HTMLCollection 接口'],
            ['7-DOM/4-parent-child.md', '第4节 ParentNode 接口，ChildNode 接口'],
            ['7-DOM/5-document.md', '第5节 Document 节点'],
            ['7-DOM/6-element.md', '第6节 Element 节点'],
            ['7-DOM/7-attribute.md', '第7节 属性的操作'],
            ['7-DOM/8-txt-df.md', '第8节 Text节点和DocumentFragment节点'],
            ['7-DOM/9-css.md', '第9节 CSS 操作'],
            ['7-DOM/10-mutation-observer.md', '第10节 Mutation Observer API - ♥'],
          ]
        },
        {
          title: '第八章 事件',
          collapsable: true,
          children: [
            ['8-events/1-EventTarget.md', '第1节 EventTarget 接口'],
            ['8-events/2-mode.md', '第2节 事件模型'],
            ['8-events/3-event.md', '第3节 Event对象'],
            ['8-events/4-mouse-event.md', '第4节 鼠标事件'],
            ['8-events/5-keyboard.md', '第5节 键盘事件'],
            ['8-events/6-progress.md', '第6节 进度事件'],
            ['8-events/7-form.md', '第7节 表单事件'],
            ['8-events/8-touch.md', '第8节 触摸事件'],
            ['8-events/9-drag.md', '第9节 拖拉事件'],
            ['8-events/10-source.md', '第10节 资源事件'],
            ['8-events/11-session.md', '第11节 session 历史事件'],
            ['8-events/12-page.md', '第12节 网页状态事件'],
            ['8-events/13-window.md', '第13节 窗口事件'],
            ['8-events/14-other.md', '第14节 其他事件'],
            ['8-events/15-global.md', '第15节 GlobalEventHandlers 接口'],
          ]
        },
        {
          title: '第九章 浏览器模型',
          collapsable: true,
          children: [
            ['9-BOM/1-intro.md', '第1节 浏览器模型概述 - ♥'],
            ['9-BOM/2-window.md', '第2节 window对象 - ♥'],
            ['9-BOM/3-ns.md', '第3节 Navigator 对象，Screen 对象'],
            ['9-BOM/4-cookie.md', '第4节 Cookie  - ♥'],
            ['9-BOM/5-xhr.md', '第5节 XMLHttpRequest 对象 - ♥'],
            ['9-BOM/6-corsl.md', '第6节 同源限制 - 跨域汇总 - ♥'],
            ['9-BOM/7-cors.md', '第7节 CORS 通信 - 根本解决方法 - ♥'],
            ['9-BOM/8-storage.md', '第8节 Storage 接口 - ♥'],
            ['9-BOM/9-history.md', '第9节 History 对象'],
            ['9-BOM/10-luu.md', '第10节 Location 对象，URL 对象，URLSearchParams 对象'],
            ['9-BOM/11-ab.md', '第11节 ArrayBuffer 对象，Blob 对象'],
            ['9-BOM/12-fff.md', '第12节 File 对象，FileList 对象，FileReader 对象 - ♥'],
            ['9-BOM/13-fd.md', '第13节 表单，FormData 对象 - ♥'],
            ['9-BOM/14-IndexedDB.md', '第14节 IndexedDB API'],
            ['9-BOM/15-webWorker.md', '第15节 Web Worker'],
            ['9-BOM/16-code.md', '第16节 手撕代码  - ♥'],
          ]
        },
        {
          title: '附录：网页元素接口',
          collapsable: true,
          children: [
            ['HTML/1-a.md','<a>']
          ]
        }
      ],
      '/javascript-4v/': [
        {
          // title: '第一章 JavaScript简介',
          collapsable: false,
          children: [
            ['1', '第1节 JavaScript基础']
          ]
        }
      ],
      '/http/': [
        {
          title: '第一部分 HTTP：Web 的基础',
          collapsable: true,
          children: [
            ['part-1/1-base.md','第1章 Web 的基础'],
            ['part-1/4-connect.md','第4章 连接管理 - ♥'],
          ]
        },
        {
          title: '第二部分 HTTP 结构',
          collapsable: true,
          children: [
            ['part-2/8-gateway.md','第8章 集成点：网关、隧道及中继'],
          ]
        }
      ],
      // '/categories/': [
      //   {
      //     title: 'html',
      //     collapsable: true,
      //     children: [
      //       ['html/input', 'input']
      //     ]
      //   }, 
      //   {
      //     title: 'javascript',
      //     collapsable: true,
      //     children: [
      //       ['javascript/DOM', 'dom'],
      //       ['javascript/apply-call', 'apply-call']
      //     ]
      //   }, 
      //   {
      //     title: 'css',
      //     collapsable: true,
      //     children: [
      //       ['css/css', 'css'],
      //       ['css/flex', 'flex'],
      //       ['css/grid', 'grid']
      //     ]
      //   },
      //   {
      //     title: 'plugins',
      //     collapsable: true,
      //     children: [
      //       ['plugins/axios', 'axios'],
      //       ['plugins/uedit', 'uedit'],
      //       ['plugins/webuploader', 'webuploader']
      //     ]
      //   },
      //   {
      //     title: 'node',
      //     collapsable: true,
      //     children: [
      //       ['node/node', 'node'],
      //       ['node/svg-captcha-npm', 'svg-captcha'],
      //       ['node/form-data-npm', 'form-data'],
      //       ['node/koa-multer-npm', 'koa-multer'],
      //       ['node/glob-npm', 'glob'],
      //       ['node/npm', 'npm'],
      //       ['node/more-module', 'more']
      //     ]
      //   },
      //   {
      //     title: 'webpack',
      //     collapsable: true,
      //     children: [
      //       ['webpack/webpack', 'webpack']
      //     ]
      //   },
      //   {
      //     title: 'gulp',
      //     collapsable: true,
      //     children: [
      //       ['gulp/gulp', 'gulp']
      //     ]
      //   },
      //   {
      //     title: 'vue',
      //     collapsable: true,
      //     children: [
      //       ['vue/vue-cli', 'vue-cli']
      //     ]
      //   },
      //   // {
      //   //   title: 'react',
      //   //   collapsable: true,
      //   //   children: [
      //   //     // ['react/demo', 'demo']
      //   //   ]
      //   // },
      //   {
      //     title: 'weixin',
      //     collapsable: true,
      //     children: [
      //       ['weixin/weixin', 'weixin'],
      //       ['weixin/framework', 'framework'],
      //       ['weixin/wxml', 'wxml'],
      //       ['weixin/wxss', 'wxss']
      //     ]
      //   },
      //   {
      //     title: 'mobile',
      //     collapsable: true,
      //     children: [
      //       ['mobile/fontSize', 'fontSize']
      //     ]
      //   },
      //   {
      //     title: 'tool',
      //     collapsable: true,
      //     children: [
      //       ['tool/vscode', 'vscode'],
      //       ['tool/gitKraken', 'gitKraken'],
      //       ['tool/Postman', 'postman'],
      //       ['tool/more', 'more']
      //     ]
      //   },
      //   {
      //     title: 'seo',
      //     collapsable: true,
      //     children: [
      //       ['seo/seo', 'seo']
      //     ]
      //   }
      // ],
      // '/components/': [
      //   {
      //     collapsable: false,
      //     children: [
      //       ['loading', 'loading'],
      //       ['form', 'form'],
      //       ['layout-flex', 'flex']
      //     ]
      //   }
      // ]
    }
  }
}
module.exports = {
  title: "zy's docs",
  description: "Welcome!",
  base: '/docs/',
  port: 8000,
  head: [
    ['limk', { rel: 'icon', href: `/logo.png`}],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#ccc' }]
  ],
  themeConfig: {
    nav: [
      {text: 'categories', link: '/categories/'},
      {text: 'components', link: '/components/'},
      {text: 'more', link: '/more/'},
      {text: 'album', link: '/album/'},
      {text: 'book', link: '/book/'},
      {text: 'gk', link: '/gk/'},
      {text: 'fdy', link: '/fdy/'},
      {text: 'qd', link: '/qd/'},
      {text: 'my', link: '/my/'},
    ],
    sidebar: {
      '/categories/': [
        {
          title: 'javascript',
          collapsable: true,
          children: [
            ['javascript/DOM', 'dom'],
            ['javascript/apply-call', 'apply-call']
          ]
        }, 
        {
          title: 'css',
          collapsable: true,
          children: [
            ['css/css', 'css'],
            ['css/flex', 'flex'],
            ['css/grid', 'grid']
          ]
        },
        {
          title: 'plugins',
          collapsable: true,
          children: [
            ['plugins/axios', 'axios'],
            ['plugins/uedit', 'uedit'],
            ['plugins/webuploader', 'webuploader']
          ]
        },
        {
          title: 'node',
          collapsable: true,
          children: [
            ['node/node', 'node'],
            ['node/svg-captcha-npm', 'svg-captcha'],
            ['node/form-data-npm', 'form-data'],
            ['node/koa-multer-npm', 'koa-multer'],
            ['node/glob-npm', 'glob'],
            ['node/npm', 'npm'],
            ['node/more-module', 'more']
          ]
        },
        {
          title: 'webpack',
          collapsable: true,
          children: [
            ['webpack/webpack', 'webpack']
          ]
        },
        {
          title: 'gulp',
          collapsable: true,
          children: [
            ['gulp/gulp', 'gulp']
          ]
        },
        {
          title: 'vue',
          collapsable: true,
          children: [
            ['vue/vue-cli', 'vue-cli']
          ]
        },
        // {
        //   title: 'react',
        //   collapsable: true,
        //   children: [
        //     // ['react/demo', 'demo']
        //   ]
        // },
        {
          title: 'weixin',
          collapsable: true,
          children: [
            ['weixin/weixin', 'weixin'],
            ['weixin/framework', 'framework'],
            ['weixin/wxml', 'wxml'],
            ['weixin/wxss', 'wxss']
          ]
        },
        {
          title: 'mobile',
          collapsable: true,
          children: [
            ['mobile/fontSize', 'fontSize']
          ]
        },
        {
          title: 'tool',
          collapsable: true,
          children: [
            ['tool/vscode', 'vscode'],
            ['tool/gitKraken', 'gitKraken'],
            ['tool/Postman', 'postman'],
            ['tool/more', 'more']
          ]
        },
        {
          title: 'seo',
          collapsable: true,
          children: [
            ['seo/seo', 'seo']
          ]
        }
      ],
      '/components/': [
        {
          collapsable: false,
          children: [
            ['loading', 'loading'],
            ['form', 'form'],
            ['layout-flex', 'flex']
          ]
        }
      ],
      '/more/': [
        {
          collapsable: false
        }
      ],
      '/book/': [
        {
          collapsable: false,
          children: [
            ['human-weakness','人性的弱点']
          ]
        }
      ],
      '/fdy/': [
        {
          collapsable: false,
          children: [
            ['00', '00考前须知'],
            ['01', '01政策文件'],
            ['02', '02重要讲话'],
            ['03', '03最新真题'],
            ['04', '04专业知识'],
            ['05', '05案例分析'],
            ['06', '06时政及党团知识'],
            ['07', '07模拟试卷'],
            ['08', '08应用写作'],
            ['09', '09公共基础知识'],
            ['10', '10高等教育学心理学法律法规'],
            ['11', '11书籍推荐'],
            ['12', '12行测申论'],
            ['13', '13职业教育'],
            ['14', '14其他内容'],
            ['15', '15疫情应对'],
            ['16', '16职业技能大赛']
          ]
        }
      ],
      '/gk/': [
        {
          collapsable: false,
          children: [
            ['a', 'a'],
            ['00', '00'],
          ]
        }
      ],
      '/qd/': [
        {
          collapsable: false,
          children: [
            ['vue', 'vue'],
            ['react', 'react'],
            // ['javascript', 'javascript'],
            // ['node', 'node.js'],
            // ['http', 'http'],
            // ['ajax', 'ajax'],
            // ['axio', 'axio'],
            // ['jquery', 'jquery'],
            // ['project', 'project'],
            // ['performance', '性能优化.js'],
          ]
        }
      ],
      '/my/': [
        {
          collapsable: false,
          children: [
            ['performance', 'performance'],
            ['projects', 'projects'],
            ['bank', 'bank'],
          ]
        }
      ]
    }
  }
}
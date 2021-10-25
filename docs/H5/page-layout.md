## 1. loading组件

<loading></loading>

### 1）使用方式一

* 通过脚本生成loading组件

```js
import tpl from './loading.vue'
import Vue from 'vue'

const loading = {
  open () {
    const LoadingConstructor = Vue.extend(tpl)
    const instance = new LoadingConstructor().$mount(document.createElement('div'))
    document.body.appenChild(instance.$el)
  },
  close () {
    $('body>.loading').remove()
  }
}

export default loading
```

* 引用
```js
import loading from 'loading.js'

loading.open() // 开启
loading.close() // 关闭

```

### 2）使用方法二

* 开启

```html
<loading v-show='true'></loading>
```

* 关闭
```html
<loading v-show='false'></loading>
```

* html
```html
<div class='loading'>
  <div class="spinner">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
</div>
```

* 样式/less/sass
```less
.loading{
  position: fixed;
  top: 0px;
  bottom:0px;
  left: 0px;
  right: 0px;
  z-index: 9999999;
  .spinner{
    width: 150px;
    text-align: center;
    margin: auto;
    position: relative;
    top: 50%;
    div {
      width: 30px;
      height: 30px;
      background-color: #293E98;

      border-radius: 100%;
      display: inline-block;
      -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
      animation: bouncedelay 1.4s infinite ease-in-out;
      /* Prevent first frame from flickering when animation starts */
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }

    .bounce1{
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }

    .bounce2{
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
  }
}

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
```

## 3. 下拉分页插件

* 安装
  ```js
  npm i minirefresh -D
  ```

* html
  ```pug
  #minirefresh.minirefresh-wrap
    .minirefresh-scroll
      .my-container 
      <!-- 内容 -->
  ```
* 引用
  ```js
  import 'minirefresh/dist/debug/minirefresh.css'
  import 'minirefresh'

  (async () => {
    refreshPage()
  })()

  /**
   * 下拉刷新页面
  */
  function refreshPage() {
    let currentPage = 1
    let minirefresh = new MiniRefresh({
      container: '#minirefresh',
      isScrollBar: false,
      down: {
        isLock: true
      },
      up: {
        isAuto: false,
        callback: async function (e) {
          const container = $('#items-container');
          const compiled = require('./render/list.pug');
          const rs = await getProductList({post: getParams(++currentPage)})
          list = list.concat(rs.result.list)
          container.innerHTML = compiled({ list })

          if (list.length === rs.result.total) {
            minirefresh.endUpLoading(true)
          } else {
            minirefresh.endUpLoading()
          }
        }
      }
    })
  }
  ```  

## 4. tag切换

```sass
.active{
  position: relative;
  &::after{
    content: '';
    width: 100%;
    border-bottom: .06rem solid #55008f;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
```


## 5. 上下三角形

```sass

.item{
  <!-- 下三角 -->
  &::after{
    content: "";
    border: .07rem solid #999;
    border-right-color: transparent;
    border-left-color: transparent;
    position: relative;
    top: .18rem;
    left: .08rem;
    border-radius: .02rem;
    border-bottom: none;
  }
  <!-- 上三角 -->
  &.active::after{
    content: "";
    border: .07rem solid #2675ff;
    border-right-color: transparent;
    border-left-color: transparent;
    position: relative;
    top: .18rem;
    left: .08rem;
    border-radius: .02rem;
    border-top: none;
    top: -.16rem; 
  }
}
```

## 6. 规则布局
![avatar](./img/layout-1.png)
```sass
.top-contianer{
  display: flex;
  justify-content: space-between;
  padding: 0 .2rem;
  .item{
    width: 1.9rem;
    padding: .16rem 0;
  }
}
.bottom-container{
  display: flex;
  justify-content: space-between;
  padding: 0 .2rem .2rem;
  .left-container{
    width: 3.95rem;
  }
  .right-container{
    width: 1.9rem;
  }
}
```

## 7. 设置字体比例 px -> rem
```sass
html {
  height: 100%;
  //font-family: 'SimSun, Helvetica';
  font-size: calc(100vw / 6.4);
  font-family:'PingFang SC',Arial, Helvetica, sans-serif;
  transition: opacity .1s;
}

body {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 640px;
  margin: 0 auto;
  font-size: 14px;
  background: #fff;
  -webkit-overflow-scrolling: touch;
}
```

## 8. 设置文字行数

* 设置一行
```sass
width: 1rem;
word-break: keep-all;
white-space: nowrap;
overflow: hidden;
text-overflow: hidden;
```

* 设置多行
```sass
@mixin ellipsis($number: 1) {
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $number;
  -webkit-box-orient: vertical;
}
```


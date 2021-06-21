# loading

## Demo

<loading v-show='true'></loading>

## 使用方式一

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

## 使用方式二

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
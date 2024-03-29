## 1、概要
### 主要内容
- 在`koa`中`cookie`的使用方式
- 客户端`cookie`的使用方式
- `localStorage`及`sessionStorage`使用
- 各种本地存储的异同

### 目标

- 学会`cookie`在服务端及客户端的使用方式
- 会使用`localStorage`及`sessionStorage`做数据的持久化
- 了解各种本地存储的异同

### 客户端储存方案

- **服务端储存**
  - 服务端文件储存
  - 内存
  - 数据库：`mysql`、`mongoodb`、`Oracle`等等。

- **客户端储存(离线储存)**
  - 浏览器

## 2、服务端 cookie
`cookie`是`http`协议下，服务端或者脚本可以维护客户端信息的一种方式。
- 服务端能够自动获取客户端请求头携带的所有cookie
- 客户端通过响应头的 `set-cookie` 获取服务端的 cookie
### koa 中 cookie 的使用

```js
// 储存 cookie 的值
ctx.cookies.set(name, value, [options])

// 获取cookie的值
ctx.cookies.get(name, [options])
```
**options 常用设置**
- `maxAge` 一个数字表示从 `Date.now()` 得到的毫秒数
- `expires` cookie 过期的 `Date`
- `path` cookie 路径, 默认是`'/'`
- `domain` cookie 域名
- `secure` 安全 cookie  设置后只能通过 https 来传递 cookie
- `httpOnly` 服务器可访问 cookie, 默认是 **true**
- `overwrite` 一个布尔值，表示是否覆盖以前设置的同名的 cookie. 
  - 默认是 `false`
  - 如果是 `true`, 在同一个请求中设置相同名称的所有 cookie
  
## 3、应用一：登录案例
- 验证用户名密码是否正确；
- 实现登录功能，通过记住我实现七天免登录；
```js
// app.js

// 登录路由
router.get('/login', async ctx => {
  const isLogin = ctx.cookies.get('isLogin')
  if (isLogin) {
    const serverData = md5('abc'+'123')
    if (isLogin === serverData) {
      await ctx.redirect('/list')
    }
  }
  await ctx.render('login.pug')
})

// 验证用户账号密码
router.post('/checkUser',async ctx => {
  const {username,pwd, memberMe} = ctx.request.body
  if (username === 'abc' && pwd === '123') {
    // 记住我
    if (memberMe) {
      const isLogin = md5('abc' + '123') 
      ctx.cookies.set('isLogin',isLogin, {
        maxAge: 3600*1000*24*7 // 七天，服务端时间单位为ms
      })
    }
    ctx.redirect('/list')
  } else {
    ctx.redirect('/error')
  }
})
```

## 4、客户端的 cookie


**浏览器端 cookie**

0. 通过document.cookie获取所有cookie
1. 如果不设置过期时间，那么用户退出浏览器时，cookie就会失效
2. 如果设置了过期时间，那么cookie就会在过期时间后失效
3. cookie会和服务端进行通信，也就是每次发送请求时，请求头都会带上所有的cookie
4. 没有对应的api进行cookie的存取操作，只能自己封装

**特点**

- 浏览器会主动存储接收到的 `set-cookie` 头信息的值
- 有时效性；
- 可以设置 `http-only` 属性为 `true` 来禁止客户端代码（`js`）修改该值

### 设置 cookie
```js
document.cookie = "key=value"
```
`key` 和 `value` 是包含在一个字符串中
- **key 包含字段**
  - `[name]` 这个 name 为自己取的 cookie 名称，同名的值会覆盖
  - `domain` 所属域名
  - `path` 所属路径
  - `Expires/Max-Age` 到期时间/持续时间 (单位是秒)
  - `http-only` 是否只作为 http 时使用，如果为 `true`，那么客户端能够在 http 请求和响应中进行传输，但是客户端浏览器不能使用 js 去读取或修改
- 多个 key=value 使用`;`（分号）分隔

### 获取cookie

返回值是当前域名下的所有 cookie，并按照某种格式组织的字符串 ：`key=value; key1=value1; ......keyn=valuen`
```js
document.cookie // 每个cookie 之间用分号+一个空格隔开
```

### 封装存取 cookie 的 api
```js
// 设置cookie
function setCookie(name, value, options) {
  let cookieData = `${name}=${value};`
  for(let key in options) {
    let str = `${key}=${options[key]};`
    cookieData += str
  }
  document.cookie = cookieData
}

// 获取cookie
function getCookie(name) {
  let arr = document.cookie.split('; ')
  for(let i=0; i<arr.length;i++) {
    let items = arr[i].split('=')
    if (name === items[0]) {
      return items[1]
    }
  }
  return ''
}
```

## 5、应用二：通过 cookie 换肤功能
```js
function changeSkin() {
  // 四种皮肤
  let colorArr = ['white','rgb(204,232,207)','rgb(200,200,169)','rgb(114,111,128)']
  let key = 0
  // 获取cookie中的皮肤
  if (getCookie('key')) {
    key = getCookie('key')
    document.body.style.background = colorArr[key]
  }
  document.querySelector('.changeSkin').onclick = function() {
    key = ++key > 3 ? 0 : key
    document.body.style.background = colorArr[key]
    // 通过cookie记住肤色
    setCookie('key', key, {
      'Max-Age': 3600 * 24 // 一天（客户端的时间单位为m）
    })
  }
}
```

## 6、本地缓存 localStorage 的使用

**localStorage 特点**

1. 没有时效性，只能手动清除
2. 与服务端不通信
3. 有完整的操作 API : `getItem(key), setItem(key,value), removeItem(key), clear()`
   
- 添加或更新（如果数据项中已存在该 key）数据项中指定 key 的 value
```js
setItem(key, value)
```
- 获取数据项中指定 key 对应的 value
```js
getItem(key)
```
- 删除数据项中指定 key 的 value
```js
removeItem(key)
```
- 清空所有数据项
```js
clear()
```

## 7、应用三：通过 localStorage 实现换肤功能
```js
function changeSkin() {
  // 四种皮肤
  let colorArr = ['white','rgb(204,232,207)','rgb(200,200,169)','rgb(114,111,128)']
  let key = 0
  // 获取cookie中的皮肤
  if (localStorage.getItem('key')) {
    key = localStorage.getItem('key')
    document.body.style.background = colorArr[key]
  }
  document.querySelector('.changeSkin').onclick = function() {
    key = ++key > 3 ? 0 : key
    document.body.style.background = colorArr[key]
    // 通过cookie记住肤色
    localStorage.setItem('key', key)
  }
}
```

## 8、应用四：通过storage实现添加歌曲列表功能
- 通过 stroage 来处理本地多开音乐页面得问题；
- 实现删除及删除所有列表的功能；

```js
// 开启详情页
function showDetail(musicData) {
  // 除重
  if (localStorage.getItem('musicData')) {
    let localData = JSON.parse(localStorage.getItem('musicData'))
    console.log(localData, localData.find(item => item.id === musicData.id));
    if(!localData.find(item => item.id === musicData.id)) {
      localData.push(musicData)
      console.log(localData);
      localStorage.setItem('musicData', JSON.stringify(localData))
    }
  } else {
    localStorage.setItem('musicData', JSON.stringify([musicData]))
  }

  // 打开一个详情页
  if (!localStorage.getItem('isOpen')) {
    window.open('/detail')
  }
}
```

```js
// detail.js
// 存储开启状态
localStorage.setItem('isOpen', true)

//当页面关闭时候清除开启状态；
window.addEventListener('beforeunload', () => {
  localStorage.removeItem('isOpen')
})

// 监听本地存储的变化
window.addEventListener('storage', () => {
  // 更新视图
  updateView()
})

window.onload = function() {
  updateView()

  //清空勾选项；
  document.querySelector(".deleteItem").onclick = function(){
    let inputs  =document.querySelectorAll(".exchange input");
    let musicData = localStorage.getItem("musicData");
    musicData  = JSON.parse(localStorage.getItem("musicData")) || [];
    inputs.forEach((v,k)=>{
      if(v.checked){
        let id = v.dataset['id']
        let item = musicData.find(item => item.id === id)
        musicData.splice(musicData.indexOf(item),1);
      }
    })
    localStorage.setItem("musicData",JSON.stringify(musicData));
    updateView();
  }

  // 清空列表
  document.querySelector('.deleteAll').onclick = function() {
    localStorage.removeItem('musicData')
    updateView();
  }
}

function updateView(){
  let musicData = localStorage.getItem("musicData");
  if(musicData){
      musicData = JSON.parse(musicData);
      let innerContent = "";
      musicData.forEach(v=>{
          let str = `<ul class="myul">
                      <input type="checkbox" data-id=${v.id} />
                      <li>${v.songName}</li>    
                      <li>${v.singer}</li>  
                      <li>${v.time}</li>          
                     </ul>`;
          innerContent+=  str;
      })
      document.querySelector(".exchange").innerHTML = innerContent;
  }else{
      document.querySelector(".exchange").innerHTML = "";
  }
}
```

## 9、本地存储异同

### 共同点

**localStorage，sessionStorage，cookie 共同点**

- 同域（同源策略）限制
  - 同源策略：请求与响应的 协议、域名、端口都相同 则时同源，否则为 跨源/跨域
- 存储的内容都会转为字符串格式
- 都有存储大小限制
  
**localStorage，sessionStorage 共同点**

- API相同
- 存储大小限制一样基本类似
- 无个数限制

### 不同点

**localStorage**

- 没有有效期，除非删除，否则一直存在
- 同域下页面共享
- 支持 `storage `事件

**sessionStorage**

- 浏览器关闭，自动销毁
- 页面私有
- 不支持 `storage` 事件

**cookie**

- 浏览器也会在每次请求的时候主动组织所有域下的cookie到请求头 cookie 中，发送给服务器端
- 浏览器会主动存储接收到的 `set-cookie` 头信息的值
- 可以设置 `http-only` 属性为 `true` 来禁止客户端代码（`js`）修改该值
- 可以设置有效期 (默认浏览器关闭自动销毁)(不同浏览器有所不同)
- 同域下个数有限制，最好不要超过`50`个(不同浏览器有所不同)
- 单个 cookie 内容大小有限制，最好不要超过`4000`字节(不同浏览器有所不同)

## 10、项目源代码地址

- [有道云笔记](https://note.youdao.com/web/#/file/WEB26075f179315e9718e21b9c6332d589d/code/WEBea2d23bac8c8cd5e01ce3c4ab2a7156f/)
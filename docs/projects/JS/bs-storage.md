* 设置限期的localStorage
```js
getExpire() {
  let userInfo = this.localStorage.getItem(this.key)
  if (!userInfo) {
    return null
  }
  userInfo = JSON.parse(userInfo)
  if (Date.now() - userInfo.time > userInfo.expire) {
    this.localStorage.removeItem('userInfo')
    return null
  }
  return userInfo.data
}
setExpire(data) {
  this.localStorage.setItem('userInfo', JSON.stringify({
    data: data,
    time: Date.now(),
    expire: 60 * 60 * 1000 * 2
  }))
}
```

## 二、vue实现预览word，excel，ppt，pdf、图片、视频解决方案

[https://blog.csdn.net/weixin_44378416/article/details/119543832](https://blog.csdn.net/weixin_44378416/article/details/119543832)

## 三、PDF预览
[https://mozilla.github.io/pdf.js/](https://mozilla.github.io/pdf.js/)

- 完美版本为v2.5

## 四、中间件代理
- express: [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware)
- koa: [koa-server-http-proxy](https://www.npmjs.com/package/koa-server-http-proxy)
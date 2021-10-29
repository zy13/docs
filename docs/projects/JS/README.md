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
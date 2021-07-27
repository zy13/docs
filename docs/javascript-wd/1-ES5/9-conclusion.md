## 1. Object.prototype.toString.call() 判断各种数据的类型
```js
// Object.prototype.toString() // "[object Obejct]"
// Object.prototype.toString.call(123) // "[object Number]"
// 字符串的match方法，匹配组的运用
// .*? 贪婪匹配
var type = function(o) {
  var s = Object.prototype.toString.call(o)
  return s.match(/\[object (.*?)\]/)[1].toLowercase()
}
[
  'Number',
  'String',
  'Boolean',
  'Undefined',
  'Null',
  'Function',
  'Object',
  'Array',
  'Date',
  'RegExp'
].forEach(function(t){
  type['is' + t] = function(o) {
    return type(o) === t.toLowercase()
  }
})
type(123) // "number"
type.isNumber(123) // true

// 扩展
// 判断数据类型得方法有三种
// 第一种，typeof命令返回值的数据类型，可以判断number,string, boolean, undefined, function
// 第二种，instanceof返回布尔值，只能判断对象是否属于某种构造函数的实例
// 第三种，则是本实例的方法
```
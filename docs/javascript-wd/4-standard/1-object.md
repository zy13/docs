[Object 对象](https://www.wangdoc.com/javascript/stdlib/object.html)

## 1、概述
`JavaScript` 的所有其他对象都继承自`Object`对象，即那些对象都是`Object`的实例。`Object`对象的原生方法分成两类：`Object`本身的方法与`Object`的实例方法。
### Object对象本身的方法 - 静态方法
所谓“本身的方法”就是直接定义在`Object`对象的方法。
```js
// print方法就是直接定义在Object对象上
Object.print = function (o) { console.log(o) };

// 静态方法
Object.keys()：用来遍历对象的属性
Object.getOwnPropertyNames()：用来遍历对象的属性

// 对象属性模型的相关方法
Object.getOwnPropertyDescriptor()：获取某个属性的描述对象。
Object.defineProperty()：通过描述对象，定义某个属性。
Object.defineProperties()：通过描述对象，定义多个属性。

// 控制对象状态的方法
Object.preventExtensions()：防止对象扩展。
Object.isExtensible()：判断对象是否可扩展。
Object.seal()：禁止对象配置。
Object.isSealed()：判断一个对象是否可配置。
Object.freeze()：冻结一个对象。
Object.isFrozen()：判断一个对象是否被冻结。

// 原型链相关方法
Object.create()：该方法可以指定原型对象和属性，返回一个新的对象。
Object.getPrototypeOf()：获取对象的Prototype对象。
```
### Object的实例方法
所谓实例方法就是定义在`Object`原型对象`Object.prototype`上的方法。它可以被`Object`实例直接使用。凡是定义在`Object.prototype`对象上面的属性和方法，将被所有实例对象共享就可以了。
```js
// Object.prototype定义了一个print方法，然后生成一个Object的实例obj
// obj直接继承了Object.prototype的属性和方法，可以直接使用obj.print调用print方法
// 也就是说，obj对象的print方法实质上就是调用Object.prototype.print方法。
Object.prototype.print = function () {
  console.log(this);
};

var obj = new Object();
obj.print()

// 实例方法
Object.prototype.valueOf()：返回一个对象的“值”，默认情况下返回对象本身
Object.prototype.toString()：返回一个对象的字符串形式，默认情况下返回类型字符串
Object.prototype.toLocaleString(): 返回一个值的字符串形式
Object.prototype.hasOwnProperty()：返回一个布尔值，表示该实例对象自身是否具有该属性。
```

## 2、Object()
`Object`本身是一个函数，可以当作工具方法使用，将任意值转为对象。这个方法常用于保证某个值一定是对象。
- 如果参数为空（或者为`undefined`和`null`），`Object()`返回一个空对象。
- `instanceof`运算符用来验证，一个对象是否为指定的构造函数的实例。
- 如果参数是原始类型的值，`Object`方法将其转为对应的包装对象的实例。
```js
// 将undefined和null转为对象，结果得到了一个空对象obj。
var obj = Object();
// 等同于
var obj = Object(undefined);
var obj = Object(null);
// obj instanceof Object返回true，就表示obj对象是Object的实例。
obj instanceof Object // true

// Object函数的参数是各种原始类型的值，转换成对象就是原始类型值对应的包装对象。
var obj = Object(1);
obj instanceof Object // true
obj instanceof Number // true

var obj = Object('foo');
obj instanceof Object // true
obj instanceof String // true

var obj = Object(true);
obj instanceof Object // true
obj instanceof Boolean // true

// 如果Object方法的参数是一个对象，它总是返回该对象，即不用转换
var arr = [];
var obj = Object(arr); // 返回原数组
obj === arr // true

var value = {};
var obj = Object(value) // 返回原对象
obj === value // true

var fn = function () {};
var obj = Object(fn); // 返回原函数
obj === fn // true

// 写一个判断变量是否为对象的函数。
function isObject(value) {
  return value === Object(value);
}
isObject([]) // true
isObject(true) // false
```

## 3、Object 构造函数

`Object`不仅可以当作工具函数使用，还可以当作构造函数使用，即前面可以使用`new`命令。
- `Object`构造函数的首要用途，是直接通过它来**生成新对象**。
- `Object`构造函数的用法与工具方法很相似，几乎一模一样。
- 使用时，可以接受一个参数，如果该参数是一个对象，则直接返回这个对象；如果是一个原始类型的值，则返回该值对应的包装对象
```js
// 通过var obj = new Object()的写法生成新对象，与字面量的写法var obj = {}是等价的。
// 或者说，后者只是前者的一种简便写法。
var obj = new Object();

// Object(value)与new Object(value)两者的语义是不同的
// Object(value)表示将value转成一个对象，
// new Object(value)则表示新生成一个对象，它的值是value
var o1 = {a: 1};
var o2 = new Object(o1);
o1 === o2 // true

var obj = new Object(123);
obj instanceof Number // true
```

## 4、keys()，getOwnPropertyNames()
`Object.keys`方法和`Object.getOwnPropertyNames`方法都用来遍历对象的属性。
- `Object.keys`方法的参数是一个对象，**返回一个数组**。该数组的成员都是该对象自身的（而不是继承的）所有属性名。
- `Object.getOwnPropertyNames`方法与`Object.keys`类似，也是接受一个对象作为参数，**返回一个数组**，包含了该对象自身的所有属性名。
- 对于一般的对象来说，`Object.keys()`和`Object.getOwnPropertyNames()`返回的结果是一样的。
- 只有涉及不可枚举属性时，才会有不一样的结果。`Object.keys`方法只返回可枚举的属性，`Object.getOwnPropertyNames`方法还返回不可枚举的属性名。
- 由于 `JavaScript` 没有提供计算对象属性个数的方法，所以可以用这两个方法代替。
- 几乎总是使用`Object.keys`方法，遍历对象的属性。
```js
// Object.keys方法的参数是一个对象，返回一个数组
var obj = {
  p1: 123,
  p2: 456
};
Object.keys(obj) // ["p1", "p2"]

// Object.getOwnPropertyNames方法也是接受一个对象作为参数，返回一个数组
var obj = {
  p1: 123,
  p2: 456
};
Object.getOwnPropertyNames(obj) // ["p1", "p2"]

// 数组的length属性是不可枚举的属性，所以只出现在Object.getOwnPropertyNames方法的返回结果中。
var a = ['Hello', 'World'];
Object.keys(a) // ["0", "1"]
Object.getOwnPropertyNames(a) // ["0", "1", "length"]


// 计算对象属性个数
var obj = {
  p1: 123,
  p2: 456
};
Object.keys(obj).length // 2
Object.getOwnPropertyNames(obj).length // 2
```

## 5、对象属性模型的相关方法
```js
// Object 的静态方法 - 
Object.getOwnPropertyDescriptor()：获取某个属性的描述对象。
Object.defineProperty()：通过描述对象，定义某个属性。
Object.defineProperties()：通过描述对象，定义多个属性。
```

## 6、控制对象状态的方法
```js
// Object 的静态方法 - 
Object.preventExtensions()：防止对象扩展。
Object.isExtensible()：判断对象是否可扩展。
Object.seal()：禁止对象配置。
Object.isSealed()：判断一个对象是否可配置。
Object.freeze()：冻结一个对象。
Object.isFrozen()：判断一个对象是否被冻结。
```

## 7、原型链相关方法
```js
// Object 的静态方法 - 
Object.create()：该方法可以指定原型对象和属性，返回一个新的对象。
Object.getPrototypeOf()：获取对象的Prototype对象。
```

## 8、Object.prototype.valueOf()
`valueOf`方法的作用是返回一个对象的“值”，默认情况下**返回对象本身**。
`valueOf`方法的主要用途是，`JavaScript` **自动类型转换时会默认调用这个方法**。
```js
// obj.valueOf()与obj本身，两者是一样
var obj = new Object();
obj.valueOf() === obj // true

// 将对象obj与数字1相加，这时 JavaScript 就会默认调用valueOf()方法，求出obj的值再与1相加
var obj = new Object();
1 + obj // "1[object Object]"

// 自定义obj对象的valueOf方法，于是1 + obj就得到3
var obj = new Object();
obj.valueOf = function () {
  return 2;
};
1 + obj // 3
```

## 9、Object.prototype.toString()
`toString`方法的作用是返回一个对象的字符串形式，默认情况下返回**类型字符串**。
- 字符串`[object Object]`本身没有太大的用处，但是通过自定义`toString`方法，可以让对象在自动类型转换时，得到想要的字符串形式。
```js
// 对于一个对象调用toString方法，会返回字符串[object Object]，该字符串说明对象的类型。
var o1 = new Object();
o1.toString() // "[object Object]"

var o2 = {a:1};
o2.toString() // "[object Object]"

// 当对象用于字符串加法时，会自动调用toString方法
// 由于自定义了toString方法，所以返回字符串hello world
var obj = new Object();
obj.toString = function () {
  return 'hello';
};
obj + ' ' + 'world' // "hello world"
```
**数组、字符串、函数、Date 对象**都分别部署了自定义的`toString`方法，覆盖了`Object.prototype.toString`方法。
```js
// 数组、字符串、函数、Date 对象调用toString方法
// 并不会返回[object Object]，因为它们都自定义了toString方法，覆盖原始方法。
[1, 2, 3].toString() // "1,2,3"

'123'.toString() // "123"

(function () {
  return 123;
}).toString()
// "function () {
//   return 123;
// }"

(new Date()).toString()
// "Tue May 10 2016 09:11:31 GMT+0800 (CST)"
```

## 10、toString() 的应用：判断数据类型
`Object.prototype.toString`方法返回对象的类型字符串，因此可以用来判断一个值的类型。
- 为了得到类型字符串，最好直接使用`Object.prototype.toString`方法。通过函数的`call`方法，可以在任意值上调用这个方法，帮助我们判断这个值的类型。
```js
// 调用空对象的toString方法，结果返回一个字符串object Object
// 其中第二个Object表示该值的构造函数
var obj = {};
obj.toString() // "[object Object]"

// 对value这个值调用Object.prototype.toString方法
Object.prototype.toString.call(value)

// 不同数据类型的Object.prototype.toString方法返回值如下
数值：返回[object Number]。
字符串：返回[object String]。
布尔值：返回[object Boolean]。
undefined：返回[object Undefined]。
null：返回[object Null]。
数组：返回[object Array]。
arguments 对象：返回[object Arguments]。
函数：返回[object Function]。
Error 对象：返回[object Error]。
Date 对象：返回[object Date]。
RegExp 对象：返回[object RegExp]。
其他对象：返回[object Object]。

// Object.prototype.toString可以看出一个值到底是什么类型。
Object.prototype.toString.call(2) // "[object Number]"
Object.prototype.toString.call('') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(Math) // "[object Math]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call([]) // "[object Array]"

// 写出一个比typeof运算符更准确的类型判断函数
var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
type({}); // "object"
type([]); // "array"
type(5); // "number"
type(null); // "null"
type(); // "undefined"
type(/abcd/); // "regex"
type(new Date()); // "date"

// 在上面这个type函数的基础上，还可以加上专门判断某种类型数据的方法。
var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

['Null',
 'Undefined',
 'Object',
 'Array',
 'String',
 'Number',
 'Boolean',
 'Function',
 'RegExp'
].forEach(function (t) {
  type['is' + t] = function (o) {
    return type(o) === t.toLowerCase();
  };
});
type.isObject({}) // true
type.isNumber(NaN) // true
type.isRegExp(/abc/) // true
```

## 11、Object.prototype.toLocaleString()
`Object.prototype.toLocaleString`方法与`toString`的返回结果相同，也是返回一个值的字符串形式。

这个方法的主要作用是**留出一个接口，让各种不同的对象实现自己版本的toLocaleString，用来返回针对某些地域的特定的值**。
```js
var obj = {};
obj.toString(obj) // "[object Object]"
obj.toLocaleString(obj) // "[object Object]"

// toString()方法返回对象的一般字符串形式，toLocaleString()方法返回本地的字符串形式。
var person = {
  toString: function () {
    return 'Henry Norman Bethune';
  },
  toLocaleString: function () {
    return '白求恩';
  }
};
person.toString() // Henry Norman Bethune
person.toLocaleString() // 白求恩

// 主要有三个对象自定义了toLocaleString方法。
Array.prototype.toLocaleString()
Number.prototype.toLocaleString()
Date.prototype.toLocaleString()

// 日期的实例对象的toString和toLocaleString返回值就不一样
// toLocaleString的返回值跟用户设定的所在地域相关
var date = new Date();
date.toString() // "Tue Jan 01 2018 12:01:33 GMT+0800 (CST)"
date.toLocaleString() // "2021/5/7 下午3:53:19"
```

## 12、Object.prototype.hasOwnProperty()
`Object.prototype.hasOwnProperty`方法接受一个字符串作为参数，返回一个布尔值，表示**该实例对象自身是否具有该属性**。
```js
// 对象obj自身具有p属性，所以返回true。
// toString属性是继承的，所以返回false。
var obj = {
  p: 123
};
obj.hasOwnProperty('p') // true
obj.hasOwnProperty('toString') // false
```
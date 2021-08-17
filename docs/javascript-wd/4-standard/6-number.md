[Number 对象](https://www.wangdoc.com/javascript/stdlib/number.html)

## 1、概述

`Number`对象是数值对应的包装对象，可以作为构造函数使用，也可以作为工具函数使用。
- 作为**构造函数**时，它用于生成值为数值的**对象**。
- 作为**工具函数**时，它可以将任何类型的值转为**数值**。
```js
// Number对象作为构造函数使用，返回一个值为1的对象
var n = new Number(1);
typeof n // "object"

// 将布尔值true转为数值1
Number(true) // 1
```

## 1、静态属性
`Number`对象拥有以下一些静态属性，即直接定义在`Number`对象上的属性。
```js
Number.POSITIVE_INFINITY // Infinity  - 正的无限，指向Infinity
Number.NEGATIVE_INFINITY // -Infinity - 负的无限，指向-Infinity
Number.NaN // NaN - 表示非数值，指向NaN

// 表示最大的正数，即最接近正无穷的Infinity的正数
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MAX_VALUE < Infinity // true

// 表示最小的正数，即最接近0的正数，在64位浮点数体系中为5e-324
// 相应的，最接近0的负数为-Number.MIN_VALUE
Number.MIN_VALUE // 5e-324
Number.MIN_VALUE > 0 // true

Number.MAX_SAFE_INTEGER // 9007199254740991  - 表示能够精确表示的最大整数
Number.MIN_SAFE_INTEGER // -9007199254740991 - 表示能够精确表示的最小整数
```

## 2、Number.isNaN()
`Number.isNaN()`方法确定传递的值是否是`NaN`，并且检查其类型是否为`Number`，是原来的全局 `isNaN()` 的更稳妥的版本。只对数值类型有效，非数值类型一律返回`false`。
```js
// 传入一个值，必须是number类型的值，否则返回false
// 因为value不会进行类型转换，当value为非数字时，始终返回false
// 返回一个布尔值
Number.isNaN(value)

// 无法用相等运算符判断一个值是否是 NaN
NaN == NaN // false
NaN === NaN // false

// 判断值是否是 NaN
isNaN(NaN) // true

// 和全局函数 isNaN() 相比
// Number.isNaN() 不会自行将参数转换成数字
isNaN('123a') // true 相当于isNaN(Number('123a'))
Number.isNaN('123a') // false - 值是字符串，所以为false

// 只有在参数是值为 NaN 的数字时，才会返回 true
Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0)       // true

// 下面这几个如果使用全局的 isNaN() 时，会返回 true
// 而使用Number.isNaN则会返回false
isNaN('NaN') // true
isNaN(undefined) // true
isNaN({}) // true
isNaN("blabla") // true

// 下面的都返回 false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

## 3、Number.isFinite()
`Number.isFinite()` 方法**用来检测传入的参数是否是一个有穷数**。只对数值类型有效，非数值类型一律返回`false`。
```js
// 参数被检测有穷性的值
// 返回一个布尔值
Number.isFinite(value)

Number.isFinite(123) // true

// 和全局的 isFinite() 函数相比
// 这个方法不会强制将一个非数值的参数转换成数值
// 只有数值类型的值，且是有穷的（finite），才返回 true
Number.isFinite('123') // false
isFinite('123') // true 相当于isFinite(Number('123'))

if (Number.isFinite === undefined) Number.isFinite = function(value) {
  return typeof value === 'number' && isFinite(value);
}
```

## 4、Number.isInteger()
`Number.isInteger()` 方法用来**判断给定的参数是否为整数**。
- 如果被检测的值是整数，则返回 `true`，否则返回 `false`。注意`NaN` 和正负 `Infinity` 不是整数。
```js
// 参数：数值类型有效，非数值类型一律返回false
// 返回布尔值
Number.isInteger(value)

Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true

Number.isInteger(NaN) // false
Number.isInteger(Infinity) // false
Number.isInteger(0.1) // false
Number.isInteger(Math.PI) // false

Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger("10");      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false

Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &&
           isFinite(value) &&
           Math.floor(value) === value;
};
```

## 5、Number.parseFloat() - ES6
与全局的`parseFloat`方法用法一致

## 6、Number.parseInt() - ES6
与全局的`parseInt()`一样

## 7、Number.prototype.toString()
`Number`对象部署了自己的`toString`方法，用来**将一个数值转为字符串形式**，`toString`方法只能将十进制的数，转为其他进制的字符串。
- `toString`方法可以接受一个**参数**，表示**输出的进制**。根据参数指定的进制，将一个数字转化成某个进制的字符串。
- 如果省略这个参数，默认将数值先转为十进制，再输出字符串。
```js
// 10一定要放在括号里，这样表明后面的点表示调用对象属性。
(10).toString() // "10"
(10).toString(2) // "1010"
(10).toString(8) // "12"
(10).toString(16) // "a"

// 不加括号，数值后面的点会被 JavaScript 引擎解释成小数点，从而报错
10.toString(2) // Uncaught SyntaxError: Invalid or unexpected token
```
数值如果不加括号，数值后面的点会被 `JavaScript` 引擎解释成小数点，从而报错。
- 只要能够让 `JavaScript` 引擎不混淆小数点和对象的点运算符，各种写法都能用。
- 可以直接对一个小数使用`toString`方法。
- 通过方括号运算符也可以调用`toString`方法。
```js
// 在10后面加两个点，JavaScript 会把第一个点理解成小数点（即10.0），
// 把第二个点理解成调用对象属性，从而得到正确结果。
10..toString(2) // "1010"

// 其他方法还包括
10 .toString(2) // "1010"
10.0.toString(2) // "1010"

// 直接对一个小数使用`toString`方法
10.5.toString() // "10.5"
10.5.toString(2) // "1010.1"
10.5.toString(8) // "12.4"
10.5.toString(16) // "a.8"

// 通过方括号运算符也可以调用toString方法
10['toString'](2) // "1010"
```
## 8、Number.prototype.toFixed()
`toFixed()`方法**先将一个数转为指定位数的小数，然后返回这个小数对应的字符串**。
- `toFixed()`方法的**参数为小数位数**，有效范围为`0`到`100`，超出这个范围将抛出 `RangeError` 错误。
- 整数必须放在括号里，否则后面的点会被处理成小数点。
```js
// 先转成2位小数
// 然后转成字符串
// 整数放在括号里
(10).toFixed(2) // "10.00"
10.005.toFixed(2) // "10.01"

// 由于浮点数的原因，小数`5`的四舍五入是不确定的，使用的时候必须小心。
(10.055).toFixed(2) // 10.05
(10.005).toFixed(2) // 10.01
```

## 9、Number.prototype.toExponential()
`toExponential`方法用于**将一个数转为科学计数法形式**。
- `toExponential`方法的参数是小数点后有效数字的位数，范围为`0`到`100`，超出这个范围，会抛出一个 `RangeError` 错误。
```js
// 方法的参数指定有效数字的位数
(10).toExponential()  // "1e+1"
(10).toExponential(1) // "1.0e+1"
(10).toExponential(2) // "1.00e+1"

(1234).toExponential()  // "1.234e+3"
(1234).toExponential(1) // "1.2e+3"
(1234).toExponential(2) // "1.23e+3"
```

## 10、Number.prototype.toPrecision()
`toPrecision`方法用于**将一个数转为指定位数的有效数字**。
- 该方法的参数为有效数字的位数，范围是`1`到`100`，超出这个范围会抛出 `RangeError` 错误。
- 该方法用于四舍五入时不太可靠，跟浮点数不是精确储存有关。
```js
// 参数范围1~100
(12.34).toPrecision(1) // "1e+1"
(12.34).toPrecision(2) // "12"
(12.34).toPrecision(3) // "12.3"
(12.34).toPrecision(4) // "12.34"
(12.34).toPrecision(5) // "12.340"

// 四舍五入不可靠
(12.35).toPrecision(3) // "12.3"
(12.25).toPrecision(3) // "12.3"
(12.15).toPrecision(3) // "12.2"
(12.45).toPrecision(3) // "12.4"
```

## 11、Number.prototype.toLocaleString()
`toLocaleString`方法**接受一个地区码作为参数，返回一个字符串**，表示当前数字在该地区的当地书写形式。
- 该方法还可以接受第二个参数配置对象，用来定制指定用途的返回字符串。
- 该对象的`style`属性指定输出样式，默认值是`decimal`，表示输出十进制形式。如果值为`percent`，表示输出百分数。
- 如果`style`属性的值为`currency`，则可以搭配`currency`属性，输出指定格式的货币字符串形式。
- 如果省略了参数，则由浏览器自行决定如何处理，通常会使用操作系统的地区设定。
- 如果使用浏览器不认识的地区码，会抛出一个错误。
```js
// 输出百分数
(123).toLocaleString('zh-Hans-CN', { style: 'percent' }) // "12,300%"

// 人民币格式💴
(123).toLocaleString('zh-Hans-CN', { style: 'currency', currency: 'CNY' }) // "￥123.00"

(123).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }) // "123,00 €"

// 美元格式💵
(123).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) // "$123.00"

(123).toLocaleString('123')
// Uncaught RangeError: Incorrect locale information provided
```

## 12、自定义方法
与其他对象一样，`Number.prototype`对象上面可以自定义方法，被`Number`的实例继承。
- 数值的自定义方法，只能定义在它的原型对象`Number.prototype`上面，数值本身是无法自定义属性的。
```js
// Number对象实例定义了一个add方法
// 在数值上调用某个方法，数值会自动转为Number的实例对象
// 由于add方法返回的还是数值，所以可以链式运算
Number.prototype.add = function (x) {
  return this + x;
};
8['add'](2) // 10

// 在Number对象的实例上部署了subtract方法，它可以与add方法链式调用
Number.prototype.subtract = function (x) {
  return this - x;
};
(8).add(2).subtract(4)

// 在Number对象的原型上部署了iterate方法，将一个数值自动遍历为一个数组。
Number.prototype.iterate = function () {
  var result = [];
  for (var i = 0; i <= this; i++) {
    result.push(i);
  }
  return result;
};
(8).iterate()

// n是一个原始类型的数值。
// 直接在它上面新增一个属性x，不会报错，但毫无作用，总是返回undefined
// 这是因为一旦被调用属性，n就自动转为Number的实例对象，调用结束后，该对象自动销毁
// 所以，下一次调用n的属性时，实际取到的是另一个对象，属性x当然就读不出来
var n = 1;
n.x = 1;
n.x // undefined
```
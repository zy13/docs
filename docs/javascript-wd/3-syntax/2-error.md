[错误处理机制](https://www.wangdoc.com/javascript/features/error.html)

## 1、Error 对象 及其 6个派生对象

`JavaScript` 解析或运行时，一旦发生错误，引擎就会抛出一个错误对象，即为`Error`构造函数的实例。`Error`实例对象是最一般的错误类型，在它的基础上，`JavaScript` 还定义了其他`6`种错误对象。也就是说，存在`Error`的`6`个派生对象。
- `message`：错误提示信息
- `name`：错误名称（非标准属性）
- `stack`：错误的堆栈（非标准属性）。
```js
// 调用Error()构造函数，生成一个实例对象err
// Error()构造函数接受一个参数，表示错误提示，可以从实例的message属性读到这个参数
// 抛出Error实例对象以后，整个程序就中断在发生错误的地方，不再往下执行。
var err = new Error('出错了');
err.message // "出错了"

// 使用name和message这两个属性，可以对发生什么错误有一个大概的了解。
if (err.name) {
  console.log(err.name + ': ' + err.message);
}

// 错误堆栈的最内层是`throwit`函数，
// 然后是`catchit`函数，
// 最后是函数的运行环境
function throwit() {
  throw new Error('');
}
function catchit() {
  try {
    throwit();
  } catch(e) {
    console.log(e.stack); // print stack trace
  }
}
catchit()
// Error
//     at throwit (<anonymous>:2:9)
//     at catchit (<anonymous>:6:5)
//     at <anonymous>:11:1
```

`Error`及其`6`个派生函数都是构造函数，在使用它们时，可以手动生成错误对象的实例。这些构造函数都接受一个参数，代表错误提示信息（`message`）。
```js
var err1 = new Error('出错了！');
var err2 = new RangeError('出错了，变量超出有效范围！');
var err3 = new TypeError('出错了，变量类型无效！');

err1.message // "出错了！"
err2.message // "出错了，变量超出有效范围！"
err3.message // "出错了，变量类型无效！"
```

## 2、原生错误类型 - SyntaxError 对象
`SyntaxError`对象是在**语法解析阶段发生的语法错误**。
```js
// 变量名错误 - token 非法
var 1a; // Uncaught SyntaxError: Invalid or unexpected token

// 缺少括号 - 字符串不符合要求
console.log 'hello'); // Uncaught SyntaxError: Unexpected string
```
## 3、原生错误类型 - ReferenceError 对象
`ReferenceError`对象是**引用一个不存在的变量**时发生的错误。另一种触发场景是，**将一个值分配给无法分配的对象**，比如对函数的运行结果赋值。
```js
// 引用一个不存在的变量
console.log(a) // Uncaught ReferenceError: a is not defined

// 等号左侧不是变量 - 对函数console.log的运行结果赋值
console.log() = 1 // Uncaught ReferenceError: Invalid left-hand side in assignment
```

## 4、原生错误类型 - RangeError 对象
`RangeError`对象是一个**值超出有效范围**时发生的错误：
- 数组长度为负数
- `Number`对象的方法参数超出范围
- 函数堆栈超过最大值
```js
// 数组长度不得为负数
new Array(-1) // Uncaught RangeError: Invalid array length
```

## 5、原生错误类型 - TypeError 对象
`TypeError`对象是**变量或参数不是预期类型**时发生的错误。比如，对字符串、布尔值、数值等原始类型的值使用`new`命令，就会抛出这种错误，因为`new`命令的参数应该是一个构造函数。
```js
// 对数值使用new命令
new 123
// Uncaught TypeError: 123 is not a constructor

// 调用对象不存在的方法，也会抛出TypeError错误
// 因为obj.unknownMethod的值是undefined，而不是一个函数
var obj = {};
obj.unknownMethod()
// Uncaught TypeError: obj.unknownMethod is not a function
```

## 6、原生错误类型 - URIError 对象
`URIError`对象是 `URI` **相关函数的参数不正确**时抛出的错误，主要涉及六个函数。
- `encodeURI()`
- `decodeURI()`
- `encodeURIComponent()`
- `decodeURIComponent()`
- `escape()`
- `unescape()`
```js
// 参数格式不正确
decodeURI('%2')
// URIError: URI malformed
```
## 7、原生错误类型 - EvalError 对象 - X
`eval`函数没有被正确执行时，会抛出`EvalError`错误。该错误类型已经不再使用了，只是为了保证与以前代码兼容，才继续保留。

## 8、自定义错误
除了 `JavaScript` 原生提供的七种错误对象，还可以定义自己的错误对象，即让它继承`Error`对象。
```js
// 自定义一个错误对象UserError，让它继承Error对象
function UserError(message) {
  this.message = message || '默认信息';
  this.name = 'UserError';
}
// UserError继承Error - 通过原型继承
UserError.prototype = new Error();
UserError.prototype.constructor = UserError;

// 生成这种自定义类型的错误
new UserError('这是自定义的错误！');
```

## 9、throw 语句
`throw`语句的作用是**手动中断程序执行，抛出一个错误**。`throw`可以抛出任何类型的值，它的参数可以是任何值。**遇到`throw`语句，程序就中止了**。
```js
// 如果变量x小于等于0，就手动抛出一个错误，告诉用户x的值不正确，整个程序就会在这里中断执行
if (x <= 0) {
  throw new Error('x 必须为正数');
}
// Uncaught ReferenceError: x is not defined

// throw也可以抛出自定义错误- throw抛出的是一个UserError实例
function UserError(message) {
  this.message = message || '默认信息';
  this.name = 'UserError';
}
throw new UserError('出错了！'); 
// Uncaught UserError {message: "出错了！", name: "UserError"}

// 抛出一个字符串
throw 'Error！';
// Uncaught Error！

// 抛出一个数值
throw 42;
// Uncaught 42

// 抛出一个布尔值
throw true;
// Uncaught true

// 抛出一个对象
throw {
  toString: function () {
    return 'Error!';
  }
};
```

## 10、try...catch 结构
一旦发生错误，程序就中止执行了。`JavaScript` 提供了`try...catch`结构，**允许对错误进行处理，选择是否往下执行**。
- `try`代码块抛出错误，`JavaScript` 引擎就立即把代码的执行，转到`catch`代码块，或者说错误被`catch`代码块捕获了。
- `catch`接受一个参数，表示`try`代码块抛出的值（即`throw`语句后的值）。`catch`代码块捕获错误之后，程序不会中断，会按照正常流程继续执行下去。`catch`代码块之中，还可以再抛出错误，甚至使用嵌套的`try...catch`结构。
- 如果你不确定某些代码是否会报错，就可以把它们放在`try...catch`代码块之中，便于进一步对错误进行处理。
```js
try {
  throw new Error('出错了!');
} catch (e) {
  console.log(e.name + ": " + e.message);
  console.log(e.stack);
}
// Error: 出错了!
// Error: 出错了!
//     at <anonymous>:2:9

// 如果函数f执行报错，就会进行catch代码块，接着对错误进行处理。
// try代码块抛出的错误，被catch代码块捕获后，程序会继续向下执行。
function f() {
  throw "出错了";
}
try {
  f();
} catch(e) {
  // 处理错误
  console.log(111, e)
}
console.log(222);
// 111 "出错了"
// 222

// catch代码之中又抛出了一个错误
var n = 100;
try {
  throw n;
} catch (e) {
  if (e <= 50) {
    // ...
  } else {
    throw e;
  }
}
// Uncaught 100

// 为了捕捉不同类型的错误，catch代码块之中可以加入判断语句。
// catch捕获错误之后，会判断错误类型（EvalError还是RangeError），进行不同的处理
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.log(e.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    console.log(e.name + ": " + e.message);
  }
  // ...
}
```

## 11、finally 代码块

`try...catch`结构允许在最后添加一个`finally`代码块，表示**不管是否出现错误，都必需在最后运行的语句**。
```js
// 由于没有catch语句块，一旦发生错误，代码就会中断执行
// 中断执行之前，会先执行finally代码块，然后再向用户提示报错信息。
function cleansUp() {
  try {
    throw new Error('出错了……');
    console.log('此行不会执行');
  } finally {
    console.log('完成清理工作');
  }
}
cleansUp()
// 完成清理工作
// Uncaught Error: 出错了……
//    at cleansUp (<anonymous>:3:11)
//    at <anonymous>:10:1

// try代码块没有发生错误，而且里面还包括return语句，但是finally代码块依然会执行
// 而且，这个函数的返回值还是result。
function idle(x) {
  try {
    console.log(x);
    return 'result';
  } finally {
    console.log('FINALLY');
  }
}
idle('hello')
// hello
// FINALLY

// return语句的执行是排在finally代码之前，只是等finally代码执行完毕后才返回
// return语句里面的count的值，是在finally代码块运行之前就获取了。
var count = 0;
function countUp() {
  try {
    return count;
  } finally {
    count++;
  }
}
countUp() // 0
count // 1

// finally代码块用法的典型场景。
// 首先打开一个文件
// 然后在try代码块中写入文件，如果没有发生错误，则运行finally代码块关闭文件；
// 一旦发生错误，则先使用catch代码块处理错误，再使用finally代码块关闭文件。
openFile();
try {
  writeFile(Data);
} catch(e) {
  handleError(e);
} finally {
  closeFile();
}

// try...catch...finally这三者之间的执行顺序。
function f() {
  try {
    console.log(0);
    throw 'bug';
  } catch(e) {
    console.log(1);
    return true; // 这句原本会延迟到 finally 代码块结束再执行
    console.log(2); // 不会运行
  } finally {
    console.log(3);
    return false; // 这句会覆盖掉前面那句 return
    console.log(4); // 不会运行
  }
  console.log(5); // 不会运行
}
var result = f();
// 0
// 1
// 3
result // false

// catch代码块之中，触发转入finally代码块的标志，不仅有return语句，还有throw语句。
// 进入catch代码块之后，一遇到throw语句，就会去执行finally代码块
// 其中有return false语句，因此就直接返回了，不再会回去执行catch代码块剩下的部分了。
function f() {
  try {
    throw '出错了！';
  } catch(e) {
    console.log('捕捉到内部错误');
    throw e; // 这句原本会等到finally结束再执行
  } finally {
    return false; // 直接返回
  }
}
try {
  f();
} catch(e) {
  // 此处不会执行
  console.log('caught outer "bogus"');
}
// 捕捉到内部错误

// try里面还有一个try
// 内层的try报错（console拼错了），这时会执行内层的finally代码块，
// 然后抛出错误，被外层的catch捕获。
try {
  try {
    consle.log('Hello world!'); // 报错
  }
  finally {
    console.log('Finally');
  }
  console.log('Will I run?');
} catch(error) {
  console.error(error.message);
}
// Finally
// consle is not defined
```
- [Generator 函数的异步应用](https://wangdoc.com/es6/generator-async.html)

## 1. 传统方法
ES6 诞生以前，异步编程的方法，大概有下面四种。
- 回调函数
- 事件监听
- 发布/订阅
- Promise 对象
Generator 函数将 JavaScript 异步编程带入了一个全新的阶段。
## 2. 异步
所谓"异步"，简单说就是一个任务不是连续完成的，可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。

比如，有一个任务是读取文件进行处理，任务的第一段是向操作系统发出请求，要求读取文件。然后，程序执行其他任务，等到操作系统返回文件，再接着执行任务的第二段（处理文件）。这种**不连续的执行，就叫做异步**。

相应地，**连续的执行就叫做同步**。由于是连续执行，不能插入其他任务，所以操作系统从硬盘读取文件的这段时间，程序只能干等着。

## 3. 回调函数
JavaScript 语言对异步编程的实现，就是回调函数。**所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数**。回调函数的英语名字`callback`，直译过来就是"重新调用"。
```js
// 读取文件进行处理，是这样写的。
// readFile函数的第三个参数，就是回调函数，也就是任务的第二段。
// 等到操作系统返回了/etc/passwd这个文件以后，回调函数才会执行。
fs.readFile('/etc/passwd', 'utf-8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
```

一个有趣的问题是，为什么 Node 约定，回调函数的第一个参数，必须是错误对象`err`（如果没有错误，该参数就是`null`）？

原因是执行分成两段，第一段执行完以后，任务所在的上下文环境就已经结束了。在这以后抛出的错误，原来的上下文环境已经无法捕捉，只能当作参数，传入第二段。

## 4. Promise
回调函数本身并没有问题，它的问题出现在多个回调函数嵌套。假定读取`A`文件之后，再读取`B`文件，代码如下。
```js
fs.readFile(fileA, 'utf-8', function (err, data) {
  fs.readFile(fileB, 'utf-8', function (err, data) {
    // ...
  });
});
```
不难想象，如果依次读取两个以上的文件，就会出现多重嵌套。代码不是纵向发展，而是横向发展，很快就会乱成一团，无法管理。因为**多个异步操作形成了强耦合，只要有一个操作需要修改，它的上层回调函数和下层回调函数，可能都要跟着修改**。这种情况就称为"**回调函数地狱**"（callback hell）。

Promise 对象就是为了解决这个问题而提出的。它不是新的语法功能，而是一种新的写法，允许将回调函数的嵌套，改成链式调用。采用 `Promise`，连续读取多个文件，写法如下。
```js
//fs-readfile-promise模块作用就是返回一个 Promise 版本的readFile函数。
// Promise 提供then方法加载回调函数，catch方法捕捉执行过程中抛出的错误。
var readFile = require('fs-readfile-promise');
readFile(fileA)
.then(function (data) {
  console.log(data.toString());
})
.then(function () {
  return readFile(fileB);
})
.then(function (data) {
  console.log(data.toString());
})
.catch(function (err) {
  console.log(err);
});
```
可以看到，**Promise 的写法只是回调函数的改进，使用`then`方法以后，异步任务的两段执行看得更清楚了，除此以外，并无新意**。

**Promise 的最大问题是代码冗余**，原来的任务被 Promise 包装了一下，不管什么操作，一眼看去都是一堆`then`，原来的语义变得很不清楚。

## 5. Generator 函数 - 协程
传统的编程语言，早有异步编程的解决方案（其实是多任务的解决方案）。其中有一种叫做"协程"（`coroutine`），意思是**多个线程互相协作，完成异步任务**。

协程遇到`yield`命令就暂停，等到执行权返回，再从暂停的地方继续往后执行。它的最大优点，就是代码的写法非常像同步操作，如果去除`yield`命令，简直一模一样。

协程有点像函数，又有点像线程。它的运行流程大致如下。
- 第一步，协程`A`开始执行。
- 第二步，协程`A`执行到一半，进入暂停，执行权转移到协程`B`。
- 第三步，（一段时间后）协程`B`交还执行权。
- 第四步，协程`A`恢复执行。

上面流程的协程`A`，就是异步任务，因为它分成两段（或多段）执行。
```js
// 函数asyncJob是一个协程，它的奥妙就在其中的yield命令
// 它表示执行到此处，执行权将交给其他协程。也就是说，yield命令是异步两个阶段的分界线。
function* asyncJob() {
  // ...其他代码
  var f = yield readFile(fileA);
  // ...其他代码
}
```

## 6. 协程的 Generator 函数实现
Generator 函数是协程在 ES6 的实现，**最大特点就是可以交出函数的执行权（即暂停执行）**。

**整个 Generator 函数就是一个封装的异步任务，或者说是异步任务的容器**。异步操作需要暂停的地方，都用`yield`语句注明。Generator 函数的执行方法如下。
```js
// 调用 Generator 函数，会返回一个内部指针（即遍历器）g
// 这是 Generator 函数不同于普通函数的另一个地方，即执行它不会返回结果，返回的是指针对象。
// 调用指针g的next方法，会移动内部指针（即执行异步任务的第一段），
// 指向第一个遇到的yield语句，上例是执行到x + 2为止。
function* gen(x) {
  var y = yield x + 2;
  return y;
}
var g = gen(1);
g.next() // { value: 3, done: false }
g.next() // { value: undefined, done: true }
```
**`next`方法的作用是分阶段执行Generator函数**。每次调用`next`方法，会返回一个对象，表示当前阶段的信息（`value`属性和`done`属性）。
- `value`属性是`yield`语句后面表达式的值，表示当前阶段的值；
- `done`属性是一个布尔值，表示 Generator 函数是否执行完毕，即是否还有下一个阶段。
## 7. Generator 函数的数据交换和错误处理
Generator 函数可以暂停执行和恢复执行，这是它能封装异步任务的根本原因。除此之外，它还有两个特性，使它可以作为异步编程的完整解决方案：函数体内外的数据交换和错误处理机制。
- `next`返回值的 `value` 属性，是 Generator 函数向外输出数据；
- `next`方法还可以接受参数，向 Generator 函数体内输入数据。
- Generator 函数内部还可以部署错误处理代码，捕获函数体外抛出的错误。
```js
function* gen(x){
  var y = yield x + 2;
  return y;
}
var g = gen(1);
g.next() // { value: 3, done: false }
g.next(2) // { value: 2, done: true }
```
```js
// Generator 函数体外，使用指针对象的throw方法抛出的错误，可以被函数体内的try...catch代码块捕获
// 这意味着，出错的代码与处理错误的代码，实现了时间和空间上的分离，这对于异步编程无疑是很重要的
function* gen(x){
  try {
    var y = yield x + 2;
  } catch (e){
    console.log(e);
  }
  return y;
}

var g = gen(1);
g.next();
g.throw('出错了'); // 出错了
```
## 8. 异步任务的封装
```js
// Generator 函数封装了一个异步操作，该操作先读取一个远程接口，然后从 JSON 格式的数据解析信息。
// 就像前面说过的，这段代码非常像同步操作，除了加上了yield命令。
var fetch = require('node-fetch');
function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}

// 先执行 Generator 函数，获取遍历器对象，然后使用next方法（第二行），执行异步任务的第一阶段。
// 由于Fetch模块返回的是一个 Promise 对象，因此要用then方法调用下一个next方法。
var g = gen();
var result = g.next();

result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data);
});
```
可以看到，虽然 Generator 函数将异步操作表示得很简洁，但是流程管理却不方便（即何时执行第一阶段、何时执行第二阶段）。
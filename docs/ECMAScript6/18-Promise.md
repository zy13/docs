- [Promise 对象](https://wangdoc.com/es6/promise.html)

## 1. Promise 的含义
`Promise` 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了`Promise`对象。

所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，`Promise` 是一个对象，从它可以获取异步操作的消息。`Promise` 提供统一的 `API`，各种异步操作都可以用同样的方法进行处理。

如果某些事件不断地反复发生，一般来说，使用 `Stream` 模式是比部署`Promise`更好的选择。

### Promise对象有以下两个特点
- （1）**对象的状态不受外界影响**。`Promise`对象代表一个异步操作，有三种状态：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是`Promise`这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
- （2）**一旦状态改变，就不会再变，任何时候都可以得到这个结果**。`Promise`对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 `resolved`（已定型）。如果改变已经发生了，你再对`Promise`对象添加回调函数，也会立即得到这个结果。这与事件（`Event`）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

有了`Promise`对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，`Promise`对象提供统一的接口，使得控制异步操作更加容易。

### Promise也有一些缺点
- 首先，无法取消`Promise`，一旦新建它就会立即执行，无法中途取消。
- 其次，如果不设置回调函数，`Promise`内部抛出的错误，不会反应到外部。
- 第三，当处于`pending`状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

## 2. 基本用法
ES6 规定，`Promise`对象是一个构造函数，用来生成`Promise`实例。
- **resolve函数的作用**是，将`Promise`对象的状态从“未完成”变为“成功”（即从 `pending` 变为 `resolved`），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
- **reject函数的作用**是，将`Promise`对象的状态从“未完成”变为“失败”（即从 `pending` 变为 `rejected`），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
```js
// Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
// 它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```
`Promise`实例生成以后，可以用**then方法分别指定resolved状态和rejected状态的回调函数**。`then`方法可以接受两个回调函数作为参数。这两个函数都是可选的，不一定要提供。它们都接受`Promise`对象传出的值作为参数。
- 第一个回调函数是`Promise`对象的状态变为`resolved`时调用，
- 第二个回调函数是`Promise`对象的状态变为`rejected`时调用。
```js
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});

// timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果
// 过了指定的时间（ms参数）以后，Promise实例的状态变为resolved，就会触发then方法绑定的回调函数
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}
timeout(100).then((value) => {
  console.log(value);
});

// Promise 新建后就会立即执行。
// Promise 新建后立即执行，所以首先输出的是Promise。
// 然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});
promise.then(function() {
  console.log('resolved.');
});
console.log('Hi!');
// Promise
// Hi!
// resolved


// 下面是一个用`Promise`对象实现的 `Ajax` 操作的例子。

// getJSON是对 XMLHttpRequest 对象的封装
// 用于发出一个针对 JSON 数据的 HTTP 请求
// 并且返回一个Promise对象
// 需要注意的是，在getJSON内部，resolve函数和reject函数调用时，都带有参数。
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });
  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
```
如果调用`resolve`函数和`reject`函数时带有参数，那么它们的参数会被传递给回调函数。`reject`函数的参数通常是`Error`对象的实例，表示抛出的错误；`resolve`函数的参数除了正常的值以外，还可能是另一个 `Promise` 实例，比如像下面这样。
```js
// p1和p2都是 Promise 的实例，但是p2的resolve方法将p1作为参数，
// 即一个异步操作的结果是返回另一个异步操作。
// 这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态
// 如果p1的状态是pending，那么p2的回调函数就会等待p1的状态改变；
// 如果p1的状态已经是resolved或者rejected，那么p2的回调函数将会立刻执行。
const p1 = new Promise(function (resolve, reject) {
  // ...
});
const p2 = new Promise(function (resolve, reject) {
  // ...
  resolve(p1);
})

// p1是一个 Promise，3 秒之后变为rejected
// p2的状态在 1 秒之后改变，resolve方法返回的是p1
// 由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。
// 所以，后面的then语句都变成针对后者（p1）。
// 又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数。
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})
p2
  .then(result => console.log(result))
  .catch(error => console.log(error))
// Error: fail
```
- 调用`resolve`或`reject`并不会终结 Promise 的参数函数的执行
- 调用`resolve`或`reject`以后，Promise 的使命就完成了，后继操作应该放到`then`方法里面，而不应该直接写在`resolve`或`reject`的后面。所以，最好在它们前面加上`return`语句，这样就不会有意外。
```js
// 调用resolve(1)以后，后面的console.log(2)还是会执行，并且会首先打印出来
// 这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1

new Promise((resolve, reject) => {
  return resolve(1);
  // 后面的语句不会执行
  console.log(2);
})
```
## 3. Promise.prototype.then()
`Promise.prototype.then()`方法的**作用是为 Promise 实例添加状态改变时的回调函数，它返回的是一个新的Promise实例**，因此可以采用**链式写法**，即`then`方法后面再调用另一个`then`方法。

采用链式的`then`，可以指定一组按照次序调用的回调函数。这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用。


`then`方法有两个参数，它们都是可选的。
- 第一个参数是`resolved`状态的回调函数
- 第二个参数是`rejected`状态的回调函数
```js
// then方法的链式操作
// 第一个回调函数完成以后，会将结果作为参数，传入第二个回调函数
getJSON('/posts.json').then(function(json){
  return json.post
}).then(function(post){
  // ...
})

// then函数的两个参数
// 第一个then方法指定的回调函数，返回的是另一个Promise对象
// 这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。
// 如果变为resolved，就调用第一个回调函数，如果状态变为rejected，就调用第二个回调函数。
getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function (comments) {
  console.log("resolved: ", comments);
}, function (err){
  console.log("rejected: ", err);
});

// 采用箭头函数简化
getJSON("/post/1.json").then(
  post => getJSON(post.commentURL)
).then(
  comments => console.log("resolved: ", comments),
  err => console.log("rejected: ", err)
);
```
## 4. Promise.prototype.catch()
`Promise.prototype.catch()`方法是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，**用于指定发生错误时的回调函数**。
- `reject()`方法的作用，等同于抛出错误
- 如果 Promise 状态已经变成`resolved`，再抛出错误是无效的
- Promise 对象的错误**具有“冒泡”性质**，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个`catch`语句捕获。
- 一般来说，不要在`then()`方法里面定义 `Reject` 状态的回调函数（即`then`的第二个参数），总是使用`catch`方法。
- 跟传统的`try/catch`代码块不同的是，如果没有使用`catch()`方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。
- `Node.js` 有一个`unhandledRejection`事件，专门监听未捕获的`reject`错误。`unhandledRejection`事件的监听函数有两个参数，第一个是错误对象，第二个是报错的 Promise 实例，它可以用来了解发生错误的环境信息。注意，**Node 有计划在未来废除`unhandledRejection`事件。如果 Promise 内部有未捕获的错误，会直接终止进程，并且进程的退出码不为 `0`**。
- 一般总是建议，Promise 对象后面要跟`catch()`方法，这样可以处理 Promise 内部发生的错误。`catch()`方法返回的还是一个 Promise 对象，因此后面还可以接着调用`then()`方法。如果没有报错，则会跳过`catch()`方法。
- `catch()`方法之中，还能再抛出错误。
```js
// getJSON()方法返回一个 Promise 对象，
// 如果该对象状态变为resolved，则会调用then()方法指定的回调函数
// 如果异步操作抛出错误，状态就会变为rejected，就会调用catch()方法指定的回调函数，处理这个错误
getJSON('/posts.json').then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});

// 另外，then()方法指定的回调函数，如果运行中抛出错误，也会被catch()方法捕获。
p.then((val) => console.log('fulfilled:', val))
  .catch((err) => console.log('rejected', err));
// 等同于
p.then((val) => console.log('fulfilled:', val))
  .then(null, (err) => console.log("rejected:", err));

// promise抛出一个错误，就被catch()方法指定的回调函数捕获
const promise = new Promise(function(resolve, reject) {
  throw new Error('test');
});
promise.catch(function(error) {
  console.log(error);
});
// Error: test

// 上面的写法与下面两种写法是等价的

// 写法一
const promise = new Promise(function(resolve, reject) {
  try {
    throw new Error('test');
  } catch(e) {
    reject(e);
  }
});
promise.catch(function(error) {
  console.log(error);
});

// 写法二
const promise = new Promise(function(resolve, reject) {
  reject(new Error('test'));
});
promise.catch(function(error) {
  console.log(error);
});
```
```js
// Promise 在resolve语句后面，再抛出错误，不会被捕获
// 因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。
const promise = new Promise(function(resolve, reject) {
  resolve('ok');
  throw new Error('test');
});
promise
  .then(function(value) { console.log(value) })
  .catch(function(error) { console.log(error) });
// ok
```
```js
// 一共有三个 Promise 对象：一个由getJSON()产生，两个由then()产生
// 它们之中任何一个抛出的错误，都会被最后一个catch()捕获。
getJSON('/post/1.json').then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});
```
```js
// 第二种写法要好于第一种写法，
// 理由是第二种写法可以捕获前面then方法执行中的错误，也更接近同步的写法（try/catch）
// 因此，建议总是使用catch()方法，而不使用then()方法的第二个参数。

// bad
promise
  .then(function(data) {
    // success
  }, function(err) {
    // error
  });

// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });
```
```js
// someAsyncThing()函数产生的 Promise 对象，内部有语法错误
// 浏览器运行到这一行，会打印出错误提示ReferenceError: x is not defined
// 但是不会退出进程、终止脚本执行，2 秒之后还是会输出123
// 这就是说，Promise 内部的错误不会影响到 Promise 外部的代码，
// 通俗的说法就是“Promise 会吃掉错误”。

const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  console.log('everything is great');
});

setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123
```
```js
// 上面的脚本放在服务器执行，退出码就是0（即表示执行成功）
// 不过，Node.js 有一个unhandledRejection事件，专门监听未捕获的reject错误
// 上面的脚本会触发这个事件的监听函数，可以在监听函数里面抛出错误。
// unhandledRejection事件的监听函数有两个参数，
// 第一个是错误对象，第二个是报错的 Promise 实例，它可以用来了解发生错误的环境信息。
process.on('unhandledRejection', function (err, p) {
  throw err;
});
```
```js
// Promise 指定在下一轮“事件循环”再抛出错误
// 到了那个时候，Promise 的运行已经结束了，
// 所以这个错误是在 Promise 函数体外抛出的，会冒泡到最外层，成了未捕获的错误。
const promise = new Promise(function (resolve, reject) {
  resolve('ok');
  setTimeout(function () { throw new Error('test') }, 0)
});
promise.then(function (value) { console.log(value) });
// ok
// Uncaught Error: test
```
```js
// 运行完catch()方法指定的回调函数，会接着运行后面那个then()方法指定的回调函数。
// 如果没有报错，则会跳过catch()方法。
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing()
.catch(function(error) {
  console.log('oh no', error);
})
.then(function() {
  console.log('carry on');
});
// oh no [ReferenceError: x is not defined]
// carry on

// 代码因为没有报错，跳过了catch()方法，直接执行后面的then()方法
// 此时，要是then()方法里面报错，就与前面的catch()无关了。
Promise.resolve()
.catch(function(error) {
  console.log('oh no', error);
})
.then(function() {
  console.log('carry on');
});
// carry on
```
```js
// catch()方法抛出一个错误，
// 因为后面没有别的catch()方法了，导致这个错误不会被捕获，也不会传递到外层。
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};
someAsyncThing().then(function() {
  return someOtherAsyncThing();
}).catch(function(error) {
  console.log('oh no', error);
  // 下面一行会报错，因为 y 没有声明
  y + 2;
}).then(function() {
  console.log('carry on');
});
// oh no [ReferenceError: x is not defined]

// 改下上面代码
// 第二个catch()方法用来捕获前一个catch()方法抛出的错误。
someAsyncThing().then(function() {
  return someOtherAsyncThing();
}).catch(function(error) {
  console.log('oh no', error);
  // 下面一行会报错，因为y没有声明
  y + 2;
}).catch(function(error) {
  console.log('carry on', error);
});
// oh no [ReferenceError: x is not defined]
// carry on [ReferenceError: y is not defined]
```
## 5. Promise.prototype.finally() - ES2018
`finally()`方法**用于指定不管 `Promise` 对象最后状态如何，都会执行的操作**。该方法是 ES2018 引入标准的。
- 服务器使用 Promise 处理请求，然后**使用`finally`方法关掉服务器**。
- `finally`方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是`fulfilled`还是`rejected`。这表明，**`finally`方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果**。
- `finally`本质上是`then`方法的特例。
```js
// 不管promise最后的状态，在执行完then或catch指定的回调函数后，都会执行finally方法指定的回调函数
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```
```js
// 使用finally方法关掉服务器。
server.listen(port)
  .then(function () {
    // ...
  })
  .finally(server.stop);
```
```js
// 如果不使用finally方法，同样的语句需要为成功和失败两种情况各写一次。
// 有了finally方法，则只需要写一次。
promise
.finally(() => {
  // 语句
});

// 等同于
promise
.then(
  result => {
    // 语句
    return result;
  },
  error => {
    // 语句
    throw error;
  }
);

// 它的实现也很简单
// 不管前面的 Promise 是fulfilled还是rejected，都会执行回调函数callback
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

// 从上面的实现还可以看到，finally方法总是会返回原来的值。
// resolve 的值是 undefined
Promise.resolve(2).then(() => {}, () => {})

// resolve 的值是 2
Promise.resolve(2).finally(() => {})

// reject 的值是 undefined
Promise.reject(3).then(() => {}, () => {})

// reject 的值是 3
Promise.reject(3).finally(() => {})
```
## 6. Promise.all()
`Promise.all()`方法用于**将多个 Promise 实例，包装成一个新的 Promise 实例，它接受一个数组作为参数，数组元素都是 Promise 实例**，如果不是，就会先调用`Promise.resolve`方法，将参数转为 Promise 实例，再进一步处理。`Promise.all()`方法的参数可以不是数组，但必须具有 `Iterator` 接口，且返回的每个成员都是 Promise 实例。新的 Promise 实例的状态由数组成员共同决定，分两种情况：
- 只有**所有的数组元素的状态都变成`fulfilled`，新的 Promise 实例的状态才会变成`fulfilled`**，此时数组元素的返回值组成一个数组，传递给新的 Promise 实例的回调函数。
- 只要**数组元素之中有一个被`rejected`，新的 Promise 实例的状态就变成`rejected`**，此时第一个被`reject`的实例的返回值，会传递给新的 Promise 实例的回调函数。
```js
// p的状态由p1、p2、p3决定。
// 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，
// 此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
// 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，
// 此时第一个被reject的实例的返回值，会传递给p的回调函数。
const p = Promise.all([p1, p2, p3]);


// 生成一个Promise对象的数组
// promises是包含 6 个 Promise 实例的数组，
// 只有这 6 个实例的状态都变成fulfilled，或者其中有一个变为rejected，
// 才会调用Promise.all方法后面的回调函数。
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  return getJSON('/post/' + id + ".json");
});
Promise.all(promises).then(function (posts) {
  // ...
}).catch(function(reason){
  // ...
});
```
```js
// booksPromise和userPromise是两个异步操作
// 有等到它们的结果都返回了，才会触发pickTopRecommendations这个回调函数
const databasePromise = connectDatabase();
const booksPromise = databasePromise.then(findAllBooks);
const userPromise = databasePromise.then(getCurrentUser);

Promise.all([
  booksPromise,
  userPromise
])
.then(([books, user]) => pickTopRecommendations(books, user));
```
- **注意，如果作为参数的 Promise 实例，自己定义了`catch`方法，那么它一旦被`rejected`，并不会触发`Promise.all()`的`catch`方法。**
```js
// p1会resolved，p2首先会rejected，但
// 是p2有自己的catch方法，该方法返回的是一个新的 Promise 实例，p2指向的实际上是这个实例。
// 该实例执行完catch方法后，也会变成resolved，
// 导致Promise.all()方法参数里面的两个实例都会resolved，
// 因此会调用then方法指定的回调函数，而不会调用catch方法指定的回调函数。
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result)
.catch(e => e);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result)
.catch(e => e);

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e)); // ["hello", Error: 报错了]

// 如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
}).then(result => result);
const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
}).then(result => result);

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e));
// Error: 报错了
```
## 7. Promise.race()
`Promise.race()`方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。它的参数与`Promise.all()`方法一样是个 Promise 实例的数组，如果数组元素不是 Promise 实例，就会先调用`Promise.resolve()`方法，将参数转为 Promise 实例，再进一步处理。
- **只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。**
```js
const p = Promise.race([p1, p2, p3]);

// 如果 5 秒之内fetch方法无法返回结果，变量p的状态就会变为rejected，
// 从而触发catch方法指定的回调函数。
const p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
]);

p
.then(console.log)
.catch(console.error);
```
## 8. Promise.allSettled() - ES2020
有时候，我们希望等到一组异步操作都结束了，不管每一个操作是成功还是失败，再进行下一步操作。但是，现有的 Promise 方法很难实现这个要求。

**`Promise.all()`方法只适合所有异步操作都成功的情况**，如果有一个操作失败，就无法满足要求。
```js
// Promise.all()可以确定所有请求都成功了，
// 但是只要有一个请求失败，它就会报错，而不管另外的请求是否结束。
const urls = [url_1, url_2, url_3];
const requests = urls.map(x => fetch(x));

try {
  await Promise.all(requests);
  console.log('所有请求都成功。');
} catch {
  console.log('至少一个请求失败，其他请求可能还没结束。');
}
```
为了解决这个问题，ES2020引入了[`Promise.allSettled()`](https://github.com/tc39/proposal-promise-allSettled) 方法，**用来确定一组异步操作是否都结束了（不管成功或失败）**。所以，它的名字叫做`”Settled“`，包含了`”fulfilled“`和`”rejected“`两种情况。

`Promise.allSettled()`方法接受一个数组作为参数，数组的每个成员都是一个 Promise 对象，并返回一个新的 Promise 对象。只有等到参数数组的所有 Promise 对象都发生状态变更（不管是`fulfilled`还是`rejected`），返回的 Promise 对象才会发生状态变更。

**该方法返回的新的 Promise 实例，一旦发生状态变更，状态总是`fulfilled`，不会变成`rejected`**。状态变成`fulfilled`后，它的**回调函数会接收到一个数组作为参数，该数组的每个成员对应前面数组的每个 Promise 对象。**



```js
// 数组promises包含了三个请求，只有等到这三个请求都结束了（不管请求成功还是失败），
// removeLoadingIndicator()才会执行。
const promises = [
  fetch('/api-1'),
  fetch('/api-2'),
  fetch('/api-3'),
];
await Promise.allSettled(promises);
removeLoadingIndicator();

// Promise.allSettled()的返回值allSettledPromise
// 状态只可能变成fulfilled
// 它的回调函数接收到的参数是数组results
// 该数组的每个成员都是一个对象，对应传入Promise.allSettled()的数组里面的两个 Promise 对象。
// results的每个成员是一个对象，对象的格式是固定的，对应异步操作的结果。
const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);
const allSettledPromise = Promise.allSettled([resolved, rejected]);
allSettledPromise.then(function (results) {
  console.log(results);
});
// [
//    { status: 'fulfilled', value: 42 },
//    { status: 'rejected', reason: -1 }
// ]
```
成员对象的`status`属性的值只可能是字符串`fulfilled`或字符串`rejected`，用来区分异步操作是成功还是失败。如果是成功（`fulfilled`），对象会有`value`属性，如果是失败（`rejected`），会有`reason`属性，对应两种状态时前面异步操作的返回值。
```js
{status: 'fulfilled', value: value} // 异步操作成功时
{status: 'rejected', reason: reason} // 异步操作失败时

// const promises = [ fetch('index.html'), fetch('https://does-not-exist/') ];
const results = await Promise.allSettled(promises);

// 过滤出成功的请求
const successfulPromises = results.filter(p => p.status === 'fulfilled');

// 过滤出失败的请求，并输出原因
const errors = results
  .filter(p => p.status === 'rejected')
  .map(p => p.reason);
```
## 9. Promise.any() - ES2021
ES2021 引入了[`Promise.any()`](https://github.com/tc39/proposal-promise-any)方法。该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。

- **只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态。**
- `Promise.any()`跟`Promise.race()`方法很像，只有一点不同，就是`Promise.any()`不会因为某个 Promise 变成`rejected`状态而结束，必须等到所有参数 Promise 变成`rejected`状态才会结束。
- `Promise.any()`抛出的错误，不是一个一般的 `Error` 错误对象，而是一个 `AggregateError` 实例。它相当于一个数组，每个成员对应一个被`rejected`的操作所抛出的错误。
```js
Promise.any([
  fetch('https://v8.dev/').then(() => 'home'),
  fetch('https://v8.dev/blog').then(() => 'blog'),
  fetch('https://v8.dev/docs').then(() => 'docs')
]).then((first) => {  // 只要有一个 fetch() 请求成功
  console.log(first);
}).catch((error) => { // 所有三个 fetch() 全部请求失败
  console.log(error);
});
```
```js
// 下面是Promise()与await命令结合使用的例子。
// Promise.any()方法的参数数组包含三个 Promise 操作，其中只要有一个变成fulfilled，
// Promise.any()返回的 Promise 对象就变成fulfilled。
// 如果所有三个操作都变成rejected，那么await命令就会抛出错误。
const promises = [
  fetch('/endpoint-a').then(() => 'a'),
  fetch('/endpoint-b').then(() => 'b'),
  fetch('/endpoint-c').then(() => 'c'),
];
try {
  const first = await Promise.any(promises);
  console.log(first);
} catch (error) {
  console.log(error);
}
```
```js
// 下面是 AggregateError 的实现示例。
// new AggregateError() extends Array
const err = new AggregateError();
err.push(new Error("first error"));
err.push(new Error("second error"));
// ...
throw err;
```
```js
var resolved = Promise.resolve(42);
var rejected = Promise.reject(-1);
var alsoRejected = Promise.reject(Infinity);

Promise.any([resolved, rejected, alsoRejected]).then(function (result) {
  console.log(result); // 42
});

Promise.any([rejected, alsoRejected]).catch(function (results) {
  console.log(results); // [-1, Infinity]
});
```
## 10. Promise.resolve()
`Promise.resolve()`方法**将现有对象转为 Promise 对象**，该方法的参数分成四种情况：
- **参数是一个 `Promise` 实例**。如果参数是 Promise 实例，那么`Promise.resolve`将不做任何修改、原封不动地返回这个实例。
- 参数是一个`thenable`对象。`thenable`对象指的是具有`then`方法的对象，`Promise.resolve()`方法会将这个对象转为 Promise 对象，然后就立即执行`thenable`对象的`then()`方法。
- 参数不是具有`then()`方法的对象，或根本就不是对象。如果参数是一个原始值，或者是一个不具有`then()`方法的对象，则`Promise.resolve()`方法返回一个新的 Promise 对象，状态为`resolved`。
- 不带有任何参数。`Promise.resolve()`方法允许调用时不带参数，直接返回一个`resolved`状态的 Promise 对象。所以，如果希望得到一个 Promise 对象，比较方便的方法就是直接调用`Promise.resolve()`方法。
```js
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))

// 参数是一个thenable对象
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};

// thenable对象的then()方法执行后，对象p1的状态就变为resolved，
// 从而立即执行最后那个then()方法指定的回调函数，输出42。
let p1 = Promise.resolve(thenable);
p1.then(function (value) {
  console.log(value);  // 42
});

// 代码生成一个新的 Promise 对象的实例p。
// 由于字符串Hello不属于异步操作（判断方法是字符串对象不具有 then 方法），
// 返回 Promise 实例的状态从一生成就是resolved，所以回调函数会立即执行。
// Promise.resolve()方法的参数，会同时传给回调函数。
const p = Promise.resolve('Hello');
p.then(function (s) {
  console.log(s)
});
// Hello

// 变量p就是一个 Promise 对象
const p = Promise.resolve();
p.then(function () {
  // ...
});

// 需要注意的是，立即resolve()的 Promise 对象，
// 是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时。
setTimeout(function () {
  console.log('three');
}, 0);
Promise.resolve().then(function () {
  console.log('two');
});
console.log('one');
// one
// two
// three
```
## 11. Promise.reject()
`Promise.reject(reason)`方法也会返回一个新的 Promise 实例，该实例的状态为`rejected`。`Promise.reject()`方法的参数，会原封不动地作为`reject`的理由，变成后续方法的参数。
```js
// 生成一个 Promise 对象的实例p，状态为rejected，回调函数会立即执行
const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了

// Promise.reject()方法的参数是一个字符串，后面catch()方法的参数e就是这个字符串。
Promise.reject('出错了')
.catch(e => {
  console.log(e === '出错了')
})
// true
```
## 12. 应用 - 加载图片 - ♥
将图片的加载写成一个Promise，一旦加载完成，Promise的状态就发生变化。
```js
// 使用Promise包装了一个图片加载的异步操作。
// 如果加载成功，就调用resolve方法，否则就调用reject方法。
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();
    image.onload = function() {
      resolve(image);
    };
    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };
    image.src = url;
  });
}

const preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
```

## 13. 应用 - Generator 函数与 Promise 的结合
使用 Generator 函数管理流程，遇到异步操作的时候，通常返回一个 Promise 对象。
```js
// Generator 函数g之中，有一个异步操作getFoo，它返回的就是一个Promise对象。
// 函数run用来处理这个Promise对象，并调用下一个next方法。
function getFoo () {
  return new Promise(function (resolve, reject){
    resolve('foo');
  });
}

const g = function* () {
  try {
    const foo = yield getFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
};

function run (generator) {
  const it = generator();

  function go(result) {
    if (result.done) return result.value;

    return result.value.then(function (value) {
      return go(it.next(value));
    }, function (error) {
      return go(it.throw(error));
    });
  }

  go(it.next());
}

run(g);
```
## 14. Promise.try()
实际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。因为这样就可以不管f是否包含异步操作，都用`then`方法指定下一步流程，用`catch`方法处理`f`抛出的错误。一般就会采用下面的写法。
```js
// 下面的写法有一个缺点，就是如果f是同步函数，那么它会在本轮事件循环的末尾执行。
Promise.resolve().then(f)

// 函数f是同步的，但是用 Promise 包装了以后，就变成异步执行了。
const f = () => console.log('now');
Promise.resolve().then(f);
console.log('next');
// next
// now
```

那么有没有一种方法，**让同步函数同步执行，异步函数异步执行**，并且让它们具有统一的 `API` 呢？回答是可以的，并且还有两种写法。
- 第一种写法是用`async`函数来写。
- 第二种写法是使用`new Promise()`。
```js
// 第二行是一个立即执行的匿名函数，会立即执行里面的async函数，
// 因此如果f是同步的，就会得到同步的结果；
// 如果f是异步的，就可以用then指定下一步，就像下面的写法。
const f = () => console.log('now');
(async () => f())();
console.log('next');
// now
// next

// async () => f()会吃掉f()抛出的错误
// 所以，如果想捕获错误，要使用promise.catch方法。
(async () => f())()
.then(...)

(async () => f())()
.then(...)
.catch(...)
```
```js
// 使用立即执行的匿名函数，执行new Promise()。这种情况下，同步函数也是同步执行的。
const f = () => console.log('now');
(
  () => new Promise(
    resolve => resolve(f())
  )
)();
console.log('next');
// now
// next
```
现在有一个提案，提供`Promise.try`方法替代上面第二种写法。事实上，`Promise.try`存在已久，Promise 库`Bluebird`、`Q`和`when`，早就提供了这个方法。

由于`Promise.try`为所有操作提供了统一的处理机制，所以如果想用`then`方法管理流程，最好都用`Promise.try`包装一下。这样有许多好处，其中一点就是可以更好地管理异常。
```js
const f = () => console.log('now');
Promise.try(f);
console.log('next');
// now
// next

// database.users.get()返回一个 Promise 对象，
// 如果抛出异步错误，可以用catch方法捕获，就像下面这样写。
function getUsername(userId) {
  return database.users.get({id: userId})
  .then(function(user) {
    return user.name;
  });
}
database.users.get({id: userId})
.then(...)
.catch(...)

// 但是database.users.get()可能还会抛出同步错误（比如数据库连接错误，具体要看实现方法），
// 这时你就不得不用try...catch去捕获。
try {
  database.users.get({id: userId})
  .then(...)
  .catch(...)
} catch (e) {
  // ...
}

// 上面这样的写法就很笨拙了，这时就可以统一用promise.catch()捕获所有同步和异步的错误。
// 事实上，Promise.try就是模拟try代码块，就像promise.catch模拟的是catch代码块。
Promise.try(() => database.users.get({id: userId}))
  .then(...)
  .catch(...)
```
- [Map数据结构](https://wangdoc.com/es6/set-map.html#map)

## 1. 含义

JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
```js
// 原意是将一个 DOM 节点作为对象data的键
// 但是由于对象只接受字符串作为键名，所以element被自动转为字符串[object HTMLDivElement]。
const data = {};
const element = document.getElementById('myDiv');

data[element] = 'metadata';
data['[object HTMLDivElement]'] // "metadata"
```
为了解决这个问题，ES6 提供了 **Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键**。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。**如果你需要“键值对”的数据结构，Map 比 Object 更合适。**
```js
// 使用 Map 结构的set方法，将对象o当作m的一个键，
// 然后又使用get方法读取这个键，接着使用delete方法删除了这个键。
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```

## 2. 基本用法

作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。事实上，不仅仅是数组，任何具有 `Iterator` 接口、且每个成员都是一个双元素的数组的数据结构都可以当作 Map 构造函数的参数。这就是说，Set 和 Map 都可以用来生成新的 Map。
- 如果对同一个键多次赋值，后面的值将覆盖前面的值。
- 如果读取一个未知的键，则返回`undefined`。
```js
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);
map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"

// Map构造函数接受数组作为参数，实际上执行的是下面的算法。
const items = [
  ['name', '张三'],
  ['title', 'Author']
];
const map = new Map();
items.forEach(
  ([key, value]) => map.set(key, value)
);
```
```js
// 分别使用 Set 对象和 Map 对象，当作Map构造函数的参数，结果都生成了新的 Map 对象。
const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
m1.get('foo') // 1

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
m3.get('baz') // 3
```
```js
// 对键1连续赋值两次，后一次的值覆盖前一次的值。
const map = new Map();
map
.set(1, 'aaa')
.set(1, 'bbb');
map.get(1) // "bbb"
```
```js
// 读取一个未知的键
new Map().get('asfddfsasadf') // undefined
```
只有对同一个对象的引用，Map 结构才将其视为同一个键。同理，同样的值的两个实例，在 Map 结构中被视为两个键。由此可知，Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。
```js
// 下面的set和get方法，表面是针对同一个键
// 但实际上这是两个不同的数组实例，内存地址是不一样的
// 因此get方法无法读取该键，返回undefined
const map = new Map();
map.set(['a'], 555);
map.get(['a']) // undefined

// 变量k1和k2的值是一样的，但是它们在 Map 结构中被视为两个键。
const map = new Map();
const k1 = ['a'];
const k2 = ['a'];
map
.set(k1, 111)
.set(k2, 222);
map.get(k1) // 111
map.get(k2) // 222
```
如果 Map 的键是一个**简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键**。
```js
let map = new Map();

// `0`和`-0`是一个键
map.set(-0, 123);
map.get(+0) // 123

// 布尔值`true`和字符串`true`则是两个不同的键
map.set(true, 1);
map.set('true', 2);
map.get(true) // 1

// `undefined`和`null`也是两个不同的键
map.set(undefined, 3);
map.set(null, 4);
map.get(undefined) // 3

// `NaN`不严格相等于自身，但 `Map` 将其视为同一个键
map.set(NaN, 123);
map.get(NaN) // 123
```

## 3. 实例的属性
Map 结构的实例有以下属性：
- `size`属性，返回 Map 结构的成员总数。
```js
const map = new Map();
map.set('foo', true);
map.set('bar', false);
map.size // 2
```

## 4. 实例的方法
Map 结构的实例有以下操作方法。
- `Map.prototype.set(key, value)`： 设置键名`key`对应的键值为`value`，然后返回整个 Map 结构。如果`key`已经有值，则键值会被更新，否则就新生成该键。`set`方法返回的是当前的 Map 对象，因此**可以采用链式写法**。
- `Map.prototype.get(key)`： 读取`key`对应的键值，如果找不到`key`，返回`undefined`。
- `Map.prototype.has(key)`：返回一个布尔值，表示某个键是否在当前 `Map` 对象之中。
- `Map.prototype.delete(key)`：删除某个键，返回`true`。如果删除失败，返回`false`。
- `Map.prototype.clear()`：清除所有成员，没有返回值。
```js
// set方法设置键名key对应的键值为value
// 返回整个 Map 结构
const m = new Map();
m.set('edition', 6)        // 键是字符串
m.set(262, 'standard')     // 键是数值
m.set(undefined, 'nah')    // 键是 undefined

let map = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');
```
```js
const m = new Map();
const hello = function() {console.log('hello');};
m.set(hello, 'Hello ES6!') // 键是函数
m.get(hello)  // Hello ES6!
```
```js
const m = new Map();

m.set('edition', 6);
m.set(262, 'standard');
m.set(undefined, 'nah');

m.has('edition')     // true
m.has('years')       // false
m.has(262)           // true
m.has(undefined)     // true
```
```js
const m = new Map();
m.set(undefined, 'nah');
m.has(undefined)     // true

m.delete(undefined)
m.has(undefined)       // false
```
```js
let map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
map.clear()
map.size // 0
```

## 5. 遍历方法
Map 结构原生提供三个遍历器生成函数和一个遍历方法，Map 的遍历顺序就是插入顺序。Map 结构转为数组结构，比较快速的方法是使用扩展运算符（`...`）。
- `Map.prototype.keys()`：返回键名的遍历器。
- `Map.prototype.values()`：返回键值的遍历器。
- `Map.prototype.entries()`：返回所有成员的遍历器。
- `Map.prototype.forEach()`：遍历 Map 的所有成员。
```js
const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"
```
```js
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()]
// [1, 2, 3]

[...map.values()]
// ['one', 'two', 'three']

[...map.entries()]
// [[1,'one'], [2, 'two'], [3, 'three']]

[...map]
// [[1,'one'], [2, 'two'], [3, 'three']]
```
结合数组的`map`方法、`filter`方法，可以实现 Map 的遍历和过滤（Map 本身没有`map`和`filter`方法）。此外，Map 还有一个`forEach`方法，与数组的`forEach`方法类似，也可以实现遍历。`forEach`方法还可以接受第二个参数，用来绑定`this`。
```js
const map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

const map1 = new Map(
  [...map0].filter(([k, v]) => k < 3)
);
// 产生 Map 结构 {1 => 'a', 2 => 'b'}

const map2 = new Map(
  [...map0].map(([k, v]) => [k * 2, '_' + v])
    );
// 产生 Map 结构 {2 => '_a', 4 => '_b', 6 => '_c'}
```
```js
map.forEach(function(value, key, map) {
  console.log("Key: %s, Value: %s", key, value);
});

// forEach方法的回调函数的this，就指向reporter
const reporter = {
  report: function(key, value) {
    console.log("Key: %s, Value: %s", key, value);
  }
};

map.forEach(function(value, key, map) {
  this.report(key, value);
}, reporter);
```

## 6. Map 转为数组
Map 转为数组最方便的方法，就是使用扩展运算符（`...`）
```js
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);

[...myMap] // [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
```

## 7. 数组转为 Map
```js
// 将数组传入 Map 构造函数，就可以转为 Map。
new Map([
  [true, 7],
  [{foo: 3}, ['abc']]
])
// Map {
//   true => 7,
//   Object {foo: 3} => ['abc']
// }
```
## 8. Map 转为对象
如果所有 Map 的键都是字符串，它可以无损地转为对象。如果有非字符串的键名，那么这个键名会被转成字符串，再作为对象的键名。
```js
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map()
  .set('yes', true)
  .set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }
```

## 9. 对象转为 Map
对象转为 Map 可以通过`Object.entries()`。
```js
let obj = {"a":1, "b":2};
let map = new Map(Object.entries(obj));

function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}
objToStrMap({yes: true, no: false}) // Map {"yes" => true, "no" => false}
```

## 10. Map 转为 JSON
Map 转为 JSON 要区分两种情况。一种情况是，Map 的键名都是字符串，这时可以选择转为对象 JSON。
另一种情况是，Map 的键名有非字符串，这时可以选择转为数组 JSON。
```js
function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}
let myMap = new Map().set('yes', true).set('no', false);
strMapToJson(myMap) // '{"yes":true,"no":false}'

function mapToArrayJson(map) {
  return JSON.stringify([...map]);
}
let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
mapToArrayJson(myMap) // '[[true,7],[{"foo":3},["abc"]]]'
```

## 11. JSON 转为 Map
JSON 转为 Map，正常情况下，所有键名都是字符串。但是，有一种特殊情况，整个 JSON 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。这时，它可以一一对应地转为 Map。这往往是 Map 转为数组 JSON 的逆操作。
```js
function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(jsonStr));
}
jsonToStrMap('{"yes": true, "no": false}')
// Map {'yes' => true, 'no' => false}

function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}
jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
// Map {true => 7, Object {foo: 3} => ['abc']}
```

## 12. WeakMap 数据结构
WeakMap结构与Map结构类似，也是用于生成键值对的集合。WeakMap与Map的区别有两点。
- 首先，WeakMap只接受对象作为键名（`null`除外），不接受其他类型的值作为键名。
- 其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。
```js
// WeakMap 可以使用 set 方法添加成员
const wm1 = new WeakMap();
const key = {foo: 1};
wm1.set(key, 2);
wm1.get(key) // 2

// WeakMap 也可以接受一个数组，
// 作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
wm2.get(k2) // "bar"
```
```js
// 如果将数值1和Symbol值作为 WeakMap 的键名，都会报错。
const map = new WeakMap();
map.set(1, 2) // TypeError: 1 is not an object!
map.set(Symbol(), 2) // TypeError: Invalid value used as weak map key
map.set(null, 2) // TypeError: Invalid value used as weak map key
```
WeakMap的设计目的在于，有时我们想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用。请看下面的例子。
```js
// e1和e2是两个对象，我们通过arr数组对这两个对象添加一些文字说明。这就形成了arr对e1和e2的引用。
const e1 = document.getElementById('foo');
const e2 = document.getElementById('bar');
const arr = [
  [e1, 'foo 元素'],
  [e2, 'bar 元素'],
];

// 一旦不再需要这两个对象，我们就必须手动删除这个引用，
// 否则垃圾回收机制就不会释放e1和e2占用的内存。
// 不需要 e1 和 e2 的时候
// 必须手动删除引用
arr [0] = null;
arr [1] = null;
```
上面这样的写法显然很不方便。一旦忘了写，就会造成内存泄露。

WeakMap 就是为了解决这个问题而诞生的，它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。

基本上，如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。一个典型应用场景是，在网页的 DOM 元素上添加数据，就可以使用WeakMap结构。当该 DOM 元素被清除，其所对应的WeakMap记录就会自动被移除。
```js
// 先新建一个 WeakMap 实例。
// 然后，将一个 DOM 节点作为键名存入该实例，并将一些附加信息作为键值，一起存放在 WeakMap 里面。
// 这时，WeakMap 里面对element的引用就是弱引用，不会被计入垃圾回收机制。
const wm = new WeakMap();
const element = document.getElementById('example');
wm.set(element, 'some information');
wm.get(element) // "some information"
```
也就是说，上面的 DOM 节点对象除了 WeakMap 的弱引用外，其他位置对该对象的引用一旦消除，该对象占用的内存就会被垃圾回收机制释放。WeakMap 保存的这个键值对，也会自动消失。

总之，WeakMap的专用场合就是，**它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏。**

注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。
```js
// 键值obj是正常引用。所以，即使在 WeakMap 外部消除了obj的引用，WeakMap 内部的引用依然存在。
const wm = new WeakMap();
let key = {};
let obj = {foo: 1};

wm.set(key, obj);
obj = null;
wm.get(key)
// Object {foo: 1}
```

## 13. WeakMap 的语法
WeakMap 与 Map 在 API 上的区别主要是两个，
- 一是没有遍历操作（即没有`keys()`、`values()`和`entries()`方法），也没有`size`属性。
- 二是无法清空，即不支持`clear`方法。因此，WeakMap只有四个方法可用：`get()`、`set()`、`has()`、`delete()`。

因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了，为了防止出现不确定性，就统一规定**不能取到键名**。
```js
const wm = new WeakMap();

// size、forEach、clear 方法都不存在
wm.size // undefined
wm.forEach // undefined
wm.clear // undefined
```

## 14. WeakMap 的示例

WeakMap 的例子很难演示，因为无法观察它里面的引用会自动消失。此时，其他引用都解除了，已经没有引用指向 WeakMap 的键名了，导致无法证实那个键名是不是存在。

贺师俊老师提示，如果引用所指向的值占用特别多的内存，就可以通过 Node 的`process.memoryUsage`方法看出来。根据这个思路，网友`vtxf`补充了下面的例子。
```js
// 首先，打开 `Node` 命令行。
$ node --expose-gc // --expose-gc参数表示允许手动执行垃圾回收机制

// 然后，执行下面的代码。
// 手动执行一次垃圾回收，保证获取的内存使用状态准确
> global.gc();
undefined

// 查看内存占用的初始状态，heapUsed 为 4M 左右
> process.memoryUsage();
{ rss: 21106688,
  heapTotal: 7376896,
  heapUsed: 4153936,
  external: 9059 }

> let wm = new WeakMap();
undefined

// 新建一个变量 key，指向一个 5*1024*1024 的数组
> let key = new Array(5 * 1024 * 1024);
undefined

// 设置 WeakMap 实例的键名，也指向 key 数组
// 这时，key 数组实际被引用了两次，
// 变量 key 引用一次，WeakMap 的键名引用了第二次
// 但是，WeakMap 是弱引用，对于引擎来说，引用计数还是1
> wm.set(key, 1);
WeakMap {}

> global.gc();
undefined

// 这时内存占用 heapUsed 增加到 45M 了
> process.memoryUsage();
{ rss: 67538944,
  heapTotal: 7376896,
  heapUsed: 45782816,
  external: 8945 }

// 清除变量 key 对数组的引用，
// 但没有手动清除 WeakMap 实例的键名对数组的引用
> key = null;
null

// 再次执行垃圾回收
> global.gc();
undefined

// 内存占用 heapUsed 变回 4M 左右，
// 可以看到 WeakMap 的键名引用没有阻止 gc 对内存的回收
> process.memoryUsage();
{ rss: 20639744,
  heapTotal: 8425472,
  heapUsed: 3979792,
  external: 8956 }

// 上面代码中，只要外部的引用消失，WeakMap 内部的引用，
// 就会自动被垃圾回收清除。由此可见，有了 WeakMap 的帮助，解决内存泄漏就会简单很多。
```
Chrome 浏览器的 `Dev Tools` 的 `Memory` 面板，有一个垃圾桶的按钮，可以强制垃圾回收（`garbage collect`）。这个按钮也能用来观察 WeakMap 里面的引用是否消失。

## 15. WeakMap 的用途
前文说过，WeakMap 应用的典型场合就是 DOM 节点作为键名。下面是一个例子。
```js
// document.getElementById('logo')是一个 DOM 节点，每当发生click事件，就更新一下状态。
// 我们将这个状态作为键值放在 WeakMap 里，对应的键名就是这个节点对象。
// 一旦这个 DOM 节点删除，该状态就会自动消失，不存在内存泄漏风险。
let myWeakmap = new WeakMap();

myWeakmap.set(
  document.getElementById('logo'),
  {timesClicked: 0})
;

document.getElementById('logo').addEventListener('click', function() {
  let logoData = myWeakmap.get(document.getElementById('logo'));
  logoData.timesClicked++;
}, false);
```
WeakMap 的另一个用处是部署私有属性。
```js
// Countdown类的两个内部属性_counter和_action，是实例的弱引用，
// 所以如果删除实例，它们也就随之消失，不会造成内存泄漏。
const _counter = new WeakMap();
const _action = new WeakMap();

class Countdown {
  constructor(counter, action) {
    _counter.set(this, counter);
    _action.set(this, action);
  }
  dec() {
    let counter = _counter.get(this);
    if (counter < 1) return;
    counter--;
    _counter.set(this, counter);
    if (counter === 0) {
      _action.get(this)();
    }
  }
}

const c = new Countdown(2, () => console.log('DONE'));

c.dec()
c.dec()
// DONE
```

## 16. WeakRef - ES2021
WeakSet 和 WeakMap 是基于弱引用的数据结构，ES2021 更进一步，提供了 `WeakRef` 对象，**用于直接创建对象的弱引用**。
```js
// target是原始对象，构造函数WeakRef()创建了一个基于target的新对象wr。
// 这里，wr就是一个 WeakRef 的示例，属于对target的弱引用，
// 垃圾回收机制不会计入这个引用，也就是说，wr的引入不会妨碍原始对象target被垃圾回收机制清除。
let target = {};
let wr = new WeakRef(target);
```
`WeakRef` 实例对象有一个`deref()`方法，如果原始对象存在，该方法返回原始对象；如果原始对象已经被垃圾回收机制清除，该方法返回`undefined`。
```js
// deref()方法可以判断原始对象是否已被清除
let target = {};
let wr = new WeakRef(target);

let obj = wr.deref();
if (obj) { // target 未被垃圾回收机制清除
  // ...
}
```
弱引用对象的一大用处，就是作为缓存，未被清除时可以从缓存取值，一旦清除缓存就自动失效。
```js
// makeWeakCached()用于建立一个缓存，缓存里面保存对原始文件的弱引用。
function makeWeakCached(f) {
  const cache = new Map();
  return key => {
    const ref = cache.get(key);
    if (ref) {
      const cached = ref.deref();
      if (cached !== undefined) return cached;
    }

    const fresh = f(key);
    cache.set(key, new WeakRef(fresh));
    return fresh;
  };
}
const getImageCached = makeWeakCached(getImage);
```
注意，标准规定，一旦使用`WeakRef()`创建了原始对象的弱引用，那么在本轮事件循环（`event loop`），原始对象肯定不会被清除，只会在后面的事件循环才会被清除。

## 17. FinalizationRegistry - ES2021
ES2021 引入了清理器注册表功能 `FinalizationRegistry`，用来指定目标对象被垃圾回收机制清除以后，所要执行的回调函数。
- 首先，新建一个注册表实例。
- 然后，注册表实例的`register()`方法，用来注册所要观察的目标对象。
- 最后，如果以后还想取消已经注册的回调函数，则要向`register()`传入第三个参数，作为标记值。这个标记值必须是对象，一般都用原始对象。接着，再使用注册表实例对象的`unregister()`方法取消注册。
```js
// FinalizationRegistry()是系统提供的构造函数，
// 返回一个清理器注册表实例，里面登记了所要执行的回调函数。
// 回调函数作为FinalizationRegistry()的参数传入，它本身有一个参数heldValue。
const registry = new FinalizationRegistry(heldValue => {
  // ....
});

// theObject就是所要观察的目标对象，一旦该对象被垃圾回收机制清除，
// 注册表就会在清除完成后，调用早前注册的回调函数，
// 并将some value作为参数（前面的heldValue）传入回调函数。
registry.register(theObject, "some value");

// register()方法的第三个参数就是标记值theObject。
// 取消回调函数时，要使用unregister()方法，并将标记值作为该方法的参数。
// 这里register()方法对第三个参数的引用，也属于弱引用。如果没有这个参数，则回调函数无法取消。
registry.register(theObject, "some value", theObject);
// ...其他操作...
registry.unregister(theObject);
```
注意，注册表不对目标对象`theObject`构成强引用，属于弱引用。因为强引用的话，原始对象就不会被垃圾回收机制清除，这就失去使用注册表的意义了。

回调函数的参数`heldValue`可以是任意类型的值，字符串、数值、布尔值、对象，甚至可以是`undefined`。

由于回调函数被调用以后，就不再存在于注册表之中了，所以执行unregister()应该是在回调函数还没被调用之前。

下面使用`FinalizationRegistry`，对前一节的缓存函数进行增强。
```js
// 就是增加一个清理器注册表，一旦缓存的原始对象被垃圾回收机制清除，会自动执行一个回调函数。
// 该回调函数会清除缓存里面已经失效的键。
function makeWeakCached(f) {
  const cache = new Map();
  const cleanup = new FinalizationRegistry(key => {
    const ref = cache.get(key);
    if (ref && !ref.deref()) cache.delete(key);
  });

  return key => {
    const ref = cache.get(key);
    if (ref) {
      const cached = ref.deref();
      if (cached !== undefined) return cached;
    }

    const fresh = f(key);
    cache.set(key, new WeakRef(fresh));
    cleanup.register(fresh, key);
    return fresh;
  };
}
const getImageCached = makeWeakCached(getImage);

// 如果由于某种原因，Thingy类的实例对象没有调用release()方法，
// 就被垃圾回收机制清除了，那么清理器就会调用回调函数#cleanup()，输出一条错误信息。
class Thingy {
  #file;
  #cleanup = file => {
    console.error(
      `The 'release' method was never called for the 'Thingy' for the file "${file.name}"`
    );
  };
  #registry = new FinalizationRegistry(this.#cleanup);

  constructor(filename) {
    this.#file = File.open(filename);
    this.#registry.register(this, this.#file, this.#file);
  }

  release() {
    if (this.#file) {
      this.#registry.unregister(this.#file);
      File.close(this.#file);
      this.#file = null;
    }
  }
}
```
由于无法知道清理器何时会执行，所以最好避免使用它。另外，如果浏览器窗口关闭或者进程意外退出，清理器则不会运行。

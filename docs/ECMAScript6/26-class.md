- [Class 的继承](https://wangdoc.com/es6/class-extends.html)

## 1. 简介
Class 可以通过`extends`关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。
```js
// 定义了一个ColorPoint类，该类通过extends关键字，继承了Point类的所有属性和方法
// 是由于没有部署任何代码，所以这两个类完全一样，等于复制了一个Point类
class Point {
}

class ColorPoint extends Point {
}
```
```js
// constructor方法和toString方法之中，都出现了super关键字，
// 它在这里表示父类的构造函数，用来新建父类的this对象。
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}
```
子类必须在`constructor`方法中调用`super`方法，否则新建实例时会报错。这是因为子类自己的`this`对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用`super`方法，子类就得不到`this`对象。
```js
// ColorPoint继承了父类Point，但是它的构造函数没有调用super方法，导致新建实例时报错。
class Point { /* ... */ }
class ColorPoint extends Point {
  constructor() {
  }
}

let cp = new ColorPoint(); // ReferenceError
```
ES5 的继承，实质是先创造子类的实例对象`this`，然后再将父类的方法添加到`this`上面（`Parent.apply(this)）`。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到`this`上面（所以必须先调用`super`方法），然后再用子类的构造函数修改`this`。

如果子类没有定义`constructor`方法，这个方法会被默认添加，代码如下。也就是说，不管有没有显式定义，任何一个子类都有`constructor`方法。
```js
class ColorPoint extends Point {
}

// 等同于
class ColorPoint extends Point {
  constructor(...args) {
    super(...args);
  }
}
```
另一个需要注意的地方是，在子类的构造函数中，**只有调用`super`之后，才可以使用`this`关键字**，否则会报错。这是因为子类实例的构建，基于父类实例，只有`super`方法才能调用父类实例。
```js
// 子类的constructor方法没有调用super之前，就使用this关键字，结果报错，
// 而放在super方法之后就是正确的。
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color; // ReferenceError
    super(x, y);
    this.color = color; // 正确
  }
}

// 下面是生成子类实例的代码。
// 实例对象cp同时是ColorPoint和Point两个类的实例，这与 ES5 的行为完全一致。

let cp = new ColorPoint(25, 8, 'green');

cp instanceof ColorPoint // true
cp instanceof Point // true
```
最后，**父类的静态方法，也会被子类继承**。
```js
// hello()是A类的静态方法，B继承A，也继承了A的静态方法。
class A {
  static hello() {
    console.log('hello world');
  }
}

class B extends A {
}

B.hello()  // hello world
```

## 2. Object.getPrototypeOf()
`Object.getPrototypeOf`方法可以用来从子类上获取父类。因此，可以使用这个方法判断，一个类是否继承了另一个类。
```js
Object.getPrototypeOf(ColorPoint) === Point // true
```

## 3. super 关键字
`super`这个关键字，**既可以当作函数使用，也可以当作对象使用**。在这两种情况下，它的用法完全不同。注意，使用`super`的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错。
- 第一种情况，`super`作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次`super`函数。
- 第二种情况，`super`作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

ES6 规定，在子类普通方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类实例。
- 由于·指向子类实例，所以如果通过`super`对某个属性赋值，这时`super`就是`this`，赋值的属性会变成子类实例的属性。
- 如果`super`作为对象，用在静态方法之中，这时`super`将指向父类，而不是父类的原型对象。
- 另外，在子类的静态方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类，而不是子类的实例。
- 最后，由于对象总是继承其他对象的，所以可以在任意一个对象中，使用`super`关键字。
```js
// 子类B的构造函数之中的super()，代表调用父类的构造函数。
// 这是必须的，否则 JavaScript 引擎会报错。
class A {}
class B extends A {
  constructor() {
    super();
  }
}

// 注意，super虽然代表了父类A的构造函数，
// 但是返回的是子类B的实例，即super内部的this指的是B的实例，
// 因此super()在这里相当于A.prototype.constructor.call(this)。
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {
  constructor() {
    super();
  }
}
new A() // A
new B() // B

// 作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。
// super()用在B类的m方法之中，就会造成语法错误
class A {}
class B extends A {
  m() {
    super(); // 报错
  }
}
```
```js
// 子类B当中的super.p()，就是将super当作一个对象使用。
// 这时，super在普通方法之中，指向A.prototype，所以super.p()就相当于A.prototype.p()。
class A {
  p() {
    return 2;
  }
}
class B extends A {
  constructor() {
    super();
    console.log(super.p()); // 2
  }
}
let b = new B();

// 这里需要注意，由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，
// 是无法通过super调用的。
// p是父类A实例的属性，super.p就引用不到它。
class A {
  constructor() {
    this.p = 2;
  }
}
class B extends A {
  get m() {
    return super.p;
  }
}
let b = new B();
b.m // undefined

// 如果属性定义在父类的原型对象上，super就可以取到。
// 属性x是定义在A.prototype上面的，所以super.x可以取到它的值。
class A {}
A.prototype.x = 2;
class B extends A {
  constructor() {
    super();
    console.log(super.x) // 2
  }
}
let b = new B();
```
```js
// super.print()虽然调用的是A.prototype.print()，
// 但是A.prototype.print()内部的this指向子类B的实例，导致输出的是2，而不是1。
// 也就是说，实际上执行的是super.print.call(this)。
class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  m() {
    super.print();
  }
}

let b = new B();
b.m() // 2

// super.x赋值为3，这时等同于对this.x赋值为3。
// 而当读取super.x的时候，读的是A.prototype.x，所以返回undefined。
class A {
  constructor() {
    this.x = 1;
  }
}
class B extends A {
  constructor() {
    super();
    this.x = 2;
    super.x = 3;
    console.log(super.x); // undefined
    console.log(this.x); // 3
  }
}
let b = new B();
```
```js
// super在静态方法之中指向父类，在普通方法之中指向父类的原型对象。
class Parent {
  static myMethod(msg) {
    console.log('static', msg);
  }

  myMethod(msg) {
    console.log('instance', msg);
  }
}

class Child extends Parent {
  static myMethod(msg) {
    super.myMethod(msg);
  }

  myMethod(msg) {
    super.myMethod(msg);
  }
}

Child.myMethod(1); // static 1

var child = new Child();
child.myMethod(2); // instance 2
```
```js
// 静态方法B.m里面，super.print指向父类的静态方法。
// 这个方法里面的this指向的是B，而不是B的实例。
class A {
  constructor() {
    this.x = 1;
  }
  static print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  static m() {
    super.print();
  }
}

B.x = 3;
B.m() // 3
```
```js
// console.log(super)当中的super，无法看出是作为函数使用，还是作为对象使用，
// 所以 JavaScript 引擎解析代码的时候就会报错。
class A {}
class B extends A {
  constructor() {
    super();
    console.log(super); // 报错
  }
}

// 这时，如果能清晰地表明super的数据类型，就不会报错。
// super.valueOf()表明super是一个对象，因此就不会报错。
// 同时，由于super使得this指向B的实例，所以super.valueOf()返回的是一个B的实例。
class A {}
class B extends A {
  constructor() {
    super();
    console.log(super.valueOf() instanceof B); // true
  }
}

let b = new B();
```
```js
// 最后，由于对象总是继承其他对象的，所以可以在任意一个对象中，使用super关键字。
var obj = {
  toString() {
    return "MyObject: " + super.toString();
  }
};
obj.toString(); // MyObject: [object Object]
```
## 4. 类的 prototype 属性和__proto__属性
大多数浏览器的 ES5 实现之中，**每一个对象都有`__proto__`属性，指向对应的构造函数的`prototype`属性**。Class 作为构造函数的语法糖，同时有`prototype`属性和`__proto__`属性，因此同时存在两条继承链。
- （1）子类的`__proto__`属性，表示构造函数的继承，总是指向父类。
- （2）子类`prototype`属性的`__proto__`属性，表示方法的继承，总是指向父类的`prototype`属性。
```js
// 子类B的__proto__属性指向父类A，
// 子类B的prototype属性的__proto__属性指向父类A的prototype属性。
class A {
}
class B extends A {
}
B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true
```
这样的结果是因为，类的继承是按照下面的模式实现的。
```js
class A {
}

class B {
}

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B 继承 A 的静态属性
Object.setPrototypeOf(B, A);

const b = new B();
```
```js
// 《对象的扩展》一章给出过Object.setPrototypeOf方法的实现。
Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}
```

## 5. 实例的 __proto__ 属性

## 6. 原生构造函数的继承 - ♥
原生构造函数是指语言内置的构造函数，通常用来生成数据结构。ECMAScript 的原生构造函数大致有下面这些。
- `Boolean()`
- `Number()`
- `String()`
- `Array()`
- `Date()`
- `Function()`
- `RegExp()`
- `Error()`
- `Object()`

以前，这些原生构造函数是无法继承的，比如，不能自己定义一个Array的子类。
```js
// 定义了一个继承 Array 的MyArray类。
function MyArray() {
  Array.apply(this, arguments);
}
MyArray.prototype = Object.create(Array.prototype, {
  constructor: {
    value: MyArray,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

// 但是，这个类的行为与Array完全不一致。
var colors = new MyArray();
colors[0] = "red";
colors.length  // 0

colors.length = 0;
colors[0]  // "red"
```
## 7. Mixin 模式的实现 
`Mixin` 指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口。它的最简单实现如下。
```js
// c对象是a对象和b对象的合成，具有两者的接口。
const a = {
  a: 'a'
};
const b = {
  b: 'b'
};
const c = {...a, ...b}; // {a: 'a', b: 'b'}

// 下面是一个更完备的实现，将多个类的接口“混入”（mix in）另一个类。
function mix(...mixins) {
  class Mix {
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin()); // 拷贝实例属性
      }
    }
  }

  for (let mixin of mixins) {
    copyProperties(Mix, mixin); // 拷贝静态属性
    copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
  }

  return Mix;
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if ( key !== 'constructor'
      && key !== 'prototype'
      && key !== 'name'
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}

// 上面代码的mix函数，可以将多个对象合成为一个类。使用的时候，只要继承这个类即可。
class DistributedEdit extends mix(Loggable, Serializable) {
  // ...
}
```
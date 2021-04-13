
[链接](https://www.wangdoc.com/javascript/bom/engine.html)

`JavaScript` 是浏览器的内置脚本语言。也就是说，浏览器内置了 `JavaScript` 引擎，并且提供各种接口，让 `JavaScript` 脚本可以控制浏览器的各种功能。

一旦网页内嵌了 `JavaScript` 脚本，浏览器加载网页，就会去执行脚本，从而达到操作浏览器的目的，实现网页的各种动态效果。

本章开始介绍浏览器提供的各种 `JavaScript` 接口。首先，介绍 `JavaScript` 代码嵌入网页的方法。

## 1、代码嵌入网页的方法

- script 元素嵌入代码: [link](./1-intro.html#script-元素嵌入代码)
- script 元素加载外部脚本: [link](./1-intro.html#script-元素加载外部脚本)
- 事件属性：[link](./1-intro.html#事件属性)
- URL 协议：[link](./1-intro.html#url-协议)

### script 元素嵌入代码

`<script>`元素内部可以直接写入 JavaScript 代码。
```html
<script>
  var x = 1 + 5;
  console.log(x);
</script>
```

`<script>`标签有一个`type`属性，用来指定脚本类型，`type`属性有两种值：
- `text/javascript`：这是默认值。老式浏览器，设为这个值比较好。
- `application/javascript`：对于较新的浏览器，建议设为这个值。
- `module`(es6)：es6模块化的引用

如果`type`属性的值，浏览器不认识，那么它不会执行其中的代码。利用这一点，可以在`<script>`标签之中嵌入任意的文本内容，只要加上一个浏览器不认识的`type`属性即可。
```html
<!-- 此代码浏览器不会执行，也不会显示它的内容，因为不认识它的type属性 -->
<script id="mydata" type="x-custom-data">
  console.log('Hello World');
</script>
<!-- 
  但是，这个<script>节点依然存在于 DOM 之中，可以使用<script>节点的text属性读出它的内容：
  document.getElementById('mydata').text 
-->
```

### script 元素加载外部脚本

`<script>`标签也可以指定加载外部的脚本文件。所加载的脚本必须是纯的 `JavaScript` 代码，不能有`HTML`代码和`<script>`标签。
```html
<script src="https://www.example.com/script.js"></script>
<!-- 如果脚本文件使用了非英语字符，还应该注明字符的编码。 -->
<script charset="utf-8" src="https://www.example.com/script.js"></script>
<!-- 加载外部脚本和直接添加代码块，这两种方法不能混用。下面代码的console.log语句直接被忽略。 -->
<script charset="utf-8" src="example.js">
  console.log('Hello World!');
</script>
```

- 安全性问题

为了防止攻击者篡改外部脚本，`script`标签允许设置一个`integrity`属性，写入该外部脚本的 `Hash` 签名，用来验证脚本的一致性。
```html
<!-- integrity属性指定了外部脚本/assets/application.js的 SHA256 签名 -->
<script src="/assets/application.js"
  integrity="sha256-TvVUHzSfftWg1rcfL6TIJ0XKEGrgLyEq6lEpcmrG9qs=">
</script>
```

### 事件属性
网页元素的事件属性（比如`onclick`和`onmouseover`），可以写入 `JavaScript` 代码。当指定事件发生时，就会调用这些代码。
```html
<!-- 事件属性代码只有一个语句。如果有多个语句，使用分号分隔即可。 -->
<button id="myBtn" onclick="console.log(this.id);">点击</button>
```

### URL 协议
`URL` 支持`javascript:`协议，即在 `URL` 的位置写入代码，使用这个 `URL` 的时候就会执行 `JavaScript` 代码。
```html
<a href="javascript:console.log('Hello')">点击</a>
```

- **执行协议**

浏览器的地址栏也可以执行`javascript:`协议。将`javascript:console.log('Hello')`放入地址栏，按回车键也会执行这段代码。 

如果 `JavaScript` 代码返回一个字符串，浏览器就会新建一个文档，展示这个字符串的内容，原有文档的内容都会消失。如果返回的不是字符串，那么浏览器不会新建文档，也不会跳转。
```html
<!-- 用户点击链接以后，会打开一个新文档
原有文档的内容都会消失, 返回当前时间，刷新可恢复 -->
<a href="javascript: new Date().toLocaleTimeString();">点击</a>

<!-- 如果返回的不是字符串，那么浏览器不会新建文档，也不会跳转。 
用户点击链接后，网页不会跳转，只会在控制台显示当前时间。-->
<a href="javascript: console.log(new Date().toLocaleTimeString())">点击</a>
```

- **用途**

`javascript:`协议的常见用途是书签脚本 `Bookmarklet`。

由于浏览器的书签保存的是一个网址，所以`javascript:`网址也可以保存在里面，用户选择这个书签的时候，就会在当前页面执行这个脚本。

为了防止书签替换掉当前文档，可以在脚本前加上`void`，或者在脚本最后加上`void 0`。
```html
<!-- 点击链接后，执行代码都不会网页跳转。 -->
<a href="javascript: void new Date().toLocaleTimeString();">点击</a>
<a href="javascript: new Date().toLocaleTimeString();void 0;">点击</a>
```

## 2、script 元素 - ♥
- 工作原理 - ♥：[link](./1-intro.html#工作原理)
- defer 属性：[link](./1-intro.html#defer-属性)
- async 属性：[link](./1-intro.html#async-属性)
- 脚本的动态加载：[link](./1-intro.html#脚本的动态加载)
- 加载使用的协议：[link](./1-intro.html#加载使用的协议)

### 工作原理 - ♥

浏览器加载 `JavaScript` 脚本，主要通过`<script>`元素完成。正常的网页加载流程是这样的：
- 浏览器一边下载 `HTML` 网页，一边开始解析。也就是说，不等到下载完，就开始解析。
- 解析过程中，浏览器发现`<script>`元素，就暂停解析，把网页渲染的控制权交给 `JavaScript` 引擎。
- 如果`<script>`元素引用了外部脚本，就下载该脚本再执行，否则就直接执行代码。
- `JavaScript` 引擎执行完毕，控制权交还渲染引擎，恢复往下解析 `HTML` 网页。

浏览器解析DOM，使用的是**渲染引擎**，执行js代码，使用的是**JavasCript引擎**。

#### **加载外部脚本** - ♥

加载外部脚本时，浏览器会暂停页面渲染，等待脚本下载并执行完成后，再继续渲染。<br>
原因是 `JavaScript` 代码可以修改 `DOM`，所以必须把控制权让给它，**否则会导致复杂的线程竞赛的问题。**

如果外部脚本加载时间很长（一直无法完成下载），那么浏览器就会一直等待脚本下载完成，造成网页长时间失去响应，**浏览器就会呈现“假死”状态，这被称为“阻塞效应”**。**为了避免这种情况，较好的做法是将`<script>`标签都放在页面底部，而不是头部。**

#### 脚本文件放在页面底部

脚本文件放在页面底部，这样即使遇到脚本失去响应，网页主体的渲染也已经完成了，用户至少可以看到内容，而不是面对一张空白的页面。
如果某些脚本代码非常重要，一定要放在页面头部的话，最好直接将代码写入页面，而不是连接外部脚本文件，这样能缩短加载时间。

脚本文件都放在网页尾部加载，还有一个好处。

因为在 `DOM` 结构生成之前就调用 `DOM` 节点，`JavaScript` 会报错，如果脚本都在网页尾部加载，就不存在这个问题，因为这时 `DOM` 肯定已经生成了。
```html
<!-- 代码执行时会报错，因为此时document.body元素还未生成。 -->
<!-- Cannot read property 'innerHTML' of null -->
<head>
  <script>
    console.log(document.body.innerHTML);
  </script>
</head>
<body>
</body>
```

#### 指定DOMContentLoaded事件
解决上述问题，可以设定`DOMContentLoaded`事件的回调函数可以。`DOMContentLoaded`事件只有在 DOM 结构生成之后才会触发。
```html
<head>
  <!-- 指定DOMContentLoaded事件发生后，才开始执行相关代码。 -->
  <script>
    document.addEventListener(
      'DOMContentLoaded',
      function (event) {
        console.log(document.body.innerHTML);
      }
    );
  </script>
</head>
```

#### 使用onload属性

另一种解决方法是，使用`<script>`标签的`onload`属性。当`<script>`标签指定的外部脚本文件下载和解析完成，会触发一个`load`事件，可以把所需执行的代码，放在这个事件的回调函数里面。
```html
<script src="jquery.min.js" onload="console.log(document.body.innerHTML)"></script>
```

#### 脚本执行顺序
如果有多个script标签，比如下面这样。
```html
<!-- 浏览器会同时并行下载a.js和b.js -->
<!-- 不管哪个文件先下载完，都保证先执行a.js，再执行b.js -->
<script src="a.js"></script>
<script src="b.js"></script>
```

- 脚本的执行顺序由它们在页面中的出现顺序决定，这是为了保证脚本之间的依赖关系不受到破坏。
- 加载这两个脚本都会产生“阻塞效应”，必须等到它们都加载完成，浏览器才会继续页面渲染。

#### 解析和执行 CSS

解析和执行 `CSS`，也会产生阻塞。
- `Firefox` 浏览器会等到脚本前面的所有样式表，都下载并解析完，再执行脚本；
- `Webkit`则是一旦发现脚本引用了样式，就会暂停执行脚本，等到样式表下载并解析完，再恢复执行。

#### 资源下载量

此外，对于来自**同一个域名的资源**，比如脚本文件、样式表文件、图片文件等，浏览器一般有限制，同时最多下载`6～20`个资源，即最多同时打开的 `TCP` 连接有限制，这是为了防止对服务器造成太大压力。如果是来自**不同域名的资源**，就没有这个限制。**所以，通常把静态文件放在不同的域名之下，以加快下载速度。**

### defer 属性
为了解决脚本文件下载阻塞网页渲染的问题，一个方法是对`<script>`元素加入`defer`属性。它的**作用是延迟脚本的执行，等到 DOM 加载生成后，再执行脚本。**。有了`defer`属性，浏览器下载脚本文件的时候，不会阻塞页面渲染。
```html
<!-- 等到 DOM 加载完成后，才会执行a.js和b.js -->
<script src="a.js" defer></script>
<script src="b.js" defer></script>
```

#### defer 属性的运行流程如下:
- 浏览器开始解析 `HTML` 网页;
- 解析过程中，发现带有`defer`属性的`<script>`元素;
- 浏览器继续往下解析 `HTML` 网页，同时并行下载`<script>`元素加载的外部脚本;
- 浏览器完成解析 `HTML` 网页，此时再回过头执行已经下载完成的脚本。

下载的脚本文件在`DOMContentLoaded`事件触发前执行（即刚刚读取完`</html>`标签），而且可以保证执行顺序就是它们在页面上出现的顺序。

#### 注意

对于内置而不是加载外部脚本的`script`标签，以及动态生成的`script`标签，`defer`属性不起作用。

另外，使用`defer`加载的外部脚本不应该使用`document.write`方法。

### async 属性

解决“阻塞效应”的另一个方法是对`<script>`元素加入`async`属性。`async`属性可以保证脚本下载的同时，浏览器继续渲染。
```html
<script src="a.js" async></script>
<script src="b.js" async></script>
```
`async`属性的作用是，使用另一个进程下载脚本，下载时不会阻塞渲染。
- 浏览器开始解析 `HTML` 网页;
- 解析过程中，发现带有`async`属性的`script`标签;
- 浏览器继续往下解析 `HTML` 网页，同时并行下载`<script>`标签中的外部脚本;
- 脚本下载完成，浏览器暂停解析` HTML` 网页，开始执行下载的脚本;
- 脚本执行完毕，浏览器恢复解析 `HTML` 网页。

#### 注意

- 一旦采用这个属性，就**无法保证脚本的执行顺序**。哪个脚本先下载结束，就先执行那个脚本。
- 另外，使用`async`属性的脚本文件里面的代码，不应该使用`document.write`方法。

#### defer属性和async属性到底应该使用哪一个？
一般来说，如果脚本之间没有依赖关系，就使用`async`属性，如果脚本之间有依赖关系，就使用`defer`属性。如果同时使用`async`和`defer`属性，后者不起作用，浏览器行为由`async`属性决定。

由此可见，`async`属性优先级要高于`defer`属性。


### 脚本的动态加载
`<script>`元素还可以动态生成，生成后再插入页面，从而实现脚本的动态加载。
```js
['a.js', 'b.js'].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  document.head.appendChild(script);
});
```
- 这种方法的好处是，动态生成的`script`标签**不会阻塞页面渲染，也就不会造成浏览器假死**。
- 但是问题在于，这种方法**无法保证脚本的执行顺序**，哪个脚本文件先下载完成，就先执行哪个。

如果想避免这个问题，可以设置`async`属性为`false`。
```js
// 在这段代码后面加载的脚本文件，会因此都等待b.js执行完成后再执行
['a.js', 'b.js'].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false; // 保证b.js在a.js后面执行
  document.head.appendChild(script);
});
```

如果想为动态加载的脚本指定回调函数，可以使用下面的写法。
```js
// 为动态加载的脚本指定回调函数
function loadScript(src, done) {
  var js = document.createElement('script');
  js.src = src;
  js.onload = function() {
    done();
  };
  js.onerror = function() {
    done(new Error('Failed to load script ' + src));
  };
  document.head.appendChild(js);
}
```

### 加载使用的协议

如果不指定协议，浏览器默认采用 `HTTP` 协议下载。
```html
<!-- example.js默认就是采用 HTTP 协议下载 -->
<script src="example.js"></script>
```

如果要采用 HTTPS 协议下载，必需写明。
```html
<!-- example.js 采用 HTTPS 协议下载 -->
<script src="https://example.js"></script>
```

根据页面本身的协议来决定加载协议，这时可以采用下面的写法。
```html
<script src="//example.js"></script>
````

## 3、浏览器的组成

## 4、参考链接
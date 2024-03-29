### 主题

- 一、定义函数返还JQ对象 
- 二、ready方法和原生节点处理
- 三、选择器器封装 
- 四、封装JQ的eq方法
- 五、封装JQ的click方法 
- 六、jQ中的链式操作
- 七、封装JQ的css方法 
- 八、cssHooks扩展功能

### 知识点

- 对象成员与类成员
- 判断类型
- 链式调用实现
- 正则表达式

## 1、jquery特性说明 

​	知己知彼，百战不殆；想要知道jq功能如何实现，先要了解其特性；

## 2、如何实现链式调用

根据对象的特性，返还jq对象；

- 返还this对象

```js
class Jq{
  click(){
    console.log("click...");
    return this;
  }
}
let myjq = new Jq();
myjq.click().click();
```
- 返还实例化对象
## 3、处理ready和原生节点

- 针对ready方法做兼容处理
- 原生节点直接保存
```js
if (typeof arg === "string") {
  let els = document.querySelectorAll(arg);
} else if (typeof arg === 'function') {
  window.addEventListener("DOMContentLoaded",arg,false);
} else {
  if(typeof arg.length === 'undefined'){
    // 一个对象；
    this[0] = arg;
    this.length = 1;
  }else{
    // 对象类数组；
    this.addEle(arg);
  }
}
```

## 4、选择器器封装 
- $(".box")选择节点实现
## 5、封装jq的eq方法

​注意返还对象，实现链式调用

```js
eq(index){
  // 继续操作
  // return this[index];
  return new Jq(this[index],this);
}
```
## 6、实现end方法

返还上次操作的节点；

```js
end(){
  return this.prevObject;
}
```
## 7、实现jq里的click方法

绑定click事件

```js
click(fn) {
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener("click", fn, false);
  }
}
```

## 8、实现on方法

和click方法类似，可以处理多个事件；
## 9、实现css方法

- 获取样式封装

- 设置样式封装

  - cssNumber

    ```js
    {
      animationIterationCount: true,
      columnCount: true,
      fillOpacity: true,
      flexGrow: true,
      flexShrink: true,
      fontWeight: true,
      gridArea: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnStart: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowStart: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      widows: true,
      zIndex: true,
      zoom: true
    }
    ```








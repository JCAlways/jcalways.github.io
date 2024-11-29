---
title: Web Apis
date: 2019-8-29 20:00:00
categories:
  - JavaScript
tags: JavaScript
cover: https://gcore.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png
---

# DOM (文档对象模型/Document Object Model)

## 获取元素

### 通过 ID 获取

```html
<div id="mybox"></div>
```

```js
var box = document.getElementById("mybox");
```

### 根据 标签名 获取

> 返回的是元素对象集合 以数组的形式存储
> 如果要获取每个具体标签对象,通过循环遍历的方式

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>
```

```js
document.getElementsByTagName("li");
```

### 根据 类名 获得

```html
<div class="box"></div>
```

```js
document.getElementsByClassName("box");
```

### 返回指定选择器的第一个

```html
<div id="nav" class="box"></div>
```

```js
document.querySelector(".box");
document.querySelector("#nav");
```

### 返回指定选择器的第一个

```html
<div class="box"></div>
<div class="box"></div>
```

```js
document.querySelectorAll(".box");
```

### 获取 body html 元素

```js
document.body; // 返回body元素

document.documentElement; // 返回hhtml元素
```

## 事件

> 事件源 事件类型 处理程序

### 绑定事件

#### on 的方式

> 通过 on 的方式给元素注册事件的时候,注册用一个事件,那么最后的事件会覆盖前面的事件

```js
document.querySelectorAll(".box").onclick = function () {
  // 处理程序
};
```

常见的鼠标事件

| 事件名       | 触发条件     |
| ------------ | ------------ |
| onclick      | 点击事件     |
| onmouseenter | 鼠标经过触发 |
| onmouseleave | 鼠标离开     |
| onfocus      | 获得焦点     |
| onblur       | 失去焦点     |
| onmousemove  | 鼠标移动触发 |
| onmouseup    | 鼠标弹起     |
| onmousedown  | 鼠标按下     |
| contextmenu  | 上下文菜单   |
| selectstart  | 开始选中     |

常见的键盘事件

| 事件名     | 触发条件               |
| ---------- | ---------------------- |
| oninput    | 输入事件               |
| onkeydown  | 按下                   |
| onkeyup    | 松开                   |
| onkeypress | 按下(不能获取系统按键) |

#### 事件监听的方式(多个人使用)

```js
事件源.addEventListener(事件类型, 处理程序, boolean); // true 捕获效果 / false 冒泡效果
```

移动端触屏事件

| 事件名     | 触发条件 |
| ---------- | -------- |
| touchstart | 按下事件 |
| touchmove  | 移动事件 |
| touchend   | 抬起事件 |

```js
var div = document.querySelector(".box");
div.addEventListener("touchstart", function () {
  console.log("按下事件");
});
div.addEventListener("touchend", function () {
  console.log("抬起事件");
});
div.addEventListener("touchmove", function () {
  console.log("移动事件");
});
```

### 删除事件

#### on 的方式

```js
事件源.事件类型 = null;
```

#### 事件监听的方式

```js
事件源.removeEventListener(事件类型, 处理程序(命名函数));
```

### 事件对象

#### PC 端

```js
e.stopPropagation(); // 阻止冒泡
e.cancelBubble = true; // 阻止冒泡
e.target; // 真正的事件源
e.target; // 获取正在执行事件的类型
e.key; //键盘按键的名字
e.keyCode; //键盘按键的值
//从HTML的可视区域左上角开始计算
e.clientX;
e.clientY;
//从当前元素的左上边开始计算
e.offsetX;
e.offsetY;
//从页面的可视区域左上角开始计算
e.pageX;
e.pageY;
//从整个屏幕的左上角开始计算
e.screenX;
e.screenX;
```

#### 手机端 TouchEvent

```js
// 获取位于移动设备的屏幕上的手指信息(伪数组)
e.touches;
// 获取距离视口的位置
e.touches.clientX;
// 获取距离页面的坐标
e.touches.pageX;
// 获取距离整个屏幕的坐标
e.touches.screenX;
// 获取元素身上的手指信息
e.targetTouches;
// 离开屏幕的信息
e.changedTouches;
```

## 操作元素

### 操作元素内容

#### 获取 写 元素内容

```js
element.innerText;
element.innerHTML; // 推荐使用
```

### 操作表单

#### 值

```js
element.value; // 取值
element.value = ""; // 赋值
```

#### 属性

```js
element.type = 值; // input类型
element.checked = 值; // 复选框
element.selected = 值; // 下拉框
element.disabled = 值; // 禁用
```

### 操作元素样式

#### 行内样式

```js
element.style.css属性名 = 值;
```

#### 添加类名

```js
element.className = "类名";
```

### 操作属性

```js
element.属性; // 获取内置属性
element.属性 = 值; // 设置内置属性
element.getAttribute("属性"); // 可以获取自定义属性的值
element.setAttribute("属性", 值); // 可以设置自定义属性的值
element.removeAttribute("属性"); // 可以删除自定义属性的值
// H5API 规范   'data-属性名称'
// 通过H5的方式获取只能获取到自定义属性
element.dataset.属性名;
element.dataset.属性名 = 值;
```

## 节点操作

> 页面中所有的内容都是节点

### 查找元素

```js
node.parentNode; // 获得子元素的父节点
node.children; // 获得父元素的字元素
// 获取第一个元素
node.children[0];
node.firstElementChild; // ↓获取第一个元素
// 获取最后一个元素
node.children[element.children.length - 1];
node.lastElementChild; // ↓获取最后一个元素
// 获取当前标签下一个兄弟元素
node.nextElementSibling;
// 获取当前标签上一个兄弟元素
node.previousElementSibling;
```

### 创建节点

> 先创建 在添加

```js
// 创建元素节点
document.createElement("标签名");
// 添加(插入)节点
node.appendChild("子元素");
node.insertBefore("子元素", 谁的前面);
```

### 删除节点

```js
node.removeChild("节点");
```

### 复制节点

> 先克隆 在添加

```js
node.cloneNode(boolean); // true(复制标签复制内容) / false(复制标签)
```

# BOM (浏览器对象模型/Browser Object Model)

## 常见事件

> 只能写一次,多个会加载最后一个

```js
// 窗口加载事件
window.onload = function () {};
document.addEventListener("DOMContentLoaded", function () {});
// 窗口大小变化
window.onresize = function () {};
document.addEventListener("resize", function () {});
```

## 定时器

### setTimeout()

> 延时多少时间后执行

```js
// 开启定时器
setTimeout(function () {}, time);
// 取消定时器
clearTimeout(定时器编号);
```

### setInterval()

> 每隔一段时间执行一次

```js
// 开启定时器
setInterval(function () {}, time);
// 取消定时器
clearInterval(定时器编号);
```

## this 指向问题

- 在全局下,this 指向 window
- 在对象的方法下,this 指向调用对象
- 构造函数中,this 指向新的对象
- apply 调用 this,指向 apply 的第一个参数

## location 对象

> 获取或设置窗体 URL

```js
// 通过程序的方法实现页面跳转
location.href = "路径";
// 获取页面路径
location.href;
// 在新窗口打开页面
window.open(页面路径);
// 委派  实现页面跳转
location.assign(页面路径);
// 替换  跳转页面
location.replace(路径);
// 重新加载页面
location.reload(boolean); // true 需要去服务器中查询数据 然后将服务器中新数据显示出来 / false  本地缓存中重新查询数据,将数据显示出来
// 获取域名/ip
location.host;
// 获取域名名称
location.hostname;
// 获取路径的名字
location.pathname;
// 端口
location.port;
// 获取协议类型
location.protocol;
// 查询条件值
location.search;
// 设置临时图片资源
window.URL.createObjectURL(url);
```

## navigator 对象

```js
navigator.userAgent; // 获取用户浏览器信息
```

## history 对象

```js
history.back(); //后退
history.forward(); // 前进
history.go(); // 前进或后退 1 前进1 / -1 后退1
```

## 获取元素位置和大小

### offset

> 获取元素距离带有定位父元素的距离

```js
// 元素在网页中的水平距离
对象名.offsetLeft;
// 元素在网页中的垂直距离
对象名.offsetTop;
// 元素在网页中的宽度(实际大小)
对象名.offsetWidth;
// 元素在网页中的高度(实际大小)
对象名.offsetHeight;
```

### clien

```js
// 获取元素的左边框
对象名.clientLeft;
// 获取元素的上边框
对象名.clientTop;
// 获取元素的宽度(除去边框)
对象名.clientWidth;
// 获取元素的高度(除去边框)
对象名.clientHeight;
```

### scrool

> 滚动

```js
// 水平方向滚动出去的距离
对象名.scroolLeft;
// 垂直方向滚动出去的距离
对象名.scrollTop;
// 获取元素的宽度(包括超出去的部分)
对象名.scrollWidth;
// 获取元素的高度(包括超出去的部分)
对象名.scrollHeight;

window.pageYOffset; // 页面被卷起的高度
```

## 立即执行函数

> 不需要调用 立马能够执行

```js
(function () {})();
```

# click 延时解决方案

- 禁用缩放

```html
<meta name="viewport" content="user-scalable=no" />
```

- 利用 touch 事件自己封装

  > 触摸记录当前时间 离开记录离开时间 如果小于 150ms 并且没有滑动 那么就是点击

- fastclick 插件

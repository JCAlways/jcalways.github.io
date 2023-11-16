---
title: JS基础
date: 2019-8-17 20:00:00
categories:
  - JavaScript
tags: JavaScript
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png
---

# 变量

# 运算符

# 循环

## for 循环

```js
for(初始化变量,条件表达式,操作表达式){
  // 循环体
}
```

## 双重 for 循环

> 外层循环一次,里面循环全部

```js
for(初始化变量,条件表达式,操作表达式){
  // 循环体
  for(初始化变量,条件表达式,操作表达式){
    // 循环体
  }
}
```

## while 循环

> 条件表达式为 true 则循环表达体,否则退出循环

```js
// 初始化变量
while (条件表达式) {
  // 循环体
  // 操作表达式
}
```

## do while 循环

> 先执行循环体,在判断条件 为 true,继续循环,否则退出循环

```js
do {
  // 循环体
  // 操作表达式
} while (条件表达式);
```

## continue break

> continue 退出当前循环,继续执行剩余次数的循环
> break 退出整个循环(循环结束)

```js
// continue
for (var i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
// break
for (var i = 1; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
```

# 数组

## 创建数组

### new 创建

```js
var arr = new Array();
```

### 字面量创建

```js
var arr = [];
var arr1 = [1, 2, "3", true];
```

## 获取数组中的元素

> 数组下标从 0 开始

```js
var arr = [1, 2, "3", true];
console.log(arr[1]); // 2
```

## 遍历数组

```js
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}
```

## 添加元素

### 修改 length

```js
var arr = [1, 2, 3];
arr.length = 5;
console.log(arr); // [1, 2, 3, empty × 2]
```

### 修改索引号

```js
var arr = [1, 2, 3];
arr[3] = 4;
console.log(arr); // [1, 2, 3, 4]
```

## 冒泡排序

```js
var arr = [5, 99, 55, 1, 22, 44, 4, 3, 2, 1];
for (var i = 0; i <= arr.length - 1; i++) {
  for (var j = 0; j <= arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
```

# 函数

## 声明函数

> 命名规范 以动词开始 小驼峰命名法(单词首字母小写,第二个单词首字母大写)

```js
// function 声明(命名函数)
function 函数名称() {
  // 代码
}
// 函数表达式 (匿名函数)
var 函数名称 = function() {
  // 代码
};
```

## 调用函数

```js
函数名称();
```

## 函数的参数

```js
function 函数名 (行参1,形参2...){

}
函数名(实参1,实参2...);
```

## 函数的返回值

```js
function 函数名称() {
  return 需要返回的结果;
}
```

## arguments 的使用

> arguments 存储了所有的实参-伪数组

## 作用域

> 可用性代码范围

全局作用域: 整个 script 标签 或一个单独的 js 文件
局部作用域: 在函数内部就是局部作用域

### 变量的作用域

#### 全局变量

> 在全局作用域下的变量 在全局下可以使用

#### 局部变量

> 在局局作用域下的变量 智能在函数内部使用

### 作用域链

> 内部函数访问外部函数的变量,采取的是链式查找的方式取值

# 对象

> 包含属性和方法

## 创建对象的方法

### 字面量

```js
var obj = {
  uname: "张三",
  age: 18,
  sayHi:function (){
    console.log('hello)
  }
};
```

### new Object

```js
var obj = new Object();
obj.uname = "张三";
obj.sayHi = function() {
  console.log("hello");
};
```

### 构造函数

> 构造函数名首字母要大写

```js
function 构造函数名(uname, age) {
  this.uname = uname;
  this.age = age;
  this.sayHi = function() {
    console.log("hello");
  };
}
var zs = new 构造函数名("张三", 18);
var ls = new 构造函数名("李四", 12);
```

## 调用方法

```js
console.log(obj.uname);
console.log(obj["uname"]);
obj.sayHi();
```

## 遍历对象属性

```js
for (var key in obj) {
  console.log(key); // 输出属性名
  console.log(obj[key]);
}
```

## new 干了些什么?

- 开辟一块新的空间
- 将 this 指向这个空间
- 执行代码,添加属性和方法
- 返回这个对象

# 内置对象

> [文档地址](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

## Math

### 一般用法

```js
// 圆周率
Math.PI; // 3.14
// 最大值
Math.max(10, 20); // 20
// 最小值
Math.min(10, 20); // 10
// 绝对值
Math.abs(-10); // 10 会把字符串转数字
// 向下取征
Math.floor(1.9); // 1
// 向上取征
Math.cell(1.1); // 2
// 四舍五入
Math.round(1.5); // 2
```

### 随机数

```js
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
getRandom(1, 10);
```

## Date

> 是构造函数 必须 new

```js
var date = new Date();
var date = new Date("2019-11-1"); // Fri Nov 01 2019 00:00:00 GMT+0800 (中国标准时间)
date.getFullYear(); // 年
date.getMonth() + 1; // 月
date.getDate(); // 日
date.getDay(); // 星期 周日返回0
date.getHours(); // 时
date.getMinutes(); // 分
date.getSeconds(); // 秒
```

### 时间戳

> 1970-1-1 0.0.0 到当前时间过了多少毫秒

```js
var date = new Date();
console.log(date.valueOf()); // 1582465459329
console.log(date.getTime()); // 1582465459329
// ------------------------------------------
console.log(+new Date()); // 1582465459329
// H5新增方法--------------------------------
console.log(Date.now()); // 1582465459329
```

### 倒计时

#### 公式

```js
var times = (inputTime - nowTime) / 1000;
d = parseInt(总秒数 / 60 / 60 / 24);
h = parseInt((总秒数 / 60 / 60) % 24);
m = parseInt((总秒数 / 60) % 60);
s = parseInt(总秒数 % 60);
```

#### 函数

```js
function conutDown() {
  var inputTime = +new Date("2020-10-1 21:08:03");
  var nowTime = +new Date();
  var times = (inputTime - nowTime) / 1000;
  var d = parseInt(times / 60 / 60 / 24);
  d = d < 10 ? "0" + d : d;
  var h = parseInt((times / 60 / 60) % 24);
  h = h < 10 ? "0" + h : h;
  var m = parseInt((times / 60) % 60);
  m = m < 10 ? "0" + m : m;
  var s = parseInt(times % 60);
  s = s < 10 ? "0" + s : s;
  return d + "天" + h + "时" + m + "分" + s + "秒";
}
```

## Array

### 检测是否为数组

```js
var arr = [];
console.log(arr instanceof Array); // true
// H5新增方法--------------------------------
console.log(Array.isArray(arr)); // true
```

### 添加删除方法

```js
var arr = [];
arr.push(); // 在末尾添加一个或多个元素 返回长度
arr.unshift(); // 在开头添加一个或多个元素 返回长度
arr.pop(); // 删除最后一个 返回删除的内容
arr.shift(); // 删除第一个 返回删除的内容
```

### 翻转数组

```js
var arr = [];
arr.reverse();
```

### 排序

```js
var arr = [3, 4, 7, 1];
arr.sort(function(a, b) {
  return a - b; // a-b升序 b-a 降序
}); // 1 3 4 7
```

### 获取索引号

> 找不到返回-1

```js
var arr = ["red", "pink", "blue"];
// 从前往后
arr.indexOf("blue"); // 2
// 从后往前
arr.lastIndexOf("blue"); // 2
```

### 转字符串

```js
var arr = [1, 2, 3];
arr.toString(); // 1,2,3
// 括号中是分割符
arr.join(-); // 1-2-3
```

## String

```js
var str = "nihao,haha";
// 获取长度
str.length; // 5
// 获取某个条件的索引值
str.indexOf("i"); // 1
// 根据位置返回字符
str.charAt(3); // a
// H5新增方法--------------------------------
str[3]; // a
// 拼接字符串
str.concat("ya"); // nihaoya
// 截取字符串
str.substr(2, 2); // ha
// 替换
str.replace('n','a') // aihao
// 转数组
str.split(,) // ['nihao','haha']
```

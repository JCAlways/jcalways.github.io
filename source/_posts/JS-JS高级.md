---
title: JS高级
date: 2019-09-05 20:00:00
updated: 2019-09-05
categories:
  - JavaScript
tags: JavaScript
description: JavaScript 高级语法学习笔记：作用域与闭包、this 指向、原型链、异步编程等核心知识点
---

JavaScript 是一门基于原型（Prototype）的弱类型脚本语言，掌握好"高级"部分才能真正理解它的运行机制。本文整理了 JS 进阶阶段最常遇到的几个核心知识点。

## 作用域与闭包

## 作用域

作用域决定了变量与函数的可访问范围。JS 中存在三种作用域：

- **全局作用域**：在代码任何位置都能访问。
- **函数作用域**：在函数内部声明的变量，只能在函数内部访问。
- **块级作用域**：由 `let` / `const` 在 `{}` 中创建，`var` 没有块级作用域。

```js
var a = 1; // 全局
function foo() {
  var b = 2; // 函数作用域
  if (true) {
    let c = 3; // 块级作用域
    console.log(c); // 3
  }
  // console.log(c); // ReferenceError: c is not defined
}
```

## 闭包

闭包是指**有权访问另一个函数作用域中变量的函数**。它的核心作用有两个：

1. 让函数外的代码可以访问函数内部的变量
2. 让变量始终保存在内存中，不会随函数执行完毕被回收

```js
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

> 注意：滥用闭包会导致内存占用过大，用完应手动置空引用。

## this 指向

`this` 的指向在**调用时**才确定，与声明位置无关。常见场景：

| 调用方式 | this 指向 |
| --- | --- |
| 普通函数调用 | window（严格模式下为 undefined） |
| 对象方法调用 | 该对象 |
| 构造函数调用 | 实例对象 |
| `call` / `apply` / `bind` | 手动指定的对象 |
| 箭头函数 | 定义时外层作用域的 this |

```js
const obj = {
  name: "JC",
  getName() {
    console.log(this.name);
  },
};
obj.getName(); // JC

// 箭头函数不绑定 this
const obj2 = {
  name: "JC",
  getName: () => {
    console.log(this.name); // undefined（指向外层）
  },
};
```

## 原型与原型链

每个函数都有 `prototype` 属性，实例对象通过 `__proto__` 指向构造函数的原型。当访问一个属性时，会沿着 `__proto__` 逐级向上查找，直到找到或到达 `null`，这条查找链路就是**原型链**。

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  console.log("Hi, I'm " + this.name);
};
const p = new Person("JC");
p.sayHi(); // Hi, I'm JC
console.log(p.__proto__ === Person.prototype); // true
```

ES6 的 `class` 本质就是基于原型的语法糖，`extends` 实现的是原型链上的继承。

## 异步编程

## 回调函数 → Promise → async/await

```js
// 传统回调
getData(function (data) {
  console.log(data);
});

// Promise 链式调用
getData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

// async/await（Promise 的语法糖）
async function main() {
  try {
    const data = await getData();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

## Promise.all / Promise.race

```js
// 全部成功才返回
const res = await Promise.all([fetchA(), fetchB()]);
// 谁先完成返回谁
const res = await Promise.race([fetchA(), fetchB()]);
```

## 其他常用高级特性

- **深拷贝**：`JSON.parse(JSON.stringify(obj))` 或 `structuredClone(obj)`，注意前者会丢失函数与 `undefined`
- **防抖 / 节流**：控制高频事件（滚动、输入、resize）的触发频率
- **事件循环（Event Loop）**：同步任务先执行，微任务（Promise）先于宏任务（setTimeout）执行

```js
// 防抖：停止触发 n 秒后执行
function debounce(fn, delay = 300) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

以上就是 JS 进阶阶段最核心的几个知识点，理解它们对后续学习框架（Vue / React）和阅读源码都会有很大帮助。

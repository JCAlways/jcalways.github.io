---
title: Promise
date: 2019-10-14 18:15:47
categories:
  - JavaScript
  - Node.js
tags: Node.js
keywords:
description:
top_img:
comments:
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png
---

# Promise 构造器

Promise 是一个构造器，用来创建 Promise 类型的对象 。就好像 Array 是一个构造器，用来创建数组。

## 格式

```js
var p1 = new Promise(function(resolve, reject) {
  alert(1);
  //   在某一个时刻去调用
  // resolve():把p1的状态由 pending -----> resolved
  // reject() :把p1的状态由 pending -----> rejected
  console.log(222);
  resolve(456);
});
console.dir(p1);
```

## 三种状态

### pending

pending,"行将发生的"。相当于是一个初始状态。

```js
var p = new Promise((ok, err) => {
  console.info("发呆.....");
});
console.dir(p);
```

### resolved

创建 Promise 对象时，在实参函数中调用了 ok 方法。

```js
var p = new Promise((ok, err) => {
  console.info("发呆.....");
  ok();
});
console.dir(p);
```

### rejected

创建 Promise 对象时，调用 error 方法。

```js
var p = new Promise((ok, err) => {
  console.info("发呆.....");
  err();
});
console.dir(p);
```

## 状态是可转化

```js
 pending ----->ok()    --> resolved;
 pending ----->error()---> rejected ;
```

> 状态转换是不可逆的。一旦从 pending ---> resolved（或者是 rejected），就不可能再回到 pending。也不能由 resolved 变成 rejected，或者反过来。 （这一点与水不同，水可以在液态，固态，气态三种状态中相互转换）。

## promise 的值 promisevalue

一个 promise 对象除了状态之外，还有 promsievalue，在构造器中，这个值在调用 resolve 和 reject 方法时，自动传入。

例如：

```
var p = new Promise( (resolve,reject) => { resolve(123); } );
//  此时，prommise对象p的状态是 resolved，值是123。

var p = new Promise( (resolve,reject) => { reject(1); } );
//  此时，prommise对象p的状态是 rejected，值是1。
```

单独来看 promiseValue 似乎没有什么意义，它的使用场景在于结合 promise 对象的实例方法一起来用来。

# Promise 实例的方法

## then()

- 如果 promise 对象的状态是 resolved，则`promisec对象.then()`会自动调用第一个函数;
- 如果 promise 对象的状态是 rejected，则`promisec对象.then()`会自动调用第二个函数，如果此时 then 方法并没有设置第二个参数，就会报错; 这种情况的处理方法在后面介绍

```js
var p = new Promise((resolve, reject) => {
  resolve();
});

p.then(
  () => {
    console.info("then,成功");
  },
  () => {
    console.info("then,失败");
  }
);
//--------------------------------------------------------------------------------------
var p = new Promise((resolve, reject) => {
  reject();
});
p.then(
  () => {
    console.info("then,成功");
  },
  () => {
    console.info("then,失败");
  }
);
```

## catch()

## finally()

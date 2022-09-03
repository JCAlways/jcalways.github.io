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
cover: https://i.loli.net/2019/10/14/UdL7vKVRFe4IcNO.jpg
---

# Promise构造器

Promise是一个构造器，用来创建Promise类型的对象 。就好像Array是一个构造器，用来创建数组。

## 格式

```js
var p1 = new Promise(function (resolve, reject) {
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
    console.info('发呆.....')
})
console.dir(p)
```

### resolved

创建Promise对象时，在实参函数中调用了ok方法。

```js
var p = new Promise((ok, err) => {
    console.info('发呆.....'); ok();
})
console.dir(p)
```

### rejected

创建Promise对象时，调用error方法。

```js
var p = new Promise((ok, err) => {
    console.info('发呆.....'); err()
})
console.dir(p)
```

## 状态是可转化

```js
 pending ----->ok()    --> resolved;
 pending ----->error()---> rejected ;
```
> 状态转换是不可逆的。一旦从pending ---> resolved（或者是rejected），就不可能再回到pending。也不能由resolved变成rejected，或者反过来。 （这一点与水不同，水可以在液态，固态，气态三种状态中相互转换）。

## promise的值promisevalue

一个promise对象除了状态之外，还有promsievalue，在构造器中，这个值在调用resolve和reject方法时，自动传入。

例如：

```
var p = new Promise( (resolve,reject) => { resolve(123); } );
//  此时，prommise对象p的状态是 resolved，值是123。

var p = new Promise( (resolve,reject) => { reject(1); } );
//  此时，prommise对象p的状态是 rejected，值是1。 
```

单独来看promiseValue似乎没有什么意义，它的使用场景在于结合promise对象的实例方法一起来用来。

# Promise实例的方法

## then()
- 如果promise对象的状态是resolved，则`promisec对象.then()`会自动调用第一个函数; 
- 如果promise对象的状态是rejected，则`promisec对象.then()`会自动调用第二个函数，如果此时then方法并没有设置第二个参数，就会报错; 这种情况的处理方法在后面介绍
```js
var p = new Promise((resolve,reject)=>{
   resolve();
})

p.then(()=>{console.info("then,成功")}, ()=>{console.info("then,失败")})
//--------------------------------------------------------------------------------------
var p = new Promise((resolve,reject)=>{
   reject();
})
p.then(()=>{console.info("then,成功")}, ()=>{console.info("then,失败")})
```



## catch()



## finally()


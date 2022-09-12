---
title: Node中的会话技术
date: 2019-10-13 20:29:46
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

# 会话技术

有很多的网站都有登录的功能：

```
|--login.html (登录页)
|--index.html(主页)
|--vip.html(设置页)
```

实际开发中，我们必须解决：

1. 页面之间的状态共享问题：例如用户从login.html页面登陆之后，再去访问index.html或者setting.html页面时，应该还是能够获取用户的登陆信息。 
2. 权限控制。必须先login成功，之后才访问vip.html。

由于 http是无状态的，就是无记忆的，对于HTTP协议而言，无状态同样指每次request请求之间是相互独立的，当前请求并不会记录上一次请求信息。每次请求都是独立的，没有关联的，所以服务器和客户端都不知道是否是登录过的。

## 什么是会话控制

会话控制就是用来弥补http无记忆的缺陷的一种技术。它能够将数据持久化（保存数据）的保存在客户端(浏览器)或者服务器端，从而让浏览器和服务器进行多次数据交换时，产生连续性。

让`每一次的请求和响应都知道对方是谁`。

![1566131019358.png](https://i.loli.net/2019/10/14/Qau2dI4TFEf6LGk.png)

# 会话控制的分类

## Cookie--将数据保存到**客户端**（浏览器）（饼干，甜点）

### Cookie 原理

- 从服务器端向客户端浏览器留下信息；
- 浏览器每次访问服务器时都带上这些信息(自动携带cookie是浏览器的特点)；

### Cookie 优缺点

节省服务器空间，缺点不安全。不要保存敏感信息。

## session-- 将数据保存到**服务器端**

### session 原理

- 服务器端会为每个用户（浏览器）各自保存一个session（文件）。当服务器保存session之后，会以cookie的形式告诉浏览器，你的session编号是哪一个。它把session号返回给了浏览器，而把真实的数据保存在服务器。
- 下次再来访问服务器的时候，浏览器就会带着它自己的session号去访问，服务器根据session号就可以找到对应的session了。

### session 优缺点

优点是安全，缺点需要服务器空间， 是一种最常见的解决方案。



# 小结- 跨域带cookie

如果是发跨域的ajax请求需要带上cookie的话，要处理如下：

后端

```javascript
app.all('*', function(req, res, next) {
  console.log(`${Date.now()}:来自${req.connection.remoteAddress} 访问了 ${req.method}-${req.url}。参数是：${req.query},携带cookie:${req.headers.cookie}`);
  res.header('Access-Control-Allow-Origin', req.headers.origin); //需要显示设置来源
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', true); //带cookies
  next();
});
```

前端

```javascript
 $.ajax({
     crossDomain: true,
     xhrFields: {
         withCredentials: true
     },
     url,
     type
 })
```
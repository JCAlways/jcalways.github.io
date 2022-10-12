---
title: Express框架
date: 2019-10-10 20:00:00
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

# Express 介绍

- Express 是一个基于 Node.js 平台，快速、开放、极简的 **web 开发框架**
- Express 是一个第三方模块，有丰富的 API 支持，强大而灵活的**中间件**特性
- Express 不对 Node.js 已有的特性进行二次抽象，只是在它之上扩展了 Web 应用所需的基本功能
- 链接
  - [Express 官网](http://expressjs.com/)
  - [Express 中文文档（非官方）](http://www.expressjs.com.cn/)
  - [Express GitHub仓库](https://github.com/expressjs/express)


# Hello World

- 下载Express包
```shell
npm init -y
npm i express
```
- 代码
```js
// 0. 加载 Express
const express = require('express')
// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express()
// 2. 设置请求对应的处理函数
//    当客户端以 GET 方法请求 / 的时候就会调用第二个参数：请求处理函数
app.get('/', (req, res) => {
  res.send('hello world')
})
// 3. 监听端口号，启动 Web 服务
app.listen(3000, () => console.log('app listening on port 3000!'))
```

# 托管静态资源

[产考文档](http://www.expressjs.com.cn/starter/static-files.html)

让用户直接访问静态资源是一个web服务器最基本的功能。

```html
http://localhost:3000/1.png
http://localhost:3000/css/style.css
http://localhost:3000/js/index.js
```

例如，如上url分别是请求一张图片，一份样式文件，一份js代码。我们实现的web服务器需要能够直接返回这些文件的内容给客户端浏览器。

## 忽略前缀

此时，所有放在public下的内容可以直接访问，注意，此时在url中并不需要出现public这级目录

- 在public下新建index.html。可以直接访问到。

```js
// 0. 加载 Express
const express = require('express')

// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express();

// 2. 设置请求对应的处理函数
app.use(express.static('public'))


// 3. 监听端口号，启动 Web 服务
app.listen(3000, () => console.log('app listening on port 3000!'))
```

## 限制前缀

这意味着想要访问public下的内容，必须要在请求url中加上/public

```js
// 限制访问前缀
app.use('/public', express.static('public'))
```

# 路由

[产考文档](http://www.expressjs.com.cn/starter/basic-routing.html)

> 路由（**Routing**）是由一个 **URL**（或者叫路径标识）和一个特定的 **HTTP 方法**（GET、POST 等）组成的，涉及到应用如何处理响应客户端请求。每一个路由都可以有一个或者多个处理器函数，当匹配到路由时，这些个函数将被执行。

## 设置状态码

```js
res.status(200).json({ name: 'abc' });
```

## Get

### 无参数

```js
const express = require('express');
const app = express();
app.get('/get', function(req, res) {
  // 直接返回对象
  res.json({ name: 'abc' });
});
app.listen('8088', () => {
  console.log('8088');
});
```

### 有参数

express框架会自动收集get参数，并保存在req对象的`query`属性中。我们直接来获取即可。

```js
const express = require('express');
const app = express();
app.get('/get', function(req, res) {
  // 直接返回对象
  console.log(req.query);
  
  res.send({ name: 'abc' });
});
app.listen('8088', () => {
  console.log('8088');
});
```

## Post

### 无参数

```js
const app = express();
app.post('/post',function(req,res){
	res.send({name:"abc"})
})
app.listen('8088', () => {
  console.log('8088');
});
```

## 普通键值对参数

获取post普通键值对数据，要通过第三方模块`body-parser`来解析。

```shell
npm install body-parser
```

```js
// 1. 引入包
const bodyParser = require('body-parser');

// 2. 使用包
app.use(bodyParser.urlencoded({extended:false}));

app.post("/add",function(req,res){
    //3. 可以通过req.body来获取post传递的键值对	
    res.json(req.body)
})
```

## 文件上传

如果post涉及文件上传操作，则会要额外使用`multer`这个包来获取上传的信息。

```shell
npm install multer
```

```js
// 1. 引入包
const multer = require('multer');
// 2. 配置
const upload = multer({dest:'uploads/'}) // 上传的文件会保存在这个目录下
// uploads表示一个目录名，你也可以设置成其它的

// 3. 使用
// 这个路由使用第二个参数 .upload.single表示单文件上传， 'cover' 表示要上传的文件在本次上次数据中的键名。类似于<input type="file" name='cover'/>

app.post("postfile",upload.single('cover'), function(req,res){

})
```

# 常见问题

## node中的异步问题

例如

```js
var fs=require('fs');
function getMime(){
    //1
    fs.readFile('mime.json',function(err,data){
        //console.log(data.toString());
        return data;//3
    })
    //2
    //return '123';
}
console.log(getMime());  /*由于异步操作没有拿到数据，如何解决，通过异步操作*/
```

解决

```js
var fs=require('fs');
function getMime(callback){
    fs.readFile('mime.json',function(err,data){
        callback(data);
    })
}
getMime(function(result){
    console.log(result.toString());
})
```


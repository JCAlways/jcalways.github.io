---
title: Node中的跨域
date: 2019-10-13 18:15:47
categories:
  - JavaScript
  - Node.js
tags: Node.js
keywords:
description:
top_img:
comments:
cover: https://gcore.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png
---

# 什么是跨域

不同源的`AJAX`就是跨域

`协议`,`域名` ,`端口`相同就是`同源`

## 问题演示

![chrome跨域插件.gif](https://i.loli.net/2019/10/13/Xn6LbRzsoFrA7tD.gif)

浏览器向 web 服务器发起 http 请求时 ，如果同时满足以下`三个条件`时，就会出现跨域问题，从而导致 ajax 请求失败：

- 你的浏览器多管闲事了。跨域问题出现的基本原因是浏览器出于安全性的考虑------同源策略：ajax 请求必须是同源，封杀了你跨域请求。可以安装一个浏览器插件`allow-control-allow-origin`来测试一下。 如果使用 postman 软件（它不是浏览器）来发请求，就不会有这个问题了。

- 你的请求是 xhr 请求。就是常说的 ajax 请求。浏览器请求图片资源，js 文件,css 文件是可以跨域的（不是 ajax 请求）

- 发出请求不符合同源策略要求。

  - 同源是指：`协议相同`，`域名相同`，`端口相同`。即发 ajax 请求的所在的页面 与 所请求的接口的 url 必须是同源的。

    以下就是不同源的：

    从`http://127.0.0.1:5500/message_front/index.html` 请求`http://localhost:8080/msg`

  - 在前后端分离开发的场景下，前端的页面和后端的服务经常是分开部署的，所以跨域访问的情况是比较常见的。

    ![什么是跨域.png](https://i.loli.net/2019/10/13/pH4okNdJijPRelt.png)

  注意，错误是发生在浏览器端的。请求是可以正常从浏览器发到服务器端，服务器也可以处理请求，只是返回到浏览器端时出错了。

# 实现跨域的解决方案--JSONP

## JSONP 简介

**JSON** with **P**adding，是一种借助于 `script` 标签发送跨域请求的技巧。

原理:

- script 的 src 标签可以请求外部的 js 文件，它是可以发跨域请求的。
- 借助 `script` 标签 src 请求服务端上的接口
- 服务端的接口返回 JavaScript 脚本，并附上要返回的数据。

它其实并**不是 ajax 请求**。

## 实现步骤

### 让 script 标签的 src 指向一个接口

> 前端：让 script 标签的 src 指向一个后端接口的地址；
>
> 后端：接口的返回值是一个 js 函数调用语句

`前端页面`

```js
<script src="接口地址"></script>
后果 从这个接口中返回内容会当作js代码去执行
```

注意：

- script 标签中的 src 会指向一个后端接口的地址。由于 script 标签并不会导致跨域问题，所以这里的请求是可以正常发送和接收的。
- 与我们之前理解的 src 指向某个具体的.js 文件不同，我们只需要确保 src 所指向的地址的返回内容是 js 代码就行了，而不必要一定是.js 文件。

`后端接口`

```bash
const express = require('express');
const app = express();
app.get('/gettime', (req, res) => {
  res.end(`alert(1)`);
})
app.listen(3000, () => {
  console.log('你可以通过http://localhost:3000来访问...');
});
```

注意：

- 后端接口的返回值是一个特殊的字符串： 一个刻意拼写的 js 函数调用语句

### 传递函数名到后端

> 前端：让 script 标签的 src 指向一个后端接口的地址，并附加函数名；
>
> 后端：接口的返回值是一个 js 函数调用语句
>
> 目标：当请求成功时，执行前端指定的函数

`前端页面`

```html
<script>
  function fn() {
    console.log();
  }
</script>
<script src="http://localhost:3000/gettime?callback=fn"></script>
```

注意：

- 在前端自己定义一个函数，把函数名传给后端
- 使用 get 方式传参，并且参数名是 callback。这个参数名要与后端保持一致。

`后端接口`

```bash
const express = require('express');
const app = express();
app.get('/gettime', (req, res) => {
  let { callback } = req.query;
  res.end(`${callback}()`);
})
app.listen(3000, () => {
  console.log('你可以通过http://localhost:3000来访问...');
});
```

注意：

- 后端接口接收函数名，并返回一个字符串，其内容是`函数调用语句`

### 后端回传数据

> 前端：让 script 标签的 src 指向一个后端接口的地址，并附加函数名；
>
> 后端：接口的返回值是一个 js 函数调用语句,并附加实参；
>
> 目标：当请求成功时，执行前端指定的函数

`前端页面`

```html
<script>
  function dosomething(rs) {
    console.log(rs);
  }
</script>
<script src="http://localhost:3000/getTime?callback=dosomething"></script>
```

注意：

- script 标签中的 src 会指向一个后端接口的地址。由于 script 标签并不会导致跨域问题，所以这里的请求是可以常发送的。
- 把前端的函数名传给后端

`后端接口`

```bash
const express = require('express');
const app = express();
app.get('/gettime', (req, res) => {
  let { callback } = req.query;
  let data = JSON.stringfy( {a:1,b:2} )
  res.end(`${callback}(${data})`);
})
app.listen(3000, () => {
  console.log('你可以通过http://localhost:3000来访问...');
});

```

注意：

- 接收函数名，组装一个特殊的字符串：`函数调用语名`
- 把要回传的参数转成字符串，并嵌入返回值，当作函数的实参。

## Jquery-封装的 JSONP 前端代码

jquery 中的 ajax 已经封装好了的 jsonp 方式，你可以直接使用。具体来说就是给 ajax 请求添加一个 dataType 属性，其值为"jsonp"。注意前后端都需要改动代码。示例如下：

```js
$.ajax({
  type: "GET",
  url: "http://localhost:4000/getTime",
  success: function (result) {
    console.log(result);
  },
  dataType: "jsonp", // 必须要指定dataType为jsonp
});
```

## express 框架中的 JSONP 后端代码

```java
const express = require('express');
const app = express();
app.get('/gettime', (req, res) => {
  let data = {a:1,b:2}
  res.jsonp(data)
})
app.listen(3000, () => {
  console.log('你可以通过http://localhost:3000来访问...');
});
```

## 完整的 JSONP 代码

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>html页面</title>
  </head>
  <body>
    <div class="container">
      <h1>jsonp</h1>
      <div>需要后端接口的配合：http://localhost:3005/jsonp</div>
      <pre>
        //--后端测试代码如下
          const express = require('express');
          const app = express()
          
          // 留言板接口 -- 获取所有数据
          app.get('/jsonp', (req, res) => {
            var { callback } = req.query;
          
            res.setHeader('content-type', 'application/javascript');
          
            res.end(callback + '({a:1,b:2})');
          });
          
          app.listen(3000,()=>{})
      </pre>
    </div>
    <script>
      function buildCallBackFunction(options, callbackFunName) {
        window[callbackFunName] = function (result) {
          options.success(result);
          window[callbackFunName] = null;
          delete window[callbackFunName];
        };
      }
      function buildParam(options) {
        var params = options.params;
        if (!params) {
          return "";
        }
        if (typeof params === "object") {
          var arr = [];
          for (var p in params) {
            arr.push(`p=${params[p]}`);
          }
          return arr.join("&");
        } else if (typeof params === "string") {
          return params;
        } else {
          return "";
        }
      }

      function buildScript(url) {
        var script = document.createElement("script");
        script.setAttribute("src", url);
        script.onload = function () {
          document.getElementsByTagName("head")[0].removeChild(script);
        };
        document.getElementsByTagName("head")[0].appendChild(script);
      }

      function json(options) {
        var { url, params, success } = options;
        var callbackFunName = "callback_" + Date.now();
        var params = buildParam(options);
        params += !params
          ? "callback=" + callbackFunName
          : "&callback=" + callbackFunName;
        url += "?" + params;
        buildCallBackFunction(options, callbackFunName);
        buildScript(url);
      }

      json({
        url: "http://localhost:3005/jsonp/jsonp",
        // params: 'a=1&b=2',
        params: { a: 1, b: 2 },
        success: function (result) {
          console.log(result);
        },
      });
    </script>
  </body>
</html>
```

# 实现跨域的解决方案--CORS

CORS 是一个 W3C 标准，全称是"跨域资源共享"（Cross-origin resource sharing）。它允许浏览器向跨源服务器，发出[`XMLHttpRequest`](http://www.ruanyifeng.com/blog/2012/09/xmlhttprequest_level_2.html)请求，从而克服了 AJAX 只能[同源](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)使用的限制。CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE 浏览器不能低于 IE10(ie8 通过 XDomainRequest 能支持 CORS)。

[参考文档](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

通过在**被请求的路由中**设置 header 头，可以实现跨域。

```javascript
app.get("/time", (req, res) => {
  // // 允许任意源访问，不安全
  // res.setHeader('Access-Control-Allow-Origin', '*')
  // 允许指定源访问
  res.setHeader("Access-Control-Allow-Origin", "http://www.xxx.com");
  res.send(Date.now().toString());
});
```

- 这种方案无需客户端作出任何变化（客户端不用改代码），就当跨域问题不存在一样。
- 服务端响应的时候添加一个 `Access-Control-Allow-Origin` 的响应头
- 如果 ajax 请求中还附加了 cookie，则还需要设置一句：`res.setHeader('Access-Control-Allow-Credentials', 'true');`

自行下载使用 `npm cors` https://www.npmjs.com/package/cors

# jsonp 和 CORS 的对比

jsonp：

- 不是 ajax

- 只能使用`get方式`传参

- 兼容性好

cors:

- 就是 ajax

- 支持各种方式的请求(post,get....)

- 浏览器的支持不好

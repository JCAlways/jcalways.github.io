---
title: Node基础
date: 2019-09-29 20:00:00
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

# 安装Node.js

[软件下载地址](https://nodejs.org/en/)

# NPM

## 介绍

- CommonJS包规范是理论，NPM是其中一 种实践。
- 对于Node而言，NPM帮助其完成了第三 方模块的发布、安装和依赖等。借助NPM， Node与第三方模块之间形成了很好的一个 生态系统。

## NPM命令
```shell
npm -v  # 查看版本
npm  # 帮助说明
npm search 包名  # 搜索模块包
npm install 包名  # 在当前目录下安装包
npm install -g 包名  # 全局模式安装包
npm remove 包名  # 删除一个模块
npm install 文件路径  # 从本地安装
npm install 包名 -registry=地址  # 从镜像源安装
npm config set registry 地址  # 设置镜像源
```

# Hello World
```js
// 引入http模块
const http = require("http");
// 创建服务
const server = http.createServer((req, res) => {
  console.log(`有人访问了本服务器`);
  res.end("<h1>hello world!");
});
// 启动服务
server.listen(8081, () => {
  console.log("服务器启动成功，请在http://localhost:8081中访问....");
});
```

# 模块化

- 核心模块
  - 就是nodejs自带的模块，在安装完nodejs之后，就可以随意使用啦。相当于学习js时使用的Array对象。
  - 全部模块的源代码 https://github.com/nodejs/node/tree/master/lib
- 自定义模块
  - 程序员自己写的模块。就相当于我们在学习js时的自定义函数。
- 第三方模块
  - 其他程序员写好的模块。nodejs生态提供了一个专门的工具npm来管理第三方模块，后面我们会专门讲到。
  - 相当于别人写好的函数或者库。例如我们前面学习的JQuery库，arttemplate等。

# Node的全局变量
```js
__filename  // 当前文件的绝对路径
__dirname  // 当前文件所在目录的绝对路径
```
# fs模块(文件系统)
> [文档地址](http://nodejs.cn/api/fs.html)

fs模块中的常用方法



| API                                         | 作用              | 备注           |
|---------------------------------------------|-------------------|----------------|
| fs.access(path, callback)                   | 判断路径是否存在  |                |
| fs.appendFile(file, data, callback)         | 向文件中追加内容  |                |
| fs.copyFile(src, callback)                  | 复制文件          |                |
| fs.mkdir(path, callback)                    | 创建目录          |                |
| fs.readDir(path, callback)                  | 读取目录列表      |                |
| fs.rename(oldPath, newPath, callback)       | 重命名文件/目录   |                |
| fs.rmdir(path, callback)                    | 删除目录          | 只能删除空目录 |
| fs.stat(path, callback)                     | 获取文件/目录信息 |                |
| fs.unlink(path, callback)                   | 删除文件          |                |
| fs.watch(filename[, options]\[, listener])  | 监视文件/目录     |                |
| fs.watchFile(filename[, options], listener) | 监视文件          |                |
| fs.existsSync(absolutePath)                 | 判断路径是否存在  |                |

## 读取文件
- fs.readFile
```js
// 引入fs模块
const fs = require("fs");
fs.readFile("./12.txt", "utf8", (err, data) => {
  // 读出文件自动被调用
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
```
- fs.readFileSync
```js
// 引入fs模块
const fs = require("fs");
let data = fs.readFileSync("./1.txt");
console.log(data.toString());
```
## 写入文件

### 覆盖写入

- fs.writeFile

```js
// 引入fs模块
const fs = require("fs");
fs.writeFile("2.txt", "我是文本",(err)=>{
    console.log(err)
});
```
- fs.writeFileSync
```js
// 引入fs模块
const fs = require("fs");
fs.writeFileSync("1.txt", "我是文本");
```

### 追加写入
- fs.appendFile
```js
// 引入fs模块
const fs = require("fs");
fs.appendFile("1.txt", "我是文本",(err)=>{
    console.log(err)
});
```
- fs.appendFileSync
```js
// 引入fs模块
const fs = require("fs");
fs.appendFileSync("1.txt", "我是文本");
```

# path模块(路径)
> [文档地址](http://nodejs.cn/api/path.html#path_path)

path模块其它方法列表



| 方法                       | 作用                               |
|----------------------------|------------------------------------|
| path.basename(path[, ext]) | 获取返回 path 的最后一部分(文件名) |
| path.dirname(path)         | 返回目录名                         |
| path.extname(path)         | 返回路径中文件的扩展名(包含.)      |
| path.format(pathObject)    | 将一个对象格式化为一个路径字符串   |
| path.join([...paths])      | 拼接路径                           |
| path.parse(path)           | 把路径字符串解析成对象的格式       |
| path.resolve([...paths])   | 基于当前**工作目录**拼接路径       |


# http模块

## 搭建web服务器

```js
// 引入fs模块
const http = require("http");
/**
 * req - 本次请求的信息
 * res - 本次响应的信息
 */
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html;charset=utf-8");  // 设置响应头
  res.end("helloworld");
  console.log(req.url); // 客户端浏览器本次请求的地址
});

server.listen(8080, function() {
  console.log("success");
});
```

## req-请求对象
- req.url。客户端浏览器本次请求的地址
- req.method。 获取请求行中的请求方法
- req.headers。 获取请求

## res-响应对象
- res.end()
  - 设置响应体。把把本次的处理结果返回给客户端浏览器
  - 如果不写这一句，则客户端浏览器`永远收不到响应`。

- res.setHeader() 设置响应头，比如设置响应体的编码

  `res.setHeader('content-type', 'text/html;charset=utf-8');`

- res.statusCode 设置状态码

  `res.statusCode=500`

## 为不同的文件类型设置不同的 Content-Type

通过使用res对象中的setHeader方法，我们可以设置content-type这个响应头。这个响应头的作用是告诉浏览器，本次响应的内容是什么格式的内容。以方便浏览器进行处理。

常见的几中文件类型及content-type如下。

- .html：res.setHeader('content-type', 'text/html;charset=utf8')
- .css：res.setHeader('content-type', 'text/css;charset=utf8')
- .js：res.setHeader('content-type', 'application/javascript')
- .png：res.setHeader('content-type', 'image/png')
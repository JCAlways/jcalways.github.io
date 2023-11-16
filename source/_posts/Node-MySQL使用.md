---
title: Node操作MySQL
date: 2019-10-14 14:57:48
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

# 数据库的增删改查

## 增

```mysql
insert into 表名(字段名1,字段名2,......) values(值1,值2,......)
```

## 删

```mysql
 delete  from 表名  where 删除条件
```

## 改

```mysql
update 表名 set 字段1=值1, 字段2=值2,...  where 修改条件
```

## 查

```mysql
SELECT  字段名1, 字段名2, .....  FROM 表名	WHERE <条件表达式>
```

# Node.js 中使用 MySQL

## 初始化文件夹

```bash
npm init -y
```

## 安装插件

```bash
npm i mysql
```

## 创建 server.js 将代码复制进去

```js
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test", //你要连接数据库的名字
});

connection.connect();
let sql = ``; //sql查询语句
connection.query(sql, function(error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();
```

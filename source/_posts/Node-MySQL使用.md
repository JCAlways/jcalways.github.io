---
title: Node操作MySQL
date: 2019-10-14 14:57:48
updated: 2019-10-14
categories:
  - JavaScript
  - Node.js
tags: Node.js
keywords: Node.js
description: Node操作MySQL 学习笔记与使用总结
top_img:
comments:
---

## 数据库的增删改查

先回顾 MySQL 的基础 SQL 语法，Node.js 中执行的就是这些语句。

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

## Node.js 中使用 MySQL

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
connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();
```

## 代码说明

- `mysql.createConnection()`：创建连接，`host` / `user` / `password` / `database` 分别对应数据库地址、账号、密码和库名
- `connection.query(sql, callback)`：执行 SQL 语句，回调中 `results` 为查询结果（增删改时返回影响行数 `affectedRows`），`fields` 为字段信息
- `connection.end()`：关闭连接，注意需在查询完成后调用，否则会提前断开导致查询失败

## 参数化查询（防 SQL 注入）

实际开发中建议使用 `?` 占位符传参，避免拼接字符串带来的 SQL 注入风险：

```js
let sql = "SELECT * FROM users WHERE name = ? AND age > ?";
connection.query(sql, ["小明", 18], function (error, results) {
  if (error) throw error;
  console.log(results);
});
```

---
title: Yapi搭建流程
date: 2020-2-22 23:24:38
tags: Yapi
categories: 技术文档
keywords:
description:
top_img:
comments:
cover:
---

{% note blue 'fas fa-bullhorn' flat %}
📖 本教程更新于 2021 年 02 月 25 日
{% endnote %}

# 搭建步骤

## 相关连接

- [mongodb](https://www.mongodb.com/download-center)
- [Yapi](https://hellosean1025.github.io/yapi/devops/index.html)

## 安装 MongoDB 数据库

请默认放到 c 盘

在 c 盘根目录创建 data 文件夹 创建 data/db data/log

配置 path 环境变量

```
C:\Program Files\MongoDB\Server\4.4\bin
```

运行

```shell
"C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe"
```

## 安装 Yapi

```shell
mkdir yapi
cd yapi
git clone https://github.com/YMFE/yapi.git vendors
cp vendors/config_example.json ./config.json //复制完成后请修改相关配置
cd vendors
npm install --production --registry https://registry.npm.taobao.org
npm run install-server
node server/app.js
```

```json
// confog.json
{
  "port": "3000",
  "adminAccount": "admin@admin.com",
  "timeout": 120000,
  "db": {
    "servername": "127.0.0.1",
    "DATABASE": "yapi",
    "port": 27017,
    "authSource": ""
  },
  "mail": {
    "enable": false,
    "host": "smtp.163.com",
    "port": 465,
    "from": "***@163.com",
    "auth": {
      "user": "***@163.com",
      "pass": "*****"
    }
  }
}
```

## 一键运行

```shell
@echo off
start cmd /k "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe"
TIMEOUT /T 3
start cmd /k node "D:\Program Files\yapi\vendors\server\app.js"

```

默认用户名 admin@admin.com
默认密码 ymfe.org

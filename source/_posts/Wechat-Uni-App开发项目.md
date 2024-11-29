---
title: Uni-App开发项目
date: 2019-12-06 21:11:43
categories:
  - 微信小程序
tags: 微信小程序
keywords:
description:
top_img:
comments:
cover: https://gcore.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png
---

# uni-app---[官方网站](https://uniapp.dcloud.io/)

> `uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到 iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。
> 即使不跨端，`uni-app`同时也是更好的小程序开发框架。

## 使用 uni-app 创建项目

### 环境安装

```bash
npm install -g @vue/cli
```

### 创建 uni-app

```bash
vue create -p dcloudio/uni-preset-vue myapp
```

### 配置 AppID

在`manifest.json`中填入 appid

### 运行并发布 uni-app

```bash
npm run dev:%PLATFORM%
```

`%PLATFORM%` 可取值如下：

| 值         | 平台         |
| ---------- | ------------ |
| h5         | H5           |
| mp-alipay  | 支付宝小程序 |
| mp-baidu   | 百度小程序   |
| mp-weixin  | 微信小程序   |
| mp-toutiao | 头条小程序   |
| mp-qq      | qq 小程序    |

# 导入 less

```bash
npm i less less-loader --save
```

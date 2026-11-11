---
title: Hexo博客搭建流程
cover: https://aka.doubaocdn.com/s/du1B2eRcEM
date: 2019-09-19 20:00:00
tags:
  - Hexo
categories:
  - 技术文档
keywords: 博客搭建
description: Hexo 博客搭建流程：安装初始化、常用命令、deployer-git 部署到 GitHub Pages，含 CNAME 与主题配置注意事项
top_img:
comments:
---

> ⚠️ 本文写于 2019 年，部分内容已过时（如主题分支、搜索插件、置顶方式），请以 [Butterfly 官方文档](https://butterfly.js.org/) 为准。

## 安装 hexo

```shell
npm install hexo -g
```

## hexo 常用指令

```shell
hexo clean # 清空hexo，主要删除Hexo根目录下的public文件夹
hexo g # 重新成功public文件夹内容
hexo s # 启动本地hexo服务
hexo d # 发布到远程仓库
```

## 初始化 hexo

```shell
hexo init
```

## 安装 deploter-git 插件

```shell
npm install hexo-deployer-git
```

## Hexo 发布到 github 的时候,会丢失 rename 和 CNAME

```shell
npm install hexo-generator-cname
```

## 安装主题 Butterfly

> [官方网站](https://butterfly.js.org/)

在博客根目录安装主题

```shell
git clone -b main https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
```

> 说明：较新版本的 Butterfly 主题已内置所需依赖，通常无需手动安装 `cheerio`；若构建报缺少 cheerio 再按主题文档处理。

安装渲染器

```shell
npm install hexo-renderer-pug hexo-renderer-stylus
```

修改 hexo 配置文件`_config.yml`，把主题改为`Butterfly`

```yml
theme: Butterfly
```

其余配置请参考主题的[配置文档](https://butterfly.js.org/)

## 常用插件

### 本地搜索

安装插件

```shell
npm install hexo-generator-searchdb --save
```

此`_config.yml`配置插件

```yml
search:
  path: search.xml
  field: post
  content: true
```

### 文章顶置

> Butterfly 主题已内置文章置顶：在文章的 front-matter 直接写 `top: true` 即可，**无需安装** `hexo-generator-index-pin-top`（旧方案已淘汰）。示例见下。

```md
---
top: true
---
```

### note 标签

```html
<div class="note default"><p>default</p></div>
```

<div class="note default"><p>default</p></div> 
 ```html
<div class="note primary"><p>primary</p></div> 
 ```
<div class="note primary"><p>primary</p></div> 
```html
<div class="note success"><p>success</p></div>
```
<div class="note success"><p>success</p></div> 
```html
<div class="note info"><p>info</p></div> 
```
<div class="note info"><p>info</p></div> 
```html
<div class="note warning"><p>warning</p></div> 
```
<div class="note warning"><p>warning</p></div> 
```html
<div class="note danger"><p>danger</p></div>
```
<div class="note danger"><p>danger</p></div>
&nbsp;

### RSS

安装插件

```shell
npm install hexo-generator-feed --save
```

### 添加萌宠

```shell
npm install hexo-helper-live2d --save
```

### 安装 sitmap 插件

```shell
npm install hexo-generator-sitemap --save
npm install hexo-generator-baidu-sitemap --save
```

## 卸载 hexo

```shell
npm uninstall hexo
```

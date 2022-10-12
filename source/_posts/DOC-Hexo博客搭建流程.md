---
title: Hexo博客搭建流程
date: 2019-09-19 20:00:00
tags: Hexo
categories: 技术文档
keywords: 博客搭建
description: 博客搭建步骤
top_img: 
comments: 
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png
---

## 安装hexo

```shell
npm install hexo -g 
```
## hexo常用指令

```shell
hexo clean # 清空hexo，主要删除Hexo根目录下的public文件夹
hexo g # 重新成功public文件夹内容
hexo s # 启动本地hexo服务
hexo d # 发布到远程仓库
```

## 初始化hexo

```shell
hexo init
```

## 安装deploter-git插件

```shell
npm install hexo-deployer-git
```

## Hexo发布到github的时候,会丢失reanme和CNAME

```shell
npm install hexo-generator-cname
```

## 安装主题 Butterfly

> [官方网站](https://docs.jerryc.me/)

在博客根目录安装主题
```shell
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
```
安装cheerio

```bash
npm install cheerio@0.22.0 --save
```

安装渲染器

```shell
npm install hexo-renderer-pug hexo-renderer-stylus
```

修改hexo配置文件`_config.yml`，把主题改为`Butterfly`

```xml
theme: Butterfly
```

其余配置请参考主题的[配置文档](https://docs.jerryc.me/)

## 常用插件

### 本地搜索

安装插件

```shell
npm install hexo-generator-search --save
```

此`_config.yml`配置插件

```yml
search:
  path: search.xml
  field: post
  content: true
```



### 文章顶置

```bash
npm uninstall hexo-generator-index --save
npm install hexo-generator-index-pin-top --save
```

```md
---
top: True
---
```

### note标签
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
# 参考文章:https://vonsdite.cn/posts/fbd1f97f.html
```

### 安装sitmap插件
```shell
npm install hexo-generator-sitemap --save
npm install hexo-generator-baidu-sitemap --save
```

## 卸载hexo

```shell
npm uninstall hexo
```


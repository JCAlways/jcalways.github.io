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

# 在线文档

[在线文档](https://vuepress.vuejs.org/zh/)

# 搭建环境 

```
# 将 VuePress 作为一个本地依赖安装
npm install -D vuepress

# 新建一个 docs 文件夹
mkdir docs

# 新建一个文件: docs/README.md
echo '# Hello VuePress!' > docs/README.md

# 启动文档项目
npx vuepress dev docs

# 构建静态文件
npx vuepress build docs
  |-- docs
    |-- .vuepress
      |-- config.js
    |-- README.md
```


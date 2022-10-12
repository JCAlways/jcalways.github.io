---
title: ESLint
date: 2019-12-01 21:30:49
tags: VSCode
categories: 技术文档
keywords: 
description: 
top_img: 
comments: 
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png
---

# vscode中的vscode的配置代码

```json
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "eslint.autoFixOnSave": true,
```
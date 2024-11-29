---
title: React基础
date: 2020-01-06 00:00:00
categories:
  - JavaScript
  - React.js
tags: React.jjs
keywords:
description:
top_img:
comments:
cover: https://gcore.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png
---

> React：用于构建用户界面的 JavaScript 库（框架）
> [英文网站](https://reactjs.org/) > [中文网站](https://react.docschina.org/)
>
> 特征:
>
> - 声明式视图
>   - 对于声明式组件，当数据变更的时候，React 低层负责高效更新。这种方式代码更加可预见并且更容易调试。
> - 组件化
>   - 封装管理数据的组件，通过组合的方式实现复杂的 UI，组件的逻辑采用 js 实现而不是模板，这样可以保持数据在 DOM 之外。
> - 一次学习,随处编写
>   - React 可以进行服务端渲染，也可以用于移动 APP 开发（React Native）

# Hello World

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <!-- 1.导入相关库文件 -->
    <script src="https://static.zhangsifan.com/react.js"></script>
    <script src="https://static.zhangsifan.com/react-dom.js"></script>
    <script src="https://static.zhangsifan.com/babel.min.js"></script>
  </head>
  <body>
    <!-- 2.添加一个容器 -->
    <div id="app"></div>
    <!-- 3.基于React实现业务 -->
    <script type="text/babel">
      let content = <h1>Hello World</h1>;
      ReactDOM.render(content, document.getElementById("app"));
    </script>
  </body>
</html>
```

# 开发工具

## VS Code 插件

- JS JSX Snippets
- jsx-beautify
- Live Server

```json
"emmet.triggerExpansionOnTab": true,
"emmet.includeLanguages": {
  "javascript": "javascriptreact",
  "wxml": "html"
},
```

# JSX 基础语法

## JSX 是什么

```js
let element = <h1>Hello World</h1>;
```

## JSX 元素中动态插入数据

```js
let name = "世界";
let element = <h1>你好,{name}</h1>;
```

## JSX 设置动态属性

```js
let info = "bt";
let element = (
  <h1 className="title" abc={info}>
    你好,世界
  </h1>
);
```

## JSX 可以包含子元素

```js
let element = (
  <div>
    <h1>你好</h1>
    <h1>世界</h1>
  </div>
);
```

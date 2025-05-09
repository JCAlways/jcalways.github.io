---
title: TS基础
date: 2021-3-2 20:00:00
categories:
  - TypeScript
tags: TypeScript
cover: https://gcore.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png
---

# 初识 TypeScript

## TypeScript 的介绍

TypeScript 是一种由微软开发的开源、跨平台的编程语言。它是 JavaScript 的超集，最终会被编译为 JavaScript 代码。

2012 年 10 月，微软发布了首个公开版本的 TypeScript，2013 年 6 月 19 日，在经历了一个预览版之后微软正式发布了正式版 TypeScript

TypeScript 的作者是安德斯·海尔斯伯格，C#的首席架构师。它是开源和跨平台的编程语言。

TypeScript 扩展了 JavaScript 的语法，所以任何现有的 JavaScript 程序可以运行在 TypeScript 环境中。

TypeScript 是为大型应用的开发而设计，并且可以编译为 JavaScript。

TypeScript 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6+ 的支持\*\*，它由 Microsoft 开发，代码开源于 GitHub 上

TypeScript 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6+ 的支持，它由 Microsoft 开发，代码开源于 GitHub (opens new window)上

## TypeScript 的特点

TypeScript 主要有 3 大特点：

- 始于 JavaScript，归于 JavaScript
  TypeScript 可以编译出纯净、 简洁的 JavaScript 代码，并且可以运行在任何浏览器上、Node.js 环境中和任何支持 ECMAScript 3（或更高版本）的 JavaScript 引擎中。

- 强大的类型系统
  类型系统允许 JavaScript 开发者在开发 JavaScript 应用程序时使用高效的开发工具和常用操作比如静态检查和代码重构。

- 先进的 JavaScript
  TypeScript 提供最新的和不断发展的 JavaScript 特性，包括那些来自 2015 年的 ECMAScript 和未来的提案中的特性，比如异步功能和 Decorators，以帮助建立健壮的组件。

# 安装 TypeScript

命令行运行如下命令，全局安装 TypeScript：

```shell
npm install -g typescript
```

安装完成后，在控制台运行如下命令，检查安装是否成功:

```shell
tsc -V
```

# HelloWorld

```typescript
function sayHi(str) {
  return "Hello" + str;
}
let username = "World";
console.log(sayHi(username));
```

## 手动编译代码

```shell
tsc helloworld.ts
```

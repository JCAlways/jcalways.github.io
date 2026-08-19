---
title: ESLint
date: 2019-12-01 21:30:49
updated: 2019-12-01
tags: VSCode
categories: 技术文档
keywords: 技术文档
description: ESLint 学习笔记与使用总结：VSCode 中的 ESLint 配置、保存自动修复
top_img:
comments:
cover:
---

ESLint 是目前 JavaScript 最流行的**代码检查工具**，它可以根据配置的规则集对代码进行静态分析，在运行前就发现潜在的语法错误、未定义变量、不符合团队规范的问题，并支持**保存时自动修复**。

## 安装 ESLint

在项目根目录安装：

```bash
npm install eslint --save-dev
```

初始化配置文件（会在根目录生成 `.eslintrc.*`）：

```bash
npx eslint --init
```

## VSCode 中的配置

在 VSCode 中配合 ESLint 插件使用，需要在项目根目录的 `.vscode/settings.json` 中添加以下配置：

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "eslint.autoFixOnSave": true
}
```

## 配置项说明

| 配置项 | 作用 |
| --- | --- |
| `eslint.validate` | 指定 ESLint 需要检查的语言类型。`javascript` 和 `javascriptreact` 覆盖 JS / JSX；对象形式可以对特定语言（如 `vue`）单独开启 `autoFix` |
| `eslint.autoFixOnSave` | 保存文件时自动运行 ESLint 的 `--fix`，自动修复可修复的规则问题 |

> 提示：在较新的 VSCode ESLint 插件（v2+）中，`eslint.autoFixOnSave` 已被弃用，推荐改用编辑器级的 `editor.codeActionsOnSave`：

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 常用配置示例

```json
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    "no-console": "warn", // console 给出警告
    "no-unused-vars": "warn", // 未使用变量给出警告
    semi: ["error", "always"], // 语句必须加分号
  },
};
```

## 命令行使用

```bash
# 检查某个文件
npx eslint src/index.js

# 自动修复
npx eslint src/index.js --fix
```

配置完成后，VSCode 保存代码时就会自动检查并修复格式问题，配合 Prettier 一起使用效果更佳。

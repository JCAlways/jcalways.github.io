---
title: Uni-App开发项目
cover: https://aka.doubaocdn.com/s/H1dYYQqSPP
date: 2019-12-06 21:11:43
tags:
  - 微信小程序
  - uni-app
categories:
  - 微信小程序
keywords: uni-app, 微信小程序, 跨端开发
description: uni-app 跨端开发项目实战：创建项目、配置 AppID、运行到微信小程序与 H5 的完整流程（基于 Vue3 + Vite 新版 CLI）。
---

## uni-app 是什么

> uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到 iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。

即使不跨端，uni-app 也是开发微信小程序的常用选择：**一套 Vue 语法 + 编译到小程序**，比原生小程序开发效率更高。

## 一、创建项目（推荐 Vue3 + Vite 版）

早期基于 Vue CLI 的创建方式（`vue create -p dcloudio/uni-preset-vue`）**已被官方废弃**，现在推荐两种方式：

**方式一：HBuilderX 可视化创建**
下载 [HBuilderX](https://www.dcloud.io/hbuilderx.html)，新建项目 → 选择 uni-app 模板 → 选 Vue3。

**方式二：命令行 CLI**

```bash
npx degit dcloudio/uni-preset-vue#vite myapp
cd myapp
npm install
```

## 二、配置 AppID

在 `manifest.json` 中填入微信小程序 AppID：

```json
{
  "mp-weixin": {
    "appid": "wx1234567890abcdef"
  }
}
```

AppID 在[微信公众平台](https://mp.weixin.qq.com/)注册小程序后获取（个人主体也能注册）。**没有 AppID 也可以先用测试号跑通**：微信开发者工具里选择"测试号"即可。

## 三、运行到微信小程序

```bash
npm run dev:mp-weixin
```

执行后生成 `dist/dev/mp-weixin` 目录，然后用**微信开发者工具**：

1. 打开"导入项目"；
2. 目录选择 `dist/dev/mp-weixin`；
3. AppID 填自己的（或测试号）；
4. 即可实时预览调试，代码保存后自动编译刷新。

## 四、运行到 H5

```bash
npm run dev:h5
```

浏览器访问 `http://localhost:5173` 即可看到页面，适合快速验证 UI 和交互。

## 五、发布

**微信小程序**：

```bash
npm run build:mp-weixin
```

在微信开发者工具中打开 `dist/build/mp-weixin`，点"上传"，然后在微信公众平台提交审核发布。

**H5**：

```bash
npm run build:h5
```

把 `dist/build/h5` 目录部署到任意静态服务器（Nginx、OSS 等）即可。

## 六、开发注意点

1. **标签用内置组件**：`view`、`text`、`image` 等，跨端场景不要用 HTML 标签；
2. **单位用 rpx**：750rpx = 屏幕宽度，自动适配各端；
3. **接口请求**：`uni.request` 封装统一请求层，token 用 `uni.setStorageSync` 持久化；
4. **条件编译**：平台差异代码用 `#ifdef MP-WEIXIN` / `#ifdef H5` 区分；
5. **合法域名**：小程序正式版请求必须配置 request 合法域名（微信公众平台 → 开发设置 → 服务器域名），本地调试可勾选"不校验合法域名"。

## 七、常见坑

1. **运行命令找不到平台**：确认 `package.json` 的 scripts 里有 `dev:mp-weixin`，Vue3 + Vite 版默认带；
2. **微信开发者工具一直编译失败**：先确认版本，新版工具要求 Node 18+；
3. **请求 404/报域名错误**：多为合法域名未配置或没开调试模式；
4. **样式不一致**：H5 和微信小程序对 CSS 支持有差异，用条件编译处理。

## 总结

uni-app 的上手路径：**创建项目 → 配 AppID → dev:mp-weixin 联调 → build 发布**。核心价值是"一套代码多端发布"，微信小程序 + H5 是最高频的组合。

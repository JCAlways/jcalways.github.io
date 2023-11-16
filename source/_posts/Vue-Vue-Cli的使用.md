---
title: Vue-Cli的使用
date: 2019-10-22 20:00:00
categories:
  - JavaScript
  - Vue.js
tags: Vue.js
keywords:
description:
top_img:
comments:
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png
---

# Vue-Cli

> [官方网站](https://cli.vuejs.org/zh/)

> **`vue-cli`**是一个**`辅助开发工具`**=> **`代码编译`** + **`样式`** + 语法校验 + 输出设置 + 其他 ...
>
> 作用: 可以为开发者提供一个**`标准的项目开发结构`** 和配置 **开发者**不需要再关注

## 安装 vue-cli

解决`powershell禁止运行脚本`

```powershell
set-ExecutionPolicy RemoteSigned
```

### 采用 npm 的方式安装

```bash
npm i -g @vue/cli
```

### 采用 cmpn 的方式安装

> [cnpm 官网](https://npm.taobao.org/)

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org

cnpm i -g @vue/cli
```

### 查看安装版本号

```bash
vue -V
//或者
vue --version
```

### vue-cli 2.0 补丁

```bash
npm install -g @vue/cli-init
```

## 初始化项目

### 创建 2.0 项目

```bash
#  heroes 创建的项目名称
vue  init webpack-simple 项目名称
# 切换到当前目录
cd  heroes
# 安装依赖
npm install
# 在开发模式下 启动运行项目
npm run dev
```

### 创建 4.0 项目

```bash
# 4.0下创建项目
vue create 项目名称 // create(创建) 为关键字
# 切换到当前目录
cd  heroes
# 在开发模式下 启动运行项目
npm run serve
```

### 在 src 目录创建文件夹

```powershell
├─api #接口
├─assets #静态资源
├─components #公用组件
├─directive #指令
├─filter #过滤器
├─router #路由
├─utils #工具函数
├─styles #全局样式
└─views # 路由级别组件
└─App.vue # 根组件
└─main.js # 入口文件
```

`以上结构参考`

# 常用 NPM 插件

> [NPM 官网](https://www.npmjs.com/)
>
> 导航
>
> - UI 组件库
>   - [Element-UI](https://blog.zhangsifan.com/2019/10/22/Vue-vue-cli/#Element-UI)
>   - [Vant](https://blog.zhangsifan.com/2019/10/22/Vue-vue-cli/#Vant)
> - Vue 组件
>   - [Vue-Router](https://blog.zhangsifan.com/2019/10/22/Vue-vue-cli/#Vue-Router)
>   - [VueX](https://blog.zhangsifan.com/2019/10/22/Vue-vue-cli/#VueX)
> - 网络请求
>   - [Axios](https://blog.zhangsifan.com/2019/10/22/Vue-vue-cli/#Axios)
>   - [JSONP](https://blog.zhangsifan.com/2019/10/22/Vue-vue-cli/#jsonp)
>   - [qs](https://blog.zhangsifan.com/2019/10/22/Vue-vue-cli/#qs)
> - 时间处理
>   - [moment](https://blog.zhangsifan.com/2019/10/22/Vue-vue-cli/#moment)
>   - [dayjs](https://blog.zhangsifan.com/2019/10/22/Vue-vue-cli/#dayjs)
> - 图表
>   - [Echarts](https://blog.zhangsifan.com/2019/10/22/Vue-vue-cli/#Echarts)
> - 工具类
>   - [JSON-bigint](https://blog.zhangsifan.com/2019/10/22/Vue-vue-cli/#json-bigint)
>   - [vue-lazyload----图片懒加载](https://blog.zhangsifan.com/2019/10/22/Vue-vue-cli/#vue-lazyload)

## Element-UI

> [官方网站](https://element.eleme.cn/#/zh-CN)

### 安装

```bash
npm i element-ui -S
```

### 导入

在`main.js` 中写入以下内容：

```js
...
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
...
Vue.use(ElementUI);
```

### 使用

> 参考[官方文档](https://element.eleme.cn/#/zh-CN/component/installation)

## Vant

> [官方网站](https://youzan.github.io/vant/#/zh-CN/intro)

### 安装

```bash
npm i vant -S
```

### 导入

在`main.js`中导入

```js
...
import Vant from 'vant';
import 'vant/lib/index.css';
...
Vue.use(Vant);
```

### 使用

> 参考[官方文档](https://youzan.github.io/vant/#/zh-CN/quickstart)

### 安装 rem 适配插件

```bash
npm install postcss-pxtorem --save-dev
```

```bash
npm i -S amfe-flexible
```

在`postcss.config.js`中写入如下代码

```js
module.exports = {
  plugins: {
    autoprefixer: {},
    // 配置计算rem值得插件
    "postcss-pxtorem": {
      // 按照37.5的基准值来换算rem单位
      // vat默认最佳显示状态在iphone 6  宽度375px
      rootValue: 37.5,
      propList: ["*"],
    },
  },
};
```

在`main.js`中写入

```js
import "amfe-flexible";
```

## Vue-Router

> [官方网站](https://router.vuejs.org/zh/)
>
> 实现原理: `vue-router通过hash与History interface两种方式实现前端路由`

### 安装

```bash
npm install vue-router
```

### 导入

在`src/router/index.js`中写入以下内容：

```js
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "",
      component: null,
    },
  ],
});

export default router;
```

在`main.js`中写入以下内容：

```js
...
import router from '@/router'
...
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

```

### 使用

<div class="note warning"><p>推荐使用路由懒加载方式导入</p></div>
&nbsp;

> [参考笔记](https://www.zhangsifan.com/2019/10/16/Vue-什么是Vue,如何使用Vue/#vue-router-插件)

### 路由懒加载

```js
const xxx = () => import("@/views/xxx");
```

#### 导航守卫

> [官方文档](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)
>
> 使用场景:
>
> - 前置守卫
>
>   - 判断用户是否达到某些条件,不满足条件强制重定向到一个指定的地址
>
> - 后置守卫
>   - `待编辑`

##### 前置守卫

在`src/router/index.js`中写入以下内容：

```js
...
router.beforeEach((to, from, next) => {
    // to 跳转目标路由对象
    // from 从哪里跳过来的路由对象
    // next() 放行  next('地址') 拦截到哪里
    next()
})
...
```

##### 后置守卫

```js
...
router.afterEach((to, from) => {
  // ...
})
...
```

## VueX

> [官方网站](https://vuex.vuejs.org/zh/)

### 安装

```bash
npm i vuex
```

### 导入和使用

> [查看专栏](https://www.zhangsifan.com/2019/11/12/Vue-vuex/)

## Axios

> [参考文档](https://www.kancloud.cn/yunye/axios/234845)
>
> 实现原理:`XMLHttpRequest对象`
>
> 优点:
>
> - 支持 promise
> - 能拦截请求和响应
> - 能转换请求和响应数据
> - 自动转换 JSON 数据
> - 能取消请求
>
> [Axios 源码深度剖析](https://links.jianshu.com/go?to=https%3A%2F%2Fjuejin.im%2Fpost%2F5b0ba2d56fb9a00a1357a334)

### 安装

```bash
npm install axios
```

### 导入

在`src/api/index.js`中写入以下内容

```js
import axios from "axios";
export default axios;
```

在`main.js`中写入以下内容

```js
...
import axios from '@/api'
Vue.prototype.$axios = axios
...
```

### 使用

#### 设置基准地址

```js
axios.defaults.baseURL = "http://ttapi.research.itcast.cn/mp/v1_0/";
```

#### 处理数字最大安全值

> 使用 JSON-bigint 解决,[使用方法](https://zhangsifan.com/2019/10/22/Vue-vue-cli/#json-bigint)

#### 请求拦截器

```js
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
```

#### 响应拦截器

```js
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
```

## Echarts

> [官方文档](https://www.echartsjs.com/zh/index.html)

### 安装

```bash
npm install echarts
```

### 导入与使用

在要使用的`vue`文件中写入以下内容

```html
<template>
  <div>
    <!--  2.准备DOM容器，具备高宽  -->
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
  //1.导入echarts
  import echarts from "echarts";
  export default {
    mounted() {
      //3.初始化echarts
      const dom = this.$refs.dom;
      const myEcharts = echarts.init(dom);
      //4.配置和数据
      const option = {};
      //5.使用
      myEcharts.setOption(option);
    },
  };
</script>

<style></style>
```

### 使用

> `option`的属性产考[此页](https://www.echartsjs.com/examples/zh/index.html)

## jsonp

> [官方网站](https://www.npmjs.com/package/jsonp)

### 安装

```bash
npm i jsonp
```

### 导入与使用

```js
import jsonp from "jsonp";

jsonp("", (err, data) => {});
```

## qs

> [官方网站](https://www.npmjs.com/package/qs)

### 安装

```shell
npm i qs
```

### 导入和使用

```js
import qs from "qs";

var str = qs.stringify(obj);
```

## json-bigint

> [官方网站](https://www.npmjs.com/package/json-bigint)

### 安装

```bash
npm i json-bigint
```

### 导入与使用

在`负责axios`的 js 文件中写入以下内容

```js
import axios from "axios";
```

```js
axios.defaults.transformResponse = [
  (data) => {
    try {
      return JSONBIG.parse(data);
    } catch (e) {
      return data;
    }
  },
];
```

## moment

> [官方网站](https://www.npmjs.com/package/moment)

### 安装

```bash
npm i moment
```

### 导入与使用

## dayjs

> [官方网站](https://www.npmjs.com/package/dayjs)

### 安装

```bash
npm i dayjs
```

### 导入与使用

```js
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";
dayjs.extend(relativeTime);

const relTime = (time) => {
  return dayjs()
    .locale("zh-cn")
    .from(time);
};

export default {
  install(Vue) {
    Vue.filter("relTime", relTime);
  },
};
```

# 生成文件

在根目录创建`vue.config.js`

```js
module.exports = {
  publicPath: "./",
};
```

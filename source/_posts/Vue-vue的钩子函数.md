---
title: Vue的钩子函数
date: 2019-10-23 20:00:00
updated: 2019-10-23
categories:
  - JavaScript
  - Vue.js
tags: Vue.js
keywords: Vue.js
description: Vue的钩子函数 学习笔记与使用总结：8 个生命周期钩子详解与使用场景
top_img:
comments:
---

# 前言

> [官方介绍文档](https://cn.vuejs.org/v2/guide/instance.html#实例生命周期钩子)
>
> [官方使用文档](https://cn.vuejs.org/v2/api/#选项-生命周期钩子)

![vue生命周期详细图解版.png](https://i.loli.net/2019/11/07/D53BuAXMZCoRp8F.png)

# 钩子函数详解

每个 Vue 实例在被创建时都要经过一系列的初始化过程（设置数据监听、编译模板、挂载实例到 DOM、数据变化时更新 DOM 等）。在这个过程中会运行一些叫做**生命周期钩子**的函数，让开发者有机会在特定阶段加入自己的代码。

Vue2 共有 8 个生命周期钩子：

| 钩子 | 触发时机 | 注意点 |
| --- | --- | --- |
| `beforeCreate` | 实例初始化之后、数据观测与事件配置之前 | **不能访问 `data` 和 `methods`** |
| `created` | 实例创建完成后，数据观测、属性和方法的运算完成 | **可以访问 `data` 和 `methods`**，常用于请求数据 |
| `beforeMount` | 挂载开始之前，模板已编译完成 | 尚未渲染到页面，DOM 未生成 |
| `mounted` | 实例挂载完成，模板已渲染为真实 DOM | **可以操作 DOM**，常用于初始化插件 |
| `beforeUpdate` | 数据发生变化、DOM 重新渲染之前 | 可在更新前访问旧 DOM 状态 |
| `updated` | 数据更新导致 DOM 重新渲染完成后 | 注意避免在此修改数据，可能造成死循环 |
| `beforeDestroy` | 实例销毁之前 | 此时实例仍可用 |
| `destroyed` | 实例销毁完成后 | 常用于**清理定时器、解绑事件** |

# 示例代码

```html
<div id="app">{{ msg }}</div>
```

```js
new Vue({
  el: "#app",
  data: {
    msg: "Hello Vue",
  },
  beforeCreate() {
    console.log("beforeCreate: 数据还没准备好", this.msg); // undefined
  },
  created() {
    console.log("created: 数据已就绪", this.msg); // Hello Vue
  },
  beforeMount() {
    console.log("beforeMount: 页面还未渲染");
  },
  mounted() {
    console.log("mounted: 页面已渲染");
  },
  beforeDestroy() {
    console.log("beforeDestroy: 实例销毁前，可以做清理工作");
  },
  destroyed() {
    console.log("destroyed: 实例已销毁");
  },
});
```

# 使用场景总结

- **`created`**：发起 AJAX 请求获取初始化数据（此时 DOM 未生成，但数据可用）
- **`mounted`**：初始化 DOM 相关的第三方库（如 echarts、Swiper、地图）
- **`beforeDestroy`**：清除定时器、解绑事件监听、销毁组件实例，避免内存泄漏

```js
mounted() {
  this.timer = setInterval(() => {
    console.log("定时器执行中");
  }, 1000);
},
beforeDestroy() {
  clearInterval(this.timer); // 销毁前清除定时器
}
```

> 如果组件使用了 `<keep-alive>` 缓存，还会额外触发 `activated`（组件被激活）和 `deactivated`（组件被停用）两个钩子。

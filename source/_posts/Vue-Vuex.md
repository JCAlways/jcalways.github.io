---
title: VueX
date: 2019-11-12 14:30:00
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

# VueX 介绍

> [官方网站](https://vuex.vuejs.org/zh/)
> Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。`(管理数据共享的工具)`

<font color="red">看图结论：</font>

- state 管理数据，管理的数据是响应式的，当数据改变时驱动视图更新。
- mutations 更新数据，state 中的数据只能使用 mutations 去改变数据。
- actions 请求数据，响应成功后把数据提交给 mutations

# 初始化功能

## 安装

```bash
npm i vuex --save
```

## 新建 store.js 文件

```js
// 初始化一个vuex的实例（数据仓库） 导出即可
import Vue from "vue";
import Vuex from "vuex";
// 使用安装
Vue.use(Vuex);
// 初始化
const store = new Vuex.Store({
  state: null,
  mutations: null,
  actions: null,
});
export default store;
```

## 在 main.js 配置

```js
...
import store from '@/store'

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
```

# state (管理数据)

## 普通写法

在`store.js`文件下写入

```js
const store = new Vuex.Store({
  state: {
    // 管理数据
    count: 0,
  },
});
```

在组件获取`state的数据`：原始用法插值表达式

```html
<p>{{ $store.state.count }}</p>
```

## 计算属性写法

```html
<p>{{ count }}</p>
```

### 常规写法

> 正常写法

```js
export default {
  ...
  computed: {
    count: function() {
      return this.$store.state.count;
    }
  }
};
```

> 缩写

```js
export default {
  ...
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
```

<div class="note danger"><p>不能使用箭头函数  this指向的不是vue实例</p></div> &nbsp;
### mapState

#### 导入

```js
import { mapState } from "vuex";
```

#### 使用：mapState(对象)

> 基本写法

```js
computed: mapState({
  count: function(state) {
    return state.count;
  },
});
```

> 箭头函数写法

```js
computed: mapState({
  count: (state) => state.count,
});
```

> vuex 提供写法

```js
computed: mapState({
  count: "count",
});
```

> 当你的计算属性,需要依赖 vuex 中的数据,同时,依赖组件中 data 的数据

```js
computed: mapState({
  myCount(state) {
    return state.count + 233;
  },
});
```

#### 使用：mapState(数组)

```js
computed: mapState(["count"]);
```

#### 如果组件自己有计算属性，state 的字段映射成计算属性

```js
computed: {
  myCount() {
    return 1;
  },
  ...mapState(["count"])
}
```

# mutations (修改数据)

## 常规写法

在`store.js`文件下写入

```js
const store = new Vuex.Store({
  ...
  mutations: {
    //state:state中的值
    //payload:传入的值
    increment(state, payload) {
      state.count = state.count + payload.num;
    }
  }
});
```

在`要使用的组件`文件下写入

```js
methods: {
  fn() {
    //第一项 函数名
    //第二项 传入的参数
    this.$store.commit("increment", { num: 22 });
  }
}
```

## mapMutations

在`要使用的组件`文件下写入

> 函数要传的参数在调用处的`括号`里传入

```html
<button @click="increment({num:123})">点我</button>
```

```js
methods: {
  ...mapMutations(["increment"])
}
```

# actions (异步获取数据)

## 常规写法

在`store.js`文件下写入

```js
actions: {
  getData({ commit }, num) {
    //模拟拿到后端数据
    window.setTimeout(() => {
      const data = num;
      commit("add", data);
    }, 2000);
  }
}
```

在`要使用的组件`文件下写入

```js
getData() {
  this.$store.dispatch("getData", 10086);
}
```

## mapActions

在`要使用的组件`文件下写入

> 函数要传的参数在调用处的`括号`里传入

```html
<button @click="getData(123)">点我</button>
```

```js
methods: {
  ...mapActions(["getData"])
}
```

# modules

> 在 store 全局数据 是可以分模块化管理的

```js
modules:{
    m1:{
        namespaced:true, // 开启命名空间
            state:{
                count:1
            }
    }
}
```

```html
<h2>{{$store.state.m1.count}}</h2>
```

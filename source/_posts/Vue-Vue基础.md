---
title: Vue基础
date: 2019-10-16 20:00:00
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
# Vue 是什么之前端现状

>* Vue是一个优秀的**`前端框架`**  国内大多数中小型公司都在用, 
>
>* 开发者按照Vue的**`规范`**进行开发 => 不按照规范开发 就会报错
>
>1. 和DOM**`解耦`**  Vue框架 显示数据 获取数据都不再通过dom对象
>2. 适应当前**`SPA`**的项目开发 => single page application  单页应用程序 =>只有一个html页面
>3. 传统网站开发 一般来说 需求不大
>4. 当下各种新框架都采用了**`类Vue`**或者**`类React`**的语法去作 为主语法, 微信小程序/MpVue/uni-app  

# Vue 特点

>1. **`响应式数据`** 数据驱动视图  可以让我们只关注数据  Vue中数据是响应式的 => 数据变化 => 视图一定变化
>2. **`MVVM`** 双向绑定 => 数据 <=> 视图 , 数据变化 ==>视图变化 ,视图变化 => 数据变化
>   - model---模型,数据对象(data)
>   - view---视图,模板页面
>   - viewmodel**`(vm)`**---视图模型(Vue的实例)
>3. **`指令`**增强了html功能 新特性 ,Vue扩展了html标签的功能 用指令,   /angular ng-
>4. **`组件化开发`** 复用代码 => SPA => 10页面 => 10 个组件

# 相关链接

>[Vue官方文档](https://cn.vuejs.org/)
>[Vue开源项目汇总](https://github.com/opendigg/awesome-github-vue)
>[Vue.js中文社区](https://www.vue-js.com/)
>所有关于Vue的问题都可以通过**`查阅文档`**解决



# 如何安装Vue.js

## 采用本地文件引入的方式  直接下载 在script标签中引入
> [开发版本](https://cn.vuejs.org/js/vue.js)
> [生产版本](https://cn.vuejs.org/js/vue.min.js)


# 第一个程序--Hello World

```js
<!--1. 设置Vue实例管理的视图 -->
<div id="app">
<!-- 5.在<div id="app"></div>中通过{{}}中使用data中的数据 -->
    {{name}}
</div>
<!-- 2.引入js -->
<script src="./vue.js"></script>
<script>
    // 3.实例化Vue对象
    var vm = new Vue({
        // 4填入实例选项
        el: "#app",建立视图和vue对象一一对应
        data: {
        //数据
            name: "hello world"
        },
        //方法
        methods: {
            fn() {
                console.log("helloworld")
            }
        }
    });
</script>
```

# 实例选项

## el
>- 作用:**`当前Vue实例所管理的html视图`**  在视图之外 ,就不能应用Vue特性
>- 值:通常是id选择器(或者是一个 HTMLElement 实例)
>- 不要让el所管理的视图是html或者body!


```js
//使用id选择器
el: "#app",
//类选择器
el: ".div",
//DOM对象
el: document.getElementById('app'), 
//错误示范
//el: document.getElementById('body'), 
//错误示范
//el: document.getElementById('html'),
//保存信息:vue.js:634 [Vue warn]: Do not mount Vue to <html> or <body> - mount to normal elements instead.
```

## data

>- Vue 实例的数据对象，是响应式数据(数据驱动视图) 数据变化 => 视图变化
>- 可以通过 `vm.$data` 访问原始数据对象 =>Vue框架给所有的属性都加了$特殊符号
>- Vue 实例 **`vm`**也代理了 data 对象上所有的属性，因此访问 `vm.a` 等价于访问 `vm.$data.a`
>- 视图中绑定的数据必须**`显式`**的初始化到 data 中
>- 数据对象的更新方式 直接 采用 **`实例.属性 = 值`**

```js
data: {
    name: "helloworld",
    flag: true,
    arr: [1, 2, 3, 4, 5],
}
```

## methods

>- methods是一个对象
>- 可以直接通过 VM 实例访问这些方法，或者在**指令表达式中使用**。
>- 方法中的 `this` 自动绑定为 Vue 实例。
>- methods中所有的方法 同样也被代理到了 Vue实例对象上,都可通过this访问
>- Vue实例代理了data中所有属性,代理了methods方法 ,定义属性或者方法时 要考虑**`重名`**问题
>- 注意，**`不应该使用箭头函数来定义 method 函数`** (例如 `plus: () => this.a++`)。理由是箭头函数绑定了父级作用域的上下文，所以 `this` 将不会按照期望指向 Vue 实例，`this.a` 将是 undefined
>
```js
methods: {
    fn() {
        console.log("helloworld")
        return "123";
    }
},
```

## created

## mounted

# 插值表达式

> [官方文档](https://cn.vuejs.org/v2/guide/syntax.html#插值) 

> 作用:会将绑定的数据实时的显示出来:
>
> 形式: 通过 **`{{ 插值表达式 }}`**包裹的形式 
>
> 通过任何方式修改所绑定的数据,所显示的数据都会被实时替换(响应式数据)

```html
<!-- js表达式 -->
<p>{{ 1 + 2 + 3 }}</p>
<p>{{ 1 > 2 }}</p>
<!-- name为data中的数据 -->
<p>{{ name + ':消息' }}</p> 
<!-- count 为data中的数据 -->
<p>{{ count === 1 }}</p>
<!-- count 为data中的数据 -->
<p>{{ count === 1 ? "成立" : "不成立" }}</p>

<!-- 方法调用 -->
<!-- fn为methods中的方法 -->
<p>{{ fn() }}</p>
```

# 系统指令

> [官方文档](https://cn.vuejs.org/v2/guide/syntax.html#指令)

>* 指令 (Directives) 是带有 `v-` 前缀的特殊特性。 对于html标签的功能扩展,一个指令对应一个功能
>* 指令特性的值预期是**`单个 JavaScript 表达式`**(`v-for` 是例外情况，稍后我们再讨论)。
>* 指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
>* 指令位置:  起始标签
>* **`语法`**  v-指令=“表达式”  如果 表达式想要是一个字符串 就必须这样写（用单引号包裹）  v-指令=**`" '字符串' "`**，否则会被当做一个 data数据中的变量

```html
<p v-text="name"></p> // 将name这个变量(data中定义的变量)给了v-text指令
<p v-text="name"></p>
<p title="name"></p> // 将name这个字符串给了title属性
```

## v-text和v-html
>> 很像innerText和innerHTML
>
>- v-text:更新标签中的内容
>
> - v-text和插值表达式的区别
>   - v-text  更新**`整个`**标签中的内容
>    - 插值表达式: 更新标签中**`局部`**的内容
> 
> - v-html:更新标签中的内容/标签
>
> - 可以渲染内容中的HTML标签
> - 注意:尽量避免使用，容易造成危险 (XSS跨站脚本攻击)

```html
<p v-text="name"></p>
<p v-html="nameHtml"></p>
```

## v-if 和 v-show--条件渲染

> [官方文档]( https://cn.vuejs.org/v2/guide/conditional.html )

> * 场景:  需要根据条件决定 元素是否显示  使用以上指令
>
> * 使用: v-if 和 v-show 后面的表达式返回的布尔值 来决定 该元素显示隐藏
>
> * **注意** :   **`v-if 是直接决定元素 的 添加 或者删除  而 v-show 只是根据样式来决定 显示隐藏`**
>
> `v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。
>
>   因此，如果需要非常频繁地切换，则使用 `v-show` 较好；
>
>   如果在运行时条件很少改变，则使用 `v-if` 较好。
>
>   如果 切换频繁 前者 开销更大  

**`扩展`**   如果 有多个元素需要根据条件进行渲染，怎么办？我们可以用一个**`div标签`**来**`包裹多个元素`**，

但是这样的话 我们相当于**`多了一个div标签`**，我们可以采用一个**`template`**标签，来解决这个问题，template标签不会产生任何实质的标签在页面上，并且能完成相应的功能

```html
<p v-if="showMessage">v-if</p> //直接添加删除标签
<p v-show="showMessage">v-show</p> //使用display显示和隐藏
```
## v-on--事件处理

> [官方文档]( https://cn.vuejs.org/v2/guide/events.html )

>* 场景:  使用v-on指令给元素绑定事件
>* 使用: 绑定 v-on:事件名.修饰符="方法名"   可使用 @事件名="方法名的方式"
>*  **注意** 方法名 中 可以采用$event的方式传形参  也可以直接写事件名 默认第一个参数为event事件参数
>*  如果只写方法名 不写括号 =>方法中默认传入的第一个参数就是事件参数 =>event
>* **`修饰符(可不写)`**
>- `.once` - 只触发一次回调。
> - `.prevent` - 调用 `event.preventDefault()`。

```html
<div id="app">
    <input v-on:input="fn($event)" type="text">
    <button v-on:click="fn2($event)"></button>
    <input @input="fn($event)" type="text">
    <button @click="fn2($event)"></button>
</div>
<script src="./vue.js"></script>
<script>
    var vm = new Vue({
        el: "#app",
        data: {
            name: "helloworld"
        },
        methods: {
            fn(e) {
                console.log(e.target.value, this.name);
            }
            fn2(){
        		console.log(this.name);
            }
        }
    });
</script>
```
## v-for--列表渲染
> [官方文档]( https://cn.vuejs.org/v2/guide/list.html )


### v-for-数组
>**`目标`**:掌握v-for循环数组的用法 
>
>* 根据一组数组或对象的选项列表进行渲染。
>* `v-for` 指令需要使用 `item in items` 或者 `item of items` 形式的特殊语法，
>* `items` 是源数据数组 /对象
>* **`循环生成谁,就在谁的标签上写v-for指令`**
>
>当要渲染相似的标签结构时用v-for
>
>```js
>item in items   // item为当前遍历属性数组项的值
>(item,index) in items   //item为当前遍历属性数组项的值 index为数组的索引
>```

```html
<div id="app">
    <ul>
        <li v-for="item in list">{{item}}</li>
    </ul>
</div>
<script src="./vue.js"></script>
<script>
    var vm = new Vue({
        el: "#app",
        data: {
            list: [1, 2, 3],
        },
        methods: {
        }
    });
</script>
```


### v-for-对象
```js
基本语法
item in items
两个参数
(item,key) in items
三个参数
(item,key,index) in items
```
```js
<div id="app">
    <ul>
        <li v-for="(item,key,index) in person">{{key+':'+item+':'+index}}</li>
    </ul>
</div>
<script src="./vue.js"></script>
<script>
    var vm = new Vue({
        el: "#app",
        data: {
            person: {
                name: "张三",
                sex: "男",
                age: "18"
            }
        },
        methods: {}
    });
</script>
```
## v-for-key

>**`目标`**: 掌握在 v-for循环中给循环项赋值key
>
>- 场景:列表数据变动会导致 视图列表重新更新 为了 提升性能 方便更新 需要提供 一个属性 key
>
>- 使用: 通常是给列表数据中的唯一值 也可以用索引值

```html
<li v-for="(item,key,index) in person" :key="index">{{key+':'+item+':'+index}}</li>
```

## 当v-if和v-for相遇

> v-for 的优先级大于v-if ,所有v-if才能使用v-for的变量

```html
<li v-text="item" @click="fn(item)" v-if="item>0" v-for="(item,key,index) in person" :key="index"></li>
```

## v-bind--Class 与 Style 绑定

> [官方文档](https://cn.vuejs.org/v2/guide/class-and-style.html)

### v-bind--绑定一般属性

> `作用:`绑定标签上的任何属性
> `场景:`当标签上的属性是变量/动态/需要改变的 
> `语法:`属性="表达式"
```js
<img :src="src" alt="">
data: {
     id: 'test',
     src: 'http://pic37.nipic.com/20140113/8800276_184927469000_2.png'
    },
```

### v-bind--绑定Class-对象用法

> `语法`:class="{ class名称": 布尔值 }"
```js
<p :class="{class名称:show}">内容</p>
var vm = new Vue({
    el: "#app",
    data: {
        show: false
    },
    methods: {}
});
```

### v-bind--绑定Class-数组用法

> `语法`:class="[class变量1,class变量2..]"

```js
<p class="default" :class="list"></p>
data: {
    list: ['primary', 'danger', 'info']
},
```



### v-bind--绑定style-对象用法

> `语法`:style="{css属性名: 变量}" 

```js
<p style="color: red;" :style="{fontSize:fsValue}">文本</p>
 data: {
    fsValue: '30px',
},
```




### v-bind--绑定Style-数组用法
> `语法`:style="[对象1,对象2...]"

```js
<p style="color:red" :style="[obj]">文本</p>
obj: {
    fontSize: "48px",
    fontWeight: "bold"
}
```



## v-model--表单输入绑定

> [官方文档]( https://cn.vuejs.org/v2/guide/forms.html )

> 特点: **双向数据绑定**
> - 数据发生变化可以更新到界面
> - 通过界面可以更改数据
> - `v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` 特性的初始值而总是将 Vue 实例的数据作为数据来源。应该在 `data`选项中声明初始值。
>
```js
<input v-model="name" type="text">
<p>{{name}}</p>
data: {
    name: "张三"
},
```
> 语法糖
>
> ```js
> <p>{{name}}</p>
> //不使用方法
> <input type="text" :value="name" @input="name=$event.target.value">
> //使用方法
> <input type="text" :value="name" @input="fn">
> //语法糖效果
> <input type="text" v-model="name">
> data: {
>     name: "",
> },
> methods: {
>     fn(event) {
>         this.name = event.target.value;
>     }
> }
> ```

## v-cloak--防止页面模板闪屏现象

> [官方文档]( https://cn.vuejs.org/v2/api/#v-cloak )

> 解决页面初次渲染时 页面模板闪屏现象

```html
<style>
    [v-cloak] {
        display: none;
    }
</style>
<div v-cloak id="app"></div>
```

## v-once--使得所在元素只渲染一次  

> [官方文档]( https://cn.vuejs.org/v2/api/#v-once )

> 使得所在元素只渲染一次  使用场景:静态化数据

```js
<p>{{name}}</p>
<p v-once>{{name}}</p>
data: {
    name: "文本"
},
```

# vue过滤器

> [官方文档]( https://cn.vuejs.org/v2/guide/filters.html )

> data中的数据格式(日期格式/货币格式/大小写等)需要数据格式化时,可以采用过滤器进行过滤 => **`过滤器函数`** =>  对于data中数据的格式化处理

##  使用过滤器

```html
<!-- 在双花括号中 -->
<p>{{ name | 过滤器名称|过滤器名称2 }}</p>
<!-- 在v-bind中 -->
<p v-bind:id="name | 过滤器名称|过滤器名称2 "></p>
```

## 定义过滤器

> 全局过滤器
```js
Vue.filter('过滤器名称',function(value){
    return value;
});
var vm = new Vue({});
```
> 局部过滤器

```js
var vm = new Vue({
    ...
    filters:{
        //正常写法
        过滤器名称:function(value){
            return value;
        },
        //简写
        过滤器名称 (value){
            return value;
        }
    }
});
```
# ref操作dom

```html
<button ref="自定义名称">按钮</button>
this.$refs.自定义名称.value;
```

# 自定义指令

> [官方文档]( https://cn.vuejs.org/v2/guide/custom-directive.html )

> 需要对普通 DOM 元素进行操作，这时候就会用到自定义指令 

## 使用自定义指令

```html
<p v-自定义指令名称></p>
```

## 全局自定义指令

```js
Vue.directive("自定义指令名称",{
    //obj是DOM对象
    inserted(obj,params)=>{
        //TODO
    }
});
```



## 局部自定义指令

```js
var vm = new Vue({
    ...
    directives:{
        自定义指令名称:{
            inserted:function(obj,params){
                //TODO
            }
        }
    }
});
```

# 计算属性

> [官方文档]( https://cn.vuejs.org/v2/guide/computed.html )

>当表达式过于复杂的情况下 可以采用计算属性 对于任何复杂逻辑都可以采用计算属性
>
>* 说明: 计算属性的值 依赖 数据对象中的值  数据对象发生改变 => 计算属性发生改变=> 视图改变
>* 计算属性**`必须有返回值`** 相当于对插值表达式**`逻辑的一次封装`**
>* methods方法和计算属性的区别
>* 1 使用时 方法必须写括号**`()`**
>* 2 计算属性有**`缓存机制`** => 计算属性依赖 data中的数据 => 第一次执行计算属性完毕之后,计算属性会将计算结果放入缓存 => 第二次执行计算属性时 => 发现计算属性依赖的数据没有变化 => 从缓存中获取缓存,不再执行计算属性逻辑
>* 计算属性可以抽提复杂的逻辑 /还比方法的效率更高

## 使用计算属性

```html
<p>{{计算属性名}}</p>
```

## 定义计算属性

```js
var vm = new Vue({
    ...
    computed:{
        // this指向vm实例
        //正常写法
        计算属性名:function (){
            return //TODO
        },
        //简写
        计算属性名(){
            return //TODO
        }
    }
});
```

# json-server工具的使用

> [官方文档]( https://www.npmjs.com/package/json-server )

## 安装

```bash
npm i -g json-server 
```

## 使用

> 新建一个json文件 db.json 并创建内容

```json
{
    "表名":[{
        "id":1,
        "name":"小米"
    },{
        "id":2,
        "name":"苹果"
    }],
    "表名1":[{
        "id":1,
    }]
}
```

> 在相应的目录运行如下命令

```bash
json-server --watch db.json
```

# RESTFUL的接口规则

> - RESTful是一套接口设计规范
> - 用**`不同的请求类型`**发送**`同样一个请求标识`** 所对应的处理是`不同的`
> - 同样的请求标识(同一个地址) =>不同的请求类型 => get/post/put/delete
> - 通过Http请求的不同类型(POST/DELETE/PUT/GET)来判断是什么业务操作(CRUD ) 
> - CRUD => **`增删改查`**
> - json-server应用了RESTful规范

| **HTTP方法** | **数据处理** | **说明**                                           |
| ------------ | ------------ | -------------------------------------------------- |
| POST         | Create       | 新增一个没有id的资源                               |
| GET          | Read         | 取得一个资源                                       |
| PUT          | Update       | 更新一个资源。或新增一个含 id 资源(如果 id 不存在) |
| DELETE       | Delete       | 删除一个资源                                       |

> - 查询数据  GET  /brands 获取db.json下brands对应的所有数据 **`列表`**
> - GET /brands/1 查询id=1数据 **`单条`**
>
> - 删除数据 DELETE   /brands/1 删除id=1数据
>
> - 修改数据 PUT  /brands/1 请求体对象
>
> - 上传/添加 POST /brands 请求体对象
>
> - 查询 GET /brands?**`title`**_like=关键字  -> 模糊搜索
# 使用axios插件发送网络请求

> promise是一种对于ajax**`回调地狱`**的一种 异形封装,它让代码看上去更优雅

## 安装

> script标签导入  [点击下载](https://unpkg.com/axios@0.19.0/dist/axios.min.js )
```js
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

```


> npm方式安装

```bash
npm install axios
```

## 使用

```js
axios.get("url").then(function(data){
    console.log(data.data)
});
axios.delete("url").then(function(data){
    console.log(data.data)
});
axios.post("url",{
    name:"",
    date:new Date()
}).then(function(data){
    console.log(data.data)
});
axios.put("url",{
    name:"",
}).then(function(data){
    console.log(data.data)
});
-----------------------
axios({
    url,
    data,
    method:'get/post/delete/put'
})
```

# watch-监听

> [官方文档]( https://cn.vuejs.org/v2/api/#watch )

>watch选项就是Vue实例的选项 watch:{}
>
>那个`data中的属性`发生改变就监听谁

```js
new Vue(
    ...
    watch:{
        //正常写法
        data中的属性名:function (newValue,oldValue){
            //this指向Vue实例对象
        },
        //简写
        data中的属性名(newValue,oldValue){
            
        }
    }
);

```

# 组件

> [官方文档]( https://cn.vuejs.org/v2/guide/components-registration.html )

> `特点`:是一个`特殊的Vue实例`
>
> 每个组件都是`独立`的
>
> 和Vue实例相似之处:   data/methods/computed/watch  等一应俱全   Vue实例有的 组件基本都有
>
> 组件没有el ,但是有template => 组件页面结构
>
> **注意** 值得注意的是  data和Vue实例的区别为 组件中data为一个函数   没有el选项 
>
> 组件的data是一个带**`返回值的函数`** => 因为组件的数据是独立的,data => 返回一个新数据 
>
> template 代表其**`页面结构`** (有且只要一个根元素)
>
> 每个组件都是**`独立`**的 运行作用域  数据 逻辑没有任何关联
>
> template:有且只有一个根元素
>
> data: 数据管理=>函数=>带返回值的函数=>{}

> `错误提示:`
>
> ```
> vue.js620 [Vue warn] Do not use built-in or reserved HTML elements as component id menu
> ```
>
> ` 不能使用内置或者保留的HTML或者组件作为组件id` 
>
>  意思就是你使用的组件名的名称跟系统（vue）的内置属性名冲突了，所以创建失败，最好的方法就是换个名字。 

## 使用组件

```html
<组件名称></组件名称>
```

## 全局组件

```js
Vue.component(组件名称,{
    template:`模板结构`,
    data(){
        return {
            name:"",
        }
    },
    methods:{
        
    }
})
```

## 局部组件

```js
var obj = {
    template:`模板结构`,
    data(){
        return {
            name:"",
        }
    },
    methods:{
        
    }
}
new Vue({
    ...
    components:{
        组件名称:obj,
    }
})
```

## 组件嵌套

> 在父模板中使用其他组件的标签
>
> 一旦形成`组件嵌套`,就会形成`父子关系`

```js
new Vue({
    ...
    components:{
        1:{
            template:,
            componeents:{
                2:{
                    template:,
                }
            }
        }
    }
    
})
```

## 父组件给子组件传值Props

> - 定义属性 给谁传值 就给标签写传递的属性
> - 接收属性 谁用属性谁接收 
> - 使用它 Vue实例代理了所有的`data属性`/`methods方法`/`计算属性`/`props属性`

```html
<abc-d :test="name"></abc-d>
```
```js
var vm = new Vue({
    ...
    data:{
        name:"北京"
    },
    components:{
        "abc-d":`
        <div>{{test}}</div>`,
        props:["test"]
    }
})
```

## 子组件给父组件传值(自定义事件)

> 可通过子组件中触发`$emit`事件

```html
<abc-d @clickfn="fn2"></abc-d>
```

```js
var vm = new Vue({
    ...
    data:{
        newlist:""
    },
    methods: {
      fn2(list) {
        this.newlist = list;
      }
    },
    components:{
        "abc-d":{
            template: `<div @click="fn">{{cityname}}</div>`,
            props:["list"],
            methods:{
                fn(){
                    this.$emit("clickfn",this.list)
                }
            }
        }
    }
})
```



## 非父子传值

> - 在A组件绑定**自定义事件**，接收触发事件的数据。
> - 在B组件触发**自定义事件**，提交数据即可。
> - 补充：谁绑定的事件只有有谁触发。
> - 使用C专门负责绑定事件。

在`src`的根目录下创建`eventBus.js` 写入如下代码

```js
import Vue from 'vue'
export default new Vue()
```

创建两个组件

`com-a.vue`

```html
<template>
  <div>我是A组件-----------------{{str}}</div>
</template>

<script>
import eventBus from '@/eventBus'
export default {
  data () {
    return {
      str: ''
    }
  },
  created () {
    eventBus.$on('toa', (data) => {
      this.str = data
    })
  }
}
</script>

<style>
</style>

```

`com-b.vue`

```js
<template>
  <div>
    我是B组件
    <button @click="fn">传值到A组件</button>
  </div>
</template>

<script>
import eventBus from '@/eventBus'
export default {
  data () {
    return {
      msg: 'b的数据'
    }
  },
  methods: {
    fn () {
      eventBus.$emit('toa', this.msg)
    }
  }
}
</script>

<style>
</style>
```
## 动态组件

> [官方文档](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%9C%A8%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-keep-alive)
>
> - activated -- 激活组件的钩子
> - deactivated -- 离开组件的钩子

### 一级路由处理方法

**Props**：

- `include` - 字符串或正则表达式。只有名称匹配的组件会被缓存。
- `exclude` - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
- `max` - 数字。最多可以缓存多少组件实例。

### 二级路由处理方法

- 并非所有组件要做缓存，所以按需缓存
  - 两层路由组件,根据路由规则信息,决定keep-alive是否包裹router-view

在有`需要缓存`的vue文件中写入
```vue
<keep-alive>
  <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
```
在`router.js`文件下写入
```js
const routes = [{
    path: '/user/profile',
    name: 'user-profile',
    component: UserProfile,
    meta: {
        keepAlive: true
    } 
}]
```



# 单页应用-SPA

> * 传统模式 每个页面及其内容都需要从服务器**一次次**请求  如果网络差, 体验则会感觉很慢
> * spa模式, **`第一次加载`** 会将**所有的**资源都请求到页面 模块之间切换不会再请求服务器

## 特点

> - 优点
>   - 用户体验好
> - 缺点
>   - `首屏`加载慢
>   - 不利于SEO

## 实现原理

>通过页面的`锚链接`来实现`spa`
>
>hash(锚链接)位于链接地址`#`之后
>
>hash值的改变**`不会触发`**页面刷新
>
>hash值是url地址的一部分,会存储在页面地址上 我们可以获取到
>
>可以通过**`事件监听`**hash值得改变
>
>拿到了hash值,就可以根据不同的hash值进行不同的**`模块切换`**

# 路由

> [官方文档]( https://cn.vuejs.org/v2/guide/routing.html)

## js实现路由

> 采用hash值改变的特性来进行前端路由切换

```html
<!-- 定义导航 -->
<a href="#bj">北京</a>
<a href="#sh">上海</a>
<!-- 定义一个容器 -->
<div id="container"></div>
```

```js
<script>
    window.onhashchange = function(){
    var path = window.location.hash.substr(1);
    var dom = document.getElementById("container");
    switch(path){
        case "bj":
            dom.innerText = "北京";
            break;
        case "sh":
            dom.innerText = "上海";
            break;
        default:
            break;
    }
}
</script>
```

## vue-router-插件

> [官方文档 ]( https://router.vuejs.org/zh/ )

### 下载安装 / CDN

#### 通过script引入

[点击下载]( https://unpkg.com/vue-router@3.1.3/dist/vue-router.js )

#### 通过npm安装

```bash
npm install vue-router
```

## 使用VueRouter

>使用步骤
>
>- 引入vue-router.js
>- 定义导航
>- 定义容器
>- 实例化一个VueRouter对象
>- 配置路由表=>实例化对象中配置路由表
>- 发生关系 要讲
>

```html
<router-link to="/bj">北京</router-link>
<router-link to="/sh">上海</router-link>
<router-view></router-view>
```

```js
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>

var router = new VueRouter({
    routes:[{
        path:"/",
        component:{
            template:`<div>北京</div>`
        }
    },{
      path:"/bj",
        component:{
            template:`<div>北京</div>`
        }  
    },{
       path:"/sh",
        component:{
            template:`<div>上海</div>`
        }
    }]
});
var vm = new Vue({
    ...
    router
})
```

# 动态路由

> [官方文档]( https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html )

>- 定义路由产生`path:"/brand/:id"`
>- 传递路由参数
>- 通过`this.$route.params.id`获取参数

| 路由规则                      | 匹配路径            | $route.params                          |
| ----------------------------- | ------------------- | -------------------------------------- |
| /user/:username               | /user/evan          | `{ username: 'evan' }`                 |
| /user/:username/post/:post_id | /user/evan/post/123 | `{ username: 'evan', post_id: '123' }` |


```html
<router-link to="/user/北京/1">北京</router-link>
<router-link to="/user/上海/2">上海</router-link>
<router-link to="/user/天津/3">天津</router-link>
<router-view></router-view>
```

```js
var router = new VueRouter({
    routes:[
        {
            path: "/user/:city/:id",
            component:{
                template: `<div>{{$route.params.city}}{{$route.params.id}}</div>`
            }
        }
    ]
})
var vm = new Vue({
    ...
    router
})
```

### to--命名路由

> [官方文档]( https://router.vuejs.org/zh/guide/essentials/named-routes.html )

```html
<!-- 字符串 -->
<router-link to:"/bj"></router-link>
<!-- 变量 -->
<router-link :to:"path"></router-link>
<!-- 对象 -->
<router-link :to:"{path:'/user'}"></router-link>
<!-- 对象-name -->
<router-link to:"{name:'user',params:{name:123}}"></router-link>
```

```js
var router = new VueRouter({
    routes:[{
        path:"/bj",
        component:{
            template:`<div>我是北京,北京欢迎你</div>`,
        }
    },{
        path:"",
        component:{
            template:`<div>我是上海,上海欢迎你{{$route.params.city}}</div>`
        }
    }]
});
var vm = new Vue({
    ...
    data:{
        path:"/sh"
    }
    router
})
```

### 重定向

> [官方文档](https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html#重定向) 

> 希望某个页面被强制中转,
> 拦截谁就在谁的组件上写`redirect:`

```html
<router-link to="/bj">北京</router-link>
<router-link to="/sh">上海</router-link>
<router-view></router-view>
```

```js
var router = new VueRouter({
    routes:[{
        path:"/bj",
        component:{
            template:`<div>Welcome To BeiJing!<br></div>`
        }
    },{
        path:"/sh",
        redirect:"/sz",
        component:{
            template:`<div>Welcome To ShangHai!<br></div>`
        }
    },{
        path:"/sz",
        component:{
            template:`<div>Welcome To shenzhen!<br>由于航空管制,已飞到深圳</div>`
        }
    }]
});
var vm = new Vue({
    ...
    router
})
```

###  编程式的导航

> [官方文档]( https://router.vuejs.org/zh/guide/essentials/navigation.html )

> 跳转不同的组件 不仅仅可以用**`router-link`** 还可以采用**`代码行为`**
>
> (Vue实例)**`this.$router`** 可以拿到当前路由对象的实例
>
> **`router-link`**和**`push`**方法都是追加历史记录
>
> `$router`的方法如下
>
> push--追加记录
>
> replace--替换记录
>
> go--前进或后退

```js
//追加记录
this.$router.push("/sh");
//追加记录
this.$router.push({path:"/sh"})
//替换记录
this.$router.replace("/sh")
//前进或后退
this.$router.go(-2)
```

### 激活样式

>设置激活class样式
>
>router-link-active是一个固定的class => 该class默认值就是 router-link-active,可以变,
>
>linkActiveClass => 改变 router-link的激活样式的class

```html
<style>
    .router-link-active{
        /* CSS样式 */
    }
</style>
```

```js
var router = new VueRouter({
    //改变路由激活的Class样式
    linkActiveClass:"",
    routes:[{
        ...
    }]
})
```

### 嵌套路由

> [官方文档]( https://router.vuejs.org/zh/guide/essentials/nested-routes.html )

> `如果存在组件嵌套,就需要提供多个视图容器<router-view></router-view>`

```html
<router-link to="/bj">北京</router-link>
<router-link to="/sh">上海</router-link>
<router-view></router-view>
```

```js
var router = new VueRouter({
    routes:[
        {
            path:"/1",
            //二级路由表
            children:[{
                path:"",
                componten:{}
            },{
                path:"/1/2",
                componten:{}
            }],
            component:{
                template:`<div>
<router-link to="/bj">北京</router-link>
<router-link to="/sh">上海</router-link>
<router-view></router-view>
</div>`,
            }
        }
    ]
})
```

# 过渡动效

> [官方文档](https://router.vuejs.org/zh/guide/advanced/transitions.html#单个路由的过渡) 

>采用了v-if  或 v-show
>
> `` 是基本的动态组件，所以我们可以用 `` 组件给它添加一些过渡效果： 

```html
<style>
    /* 最终样式 */
    .mydiv{
        width:200px;
        height:200px;
    }
    /* 进入动画 */
    .abc-enter,
    /* 离开动画 */
    .abc-leave-to {
        width: 0;
        height: 0;
    }
    /* 进入动画 */
    .abc-enter-active,
    /* 离开动画 */
    .abc-leave-active {
        transition: all 1s;
    }
</style>

<transition name="abc">
    <div class="mydiv" v-if="show"></div>
</transition>
```

```js
var vm = new Vue({
    ...
    data:{
        show:false,
    }
})
```

# Vue的生命周期

> [点击查看](http://zhangsifan.com/2019/10/22/Vue-vue的生命周期/#前言)

# 使用Vue-Cli开发项目

> [点击查看](https://zhangsifan.com/2019/10/22/Vue-vue-cli/ )



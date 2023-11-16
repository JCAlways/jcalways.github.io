---
title: JQuery基础
date: 2019-8-30 20:00:00
categories:
  - JavaScript
  - JQuery
tags: JavaScript
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png
---

# 什么是 Jquery

> [官方网站](https://www.jquery.com)
>
> jQuery 是 javascript 实现的一个库

- 优点
  - 跨浏览器兼容
  - 链式编程，隐式迭代
  - 简化 DOM 操作，支持事件、样式、动画
  - 支持插件扩展开发
  - 开源免费

## 引入 Jquery

```js
<script src="https://static.zhangsifan.com/jquery.min.js"></script>
```

## 入口函数

```js
$(document).ready(function() {
  // 代码
});
// 或者
$(function() {
  // 代码
  alert(1);
});
```

## jquery 的顶级对象\$

> \$是 jQuery 的别称,也是 JQuery 的顶级对象

## JQuery 和 DOM 对象相互转换

用原生 js 获取的对象就是 DOM 对象

用 JQuery 方法获取的元素就是 JQuery 对象(伪数组)

### DOM 对象转 JQuery 对象

```js
$(DOM对象);
```

### JQuery 对象转 DOM 对象

```js
// index 是索引号
$("div")[index];
$("div").get(index);
```

## 隐式迭代

> 遍历内部 DOM 元素(伪数组的形式存储)的过程就叫隐式迭代

## 排他思想

> 当前元素设置样式，其余的兄弟元素清除样式。

# 事件

## 事件注册

| 用法             | 描述     |
| ---------------- | -------- |
| click ()         | 点击事件 |
| dblclick ()      | 双击事件 |
| change ()        | 发生改变 |
| scrol ()         | 滚动事件 |
| focus ()         | 获得焦点 |
| mouseenter()     | 鼠标经过 |
| hover(移入,移出) | 发生改变 |

## 事件处理

> 可以在元素上绑定一个或多个事件
> 事件源.on(事件类型, [委派], 函数);

### 多事件多处理程序

```js
$("div").on({
  click: function() {},
  mouseenter: function() {},
});
```

### 事件委派/委托

```js
$("ul").on("click", "li", function() {
  alert("hello world!");
});
```

### 给动态添加的元素添加事件

```js
$("div").on("click", "p", function() {
  alert("给动态生成的元素绑定事件");
});
```

### 解绑事件

> 事件源.off()

```js
// 解除全部事件
事件源.off();
// 解除那个事件
事件源.off("click");
// 解除事件委派
事件源.off("click", "li");
```

### 自动触发事件

```js
// (事件类型)
事件源.trigger;
// (事件类型)
事件源.triggerHandler;
```

## 事件对象

```js
// 阻止冒泡
e.stopPropagation();
// 阻止默认行为
e.preventDefault();
```

# 常用 API

## 选择器

### 基础选择器

| 名称       | 用法             | 描述               |
| ---------- | ---------------- | ------------------ |
| ID 选择器  | \$("#id")        | 获取指定 ID 的元素 |
| 全选选择器 | \$("\*")         | 匹配所有元素       |
| 类选择器   | \$(".class")     | 获取同一类名的元素 |
| 标签选择器 | \$("div")        | 获取同一标签的元素 |
| 并集选择器 | \$("div,p")      | 选取多个元素       |
| 交集选择器 | \$("li.current") | 交集元素           |

```js
$("选择器");
```

### 筛选选择器

| 名称       | 用法                 | 描述             |
| ---------- | -------------------- | ---------------- |
| :first     | \$('元素:first')     | 获取第一个元素   |
| :last      | \$('元素:last')      | 获取最后一个元素 |
| :eq(index) | \$('元素:eq(index)') | 获取第几个元素   |
| :odd       | \$('元素:odd')       | 获取奇数的元素   |
| :even      | \$('元素:even')      | 获取偶数的元素   |
| :checked   | \$('元素:checked')   | 选中的表单的元素 |

### 筛选方法

| 名称             | 用法                        | 描述                    |
| ---------------- | --------------------------- | ----------------------- |
| parent()         | \$('元素').parent()         | 查找父集                |
| parents("名称")  | \$('元素').parent("名称")   | 查找上级                |
| children('元素') | \$('元素').children('元素') | 查找子集                |
| find('元素')     | \$('元素').find('元素')     | 后代                    |
| siblings('元素') | \$('元素').siblings('元素') | 查找兄弟节点,不包括自己 |
| nextAll()        | \$('元素').nextAll()        | 查找后面的元素          |
| prevAll()        | \$('元素').prevAll()        | 查找前面的元素          |
| hasClass('类名') | \$('元素').hasClass('类名') | 判断是否包含类名        |
| eq(index)        | \$('元素').eq(index)        | 索引方法                |

## 样式操作

### 操作 CSS 方法

```js
// 获取值
$("div").css("width");
// 设置值
$("div").css("width", "200px");
// 设置多个值
$("div").css({ width: 200, height: 200 });
```

### 设置类样式方法

> 只会在原先基础上添加或更改,不会对原来的类操作

```js
// 添加类
$("div").addClass("big");
// 删除类
$("div").removeClass("big");
// 切换类
$("div").toggleClass("big");
```

## 效果(动画)

### 动画队列及其停止排队方法

> 必须写在动画前面

```js
.stop();
```

### 显示隐藏

```js
// 速度 slow nomal fast 或毫秒数
// 速度 swing(默认) linear
// 显示
show([速度, [切换效果], [回调函数]]);
// 隐藏
hide([速度, [切换效果], [回调函数]]);
// 切换
toggle([速度, [切换效果], [回调函数]]);
```

### 滑动

```js
// 下滑效果
slideDown([速度, [切换效果], [回调函数]]);
// 上滑效果
slideUp([速度, [切换效果], [回调函数]]);
// 事件切换
slideToggle([速度, [切换效果], [回调函数]]);
```

### 淡入淡出

```js
// 淡入
fadeIn([速度, [切换效果], [回调函数]]);
// 淡出
fadeOut([速度, [切换效果], [回调函数]]);
// 切换
fadeToggle([速度, [切换效果], [回调函数]]);
// 到大某个位置 透明度 0-1之间 和速度必须写
fadeTo([[速度], 透明度, [切换效果], [回调函数]]);
```

### 自定义动画

```js
animate(样式属性, [速度], [切换效果], [回调函数]);
```

## 属性操作

### 设置或获取元素的固有属性

> element.prop('属性名')

```js
// 获取
prop("href");
// 设置
prop("href", "https://www.zhangsifan.com");
```

### 自定义属性

> element.attr('属性名')

```js
// 获取属性值
attr("属性名");
// 设置属性值
attr("属性", "属性值");
```

### 数据缓存

> 数据存放在元素的内存中

```js
// 获取
data("属性名");
// 设置
data("属性名", "值");
```

## 文本属性值

```js
// 获取元素的内容
html();
// 设置元素的内容
html("内容");
// 获取元素的文本内容
text();
// 设置元素的文本内容
text("内容");
// 获取表单的值
val();
// 设置表单的值
val("内容");
// 保留几位小数
toFixed(数量);
```

## 元素操作

### 遍历元素

```js
// 用来遍历元素
$("元素").each(function(index, item) {
  // item是DOM对象
  $(item).css();
});
// 用来遍历数据
$.each(对象, function(index, element) {});
```

### 创建元素

```js
$("<li>我是li</li>");
```

### 添加元素

```js
// 内部添加(父子关系)
元素.append("内容"); // 添加到末尾
元素.prepend("内容"); //  添加到开头
// 外部添加(兄弟关系)
元素.after("内容"); // 后面添加
元素.before("内容"); //  添加到前面
```

### 删除元素

```js
// 删除元素
元素.remove();
// 删除标签内容
元素.empty();
// 清空元素内容
元素.html("");
```

## 尺寸、位置操作

### 尺寸

| 语法                               | 描述                         |
| ---------------------------------- | ---------------------------- |
| width()/height ()                  | 获取元素的宽度和高度         |
| innerWidth()/innerHeight()         | (包含 padding)               |
| outerWidth()/outerHeight()         | (包含 padding,border)        |
| outerWidth(true)/outerHeight(true) | (包含 padding,border,margin) |

### 位置

| 语法                     | 描述                               |
| ------------------------ | ---------------------------------- |
| offset().top/.left       | 获取距离文档的距离                 |
| offset({top:10,left:30}) | 设置距离文档的距离                 |
| position().top/.left     | 获取距离带有定位父级位置(不能设置) |
| scrollTop()              | 获取元素被卷起的头部               |
| scrollLeft()             | 获取元素被卷起的左侧               |

```js
// 返回顶部
$("body,html")
  .stop()
  .animate({
    scrollTop: 0;
  });
```

# 其他方法

## JQuery 对象拷贝

> 浅拷贝:把原来对象里面的复杂数据类型地址拷贝给目标对象
> 深拷贝:把里面的数据完全复制一份给目标对象,有不冲突的属性会合并到一起

```js
// 浅拷贝
var newObj = {};
var obj = {
  a: 1,
  name: "dog",
};
$.extend(newObj, obj);

// 深拷贝
$.extend(true, newObj, obj);
```

## 多库共存

```js
var jq = Jquery.noConflict();
```

## JQuery 插件

> [Jquery 插件库](http://www.jq22.com) > [jQuery 之家](http://www.htmleaf.com/)

---
title: Bootstrap基础
date: 2019-08-06 00:00:00
categories:
  - CSS
  - Bootstrap
tags: Bootstrap
keywords:
description:
top_img:
comments:
cover: https://i.loli.net/2019/10/16/yKq39c4lZ87ewMW.jpg
---

> [英文网站](https://getbootstrap.com/) 
> [中文网站](https://getbootstrap.net/)

# CDN

```html
<!-- Bootstrap css核心文件 -->
<link rel="stylesheet" href="https://static.zhangsifan.com/bootstrap.min.css" />
<!-- jquery文件 -->
<script src="https://static.zhangsifan.com/jquery.min.js"></script>
<!-- 用于弹窗 提示 下拉菜单 -->
<script src="https://static.zhangsifan.com/popper.min.js"></script>
<!-- Bootstrap js核心文件 -->
<script src="https://static.zhangsifan.com/bootstrap.min.js"></script>
```

# 布局

## Container 容器

Container 容器是窗口布局的最基本元素，我们推荐所有样式都定义在`.container`或`.container-fluid`容器之中-- **这是启用整个栅格系统必不可少的前置条件**，它们分别对应选择一个响应式的、固定宽度的容器，或者选择一个流式自适应浏览器或容器最大合法宽度的窗口（意味着任何时候它的宽度总是`100%`）。

### .container

> `.container`容器*可以*被嵌套，但是大多数布局并不需要这么做（最少层次的嵌套构建出的网页更优雅)

```html
<div class="container">
  <!-- Content here -->
</div>
```

### .container-fluid

> 使用 `.container-fluid` 类，可以使`div`宽度扩展到整个宽度（如果没有被其它 CSS 容器包含，则应是浏览器运行时的宽度，否则应是父容器中允许的最大宽度，一般视为 100%宽度）

```html
<div class="container-fluid">
  ...
</div>
```

## 栅格系统

> Bootstrap 是基于移动优先的原则开发的,使用了一系列的媒体查询(media queries)方法.
>
> 分界点大小 576px 768px,992px,1200px
>
> Bootstrap 包含了一个强大的移动优先的网格系统,他是基于**12**列的布局,有 5 种响应尺寸.
>
> Bootstrap4 是完全基于 flexbox 流式布局构建的,完全支持响应式标准

|                       | 超小屏幕 (新增规格)<576px | 小屏幕 次小屏 ≥576px | 中等屏幕 窄屏 ≥768px | 大屏幕 桌面显示器 ≥992px | 超大屏幕 大桌面显示器 ≥1200px |
| --------------------- | ------------------------- | -------------------- | -------------------- | ------------------------ | ----------------------------- |
| `.container` 最大宽度 | None (auto)               | 540px                | 720px                | 960px                    | 1140px                        |
| 类前缀                | `.col-`                   | `.col-sm-`           | `.col-md-`           | `.col-lg-`               | `.col-xl-`                    |
| 列（column）数        | 12                        |                      |                      |                          |                               |
| 列间隙                | 30px (每列两侧各 15px)    |                      |                      |                          |                               |
| 可嵌套性              | Yes                       |                      |                      |                          |                               |
| 可排序性              | Yes                       |                      |                      |                          |                               |

```html
<div class="container">
  <div class="row">
    <div class="col-xl-3" style="background-color: pink;">内容1</div>
    <div class="col-xl-3" style="background-color: pink;">内容2</div>
    <div class="col-xl-3" style="background-color: pink;">内容3</div>
    <div class="col-xl-3" style="background-color: pink;">内容4</div>
  </div>
</div>
```

### 自动布局列

#### 等宽布局

> 所有设备上都是等宽并沾满一行,只要简单的应用**.col**就可以完成**(不会自动换行)**

```html
<div class="container">
  <div class="row">
    <div class="col" style="background-color: pink;">内容1</div>
    <div class="col" style="background-color: pink;">内容2</div>
  </div>
</div>
```

#### 设置一列的宽度

```html
<div class="container">
  <div class="row">
    <div class="col" style="background-color: pink;">内容1</div>
    <div class="col-6" style="background-color: pink;">内容2</div>
    <div class="col" style="background-color: pink;">内容3</div>
  </div>
</div>
```

#### 可变宽度的弹性空间

> 用 `col-{breakpoint}-auto` 断点方法，可以实现根据其内容的自然宽度来对列进行大小调整。

```html
<div class="container">
  <div class="row">
    <div class="col" style="background-color: pink;">内容1</div>
    <div class="col-auto" style="background-color: pink;">内容2</div>
    <div class="col" style="background-color: pink;">内容3</div>
  </div>
</div>
```

### 等宽多行

> 创建跨多个行的等宽列，方法是插入.w-100 要将列拆分为新行。通过混合`.w-100`一些还可[以影响一些显示状态效果](https://getbootstrap.net/docs/4.0/utilities/display/),如按钮排序等。

```html
<div class="container">
  <div class="row">
    <div class="col" style="background-color: red;">内容1</div>
    <div class="col" style="background-color: orange;">内容2</div>
    <div class="w-100"></div>
    <div class="col" style="background-color: yellow;">内容3</div>
    <div class="col" style="background-color: green;">内容4</div>
  </div>
</div>
```

### 响应式的 class 选择器

#### 混合布局

```html
<div class="container">
  <div class="row">
    <div class="col-sm-6 col-lg-3" style="background-color: red;">内容1</div>
    <div class="col-sm-6 col-lg-3" style="background-color: orange;">内容2</div>
    <div class="col-sm-6 col-lg-3" style="background-color: yellow;">内容3</div>
    <div class="col-sm-6 col-lg-3" style="background-color: green;">内容4</div>
  </div>
</div>
```

### 对齐

#### 垂直对齐

> 在 row 上加**.align-items-start/center/end**

```html
<div class="container">
  <div
    class="row align-items-center"
    style="border: 3px solid #6cf;height: 100px;"
  >
    <div class="col-3" style="background-color: red;">内容1</div>
    <div class="col-3" style="background-color: orange;">内容2</div>
    <div class="col-3" style="background-color: yellow;">内容3</div>
  </div>
</div>
```

> 在 col 上加**.align-self-start/center/end**

```html
<div class="container">
  <div
    class="row align-items-end"
    style="border: 3px solid #6cf;height: 100px;"
  >
    <div class="col-3" style="background-color: red;">内容1</div>
    <div class="col-3 align-self-center" style="background-color: orange;">
      内容2
    </div>
    <div class="col-3" style="background-color: yellow;">内容3</div>
  </div>
</div>
```

#### 水平对齐

> 在 row 上加**.justify-content-start/center/end/around/between**

```html
<div class="container">
  <div
    class="row justify-content-center"
    style="border: 3px solid #6cf;height: 100px;"
  >
    <div class="col-3" style="background-color: red;">内容1</div>
    <div class="col-3" style="background-color: orange;">内容2</div>
    <div class="col-3" style="background-color: yellow;">内容3</div>
  </div>
</div>
```

#### 间隙沟槽(gutters)清除

> BootStrap 默认的栅格和列间有间隙沟槽，一般是左右-15px 的`margin`或`padding`处理，
>
> 使用`.no-gutters`类来消除它，这将影响到`.row`行、列平行间隙及所有子列。

```html
<div class="container">
  <div class="row no-gutters">
    <div class="col-3" style="background-color: red;">内容1</div>
    <div class="col-3" style="background-color: orange;">内容2</div>
    <div class="col-3" style="background-color: yellow;">内容3</div>
  </div>
</div>
```

### 重排序

#### Class 顺序重定义

> 使用 `.order-*` class 选择符，可以对 DIV 空间进行 **可视化排序**,系统提供了`.order-1`到`.order-12`12 个级别的顺序，在五种浏览器和设备宽度上都能生效。
>
> 还可以使用`.order-first`，快速更改一个顺序到最前面，同时其它元素也相应的获得了`order:-1`的属性，这个属性也可以与`。.order-*`混合使用。

```html
<div class="container">
  <div class="row no-gutters">
    <div class="col-3" style="background-color: red;">内容1</div>
    <div class="col-3 order-1" style="background-color: orange;">内容2</div>
    <div class="col-3 order-first" style="background-color: yellow;">内容3</div>
    <div class="col-3 order-2" style="background-color: green;">内容4</div>
  </div>
</div>
```

#### 列偏移

> 可以使用两种方式进行列偏应：
> 1、使用响应式的`.offset-*`栅格偏移方法。
> 2、使用[边界处理实用程序](https://getbootstrap.net/docs/4.0/utilities/spacing/)，它内置了诸如`.ml-*`、`.p-*`、`.pt-*`等实用排工具。

##### class 偏移选择器

> 使用`.offset-md-*`类可以使列向右偏移，通过定义`*`的数字，则可以实现列偏移，如`.offset-md-3`则是向右偏移三列。

```html
<div class="container">
  <div class="row">
    <div class="col-3" style="background-color: red;">内容1</div>
    <div class="col-3 offset-3" style="background-color: orange;">内容2</div>
    <div class="col-3" style="background-color: yellow;">内容3</div>
  </div>
</div>
```

##### Margin 移动布局

> 在 BootStrap V4 中，你可以使用`.ml-auto`与`.mr-auto`来强制隔离两边的距离，实现类水平隔离的效果。

```html
<div class="container">
  <div class="row">
    <div class="col-3" style="background-color: red;">内容1</div>
    <div class="col-3 mr-auto" style="background-color: orange;">内容2</div>
    <div class="col-3" style="background-color: yellow;">内容3</div>
  </div>
</div>
```

### 列嵌套

> 为了使用内置的栅格系统将内容再次嵌套，可以通过添加一个新的`.row` 元素和一系列 `.col-sm-*` 元素到已经存在的 `.col-sm-*` 元素内。被嵌套的行（row）所包含的列（column）数量推荐不要超过 12 个（其实，没有要求你必须占满 12 列-否则应对页面进行重新规划布局）。

```html
<div class="container">
  <div class="row">
    <div class="col-3" style="background-color: red;">内容1</div>
    <div class="col-3  " style="background-color: orange;">内容2</div>
    <div class="col-3" style="background-color: yellow;">内容3</div>
    <div class="col-3">
      <div class="row">
        <div class="col-xl-4" style="background-color: green;">内容4</div>
        <div class="col-xl-8" style="background-color: blue;">内容5</div>
      </div>
    </div>
  </div>
</div>
```

### 禁用响应式

1. 设定容器宽度.如.container{width:980px}
2. 栅格布局使用 **.col-\***(最小设备栅格)的样式来代替.col-sm-\*等等,这样就能确保能够在所有设备展开
3. 移除 meta 标签(viewport)
4. 如果使用了导航条,需要移除所有导航条的折叠和展开行为

### 响应式的分界点

```css
// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  ...;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  ...;
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  ...;
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  ...;
}
```

```css
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575px) {
  ...;
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767px) {
  ...;
}

// Medium devices (tablets, less than 992px)
@media (max-width: 991px) {
  ...;
}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199px) {
  ...;
}

// Extra large devices (large desktops)
// No media query since the extra-large breakpoint has no upper bound on its width
```

> 以及使用最小和最大断点宽度定位单个屏幕尺寸段的媒体查询和混合定义：

```css
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575px) {
  ...;
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767px) {
  ...;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991px) {
  ...;
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199px) {
  ...;
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  ...;
}
```

```html
<style>
  #myP {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    #myP {
      font-size: 24px;
      color: red;
    }
  }
  @media (min-width: 990px) {
    #myP {
      font-size: 34px;
      color: orange;
    }
  }
</style>
<body>
  <div class="container">
    <p id="myP">JCAlways</p>
  </div>
</body>
```

# 内容

## 排版

### 标题

```html
<h1>h1.Hello JCAlways</h1>
<h2>h2.Hello JCAlways</h2>
<h3>h3.Hello JCAlways</h3>
<h4>h4.Hello JCAlways</h4>
<h5>h5.Hello JCAlways</h5>
<h6>h6.Hello JCAlways</h6>
<p class="h1">h1.Hello JCAlways</p>
<p class="h2">h2.Hello JCAlways</p>
<p class="h3">h3.Hello JCAlways</p>
<p class="h4">h4.Hello JCAlways</p>
<p class="h5">h5.Hello JCAlways</p>
<p class="h6">h6.Hello JCAlways</p>
```

#### 自定义标题备注

> 辅助标题

```html
<h1>h1.Hello JCAlways<small class="text-muted">h1.Hello JCAlways</small></h1>
```

#### 显示标题

> bootstrap 可以传统的标题元素设计得更漂亮，以迎合你的网页内容。如果你想要一个标题醒目，考虑使用显示标题——一种更大型、鲜明的标题样式

```html
<div class="display-1">Display 1</div>
<div class="display-2">Display 2</div>
<div class="display-3">Display 3</div>
```

### Lead 中心内容

> 通过应用 `.lead`样式，可以定义一个中心段落，用于提示这是中心内容或重要内容。

```html
<p>我是文本</p>
<p class="lead">我是文本</p>
```

### 文本内联元素

```html
<p><mark>高亮</mark></p>
<p><span class="mark">高亮</span></p>
<p><small>小号</small></p>
<p><span class="small">小号</span></p>
<p><del>删除线</del></p>
<p><s>删除线</s></p>
<p><ins>下划线</ins></p>
<p><u>下划线</u></p>
<p><strong>粗体</strong></p>
<p><b>粗体</b></p>
<p><em>斜体</em></p>
<p><i>斜体</i></p>
```

### abbr 缩略语

```html
<p><abbr title="请输入邮箱" class="initialism">emall</abbr></p>
```

### blockquote 来源备注与引用

> 引用文档中另一个来源的内容块，，请在一段 HTML 外面包裹 ``，作为引用。为了显示直接引用，我们推荐使用`p`作为子级包裹容器
>
> 底部来源 <footer class="blockquote-footer"> 用于标识来源，一般用于页脚（所以有\*-footer)，然后配合 <cite>使用。

```html
<blockquote class="blockquote">
  <p class="mb-0">爱上一个地方，就应该背上包去旅游，走得更远。</p>
  <footer class="blockquote-footer">
    出自商务印书馆的 <cite title="Source Title">《新华字典》</cite>
  </footer>
</blockquote>
```

### 列表

#### 列表样式格式化

> 在 ul(或 ol）上使用`.list-unstyled`可以删除列表项目上默认的 list-style 以及左外边距（只针对直接子元素），这只生效于在直接子列表项目上，不影响你嵌套的子列表。

```html
<ul class="list-unstyled">
  <li>1111</li>
  <li>2222</li>
  <li>3333</li>
</ul>
```

#### 分行或单行多列并排

> 使用`.list-inline` 、 `.list-inline-item`结合，可以实现列表逐行显示（默认不引用且无父元素影响也是逐行显示）、或单行并多列并排（遵循从左对右的原则、并清除`margin`方法）。

```html
<ul class="list-inline">
  <li class="list-inline">列表之一</li>
  <li class="list-inline">列表之二</li>
  <li class="list-inline">列表之三</li>
</ul>
<ul class="list-inline">
  <li class="list-inline-item">列表之一</li>
  <li class="list-inline-item">列表之二</li>
  <li class="list-inline-item">列表之三</li>
</ul>
```

#### dl 表格式水平描述

> 使用 BootStrap 栅格系统的预定义类（或者说语义化 mixins），可以水平对齐条目和描述。对于较长的条目，你可以视情况添加一个.text-truncate 类，从而用省略号截断文本。

```html
<dl class="row">
  <dt class="col-sm-2">姓名</dt>
  <dd class="col-sm-10">张三</dd>
  <dt class="col-sm-2 text-truncate">我是一个很长的文本</dt>
  <dd class="col-sm-10">张三</dd>
</dl>
```

## 代码

### 内联代码

```html
<code>&lt;section&gt;</code> 代码嵌入到文本段中。
```

### 代码块

> 使用 ``标签可以包裹代码块，同样 HTML 的尖托号需要进行义，你还可以使用 `.pre-scrollable` CSS 样式，实现垂直滚动的效果，它默认提供 350px 高度限制、Y 轴垂直滚动效果。

```html
<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>
```

### Var 变量

> 推荐使用 <var>标签包裹标示变量。

```html
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
```

### 用户输入(键盘动作提示)

> 使用 <kbd> 标签，标明这是一个键盘输入操作

```html
<kbd><kbd>ctrl</kbd> + <kbd>c</kbd></kbd
>复制
```

### 示例标注

> <samp> 标签代表这是一个示例。

```html
<samp>这是一个代码示例.</samp>
```

## 图片

### 响应式图片&缩略图处理

> **响应式图片 : ** 在 Bootstrap 中，给图片添加`.img-fluid`样式，或定义`max-width: 100%`、`height:auto;`样式，即可赋得响应式特性，图片大小会随着父元素大小同步缩放。
>
> **缩略图处理 : **`您可以使用.img-thumbnail`属性来使图片自动被加上一个带圆角且 1px 边界的外框缩略图样式（你也可以使用系统提供的边隙间距方法，如`.p-1`再加上边框颜色定义达成）

```html
<div class="row">
  <div class="col-4">
    <img
      class="img-fluid"
      src="https://i.loli.net/2019/10/13/2a6ve3ZdW8TPCNY.jpg"
      alt=""
    />
  </div>
  <div class="col-4">
    <img
      class="w-100"
      src="https://i.loli.net/2019/10/13/2a6ve3ZdW8TPCNY.jpg"
      alt=""
    />
  </div>
  <div class="col-4">
    <img
      class="img-thumbnail"
      src="https://i.loli.net/2019/10/13/2a6ve3ZdW8TPCNY.jpg"
      alt=""
    />
  </div>
</div>
```

### 图像对齐处理

> 对于`.block`属性的块状图片，我们也可以使用 [浮动定义规范](https://getbootstrap.net/docs/4.0/utilities/float) 或 [文字对齐规范](https://getbootstrap.net/docs/4.0/utilities/text/#text-alignment)，来实现对图像的对齐、浮动控制，带`.block`块属性的图片，可以自动获得 `.mx-auto` 的位置对齐属性。.

```html
<!-- 浮动方法 -->
<div class="clearfix">
  <img
    class="rounded float-left"
    src="https://i.loli.net/2019/10/13/2a6ve3ZdW8TPCNY.jpg"
    alt=""
  />
  <img
    class="rounded float-right"
    src="https://i.loli.net/2019/10/13/2a6ve3ZdW8TPCNY.jpg"
    alt=""
  />
</div>
<!-- 边距法 -->
<div>
  <img
    class="rounded mx-auto d-block"
    src="https://i.loli.net/2019/10/13/2a6ve3ZdW8TPCNY.jpg"
    alt=""
  />
</div>
<!-- 文字居中法 -->
<div class="text-center">
  <img
    class="rounded"
    src="https://i.loli.net/2019/10/13/2a6ve3ZdW8TPCNY.jpg"
    alt=""
  />
</div>
```

### Html 5 标准之 Picture 元素

> HTML5 标准提供了一个全新的**picture** 元素，它可以为**img**指定多个**source** 定义，请确保在**img** 标签里使用使用.img-\* CSS 样式进行定义绑定，而不是仅仅认为引用了 **img** 就达成了

```html
<picture>
  <source src="大规格图片.jpg" media="(min-width: 800px)" />
  <source src="中规格图片.jpg" media="(min-width: 600px)" />
  <source src="小规格图片.jpg" />
  <img src="通用图片.jpg" alt="这是当浏览器不支持picture标签时显示的图片" />
</picture>
```

## 图文框

> 如果你需要显示的内容区包括了一个图片和一个可选的标题，可使用`.figure`样式定义。
> Bootstrap 的`.figure`以及`.figure-caption`类，为 HTML5 的`以及`元素提供了一个基准样式处理。默念认的图片系统不会定义明确的大小，因此请务必将该.img-fluid 类添加到您的``标签中才能实现与响应式的完美结合。
>
> **文字对齐控制 : **结合我们的[文本实用工具](https://getbootstrap.net/docs/content/utilities/text.html#text-alignment)可以轻松对齐图文框的说明文字（比如右对齐、左对齐，只要引用`.text-*`方法即可-译者注）。

```html
<div class="row">
  <figure class="figure">
    <img
      src="https://i.loli.net/2019/10/13/2a6ve3ZdW8TPCNY.jpg"
      class="figure-img img-fluid rounded"
      alt="A generic square placeholder image with rounded corners in a figure."
    />
    <figcaption class="figure-caption text-center">This Is My Head.</figcaption>
  </figure>
</div>
```

## 表格

> 1. 在第三方部件例如日历和日期选择器中广泛使用表格，我们设计了视情况需要加入的表格类。只需要向某个``添加一个基类`.table`，然后通过自定义样式或系统提供的 class 来起作用。
>
>    使用最基本的表格标记，下面是 Bootstrap 中 `.table`表格的样式（基本样式）， **Bootstrap 4 继承了所有的表格样式**，这意味着任何嵌套表格都将以与父类型相同的方式进行样式化。
>
> 2. 可使用`.table-dark`class 选择器来产生颜色反转对比效果，即深色背景和浅色文本。
>
> 3. **Head 表头处理 : ** 与预设的反转样式相似，使用`.thead-light` 或`.thead-dark` 中的一个样式，就能使 区显示出浅黑或深灰。
>
> 4. **条纹状表格 : **使用 `.table-striped` 样式定义 ，可以产生逐行颜色强烈对比的表格样式（以及增加反转）。
>
> 5. **表边框处理 : ** 添加 `.table-bordered` 类可以产生表格边框与间隙系统。
>
> 6. **无边框处理 : ** 添加`.table-borderless`无边界表格
>
> 7. **行悬停效果 : ** 将 `.table-hover` 定义到 上，可以产生行悬停效果（鼠标移到行上会出现状态提示）。
>
> 8. **紧缩表格 : **添加 `.table-sm` 可以将表格的 padding 值缩减一半，使表格更加紧凑。
>
> 9. **Captions 表格辅助标题 : **` 标签如同一个表格的标题，它默认是隐藏的，可以协助屏幕阅读器用户找到表格、了解表格内容，且决定是否需要阅读它

[详情](https://getbootstrap.net/docs/content/tables/#examples)

```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

### 语义化状态

> 使用语义状态样式对表格逐行或单个单元格进行着色表达。

```html
<table class="table">
  <tr>
    <td class="table-active">...</td>
    <td class="table-primary">...</td>
    <td class="table-secondary">...</td>
    <td class="table-success">...</td>
    <td class="table-danger">...</td>
    <td class="table-warning">...</td>
    <td class="table-info">...</td>
    <td class="table-light">...</td>
    <td class="table-dark">...</td>
  </tr>
</table>
```

### 响应式表格

> 当表格想要始终呈现水平滚动，可在`.table`上加入`.table-responsive`获得响应式表现，从而支持任何 viewport 窗口。也可以在`.table`上，加 `.table-responsive{-sm|-md|-lg|-xl}`属性来定义多屏幕尺寸响应支持。

```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```

# 公共样式

## 边框

### 基本边框

> 添加边框属性，显示指定边框。

```html
<span class="border"></span>
<span class="border-top"></span>
<span class="border-right"></span>
<span class="border-bottom"></span>
<span class="border-left"></span>
```

> 在一个空间上定义边框-删除或显示特定边框定义方法。

```html
<span class="border"></span>
<span class="border-0"></span>
<span class="border-top-0"></span>
<span class="border-right-0"></span>
<span class="border-bottom-0"></span>
<span class="border-left-0"></span>
```

### 边框颜色

> 使用我们的主题颜色类方法，定义边框颜色。

```html
<span class="border border-primary"></span>
<span class="border border-secondary"></span>
<span class="border border-success"></span>
<span class="border border-danger"></span>
<span class="border border-warning"></span>
<span class="border border-info"></span>
<span class="border border-light"></span>
<span class="border border-dark"></span>
<span class="border border-white"></span>
```

### 圆角边框

> 使用`.rounded`元素可以轻松的定义四个圆角的孤度及显示效果。

```html
<img src="..." alt="..." class="rounded" />
<img src="..." alt="..." class="rounded-top" />
<img src="..." alt="..." class="rounded-right" />
<img src="..." alt="..." class="rounded-bottom" />
<img src="..." alt="..." class="rounded-left" />
<img src="..." alt="..." class="rounded-circle" />
<img src="..." alt="..." class="rounded-pill" />
<img src="..." alt="..." class="rounded-0" />
```

## 浮动属性和清除浮动

> 添加浮动 **.float{-sm/md/lg/xl}-left/right/none**
> 清除浮动 添加`.clearfix` **到父元素上**来达达到清除目标

```html
<div class="clearfix">
  <div class="float-left">1</div>
  <div class="float-right">2</div>
</div>
```

## 颜色

### 字体颜色

> 字体颜色

```html
<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-success">.text-success</p>
<p class="text-danger">.text-danger</p>
<p class="text-warning">.text-warning</p>
<p class="text-info">.text-info</p>
<p class="text-light bg-dark">.text-light</p>
<p class="text-dark">.text-dark</p>
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
```

### 背景颜色

```html
<div class="bg-primary text-white">.bg-primary</div>
<div class="bg-secondary text-white">.bg-secondary</div>
<div class="bg-success text-white">.bg-success</div>
<div class="bg-danger text-white">.bg-danger</div>
<div class="bg-warning text-white">.bg-warning</div>
<div class="bg-info text-white">.bg-info</div>
<div class="bg-light text-dark">.bg-light</div>
<div class="bg-dark text-white">.bg-dark</div>
<div class="bg-white text-dark">.bg-white</div>
```

## Display 显示属性

### Display 属性

> 格式 .d{-sm/md/lg/xl}{value}
>
> value none inline inline-block block table table-cell table-row flex inline-flex

```html
<div class="d-inline-block">111</div>
<div class="d-inline-block">222</div>
```

### 隐藏元素

> 隐藏元素只要使用 `.d-none` class 或 `.d-{sm,md,lg,xl}-none` 的任何变量来支持响应式。

```html
<div class="d-lg-none">hide on screens wider than lg</div>
<div class="d-none d-lg-block">hide on screens smaller than lg</div>
```

### 面向打印的显示属性控制处理

> 在处理打印样式时，通过`display`通用样式来改变相应值处理呈现效果。

```html
<div class="d-print-none">111</div>
```

## 文本处理

### 文本对齐

> 使用 **.text{-sm/md/lg/xl}-left/center/right/justify**

```html
<p class="text-left">Left</p>
<p class="text-center">Center</p>
<p class="text-right">Right</p>
```

### 文本包裹和溢出处理

> `.text-nowrap` class 样式类可以防止文本换行.

```html
<div class="text-nowrap" style="width: 8rem;">
  This text should overflow the parent.
</div>
```

> `.text-truncate` class 样式，以省略号截断文本（**需要结合 `display: inline-block` 或 `display: block`来使用）**

```html
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  Praeterea iter est quasdam res quas ex communi.
</span>
```

### 字母大小写转换

> 使用文本大小写样式将文字内容由小写，转为大写（不支持中文）。
>
> 注意： `text-capitalize`仅支持每一个词的第一个字母转为大写，而其它字母不受影响。

```html
<p class="text-lowercase">Lowercased text.转小写</p>
<p class="text-uppercase">Uppercased text.转大写</p>
<p class="text-capitalize">CapiTaliZed text.转首字母</p>
```

### 粗细和斜体

> 快速的实体字体粗细定义、斜体。

```html
<p class="font-weight-bold">粗体</p>
<p class="font-weight-normal">普通的</p>
<p class="font-weight-light">小一点的</p>
<p class="font-italic">斜体</p>
```

### 等宽字体

> 将选择更改为我们的等宽字体堆栈`.text-monospace`。

```html
<p class="text-monospace">这是等宽</p>
```

## 垂直对齐

> 使用 [`vertical-alignment`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align) 通用样式改变元素的对齐，注意：垂直对齐仅影响 内联 inline、 内联块 inline-block、 内联表 inline-table、 表格单元格 table cell 元素。
>
> 可选属性有 `.align-baseline`、 `.align-top`、 `.align-middle`、`.align-bottom`、 `.align-text-bottom`、 `.align-text-top`

```html
<span class="align-baseline">baseline基准</span>
<span class="align-top">top顶部</span>
<span class="align-middle">middle垂直居中</span>
<span class="align-bottom">bottom底部</span>
<span class="align-text-top">text-top文本顶部</span>
<span class="align-text-bottom">text-bottom文本底部</span>
```

## 规格与尺寸

> 宽度和高度通用属性从 `.W/h-25/50/75/100` 中产生，默认值包括 `25%`、`50%`、`75%`、 `100%` ，你可根据整这些值，从而生产出不同的规格属性。
>
> 也可使用`max-width: 100%;` 和 `max-height: 100%;` 这些通用样式定义。

```html
<div class="w-25 p-3" style="background-color: #eee;">Width 25%</div>
<div class="w-50 p-3" style="background-color: #eee;">Width 50%</div>
<div class="w-75 p-3" style="background-color: #eee;">Width 75%</div>
<div class="w-100 p-3" style="background-color: #eee;">Width 100%</div>

<img class="mw-100" src="..." alt="Max-width 100%" />
```

## 间隔

> Spacing 通用样式适用于所有屏幕尺寸，从 `xs` 到 `xl`各种规格尺寸。因为这些类是从`min-width: 0`及以上开始引用的，所以不受媒体查询的约束，然而，其余的屏幕断点（设备解析）包含屏幕尺寸缩写。
>
> 对于`xs`屏幕，使用固定格式`{property}{sides}-{size}` 命名 CSS 方法，对于 r `sm`、 `md`、`lg`、 `xl`使用 `{property}{sides}-{breakpoint}-{size}`格式命名 CSS 方法。
>
> 如果 _属性_ 是下列之一：
>
> - `m` - 这个 Class 属性会设定 `margin`值
> - `p` - 这个 Class 属性会设定 `padding`值
>
> _边缘_ 设定：
>
> - `t` - 这个 Class 属性会设定 `margin-top` 或 `padding-top`
> - `b` - 这个 Class 属性会设定 `margin-bottom` 或 `padding-bottom`
> - `l` - 这个 Class 属性会设定 `margin-left` 或 `padding-left`
> - `r` - 这个 Class 属性会设定 `margin-right` 或 `padding-right`
> - `x` - 这个 Class 属性会设定 `*-left` 和 `*-right`两个值。
> - `y` - 这个 Class 属性会设定 `*-top` 和 `*-bottom`两个值
> - 空白 - 这个 Class 属性会设定 `margin` 或 `padding` 元素的四个边。
>
> *尺寸规格*定义：
>
> - `0` - 这个 Class 属性会设定 `margin` 或 `padding` 的样式值为 `0`
> - `1` - (默认时)这个 Class 属性会设定 `margin` 或 `padding` 以 `$spacer * .25`规格呈现
> - `2` - (默认时) 这个 Class 属性会设定 `margin` 或 `padding` 以 `$spacer * .5`规格呈现
> - `3` - (默认时)这个 Class 属性会设定 `margin` 或 `padding` 以 `$spacer`规格呈现
> - `4` - (默认时) 这个 Class 属性会设定`margin` 或 `padding` 以 `$spacer * 1.5`规格呈现
> - `5` - (默认时)这个 Class 属性会设定 `margin` 或 `padding` 以 `$spacer * 3`规格呈现
> - `auto` - 这个 Class 属性会设定 `margin` 值 auto（按浏览器默认值自由展现）。
>
> (你也可以对`$spacers`的 Sass map 调整，包括添加条目来增加更多尺寸。)

```html
<span class="d-block bg-danger pl-5" style="width: 100px">123</span>
```

> `.mx-auto` class 样式，用于固定宽度的盒模型水平居中，具有`display: block` 和 `width` 设置水平边距内容的`auto`居中。

```html
<div class="mx-auto" style="width: 200px;">居中</div>
```

## 阴影

> 可以使用`.shadow-none`和`.shadow{-sm/lg}实用工具类快速添加或删除阴影`

```html
<div class="shadow-none p-3 mb-2 bg-light rounded">没有阴影</div>
<div class="shadow-sm p-3 mb-2 bg-white rounded">小阴影</div>
<div class="shadow p-3 mb-2 bg-white rounded">正常阴影</div>
<div class="shadow-lg p-3 mb-2 bg-white rounded">大阴影</div>
```

## Position 固定及定位

### 通用属性

> 使用`.position-static/relative/absolute/fixed/sticky样式`

```html
<div
  class="position-relative border border-danger"
  style="width: 400px;height: 400px;"
>
  <div
    class="position-absolute bg-primary"
    style="width: 100px;height: 100px; right: 0;bottom: 0;"
  ></div>
</div>
```

### 固定在顶(底)

> 可以用.fixed-top/bottom 将一个元素固定在可见区域的顶部或底部

```html
<body style="padding-top: 50px;padding-bottom: 50px;">
  <header class="bg-danger fixed-top" style="height: 50px;">内容</header>
</body>
```

### 贴齐于 Top 顶部

> 将一个元素轩于可见区域的顶部，从边到边-但只在你的浏览器窗口滚动才能激活它，该 .sticky-top 样式使用 position: sticky 不能在所有浏览器中获得支持。
> Microsoft Edge 和 IE11 呈现 position: sticky 使用的是 position: relative. 属性，因此我们将这个样式增加了 @supports 动态变量，限制在可支持的浏览器上运行。

```html
<div class="sticky-top">...</div>
```

## Visibility 显示或隐藏处理

> 使用通用样式的 visibility 元属，这不会改变元素的 display 值，并且有助于大部分使用者隐藏内容，但仍然保留在屏幕阅读器中。
> 根据需要选用 .visible 或 .invisible 两个 Class 样式。

```html
<div class="visible">显示</div>
<div class="invisible">隐藏</div>
```

## 关闭图标

> 使用通用的 close 关闭图标来关闭 modals 模态框提示或 alert 提示组件的内容

```html
<button type="button" class="close">&times;</button>
```

## 嵌入(embed)

> 创建响应式的视频、图像、幻灯片，并能在在任何设备上友好的扩展显示。
>
> 将这些规则应用到 iframe、embed、 video、 object 上，当需要配合其它属性（如响应式）时，也可以加入 .embed-responsive-item 定义。
>
> 你不需要将 `frameborder="0"` 加入到你的 `iframe`中，因为我们已经为您覆盖处理了这个属性。
>
> 使用 `.embed-responsive` 实现同比例收缩，至于 `.embed-responsive-item`不是严格要求的-虽然我们鼓励使用它。
>
> 长宽比例处理 .embed-responsive-21by9/16by9/4by3/1by1

```html
<div class="embed-responsive embed-responsive-16by9">
  <iframe
    class="embed-responsive-item"
    src="https://api.zhangsifan.com/"
    allowfullscreen
  ></iframe>
</div>
```

## 图象替换

> 使用 `.text-hide` class 样或 sass mixin 来隐藏一个元素的文字内容并替换成背景图片。
>
> 使用`.text-hide` class 样式可以保持标签的亲和性及 SEO 优化需求，引入后，需要使用 `background-image` 属性来提供视觉展示，而不是文字内容（文字内容随即隐藏）。

```html
<h1
  class="text-hide"
  style="background-image: url('/assets/brand/bootstrap-solid.svg'); width: 50px; height: 50px;"
>
  Bootstrap
</h1>
```

## 读屏器

> 使用屏幕阅读器通用样式定义，隐藏屏幕阅读器不支持的设备元素。

```html
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
```

## flex 弹性布局

> - 父集
>
>   - 启用 .d{-sm/md/lg/xl}-flex/inline-flex
>
> - 方向 .flex{-sm/md/lg/xl}-row/row-reverse/column/column-reverse
>   - 内容对齐与对准 .justify-content{-sm/md/lg/xl}-start/center/end/between/around
> - 对齐项目 .aign-items{-sm/md/lg/xl}-stretch/start/center/end/baseline
>   - Wrap 包裹 .flex{-sm/md/lg/xl}-nowrap/wrap/wrap-reverse
> - 对齐内容 .align-content{-sm/md/lg/xl}-stretch/start/center/end/around
> - 子元素
> - 自对齐 .align-self{-sm/md/lg/xl}-stretch/start/center/end/baseline
>   - 自相等 /flex{-sm/md/lg/xl}-fill
>   - 等宽变换 .flex{-sm/md/lg/xl}-grow-0/1
>   - 缩小能力 .flex{-sm/md/lg/xl}-shrink-1/0
>   - 自浮动
>     - 水平 .mr-auto .ml-auto
>     - 垂直 .mb-auto .mt-auto(可结合 align-items flex-direction column)
>   - Order 排序 .order{-sm/md/lg/xl}-1 至 12(默认 0,越小越靠前)

```html
<div
  class="border  border-danger mt-3 d-flex "
  style="width: 400px;height: 400px;"
>
  <div class="bg-primary">111</div>
  <div class="bg-success">222</div>
</div>
```

# 组件

## 警告提示框

```html
<div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  This is a secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  This is a warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  This is a info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  This is a light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  This is a dark alert—check it out!
</div>
```

### 链接颜色

> 使用 `.alert-link` 类可以为带颜色的警告文本框中的链接加上合适的颜色

```html
<div class="alert alert-primary" role="alert">
  This is a primary alert with
  <a href="#" class="alert-link">an example link</a>. Give it a click if you
  like.
</div>
```

### 额外附加内容

> 警报还可以包含其他 HTML 元素，如标、段落和分隔符。

```html
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p class="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</div>
```

### 关闭警告

```html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields
  below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
```

### JavaScript 行为

```html
<div
  id="myAlert"
  class="alert alert-warning alert-dismissible fade show"
  role="alert"
>
  <strong>登录失败!</strong>您的用户名或密码错误!
  <button id="btn" type="button" class="close" aria-label="Close">
    &times;
  </button>
</div>
```

```js
$("#btn").click(() => {
  $("#myAlert").alert("close");
});

$("#myAlert")
  .on("close.bs.alert", () => {
    alert("关闭前");
  })
  .on("closed.bs.alert", () => {
    alert("关闭后");
  });
```

## 徽章

> `.badge`可以嵌在标题中，并通过标题样式来适配其元素大小，因为其本身是通过相对字体大小和 em 单位的，所以有良好的弹性。

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-light">Light</span>
<span class="badge badge-dark">Dark</span>
```

## 面包屑导航

> 在通过 BootStrap 的内置 CSS 样式，自动添加分隔符、并呈现导航层次和网页结构结构，从而指示当前页面的位置为访客创造优秀用户体验。

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">首页</a></li>
    <li class="breadcrumb-item"><a href="#">女装</a></li>
    <li class="breadcrumb-item active" aria-current="page">连衣裙</li>
  </ol>
</nav>
```

## 按钮

### 示例

```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
```

### 按钮标签

> `.btn` 可以在`button`元素上使用，您也可以在 `a`、 或 `input` 元素上使用這些 Class，同样能带来按钮效果

```html
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
```

### 轮廓按钮

> `.btn` 在引用中，如果需要一个按钮，但不需要带来的巨大的背景颜色（背景边框缩小）？用默认修饰符类替换`.btn-outline-*`任何按钮上的所有背景颜色和图像。

```html
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
```

### 尺寸规格与大小定义

> 配合`.btn-lg` 、 `.btn-sm` 两个邻近元素，可分别实现大规格按钮、小规格按钮的定义。

```html
      <button type="button" class="btn btn-primary btn-lg">Large button</button>
      <button type="button" class="btn btn-primary btn-sm">Large button</button>
```

### 启用与禁用按钮

> **启用状态** `.btn`样式定义的按钮，默认就是启用状态（背景较深、边框较暗、带内阴影），如果你一定要使按钮固定为启用状态、不需要点击反馈，可以增加`.active`样式，并包括`aria-pressed="true"` 属性，则状态显示为启用状态。
>
> **禁用状态** 直接将`disabled`布尔属性添加到任何``元素（直接嵌套在html标签中，使按钮看起来处于非活动的禁用状态（点击不会有响应和弹性）。

 ```html
      <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
      <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
 ```

### 按钮插件

#### 切换状态

> 添加 `data-toggle="button"` 属性，可以切换按钮的 `active` 状态，如果你预先需要切换按钮，必须将`.active` 样式 **、** `aria-pressed="true"`属性到 ``标签中。

```html
     <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
        Single toggle
      </button>
```



#### 复选框和但选框

> Bootstrap的`.button` 样式也可以使用于其它元素，比如`label`HTML组件上，从而实现单选、复选效果。添加 `data-toggle="buttons"` 到`.btn-group` 下的元素里，来启用它们的样式切换。
>
> 这些按钮的检查状态，只能通过 `click` 事件 进行更新，如果你使用其它方法更新输入，用`input type="reset"` 或手动应用输入 `checked` 属性，人为的在`label` 上增加 `.active` 状态。
>
> 注意：预先选中的按钮需要你手动将 `.active` 定义上，在 `label`中。

```html
<div class="btn-group" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="checkbox" checked autocomplete="off"> Checkbox 1 (pre-checked)
  </label>
  <label class="btn btn-secondary">
    <input type="checkbox" autocomplete="off"> Checkbox 2
  </label>
  <label class="btn btn-secondary">
    <input type="checkbox" autocomplete="off"> Checkbox 3
  </label>
</div>
```

> `Bootstrap 4.0`正式版提供了全新的复选与单选 解决方案，其方案如下： .btn-group-toggle

```html
<div class="btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="checkbox" checked autocomplete="off"> Checked
  </label>
</div>
```



### JavaScript 行为

| 方法                    | 属性                               |
| ----------------------- | ---------------------------------- |
| `$().button('toggle')`  | 切换状态，给予按钮已经启用的外观。 |
| `$().button('dispose')` | 销毁元素按钮的状态。               |

## 下拉菜单


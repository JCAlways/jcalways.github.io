---
title: 微信小程序基础
date: 2019-11-30 08:00:00
categories: 
- 微信小程序
tags: 微信小程序
keywords: 
description: 
top_img: 
comments: 
cover: https://i.loli.net/2019/11/24/JsraOCx62EmePQb.jpg
---



# 微信小程序开发准备

## 编辑器

VSCode [下载地址](https://code.visualstudio.com/ )

微信小程序开发工具 [下载地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html )

## 官方API文档

[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/ )

## VSCode推荐安装的插件

[minapp](https://marketplace.visualstudio.com/items?itemName=qiu8310.minapp-vscode)

# 小程序的结构目录



## 小程序文件结构和传统web对比

| 结构 | 传统web    | 微信小程序 |
| ---- | ---------- | ---------- |
| 结构 | HTML       | WXML       |
| 样式 | CSS        | WXSS       |
| 逻辑 | JavaScript | JavaScript |
| 配置 | 无         | JSON       |



## 基本的项目目录

```bash
│  app.js              # 全局的js(入口文件)
│  app.json            # 全局的配置文件
│  app.wxss            # 全局的样式文件
│  project.config.json # 整个项目的描述文件 类似node中的package.json
│
├─pages                # 小程序对应的页面的目录
│  ├─index             # 首页
│  │      index.js     # js文件
│  │      index.json   # 配置文件
│  │      index.wxml   # 类似html
│  │      index.wxss   # 样式文件 类似CSS
│  │
│  └─logs              # 子页面
│          logs.js
│          logs.json
│          logs.wxml
│          logs.wxss
│
└─utils                # 自己封装的工具函数
        util.js
```

# 配置介绍

  <div class="note danger"><p>注意:配置文件中不能出现注释</p></div>  
&nbsp;

## 全局配置app.json

> 通过 app.json 文件对小程序进行全局配置，如页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。
> [官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html )

### app.json 配置清单

| 属性           | 类型         | 必填 | 描述                 |
| -------------- | ------------ | ---- | -------------------- |
| pages          | String Array | 是   | 设置页面路径         |
| window         | Object       | 否   | 设置默认窗口表现     |
| tabBar         | Object       | 否   | 设置底部 tab 表现    |
| networkTimeout | Object       | 否   | 设置网络超时时间     |
| debug          | Boolean      | 否   | 设置是否开启调试模式 |

#### pages-(页面路径)
> 用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径（含文件名） 信息。文件名不需要写文件后缀，框架会自动去寻找对于位置的 .json, .js, .wxml, .wxss 四个文件进行处理。
> [官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#pages )

```json
{
  "pages": [
    "pages/index/index",
    "pages/detail/detail"
  ]
}
```

#### window-(默认窗口表现)

> 用于设置小程序的状态栏、导航条、标题、窗口背景色。 
>[官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window )

| 属性                         | 类型     | 默认值  | 描述                               |
| ---------------------------- | -------- | ------- | ---------------------------------- |
| navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色，如"#000000"        |
| navigationBarTextStyle       | String   | white   | 导航栏标题颜色，仅支持 black/white |
| navigationBarTitleText       | String   |         | 导航栏标题文字内容                 |
| backgroundColor              | HexColor | #ffffff | 窗口的背景色                       |

```json
{
  "window": {
     "navigationBarBackgroundColor": "#66ccff",
     "navigationBarTitleText": "名称",
     "navigationBarTextStyle": "white",
     "backgroundColor": "#F0F0F0"
  }
}
```


#### tabBar-( 底部 tab 栏的表现 )
> 如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。 
> [官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabBar )

对象类型，配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。

| 属性            | 类型     | 必填 | 默认值 | 描述                                    |
| --------------- | -------- | ---- | ------ | --------------------------------------- |
| color           | HexColor | 是   |        | tab 上的文字默认颜色                    |
| selectedColor   | HexColor | 是   |        | tab 上的文字选中时的颜色                |
| backgroundColor | HexColor | 是   |        | tab 的背景色                            |
| borderStyle     | String   | 否   | black  | tabbar上边框的颜色， 仅支持 black/white |
| list            | Array    | 是   |        | tab 的列表，最少2个、最多5个            |
| position        | String   | 否   | bottom | tab 的位置    可选值 bottom、top        |

其中 list 接受一个数组，数组中的每个项都是一个对象，其属性值如下：

| 属性             | 类型   | 必填 | 描述                                                         |
| ---------------- | ------ | ---- | ------------------------------------------------------------ |
| pagePath         | String | 是   | 页面路径，必须在 pages 中先定义                              |
| text             | String | 是   | tab 上按钮文字                                               |
| iconPath         | String | 否   | 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，`不支持网络图片` |
| selectedIconPath | String | 否   | 选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效 |

```json
  "tabBar": {
    "color": "#D78B09",
    "selectedColor": "#FFF",
    "backgroundColor": "#FECA49",
    "borderStyle": "white",
    "list": [
      {
        "text": "首页",
        "pagePath": "pages/index/index",
        "iconPath": "icons/home-default.png",
        "selectedIconPath": "icons/home-active.png"
      },
      {
        "text": "日志",
        "pagePath": "pages/logs/logs",
        "iconPath": "icons/cards-default.png",
        "selectedIconPath": "icons/cards-active.png"
      }
    ]
  }
```


## 页面配置page.json

> 每个页面可以有不同的表现，通过 pages 目录下的 .json 文件，如 logs.json ，实现页面的局部配置。但是只能设置 app.json 中的 window 配置项的内容，页面中配置项会覆盖 app.json 的 window 中相同的配置项。
> [官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html )

常用配置

| 属性                         | 类型     | 描述                             |
| ---------------------------- | -------- | -------------------------------- |
| navigationBarTitleText       | HexColor | 导航栏标题文字内容               |
| navigationBarBackgroundColor | HexColor | 导航栏背景颜色                   |
| navigationBarTextStyle       | String   | 字体颜色 只支持`black` / `white` |

```json
{
  "navigationBarTitleText": "页面标题",
  "navigationBarBackgroundColor":"#6cf",
  "navigationBarTextStyle":"white"
}
```

## 静态资源

> 小程序打包体积不允许超过2M	
> 通过配置  [project.config.json](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html) 文件，可以忽略某些文件（如图片等）以减少预览发布资源所占空间的大小。

```json
"packOptions": {
  "ignore": [
    {
      "type": "folder",
      "value": "static"
    }
  ]
}
```



## 字体图标

> 在小程序中可以像网页一样使用字体图标，并且使用方式基本一致。唯一的不同在于小程序中字体图标所引入的字体文件路径为网络路径，且必须为 https 协议。

```css
@font-face {
  font-family: 'icomoon';
  /* wxss 不支持本地资源（图片、字体） *//* 服务器地址需为 https 协议 */
  src: url('https://botue.github.io/85qi/fonts/icomoon.eot?lzaqut');
  src: url('https://botue.github.io/85qi/fonts/icomoon.eot?lzaqut#iefix') format('embedded-opentype'),
         url('https://botue.github.io/85qi/fonts/icomoon.ttf?lzaqut') format('truetype'),
         url('https://botue.github.io/85qi/fonts/icomoon.woff?lzaqut') format('woff'),
         url('https://botue.github.io/85qi/fonts/icomoon.svg?lzaqut#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}
```


# 视图层

## 数据绑定

**所谓数据绑定是指数据与页面中组件的关联关系。使用 Mustache 语法（双大括号）将数据变量包起来**。

### 简单数据----[官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/data.html#简单绑定)

 数据绑定使用 Mustache 语法（双大括号）将变量包起来，可以作用于： 

内容

```html
<view> {{ message }} </view>
```

```js
Page({
  data: {
    message: 'Hello MINA!'
  }
})
```

组件属性(需要在双引号之内)

```html
<view id="item-{{id}}"> </view>
```

```js
Page({
  data: {
    id: 0
  }
})
```

控制属性(需要在双引号之内)
```html
<view wx:if="{{condition}}">文本</view>
```
```js
Page({
  data: {
    condition: true
  }
})
```
关键字(需要在双引号之内)

```html
<checkbox checked="{{false}}"> </checkbox>
```

<div class="note danger"><p>特别注意：不要直接写 `checked="false"`，其计算结果是一个字符串，转成 boolean 类型后代表真值。</p></div>  
&nbsp;

### 复杂数据
```html
<text>我叫{{user.name}}，我今年{{user.age}}岁了，我在学习{{courses[0]}}课程。</text>
```

```js
Page({
  // 通过 data 属性，初始化页面中用到的数据
  data: {
    user: {
      name: '小明',
      age: 16
    },
    courses: ['wxml', 'wxss', 'javascript']
  }
});
```

### 运算
```html
<text>{{a}} + {{b}} = {{a + b}}</text>
<text>{{flag ? '是': '否'}}</text>
```

```js
Page({
  // 通过 data 属性，初始化页面中用到的数据
  data: {
    a: 10,
    b: 5,
    flag: true
  }
});
```
## 列表渲染

> 将数组数据遍历绑定到组件中。通过 wx:for 控制属（类似vue中的指令）性实现。
> 项的变量名默认为`item` 可以通过`wx:for-item="value"`修改变量名
> 下标变量名默认为`index` 可以通过`wx:for-index="key"`修改变量名0
> 通过 block 可以将多个组件元素“包”到一起进行渲染，block 只是提供一种结构，并不会被渲染到页面中。一般这样做的目的是可以将多个组件按统一的逻辑进行控制。


```html
<view>
  <view wx:for="{{arr}}" wx:key="{{index}}">{{index}}:{{item}}</view>
  <view wx:for="{{person}}" wx:key="{{index}}">{{index}}:{{item}}</view>
  <view wx:for="{{person}}" wx:key="{{index}}" wx:for-index="key" wx:for-item="value">
    {{key}}:{{value}}
  </view>
  <!-- block最终不会变成真正的dom元素 -->
  <block wx:for="{{arr}}" wx:key="{{index}}">{{index}}:{{item}}</block>
</view>
```

```js
Page({
  data: {
    arr: ["苹果", "香蕉", "菠萝", "火龙果"],
    person: {
      name: '小张',
      age: 22
    }
  }, 
});
```
## 条件渲染

> 根据条件控制是否渲染某个（些）组件，通过 wx:if 属性实现。

### 基本用法

```html
<view wx:if="{{true}}">
  <text>锄禾日当午</text>
</view>
```

### 多分支

```html
<view wx:if="{{view == '小明'}}">小明</view>
<view wx:elif="{{view == '小张'}}">小张</view>
<view wx:else="{{view == '小李'}}">小李</view>
```

```js
Page({
  data: {
    view: "小张"
  },
});
```
### hidden---显示/隐藏

为小程序组件添加 hidden 属性也可以控制组件是否显示，其效果类似于 vue 中的 v-show，它与 wx:if 的不同之处是 wx:if 通过添加/移除节点实现元素的显示/隐藏，而 hidden 是对过样式 display 属性实现的。

```html
<view hidden="{{true}}">
  <text>hidden=true</text>
</view>
<view hidden="{{false}}">
  <text>hidden=false</text>
</view>
```

小程序中组件属性的值如果为布尔类型时，只要包含这个属性即为 true，要表达 false 时，需要通过 { { } } 表达，原因是  { { } }  中的内容为被小程序当成表达式解析，所以 `hidden="{{false}}"`会被解析成数据类型的布尔类型，而如果写成 hidden="false" 则将 false 当成字符串解析。


# 样式WXSS

> wxss是一套样式语言,用于描述WXML的样式组件


## 数据

获取data的值

```js
this.data.name
```

修改data数据

```js
this.setData({
  name:"张三"
})
```

事件对象

```js
in(e){
  console.log(e)
}
```



获取输入框的值是通过事件源对象获取的`e.detail.value`


传参要动过自定义属性传参



## 发送请求

小程序不支持`XMLHTTPRequest`,`$.ajax`,`axios`

开发者所请求的

```js
wx.request({
    url:"",
    method:"",
    data:{},
    success(){},
    fail(){},
})
```


# 事件

## 事件绑定

> 使用`bind事件名称="事件回调"`或者`bind:事件类型="事件回调"`

```html
<button bind:tap='getTime'>获取时间</button>
<!-- 或者 -->
<button bindtap="getTime">获取时间</button>
```

## 事件冒泡
> 盒子嵌套的事件会触发事件冒泡.
> 里面的事件先触发,随后外面的事件触发

```html
<view class="father" bind:tap="father">
  <view class="son" bind:tap="son"></view>
</view>
```

### 阻止事件冒泡

> 实现监听的同时,阻止冒泡
> 使用 `catch:事件名称="事件回调"`或者`catch事件名称="事件回调"`

```html
<view class="father" bind:tap="father">
  <view class="son" catch:tap="son"></view>
  <!-- 或者 -->
  <view class="son" catchtap="son"></view>
</view>

```

## 事件捕获

> 点击里面盒子,外面的事件先执行,里面的事件在执行
> 使用`capture-bind:事件名称="事件回调"`


```html
<view class="father" capture-bind:tap="father">
  <view class="son" capture-bind:tap="son"></view>
</view>
```

###  阻止捕获

> 在哪里阻止,里面的事件就不会执行
> 使用`capture-catch:事件名称="事件回调"`


```html
<view class="father" capture-catch:tap="father">
  <view class="son" capture-bind:tap="son"></view>
</view>
```

## 事件互斥

> 有mut的互斥
> 使用`mut-bind:事件名称="事件回调"`

```html
<view class="box" bind:tap="fn">
  <view class="father" mut-bind:tap="father">
    <view class="son" mut-bind:tap="son"></view>
  </view>
</view>
```

## 事件回调

```js
fn(e){
  console.log(e)
}
```

# 生命周期

> 生命周期就是函数,只是会自己执行

## APP---应用级别

### onLaunch

> 小程序启动时会自动执行该函数(只会执行一次)

```js
App({
  onLaunch() {
    console.log("小程序启动会执行");
  },
});
```

### onShow

> 小程序前台运行时会自动执行

```js
App({
  onShow() {
    console.log("小程序在前台会执行");
  },
});
```
### onHide
> 小程序后台运行时会自动执行

```js
App({
  onHide() {
    console.log("小程序在后台会执行");
  },
});
```
### onError
> 小程序错误会自动执行

```js
App({
  onError() {
    console.log("小程序错误会执行");
  },
});
```
### onPageNotFound
> 小程序启动时,页面找不到会自动执行

```js
App({
  onPageNotFound() {
    console.log("页面找不到呀！！！！");
  }
});
```
## Page---页面级别


### onLoad

> 当前页面加载时会自动加载该函数 (只会执行一次)
```js
Page({
  onLoad(){
    console.log('页面加载会调用')
  }
})
```
### onShow
> 当前页面加载完毕,显示时会自动加载该函数

```js
Page({
  onShow() {
    console.log('页面加载完毕,显示会调用')
  },
})
```
### onReady
> 当前页面初次渲染时,显示时会自动加载该函数 (只会执行一次)

```js
Page({
  onReady() {
    console.log('页面渲染完成会调用')
  },
})
```
### onHide
> 页面隐藏会调用该函数
```js
Page({
  onHide() {
    console.log('页面隐藏会调用')
  }
})
```

## 场景值---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html)

> 场景值用来描述用户进入小程序的路径
> 只能通过`App.js`下的`onLaunch`或`onShow`的事件回调来获取

```js
App({
  onLaunch(e) {
    // 只会执行一次
    console.log(e.scene)
  },
  // 或者
  onShow(e) {
    console.log(e.scene)
  }
})
```

## 地址参数

> 使用navigator的地址穿参,在被传的JS文件调用onLoad的回调获取

```html
<navigator url="../index3/index?a=1&b=2">跳转到下个页面</navigator>
```
```js
Page({
  onLoad(e) {
    console.log(e)
  }
})
```

# 组件

## view---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/view.html )

> 类似div

| 属性名      | 类型   | 默认值 | 说明                                                         |
| ----------- | ------ | ------ | ------------------------------------------------------------ |
| hover-class | string | none   | 指定按下去的样式类。当 `hover-class="none"` 时，没有点击态效果 |

```html
<!-- WXML -->
<view hover-class="hover_class">view</view>
<!-- WXSS -->
.hover_class{
  background-color: red
}
```
## scroll-view---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html)
> 可滚动视图区域

| 属性              | 类型        | 默认值 | 说明                  |
| ----------------- | ----------- | ------ | --------------------- |
| scroll-x          | boolean     | false  | 允许横向滚动          |
| scroll-y          | boolean     | false  | 允许纵向滚动          |
| bindscrolltoupper | eventhandle |        | 滚动到顶部/左边时触发 |
| bindscrolltolower | eventhandle |        | 滚动到底部/右边时触发 |

```html
<scroll-view scroll-y  style="height:400rpx ;width:200rpx;border:1px solid red">
  <view>文是文本</view>
    ...
  <view>文是文本</view>
</scroll-view>
```



## text ---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/text.html )

> 显示普通文本的标签 text只能嵌套text

| 属性       | 类型    | 默认值 | 说明         |
| ---------- | ------- | ------ | ------------ |
| selectable | boolean | false  | 文本是否可选 |
| decode     | boolean | dalse  | 是否解码     |

```html
<text class="" selectable="false" space="false" decode="false">text</text>
```

## image---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html )

> 图片标签 image组件默认宽度320px 高度240ppx `不支持背景图片的写法`
> `image组件中二维码/小程序码图片不支持长按识别。仅在wx.previewImage中支持长按识别`

| 属性      | 类型    | 默认值      | 说明                                                   |
| --------- | ------- | ----------- | ------------------------------------------------------ |
| src       | String  |             | 图片资源地址                                           |
| mode      | string  | scaleToFill | 图片裁剪、缩放的模式`参数见官方文档`                   |
| lazy-load | boolean | false       | 图片懒加载，在即将进入一定范围（上下三屏）时才开始加载 |

`mode 的合法值`

| 值           | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| scaleToFill  | 缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素 |
| aspectFit    | 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。 |
| aspectFill   | 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。 |
| widthFix     | 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变         |
| top          | 裁剪模式，不缩放图片，只显示图片的顶部区域                   |
| bottom       | 裁剪模式，不缩放图片，只显示图片的底部区域                   |
| center       | 裁剪模式，不缩放图片，只显示图片的中间区域                   |
| left         | 裁剪模式，不缩放图片，只显示图片的左边区域                   |
| right        | 裁剪模式，不缩放图片，只显示图片的右边区域                   |
| top left     | 裁剪模式，不缩放图片，只显示图片的左上边区域                 |
| top right    | 裁剪模式，不缩放图片，只显示图片的右上边区域                 |
| bottom left  | 裁剪模式，不缩放图片，只显示图片的左下边区域                 |
| bottom right | 裁剪模式，不缩放图片，只显示图片的右下边区域                 |

```html
<image class="" src="../../images/private.png" mode="aspectFit|aspectFill|widthFix" lazy-load="false"></image>
```

## swiper(轮播图)---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html )

> 微信内置的轮播图插件`swiper的默认高度是150rpx`
>
> swiper的高度=swiper的宽 * 原图的高 / 原图的宽

| 属性                   | 类型    | 默认值            | 说明                 |
| ---------------------- | ------- | ----------------- | -------------------- |
| indicator-dots         | boolean | false             | 是否显示面板指示点   |
| indicator-color        | color   | rgba(0, 0, 0, .3) | 指示点颜色           |
| indicator-active-color | color   | \#000000          | 当前选中的指示点颜色 |
| autoplay               | boolean | false             | 是否自动切换         |
| interval               | number  | 5000              | 自动切换时间间隔     |
| circular               | boolean | false             | 是否采用衔接滑动     |

```html
<swiper autoplay circular indicator-dots indicator-color="#ccc" indicator-active-color="#6cf">
  <swiper-item>
    <image class="swiper-image " src="../../images/01.jpg " />
  </swiper-item>
  <swiper-item>
    <image class="swiper-image " src="../../images/02.jpg " />
  </swiper-item>
  <swiper-item>
    <image class="swiper-image " src="../../images/03.jpg " />
  </swiper-item>
  <swiper-item>
    <image class="swiper-image " src="../../images/04.jpg " />
  </swiper-item>
</swiper>
```

## navigator(a标签)---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html )

> 导航组件 类似超链接标签

| 属性      | 类型   | 默认值   | 说明                                 |
| --------- | ------ | -------- | ------------------------------------ |
| target    | String | seif     | 在哪个目标上发生跳转，默认当前小程序 |
| url       | String |          | 当前小程序内的跳转链接               |
| open-type | String | navigate | 跳转方式(见下表)                     |

open-type的有效值:

| 值           | 说明                                                   |
| :----------- | :----------------------------------------------------- |
| navigate     | 保留当前页面,跳转到页面的某页 但是不能跳转到tabbar页面 |
| redirect     | 关闭当前页面,跳转到页面的某页 但是不能跳转到tabbar页面 |
| switchTab    | 跳转到tabbar页面 关闭其他菲tabbar页面                  |
| reLaunch     | 关闭所有页面,打开到页面的某个页面                      |
| navigateBack | 关闭当前页面,返回上一页面或多级页面                    |
| exit         | 退出小程序，`target="miniProgram"`时生效               |

```html
<!-- 保留当前页面,跳转到页面的某页 但是不能跳转到tabbar页面 -->
<navigator url="../swiper/index"  open-type="navigate">swiper</navigator>
<!-- 关闭当前页面,跳转到页面的某页 但是不能跳转到tabbar页面 -->
<navigator url="../swiper/index"  open-type="redirect">swiper</navigator>
类型 跳转到tabbar页面 关闭其他菲tabbar页面-->
<navigator url="../index/index"  open-type="switchTab">swiper</navigator>
<!-- 关闭所有页面,打开到页面的某个页面 -->
<navigator url="../swiper/index"  open-type="reLaunch">swiper</navigator>
```

## audio---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/audio.html)
> 音频组件
> mp3音乐链接来自[[刘志进实验室](https://music.liuzhijin.cn/)]

| 属性     | 类型    | 默认值 | 说明                   |
| -------- | ------- | ------ | ---------------------- |
| id       | string  |        | audio 组件的唯一标识符 |
| src      | string  |        | 要播放音频的资源地址   |
| loop     | boolean | false  | 是否循环播放           |
| controls | boolean | false  | 是否显示默认控件       |

```html
<audio id="my" src="{{audioSrc}}" poster="{{audioPoster}}" name="{{audioName}}" author="{{audioAuthor}}" controls></audio>
```

```js
Page({
  data: {
    audioPoster:
      "http://p1.music.126.net/ka7kZIHdviNfYO9lqBaOEQ==/109951163906385177.jpg?param=300x300",
    audioName: "前世今生",
    audioAuthor: "十三里夏天,龚子笑",
    audioSrc:
      "http://m10.music.126.net/20191130104652/2466ef3c0dc4c3a159cf970e0f16c14b/ymusic/075e/025c/520c/049c0bb5455612be6aebef319191d974.mp3"
  },
  onReady: function(e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext("my");
    // 强制播放
    this.audioCtx.play();
  }
});
```




## video---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/video.html )

> 视频组件

| 属性     | 类型    | 默认值 | 说明                                                  |
| -------- | ------- | ------ | ----------------------------------------------------- |
| src      | String  |        | 要播放视频的资源地址                                  |
| duration | number  |        | 指定视频时长  /s                                      |
| controls | boolean | true   | 是否显示默认播放控件（播放/暂停按钮、播放进度、时间） |
| autoplay | boolean | false  | 是否自动播放                                          |
| loop     | boolean | false  | 是否循环播放                                          |
| muted    | boolean | false  | 是否静音播放                                          |

```html
<video src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" loop autoplay controls></video>
```

## rich-text---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html )

> 富文本

```html
<rich-text nodes="{{html}}"></rich-text>
```

```js
Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }]
  },
})
```

## button---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html )

> 按钮





## web-view---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html)

> 承载网页的容器。会自动铺满整个小程序页面，**个人类型的小程序暂不支持使用**

| 属性 | 类型   | 说明                                                         |
| ---- | ------ | ------------------------------------------------------------ |
| src  | String | webview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录[小程序管理后台](https://mp.weixin.qq.com/)配置业务域名。 |

```html
<web-view src="https://zhangsifan.com"></web-view>
```

# 自定义组件

## 新建自定义组件
> 根目录==>components==>新建Component


### 目录结构

```diff
├── components .................................................. 组件目录
|   ├── header
|   |   ├── index.js ............................................ 组件header业务逻辑
|   |   ├── index.json .......................................... 组件header配置
|   |   ├── index.wxml .......................................... 组件header布局结构
|   |   └── index.wxss .......................................... 组件header布局样式
```

### 导入自定义组件

```js
// pages/index/index.json
{
  usingComponents: {
    // 导入自定义组件
    header: '../../components/header/index'
  }
}
```
```html
<!-- pages/index/index.wxml -->
<view class="box">
   <!-- 应用自定义组件 -->
  <header />
</view>
```
## 父组件给子组件传值

> 父组件将数据传给子组件时,通过子组件定义的属性实现

父组件代码
```html
<myheader list="{{list}}"></myheader>
```
```js
Page({
  data: {
    list: [1, 2, 3, 4, 5]
  }
});
```

子组件代码

```html
<view wx:for="{{list}}" wx:key="*this">{{item}}</view>
```

```js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },
});
```



## 子组件给父组件传值

> 子组件将数据传给父组件时通过自定义事件实现
> 父组件定义一个事件
> 子组件来触发父组件自定义的事件


父组件代码
```html
<myheader  bind:myevent="mycallback" list="{{list}}"></myheader>
<view>{{student.name}}</view>
<view>{{student.age}}</view>
```
```js
Page({
  data: {
    student: {}
  },
  // 自定义事件的回调函数
  mycallback(e) {
    console.log(e.detail)
    this.setData({
      student: e.detail
    })
  }
});
```
子组件代码

```html
<view wx:for="{{list}}" wx:key="*this">{{item}}</view>
<view bind:tap="mmm">点我传值</view>
```

```js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg: "我是自定义组件的参数",
    student: {
      name: '小张',
      gender: '男',
      age: 16
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    mmm() {
      this.triggerEvent('myevent', this.data.student)
    }
  }
});
```

# API

> Application Program Interface [官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/)

## 消息提示框---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html)

```js
wx.showToast({
  title: '成功',    // 标题
  icon: 'loading',  // 图标 有效值 success loading none
  duration: 2000    // 提示的延迟时间
})
```

## Loading提示框---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html)
> 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框


```js
wx.showLoading({
  title: "标题"
})
setTimeout(() => {
  wx.hideLoading()
}, 3000)
```
## 确认对话框---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html)

> 显示模态对话框

```js
wx.showModal({
  title: '大标题',
  content: '小标题',
  success(res) {
    if (res.confirm) {
      console.log('确定')
    } else if (res.cancel) {
      console.log('取消')
    }
  }
})
```

## 选择框---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html)

> 显示操作菜单

```js
wx.showActionSheet({
  itemList:["拍照","从相册获取"],
  success(res){
    console.log(res.tapIndex) // 用户点击的按钮序号，从上到下的顺序，从0开始
  }
})
```



## 拍照---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)

> 从本地相册选择图片或使用相机拍照

```js
wx.chooseImage({
  success(res) {
    console.log(res.tempFiles[0].path);
  }
});
```

## 文件上传接口---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html)
```js
wx.uploadFile({
  url: '',
  filePath: null,
  name: '',
  success(res) {
  }
})
```

## 下拉刷新---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onPullDownRefresh)
```js
async onPullDownRefresh() {
  await this.getFloorList();
  wx.stopPullDownRefresh();
}
```

## 监听页面是否快到底部

```js
Page({
  onReachBottom() {
    console.log('快到底部了')
  },
})
```




## 分享小程序---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShareAppMessage-Object-object)
```js
Page({
    onShareAppMessage() {
    return {
      title: "标题:瞧一瞧,看一看啦",
      path: "/pages/index/index?id=888",
      imageUrl: "https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"
    };
  },
})
```

# 模块化

> 小程序遵循的是类似 CommonJS 的规范。

## 规范

```js
// pages/index/test.js
function abc(arg) {
  console.log("我是模块的函数,传入的参数为", arg)
}
module.exports.abc = abc
```

```js
// pages/index/index.js
const mk = require("./test.js");
Page({
  data: {
    msg: "233"
  },
  onLoad: function(options) {
    mk.abc(this.data.msg);
  }
});
```

## npm

> 小程序默认不支持npm的模块,必须经过构建后才可以使用
> 微信开发工具==>工具==>构建npm==>详情==>本地管理==>使用npm


```bash
# 初始化npm
npm init -y
# 安装模块
npm install mime
```
```js
// pages/index/index.js
// 当通过开发工具进行构建后，才可以将 npm 模块导入，这时导入的是 miniprogram_npm 中的模块
const mime = require('mime');
```


## 文件作用域

> 在 JavaScript 文件中声明的变量和函数只在该文件中有效；不同的文件中可以声明相同名字的变量和函数，不会互相影响。
> 通过全局函数 getApp 可以获取全局的应用实例，如果需要全局的数据可以在 App() 中设置如:

```js
//app.js
App({
  // 定义全局数据
  name: "小张",
  // 定义生命周期
  onLaunch() {}
})
```

```js
// pages/index/index.js
const app = getApp();
Page({
  data: {
    name: app.name
  }
});
```





# WXS---[官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/)



![WXS.jpg](https://i.loli.net/2019/12/06/RGjTWof8I1HzQtg.jpg)

由上图我们可以知道 JsCore（Javascript）和 界面（WXML、WXSS）是互相隔离的，它们之间的通信是通过Native（微信）中转实现的。

```js
Page({
  data: {
    msg: '学习小程序!'
  },
  
  foo: function () {
    console.log('wxml无法调用该函数...');
  },
  
  sayHi: function () {
    console.log('你好，小程序!');
  }
})
```

```html
<view class="msg">{{msg}}</view>
<!-- 将sayHi注册为事件回调，当事件触发时会被调用 -->
<button type="primary" bind:tap="sayHi">打招呼</button>
<!-- 直接调用函数，无效！！！ -->
<view class="demo">{{foo()}}</view>

<!-- 由于无法直接调用函数，故下面的写法是不允许的！！！ -->
<button type="primary" bind:tap="sayHi()">打招呼</button>
```

## 基本用法

> 视图层和逻辑层的隔离性给开发带来了不便，通过 WXS 可以解决这个问题，WXS（WeiXin Script）是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。
> [WXS](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/) 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致，**但类似！！！！**WXS 声明变量只能使用 var 、变量名不能为 $、通过 getDate 获取时间对象等，这些都是与 Javascript 不一致的方面。

### 内联式

```html
<view>{{m1.sayHi()}}</view>
<wxs module="m1">
  var name = '小明';
  function  sayHi(){
    console.log('Hi')
  }
  // 将内部封装的功能导出
  module.exports.sayHi = sayHi
</wxs>
```
### 引入式

```js
// wxs/m1.wxs
module.exports.name = "小张";
module.exports.sayHello = function(name) {
  return "你好!" + name + "!";
};
```

```html
<!-- pages/index/index.wxml -->
<view>{{m2.name}}</view>
<view>{{m2.sayHello('小王')}}</view>

<wxs module="m2" src="../../wxs/m2.wxs"></wxs>
```

## 语法

> WXS 一般是结合 WXML 使用的，它通过被用来格式展示数据，类似于 Vue 中过滤器的功能。

```html
<!-- 将 now 时间戳传入 date.format 方法 -->
<view class="now">{{date.format(now)}}</view>
<!-- 模块 date 暴露了 format 方法 -->
<wxs module="date" src="../../wxs/date.wxs"></wxs>
```

```javascript
Page({
  // 获取当前时间（时间戳）
  now: Date.now()
})
```

```javascript
module.exports.format = function (timestamp) {
  // wxs 中通过 getDate 函数获得时间对象
  var d = getDate(timestamp);
  // 返回值会在 wxml 中被渲染展示
  return d.getFullYear() + '年' + (d.getMonth() + 1) + '月' d.getDate() + '日';
}
```

# 其他

## Vant Weapp---[官方网站](https://youzan.github.io/vant-weapp/#/intro)

> Vant Weapp 是移动端 Vue 组件库 [Vant](https://github.com/youzan/vant) 的小程序版本，两者基于相同的视觉规范，提供一致的 API 接口，助力开发者快速搭建小程序应用。 

### 安装

```bash
npm i @vant/weapp -S --production
```

### 构建npm

> 构建和使用方法已在上面讲过,就不在重复讲述了

### 导入组件

```json
// app.json
{
  "usingComponents": {
    "van-button": "@vant/weapp/button"
  }
}
```

```html
<!--index.wxml-->
<van-button type="primary">按钮</van-button>
```

## F2---[官方网站](https://github.com/simaQ/f2-canvas)

> [F2](https://f2.antv.vision/zh) 是一个专注于移动，开箱即用的可视化解决方案，完美支持 H5 环境同时兼容多种环境（Node, 小程序，Weex），完备的图形语法理论，满足你的各种可视化需求，专业的移动设计指引为你带来最佳的移动端图表体验。

### 安装

```bash
npm i @antv/f2-canvas
```
### 构建npm

> 构建和使用方法已在上面讲过,就不在重复讲述了

### 导入组件

```json
// pages/index/index.json
{
  "usingComponents": {
    "ff-canvas": "@antv/f2-canvas"
  }
}
```

```html
<!--pages/index/index.wxml-->
<view class="container">
  <ff-canvas id="column-dom" canvas-id="column" opts="{{ opts }}"></ff-canvas>
</view>
```

```css
/* pages/index/index.wxss */
ff-canvas {
  width: 750rpx;
  height: 640rpx;
}

```

### 绘制图表

```js
import F2 from '@antv/wx-f2';

let chart = null;

function initChart(canvas, width, height, F2) {
  // 图表数据（也可通过请求后端获得）
  const data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
    { year: '1959 年', sales: 38 },
    { year: '1960 年', sales: 38 },
    { year: '1962 年', sales: 38 },
  ];

  // 实例化图表
  chart = new F2.Chart({
    el: canvas,
    width,
    height
  });

  // 配置图表数据
  chart.source(data, {
    sales: {
      tickCount: 5
    }
  });

  chart.interval().position('year*sales');
  chart.render();
  return chart;
}

Page({
  data: {
    // 图表参数
    opts: {
      onInit: initChart
    }
  }
});
```

# 日历

> 一个非常好用的小程序[日历](https://github.com/treadpit/wx_calendar)组件。

下载并解压缩，拷贝 calendar 文件到小程序项目下

## 导入组件

```json
<!--pages/index/index.json-->
{
  "usingComponents": {
    "calendar": "/components/calendar/index"
  }
}
```

 在 wxml 中引入组件

```html
<!--pages/index/index.wxml-->
<calendar />
```

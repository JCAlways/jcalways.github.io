---
title: Xmind笔记汇总
date: 2019-10-13 20:39:11
categories: 
- 技术文档
tags: 笔记
keywords: Xmind笔记
description: HTML到Node.js之前笔记汇总
top_img: 
comments: 
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png
---

# 前端与移动开发

## HTML阶段

### HTML标签

- 超链接标签

	- a 

- 标题标签

	- h

- 段落标签

	- p

- 字体样式

	- font 

- 图片标签

	- img

- 换行标签

	- br

- 横线标签

	- hr

- 媒体标签

	- 音频标签

		- audio

	- 视屏标签

		- video

- 列表标签

	- 有序列表

		- ol

			- li

	- 无序列表

		- ul

			- li

	- 自定义列表

		- dl

			- dt 

				- dd

	- 下拉列表

		- select

			- option

- 表格标签

	- table

		- tr

			- td

- 表单标签

	- form

- 输入框

	- 文本框

		- text

	- 密码输入框

		- password

	- 单选框

		- radio

	- 多选框

		- checkbox

	- 文本域

		- textarea

	- 邮箱

		- email

	- 电话

		- tel

	- 数字

		- number

	- URL

		- url

	- 搜索

		- search

	- 区域

		- range

	- 时间

		- 年月日

			- date

		- 时分

			- time

	- 颜色

		- color

- 按钮

	- 普通按钮

		- button

	- 提交按钮

		- submit

	- 重置按钮

		- reset

	- 图象按钮

		- image

	- 文件按钮

		- file

- 文字最小化

	- small

### 属性

- 长度

	- width  宽度
	- height  高度

- 字体 font

	- ins  下划线
	- em  斜体
	- strong  粗体
	- del  删除线
	- color  颜色
	- size  文本大小

- 图片

	- src  路径
	- title 悬停时的文本提示
	- ait  图片文字描述

- 表格

	- acption  标题
	- border  边框
	- cellspacing  单元格间距
	- cellpadding 文字与边框的距离
	- colspan  合并列
	- rowspan  合并行

- 对齐  align

	- left  左对齐 
	- center  居中
	- right  右对齐 

- 媒体

	- autoplay  自动播放
	- controls  控件

- 共用属性

	- name  名称
	- id   id
	- value  值
	- checked  默认选中(选择框)
	- selected  默认选中(下拉列表)
	- multiple  单选变多选
	- readonly  只读
	- disabled  禁用
	- maxlenght  最大长度
	- placeholder  提示信息

## CSS阶段

### 选择器

- 标签选择器
- 类选择器(最常用)
- ID选择器
- 通配符选择器
- 后代选择器
- 子代选择器
- 标签指定式选择器
- 并集选择器

### 伪类选择器

- :hover   设置鼠标悬停样式
- :link {}  设置连接样式
- :active{}   标签被激活的样式
- :visited {}  标签被访问过的样式
- :focus {}  设置当获取鼠标焦点时候的样式
- :checked    选中的样式

### 结构伪类选择器

- :first-child {}  选中父元素第一个元素
- :last-child {}  选中父元素最后一个元素
- :nth-child(n) {}  选中父元素中第n个子元素

### 属性

- 字体样式

	- font-size  文字大小
	- font-family  字体样式

		- 使用汉字
		- 使用英文
		- 使用unicode

	- font-width  字体粗体

		- 700（bold）【加粗】 | 400（normal） 【正常显示】

	- font-style  文字斜体

		- italic(斜体) | normal (正常显示)

	- line-height  行高
	- text-indent   文本缩进 首行缩进
	- text-align  文本对齐

		- left  左对齐
		- center  居中
		- right  右对齐

	- text-decoration  文本修饰
	- 合写

		- font: 700 italic 50px / 60px '宋体';

- 颜色表示方法

	- 使用单词表示颜色
	- 使用十六进制表示颜色
	- 使用RGB表示颜色
	- 使用RGBA表示颜色(透明度)

- 元素显示方式

	- display: block

		- 块级元素

	- display:inline-block

		- 行内块元素

	- display:inline

		- 行内元素

- 背景

	- 背景图

		- background-image: url('1.jpg');

	- 显示方式

		- background-repeat:

			- repeat 平铺
			- no-repeat 不平铺
			- repeat-x
			- repeat-y

	- 图片位置
	- 背景颜色

		- background-color

	- 图片大小

		- background-size:

			- 值
			- cover   图片盒子一样大
			- contain   比例

	- 背景合写方式

		- background: red url('1.jpg') no-repeat center;

- a标签

	- 去除下划线

		- text-decoration: none;

- 列表样式

	- 去除li的小圆点

		- list-style:none;

- 文本域

	- 禁止文本域拖动

		- resize:none;

- 盒子模型

	- 边框

		- 边框颜色
		- 边框样式

			- none  没有边框
			- solid  实线边框
			- dashed  虚线边框
			- dotted  点线边框

		- 边框宽度
		- 边框合写

			- boder:颜色  样式 宽度

		- 单独给边框设置样式

			- border-top  上边框
			- border-left  左边框
			- border-right  右边框
			- border-buttom  下边框

	- 内边距

		- padding-top  上边距
		- padding-left  左边距
		- padding-right  右边距
		- padding-buttom  下边距
		- 简写

			- padding:10px  上 右 下 左都为10px
			- padding:10px 20px  上下10px  左右20px
			- padding:10px 20px 30px 上10px  左右20px 下30px
			- padding:10px 20px 30px 40px 上10px 右20px 下30px 左40px

	- 外边距

		- margin-top 上边距
		- margin-left  左边距
		- margin-right  右边距
		- margin-buttom  下边距
		- margin:0  auto    使盒子居中
		- 简写

			- margin:10px  上 右 下 左都为10px
			- margin:10px 20px  上下10px  左右20px
			- margin:10px 20px 30px 上10px  左右20px 下30px
			- margin:10px 20px 30px 40px 上10px 右20px 下30px 左40px

	- 边框圆角

		- border-radius

	- 盒子阴影

		- box-shadow:

	- 文字阴影

		- text-shadow:

	- 盒子大小

		- box-sizing

			- border-box;  实际大小
			- content-box;  内容区域大小

- 浮动

	- float:left  左浮动
	- float:right  右浮动
	- 清除浮动

		- clear属性

		  在浮动元素后面添加一个空的div
		  
		  选中当前div设置属性 clear: both | left | right;

		- 使用伪元素清除浮动

		  clearfix::after {
		  content: "";
		  display: block;
		  clear: both;
		  height: 0;
		  line-height: 0;
		  visibility: hidden;
		  }
		  .clearfix {
		      /* 为了兼容IE浏览器 */
		  zoom: 1;
		  }

		- 给父元素设置 overflow:hidden;

- 伪元素

	- ::before {}
	- ::after {}

- 定位

	- 静态定位

		- position: static;

	- 绝对定位

		- position:abso

	- 相对定位

		- position: relative;

	- 固定定位

		- position: fixed;

	- 层级

		- z-index

- 动画

	- animation动画

		- 1.定义动画集

		  @keyframes  自定义动画集名称  {
		  
		                      from {
		                           开始状态的代码
		                      }
		      
		                      to {
		                          结束状态的代码
		                      }
		                }

		- 2.调用动画集

			- animation-name

		- 3.设置动画执行时间

			- animation-duration

		- 4.设置动画执行次数

			- animation-iteration-count: infinite;

		- 5.设置动画的速度    

			-   animation-timing-function

		- 6.设置动画逆播

			-  animation-direction: alternate;

		- 7.设置动画在结束位置停止

			- animation-fill-mode: forwards;

		- 8.设置动画延时

			-  animation-delay

		- 合写

	- 补间动画

		- transition

			- 补间对象
			- 补间时间
			- 动画速度类型

				- ease 速度由快到慢
				- linear 匀速的
				- ease-in 加速效果
				- ease-out 减速
				- ease-in-out 先加速再减速

	- 2D转换

		- 位移

			- transform: translate(x, y);
			- 绝对定位盒子居中

			  通过位移的方式实现绝对定位的盒子居中显示：
			  position: absolute;
			  父元素宽度的一半
			  left: 50%;
			  元素自己宽度的一半
			  transform: translate(-50%);

		- 旋转

			- transform: rotate()
			- 单位是 'deg'
			- 修改旋转位置

				- transform-origin

					-  left | right | top | bottom | center

		- 缩放

			- transform: scale(x, y)
			- 1  大小不变

	- 3D转换

		- 位移

			- transform: translateX()  translateY()  translateZ();

		- 透视

			- perspective: 1000px; 

		- 旋转

			-  transform: rotateX()  rotateY()   rotateZ();

		- 缩放

			-  transform: scaleX() scaleY()  scaleZ();

		- 平面图形转3D

			- transform-style: preserve-3d;

- 私有前缀

	- -webkit-

		- 让webkit内核浏览器支持对应的属性

	- -moz-

		- 让火狐浏览器支持对应的属性

	- -o-

		- 让欧朋浏览器支持对应的属性

	- -ms-

		- 让IE浏览器支持对应的属性

- 渐变

	- 线性渐变  background-image: linear-gradient()

		- 渐变方向

			- 方位

				- to  top
				- to bottom
				- to left
				- to right

			- 角度

				- 0deg

					- 从下向上

				- 90deg

					- 从左向右

		- 颜色

			- 开始颜色

				- +

					- 渐变范围 百分比表示(默认是宽度)

						- 如果设置了background-size 

			- 结束颜色

	- 径向渐变  background-image: radial-gradient()

		- 范围

			- 半径范围

				- at

					- 圆点位置

		- 颜色

			- 开始颜色
			- 结束颜色

- 多背景
- 元素隐藏

	- display

		- display:none  隐藏元素，不占位置
		- display: block  显示元素

	- visibility:hidden  隐藏元素，占位置
	- overflow

		- visible  可见的
		- hidden; 溢出隐藏
		- auto  超出添加滚动条，不超出不添加
		- scroll  设置滚动条

- 文本修饰

	- 文字换行

		- word-break: break-all;

			- 让内容在末尾处换行

		- word-break: keep-all;

			- 遇到空格就换行

	- 文字溢出显示省略号

		- overflow: hidden;

			- 子主题 1

		- text-overflow: ellipsis;

			- 超出容器出现省略号

		- display: -webkit-box;

			- 设置为伸缩盒子

		- -webkit-line-clamp: 2;

			- 设置文字要显示几行

		- -webkit-box-orient: vertical;

			- 设置文字的显示为垂直

- 去除图片底边三像素

	- dispaly:blcok;  设置为行内块
	- vertical-align

		- top
		- middle 
		- bottom
		- baseline

	- overflow:hidden

- 鼠标样式

	- cursor

		- help    帮助指针
		- pointer   手
		- move 移动
		- 帮助链接

### Less

- 用来维护或管理CSS代码的工具
- 使用方法

	- 定义变量

	  @自定义变量名称 ：值；
	  
	  
	  div{
	  font-size:@自定义变量名称；
	  }

	- 嵌套写法

	  选择器 {
	  		选择器{
	  	}
	  }

	- 公共样式设置（函数）

	  .public（@自定义变量名称）{
	  		color：red；
	  }
	  
	  p{
	  	.public(值);
	  }

	- 支持数学运算

- 引用方法

	- link标签引用less文件

		- <link rel="stylesheet/less" href="">

	- 引用less.js

		- <script src="less.js"></script>

	- 需要放到服务器下

## 移动WEB阶段

### 注意

- 页面水平方向不能出现水平条
- 页面不能出现缩放效果

### 分辨率

- 屏幕分辨率
- 物理分辨率

### 像素密度(PPI)

- 每英寸面积中所能容纳像素点个数

### 设备独立像素(DPR)

### 页面适配方法

- 流式布局(百分比布局)+视口设置(meta标签)

	- 宽度

		- max-width:768px;

			- 最大宽度

		- min-width:320px;

			- 最小宽度

- 伸缩布局

	- display:flex

		- 伸缩盒子

			- 两条轴

				- 主轴

					- 子元素都会默认在主轴方向显示

				- 侧轴

					- 垂直于主轴

			- 设置主轴方向

				- flex-direction: 

					- row---在一行上
					- column---独占一行

			- 元素的对其方式

				- 主轴的对其方式

					- justify-content: 

						- flex-start

							- 在主轴的开始位置显示

						- flex-end

							- 在主轴的结束位置

						- center

							- 居中

						- space-between

							- 两端对其 中间自适应

						- space-around

							- 围绕式

				- 侧轴的对其方式

					- align-items: 

						- flex-start

							- 在侧轴的开始位置

						- flex-end

							- 在侧轴的结束位置

						- center

							- 居中

						- stretch

							- 默认值  拉伸

				- 设置换行后的对其方式

					- align-content: 

						- flex-start

							- 在主轴的开始位置显示

						- flex-end

							- 在主轴的结束位置

						- center

							- 居中

						- space-between

							- 两端对其 中间自适应

						- space-around

							- 围绕式

						- stretch

							- 默认值  拉伸

				- 单独设置对其方式

					- align-self: 

			- 设置子元素占父元素的几份

				- flex:
				- 给子元素设置

			- 排序

				- order

					- 值越小  越靠前

			- 换行

				- flex-wrap: 

					- nowrap;    不换行
					- wrap;    换行

- rem+媒体查询

	- rem 相对单位
	- 媒体查询

		- 媒体类型

			- all    所有设备
			- print    打印设备
			- screen    带有屏幕的设备

		- 媒体特性

			- width

				- min-width
				- max-width

			- height

				- min-height
				- max-height

			-  orientation    屏幕方向

				- portrait    竖屏
				- landscape    横屏

			- 语法

			  @media only screen and (width :320px) {
			              设置CSS代码
			          }

-  响应式布局  媒体查询 +  流式布局（伸缩布局）

### 框架

- 本质:就是一个CSS文件
- Bootstrap

	- 下载Bootstrap CSS文件
	- 初始化结构

		- 添加  解决IE浏览器支持媒体查询兼容性问题

		  <meta http-equiv="X-UA-Compatible" content="IE=edge">

		- 添加  解决IE低版本兼容H5标签

		  <!--[if lt IE 9]>
		        <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		        <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
		      <![endif]-->

	- 基本的排版
	- 状态类
	- 栅格系统

		- 引用bootstrap.min.css文件
		- 给父元素设置一个固定的类名

			- .container    带版心
			- 或
			- .container-fluid    通栏显示

		- 实现响应式布局(栅格参数)

			- col-lg-值    适配大设备
			- col-md-值    适配中等设备
			- col-sm-值    适配小设备
			- col-xs-值    适配手机设配
			- 取值范围1-12

	- 响应式工具

		- 控制元素的隐藏和显示

- Amazeui
- Framework7

## JavaScript阶段

### 学习线路

- JS的基本组成

	- js的基本语法ECMA SCRIPT

		- JS书写位置

			- 外联式

				- 通过script标签引入

					- <script src="./js/helloworld.js"></script>

			- 内嵌式

				- 在script标签中写入js代码

			- 行内式

				- 将js代码写入到标签中

					- <p 世事件类型="js代码"></p>

		- 关键字

			- var    声明变量
			- break    跳出
			- this    谁调用,就指向谁
			- instanceof    判断当前对象是不是通过指定的构造函数创建出来的(在继承中使用)

			  对象  instanceof  构造函数

			- typeof    获取变量的数据类型

			  typeof 值

		- 通过JS网页中输出消息

			- 弹窗

			  alert("你好世界")

			- 在网页输出文字或标签

			  document.write('你好');

			- 打印log

			  console.log('nihao');

			- 弹窗输入框

			  prompt("请输入Password");

			- 确定取消框

			  confirm("是否确认");

		- 变量(容器)

			- 定义变量

				- var 自定义变量名称;

			- 给变量赋值

				- 变量名称 = 值;

			- 命名规范

				- 不能以数字开头
				- 不能以特殊符号开头
				- 不推荐使用汉字
				- 不能是关键字
				- 不能是保留字
				- 不能出现空格

		- 数据类形

			- 简单数据类型

				- 字符串类型(string)
				- 数字类型(number)

					- 最大值

						- Number.MAX_VALUE;

					- 最小值

						- Number.MIN_VALUE;

				- 布尔类型(boolean)
				- 未定义(undefined)

			- 复杂数据类型

		- 数据类型转换

			- 强制类型转换

				- 转换为数字

					- Number(变量);
					- parseInt(变量);  只保留整数
					-  parseFloat(变量); 会保留小数

				- 转换为字符串

					- 变量.toString();
					- String(变量);

				- 转换为布尔类型

					-  Boolean();

			- 影式类型转换

		- 判断一个值是不是数字

			- isNaN(值);

				- true  不是数字
				- false  是数字

		- 运算符

			- 算数运算符

				- + - * / % () 优先级()

			- 赋值运算符

				- =  把右侧的结果赋值给左边的变量
				- a +=b

					- a = a + b;

				- a -=b
				- a *=b
				- a /=b

			- 一元运算符

				- ++

					- ++a

						- 加1后在赋值

					- a++

						- 赋值后在加1

				- --

					- --a
					- a--

			- 比较运算符

				- >
				- <
				- >=    大于或等于
				- <=    小于或等于
				- ==    判断值是否相等  不考虑数据类型
				- ===    全等于    考虑数据类型
				- !=    不等于
				- !==    全不等于

			- 逻辑运算符

				- &&    且
				- ||    或
				- !    飞

		- 判断语句

			- if语句

			  if(条件){
			  
			          }else{
			  
			  }

			- 三元表达式

			  条件表达式 ? 逻辑代码1:逻辑代码2

			- 多条件判断

			  if(条件){
			  
			          }else if{
			  
			  }

			- switch语句

			  switch (变量) {
			              case '1':
			              //    代码
			                  break;
			              default:
			                  // 代码
			                  break;
			          }

		- 循环

			- while循环
			- do  while循环
			- for  循环

		- 数组(容器)

			- 保存变量的容器,一次可以保存多个值
			- 定义数组(ary)

				- 通过字面量的方式

				  var 自定义数组名称 = [];

			- 赋值

				- 定义数组赋值(初始化)

				  var ary = [1,2,3,'A','B','C',true,false];

				- 数组名称[索引值]=值;

				  ary[0]=1;

			- 从数组中取值

			  ary[3];

			- 数组的遍历

				- 通过循环的方式找数组中的值
				- 获取数组的长度

				  ary.length

			- 冒泡排序

				- 升序排序

				  var ary = [1, 2, 3, 4, 5];
				  for (var i = 0; i < ary.length - 1; i++) {
				  for (var j = 0; j < ary.length - 1 - i; j++) {
				                  if (ary[j] > ary[j + 1]) {
				                      var temp = ary[j];
				                      ary[j] = ary[j + 1];
				                      ary[j + 1] = temp
				                  }
				              }
				          }
				   alert(ary);

				- 降序排序

				  var ary = [1, 2, 3, 4, 5];
				  for (var i = 0; i < ary.length - 1; i++) {
				  for (var j = 0; j < ary.length - 1 - i; j++) {
				                  if (ary[j] < ary[j + 1]) {
				                      var temp = ary[j];
				                      ary[j] = ary[j + 1];
				                      ary[j + 1] = temp
				                  }
				              }
				          }
				   alert(ary);

		- 函数

			- 将程序中重复出现的代码封装成一个公共的代码
			- 定义函数

				- 通过function定义函数

				  function 自定义函数名称 (){
				              逻辑代码
				  }

				- 通过表达式定义函数

				  var  函数名称= function(){}

				- 命名规范

					- 以动词开始
					- 小驼峰命名法(单词首字母小写,第二个单词首字母大写)

				- 函数后面的'()'不能丢
				- 需要调用函数才会执行

			- 调用函数

				- 函数名称();

			- 函数中的参数

				- 形式参数（形参)

					- 在定义函数时候，函数名后面（）中的变量

				- 实际参数（实参)

					- 在调用函数的时候，函数名后面（）中的值

				- 总结

				  1. 如果函数有参数，那么该函数就叫有参函数
				  2. 如果函数没有参数，那么该函数就叫无参函数
				  3. 函数中，形参的个数是根据需求中设计的。
				   4. 形参的名字叫什么都可以。
				   5. 形参变量的值来自于实参的赋值结果
				   6. 形参和实参是一一对应的（赋值结果，个数）

			- 函数中的返回值

				- 将函数里面的值返回给函数外部
				- 函数内部的值无法在外部使用(作用域的原因)
				- return后面是什么,返回的就是什么
				- return后面的代码不在执行
				- 如果只有return  那么返回的就是undefined

			- 作用域

				- 程序中代码能够起作用的区域
				- 全局作用域(全局变量)

					- 函数外部形成的区域,在全局定义的变量,就是全局变量
					- 可以在任何区域使用

				- 局部作用域(局部变量)

					- 函数内部形成的区域,在局部定义的变量,就是局部变量

			- 作用域链

				- 多个作用域形成的链条状
				- 在作用域链中,如果没有值,就会沿着链条向上查找

			- 匿名函数

				- 函数没有名字

				  function () {
				          }

			- 命名函数

				- 函数有名字

				  function name() {
				          }
				          name();

			- 自调用函数(自执行函数)

				- 函数自己调用自己

				  (function () {
				              alert('1');
				          })();

			- arguments

				- 在函数中用来保存实参信息的容器
				- 实参的个数

					- length(保存的就是实参的个数)

				- 实参中的具体值

					- 值是以数组的方式保存在arguments中

				- 总结

					- 如果函数中的形参个数是确定的,推荐使用形参获取即可
					- 如果函数中的形参个数不确定,那么使用arguments的方式获取

				- 例子

				  alert(getMax(1, 311, 9, 2));
				          function getMax() {
				              var max = arguments[0];
				              for (var i = 1; i < arguments.length; i++) {
				                  if (arguments[i] > max) {
				                      max = arguments[i];
				                  }
				              }
				              return max;
				          }

		- 对象(容器)

			- 在程序中对具体事物的一个抽象描述(特征,功能)  
			- 定义/创建对象

				- 通过字面量的方式

				  var  自定义对象名称 = {}

				- 通过构造函数创建对象

				  var 自定义对象名称 = new Object();

				- 通过工厂的方式创建对象

				  function creatrObject(xm, sjh) {
				              var dx = new Object();
				              dx.username = xm;
				              dx.phone = sjh;
				              return dx;
				          }
				          var zs = creatrObject("张三", 123);
				          var ls = creatrObject("李四", 123);

					- 将构造函数创建对象封装成一个函数

				- 通过自定义构造函数的方式创建对象

				  function People(xm, sjh) {
				              this.username = xm;
				              this.phone = sjh;
				              this.sing = function () {
				                  alert('在唱歌');
				              }
				          }
				          var zs = new People("01",1);
				          var ls = new People("02",2);

					- 先准备一个自定义构造函数
					- 通过自定义构造函数创建对象
					- 注意

						- 命名规范:帕斯卡命名法(大驼峰法)每个单词首字母大写
						- 构造函数以名词开始

			- 赋值

				- 定义对象赋值(初始化)

				  var mc = {
				              username: "张三",
				              height: 180,
				              weight: 75,
				          }

				- 键值对赋值

				  mc["username"] = "张三";
				    mc["sing"] = function(){
				              alert("张三正在唱歌");
				          };

				- 通过"对象."的方式赋值

				  mc.username = "张三";
				  mc.sing = function (){
				              alert("张三正在唱歌");
				          }

				- 注意

					- 对象中的值是以 键/值  对的形式出现

					  例如:
					   username: "张三",
					  height: 180,
					  weight:75,

					- 键    就是自定义变量
					- 在对象的函数叫方法
					- 在对象中 用来描述对象特征的键称之为对象的属性

			- 从对象中取值

				- 键值对的方式取值

				  mc['username']
				  mc["sing"]();

				- "对象."的方式取值

				  mc.username
				  mc.sing()

			- 对象的遍历

			  for (key in 对象) {
			        console.log(obj[key]);
			   }

			- 简单数据类型(栈区)
			- 复杂数据类型(堆区)

				- 在堆区保存结果
				- 在赋值的过程中,将内存地址拷贝赋值给另外一个变量

		- 内置对象

			- 在js中,已经写好的对象
			- 如何学 自学查文档

			- Math

				- Math.PI

					- 圆周率

				-  Math.pow(x,y)

					- x的y次方

				-  Math.abs(x)

					- x的绝对值

				- Math.round(x)

					- x四舍五入

				- Math.max()

					- 获取一组数字的最大值

				- Math.min()

					- 获取一组数字的最小值

				- Math.sin(a)

					- 获取角的正弦值

			- Date
			- Array

				- 取值

					- 数组名.pop();

						- 在数组的结尾处取值

					- 数组名.shift();

						- 在数组的开始处取值

				- 赋值

					- 数组名.push();

						- 在数组的结尾处添加值

					- 数组名.unshift();

						- 在数组的开始出添加值

				- 筛选

					- 数组名.indexOf();

						- 获取数组中对应值得索引位置(从前往后)

					- 数组名.lastIndexOf();

						- 获取数组中对应值的索引位置(从后往前)

				- 翻转

					- 数组名.reverse();

				- 拼接字符串

					- 数组名.join("|");

			- 字符串

				- 分割字符串

					- 字符串.split

				- 截取字符串

					- 字符串.slice(开始位置,结束位置);

						- 不包括结束位置
						- 返回的是字符串
						- 没有设置结束位置截取到最后
						- 如果是负数,从最后做减法

					- 字符串.substring(开始位置,结束位置);
					- 字符串.substr(开始位置,个数);

				- 去空白

					- 字符串.trim();

						- 去掉首尾空格

				- 替换

					- 字符串.replace(x,y)

						- x替换成y

				- 拼接字符串

					- 字符串.concat();

				- 字符串.charAt(index)
				- 字符串.str[index]

		- 代码预解析

			- 在代码开始执行之前,将代码进行一个预先编译的过程
			- 变量的提升

				- 当程序中出现变量,那么就会将变量声明提升到当前作用域的开始位置.不包括变量的赋值

			- 函数的提升

				- 当程序中出现函数,就会将函数的声明提升到当前作用域的开始位置,不包括函数的调用

		- 方法

			- 字符串中转义字符

				- \
				- \n  \r    回车换行

			- 分割字符串

				- 字符串.split();    得到的是数组

			- 获取系统时间

				- 定义一个日期对象

					- var d = new Date();

				- 获取年

					- getFullYear();

				- 获取月

					- getMonth()+1;

				- 获取日

					- getDate();

				- 获取星期

					- getDay();

				- 时

					- getHours();

				- 分

					- getMinutes();

				- 秒

					- getSeconds();

			- 数学

				- Math.floor(值);

					- 地板函数:得到的都是整数(小于当前数并与它最接近的一个整数)

				- Math.ceil(值);

					- 天花板函数:得到的是整数(小于当前数并与它最接近的一个整数)

				- Math.random();

					- 随机数函数:[0,1)

				- Math.floor(Math.random()*(max-min+1)+min)

					- 随机数公式

	- WebAPI

		- DOM操作([文档对象模型]通过js的方式操作页面的标签)document

			- 记住各种API+逻辑思维====>>网页效果
			- 选中标签

				- 通过标签的名字获取标签

				  document.getElementsByName("标签名字");

					- 返回的是一个伪数组
					- 如果要获取每个具体标签对象,通过循环遍历的方式

				- 通过CSS选择器获取标签

				  document.querySelector("CSS选择器");

					- 智能选中瞒住条件的一个标签

				- 通过CSS选择器获取全部标签

				  document.querySelectorAll("css选择器");

					- 返回的是一个伪数组

				- 通过标签ID获取标签

				  document.getElementById("标签ID");

					- 只能获取一个标签

			- 事件

				- 给标签绑定事件

					- 事件源

						- 要绑定事件的标签

					- 事件类型

						- on的方式

							- 鼠标

								- 单击事件onclick
								- 双击ondblclick
								- 获取焦点onfocus
								- 失去焦点onblur
								- onmouseenter鼠标进入
								- onmouseleave鼠标离开
								- onmouseover鼠标悬停
								- onmouseout鼠标悬停离开
								- onmousemove鼠标移动事件
								- onmouseup鼠标弹起事件
								-  onmousedown鼠标按下事件
								- onscroll滚动条事件

							- 键盘

								- oninput输入事件
								- onkeydown键盘按下事件(可以获取所有按键)
								- onkeyup键盘松开事件
								- onkeypress键盘按下事件(不能获取系统按键)

							- onchange    发生改变
							- 通过on的方式给元素注册事件的时候,注册用一个事件,那么最后的事件会覆盖前面的事件

						- 事件监听的方式(多个人使用)

							- 事件源.addEventListener(事件类型,处理程序,参数3);

								- 参数1-->事件类型(不能加on除自带on)
								- 参数2-->处理程序
								- 参数3-->true捕获效果    false冒泡效果

							- 移动端事件

								- 按下事件

								  div.addEventListener("touchstart", function () {
								              console.log("按下事件");
								          });

								- 抬起事件

								  div.addEventListener("touchend", function () {
								              console.log("抬起事件");
								          });

								- 移动事件

								  div.addEventListener("touchmove", function () {
								              console.log("移动事件");
								          });

								- 封装移动端的点击事件

									- 点击事件:判断;手指按下的位置和手指离开的距离(通过事件对象参数)
									- 手指信息  手指位置和个数
									- 移动端的事件对象参数

										- e.touches获取位于移动设备的屏幕上的手指信息(伪数组)

											- clientX --->获取距离视口的位置
											- pageX --->获取距离页面的坐标
											- screenX --->获取距离整个屏幕的坐标

										- e.targetTouches获取元素身上的手指信息
										- e.changedTouches 离开屏幕的信息
										- 封装案例

											- index.html

						- ie低版本浏览器

							- 事件源.attachEvent(参数1,参数2)

								- 参数1-->事件类型(需要加on)
								- 参数2-->处理程序

							- 腻子程序

							  <!--[if lt IE 8]>
							  		script代码
							      <![endif]-->

					- 处理程序

						- 实现功能的一个函数

				- 给元素移除事件

					- on的方式

						- 事件源.事件类型= null;

					- 事件监听的方式

						- 事件源.removeEventListener(参数1,参数2)

							- 参数1-->要被移除的事件类型
							- 参数2-->要被移除的处理程序(命名函数)

					- ie低版本浏览器

						- 事件源.detachEvent(参数1,参数2)

				- 获取标签中的值

					- 对象名.innerHTML

						- 同时可以获取文本或标签,特殊符号

					- 对象名.innerText

						- 获取标签中的纯文本

				- 给标签动态的赋值

					- 对象名.innerHTML = 值;

						- 遇到HTML标签会把标签进行解析

					- 对象名.innerText = 值;

						- 纯文本

				- 阻止a标签跳转

					- 在a标签的事件中设置return false

					  a.onclick = function () { return false }

					- 在a标签的href中设置JavaScript:;

			- 事件流(事件执行过程)

				- 1.事件捕获
				- 2.事件执行
				- 3.事件冒泡

					- 可以阻止

			- 委托(事件对象参数)

				- 自己应该完成的事情委托别人完成
				- 事件对象参数

					- 当用户在执行某个事件的时候,会将执行过程中的信息保存起来
					- e.target--->获取真正执行事件的事件源
					- e.target--->获取正在执行事件的类型
					- e.key--->键的名字
					- e.keyCode--->键的值
					- 鼠标在页面中的位置

						- e.clientX--->从HTML的可视区域左上角开始计算
						- e.clientY--->
						- e.offsetX--->从当前元素的左上边开始计算
						- e.offsetY
						- e.pageX--->从页面的可视区域左上角开始计算
						- e.pageY
						- e.screenX--->从整个屏幕的左上角开始计算
						- e.screenX

			- 改变样式

				- 给标签添加类样式

					- 先定义好一个类样式
					- 对象名.className = "类名";
					- 添加多个类名 使用多个空格隔开
					- 属性多的时候可以使用

				- 行内添加样式

					- style属性实现
					- 对象名.style.css属性名字=值
					- 案例

					  <div>哈哈</div>
					      <script>
					          var div = document.querySelector("div");
					          div.style.color = "red";
					      </script>

					- 就是给标签动态添加了一个style属性
					- 属性比较少的时候可以使用

				- H5的方式操作样式

					- 通过H5的方式给标签添加类样式
					- 添加类名

						- 对象名.classList.add("类名","类名");

					- 删除类名

						- 对象名.classList.remove("类名");

					- 是否包含

						- 对象名.classList.contains("类名");

					- 有删无加

						- 对象名.classList.toggle("类名");

					- 案例

					  <div></div>
					      <input type="button" value="添加">
					      <script>
					          var div = document.querySelector("div");
					          var btn = document.querySelector("input");
					      
					          btn.onclick = function () {
					              div.classList.add("box");
					          }
					          
					      </script>

					- 属性多可以使用
					- 如果设置多个类名,使用,号隔开

			- 操作表单控件

				- 值

					- 获取表单控件的值

						- 对象名.value

					- 给表单赋值

						- 对象名.value = "值"

				- 属性

					- 选中(复选框)

						- 对象名.checked = 

							- true 选中
							- false  未选中

					- 选中(下拉列表)

						- 对象名.selected =

							- true 选中
							- false 未选中

					- 禁用(按钮)

						- 对象名.disabled =

							- true 禁用
							- false 启用

					- 元素的隐藏和显示

						- 对象名.style.display

							- none
							- block

			- 操作属性

				- 可以获取内置属性,也可以获取自定义的属性
				- 获取值

					- 对象名.getAttribute("属性名称")

				- 设置值

					- 对象名.setAttribute("属性名称",值)

				- 移除

					- 对象名.removeAttribute("属性名称")

			- 自定义属性

				- 规范   'data-属性名称'
				- 通过H5的方式获取只能获取到自定义属性
				- 返回的是一个对象
				- 获取值

					- 对象名.dataset.属性名称

				- 设置值

					- 对象名.dataset.属性名称=值

			- 文档树

				- 节点

					- 在文档树中,每个标签的属性文本 回车符 空格符等等
					- 获取父元素是否有子节点

						- 对象名.hasChildNodes

							- true有
							- false无

					- 获取第一个子节点

						- 对象名.firstChild

					- 获取最后一个节点

						- 对象名.lastChild

					- 通过子元素获取父节点

						- 对象名.parentNode
						- 返回的是标签对象

					- 获取当前节点上一个兄弟节点

						- 对象名.nextElementSibling

					- 获取当前节点上一个兄弟节点

						- 对象名.previousElementSibling

					- 获取节点的类型

						- 对象名.nodeType

							- 返回1  当前节点就是元素/标签
							- 返回3  当前节点不是元素

					- 获取节点的名称

						- 对象名.nodeName

							- 返回#text  当前节点是文本

					- 获取文本节点值

						- 对象名.nodeValue

							- 获取文本节点的值

				- 元素

					- 在文档树中,每个具体点的标签就是元素
					- 获取父元素中的子元素

						- 对象名.children
						- 返回的是一个伪数组对象
						- 根据.length的值是否等于0判断

					- 获取第一个子元素

						- 对象名.firstElementChild
						- 返回的是标签对象

					- 获取最后一个元素

						- 对象名.lastElementChild
						- 返回的是标签对象

					- 获取当前标签下一个兄弟元素

						- 对象名.nextElementSibling
						- 返回的是标签对象

					- 获取当前标签上一个兄弟元素

						- 对象名.previousElementSibling
						- 返回的是标签对象

			- 动态创建元素

				- 在网页中通过js的方式在页面里添加标签
				- document.write();

					- 页面中需要创建少量的标签

				- 对象名.innerHTML="值"

					- 页面中需要创建少量的标签

				- document.createElement("标签的名字")

					- 创建一个元素

						-  document.createElement("标签的名字")

					- 定义一个变量接收
					- 将创建好的标签添加到对应的文档树中

						- 对象名.appendChild(节点对象)

							- 在元素的末尾处添加

						- 对象名.content.insertBefore('新节点','目标节点');

							- 在谁之前插入

						- 对象名.cloneNode(Boolean);

							- 克隆元素
							- true-->将标签中所有元素都克隆
							- false-->只复制当前标签,无法复制里面的内容

						- 对象名.replaceChild("新节点","旧节点");

							- 替换元素

					- 返回的就是创建好的节点对象

		- BOM操作([浏览器对象模型]通过js的方式操作浏览器)js的顶级对象是window

			- 学习window下的方法和属性
			- 页面加载事件

				- onload --->文档树渲染完后执行

			- 操作网页地址

				- location.href="路径" --->通过程序的方法实现页面跳转
				- location.href --->获取页面路径

				- window.open(页面路径) --->在新窗口打开页面
				- location.assign(页面路径) --->委派  实现页面跳转
				- location.replace(路径) --->替换  跳转页面
				- location.reload(boolean) --->重新加载页面

					- true 需要去服务器中查询数据 然后将服务器中新数据显示出来
					- false  本地缓存中重新查询数据,将数据显示出来

				- location.host --->获取域名/ip
				- location.hostname --->获取域名名称
				- location.pathname --->获取路径的名字
				- location.port --->端口
				- location.protocol --->获取协议类型
				- location.search --->查询条件值
				- window.URL.createObjectURL(url)    设置临时图片资源

			- 定时器

				- setTimeout延时多少时间后执行

					- setTimeout(处理程序,时间) --->开启定时器
					- clearTimeout(定时器编号) --->取消定时器
					- 每执行一次,就换产生一个定时器

				- setInterval每隔一段时间执行一次

					- setInterval(处理程序,时间) --->开启定时器
					- clearInterval(定时器编号)
					- 每执行一次,就换产生一个定时器

			- 获取元素位置和大小

				- offset系列

					- 对象名.offsetLeft --->元素在网页中的水平距离
					- 对象名.offsetTop --->元素在网页中的垂直距离
					- 对象名.offsetWidth --->元素在网页中的宽度(实际大小)
					- 对象名.offsetHeight --->元素在网页中的高度(实际大小)

				- client系列

					- 对象名.clientLeft --->获取元素的左边框
					- 对象名.clientTop --->获取元素的上边框
					- 对象名.clientWidth --->获取元素的宽度(除去边框)
					- 对象名.clientHeight --->获取元素的高度(除去边框)

				- scroll系列

					- 对象名.scroolLeft --->水平方向滚动出去的距离
					- 对象名.scrollTop --->垂直方向滚动出去的距离
					- 对象名.scrollWidth --->获取元素的宽度(包括超出去的部分)
					- 对象名.scrollHeight --->获取元素的高度(包括超出去的部分)

			- 拖拽案例

			  box.onmousedown = function (e) {
			              var mouse_x = e.clientX - this.offsetLeft;
			              var mouse_y = e.clientY - this.offsetTop;
			              document.onmousemove = function (e) {
			                  var m_x = e.clientX;
			                  var m_y = e.clientY;
			                  var x = m_x - mouse_x;
			                  var y = m_y - mouse_y;
			                  box.style.left = x + "px";
			                  box.style.top = y + "px";
			              }
			          }
			          box.onmouseup = function () {
			              document.onmousemove = null;
			          }

			- 轮播图插件

				- swiper插件

		- H5中的API

			- 文件读取

				- 准备一个上传文件的按钮
				- 设置change事件
				- 获取用户上传的资源对象 files(伪数组)
				- 创建读取器

				  var reader = new FileReader();

					- 读取器对象.onload --->读取器将文件读取完成后悔触发该事件
					- 读取器对象.result --->获取读取最后的结果
					- readAsText()  --->将文件中的文本读取出来
					- readAsDataURL() --->将文件的路径读取出来

			- 本地存储

				- sessionStorage

					- sessionStorage.setItem(键, 值); --->保存
					- sessionStorage.getItem(键)；--->获取
					- sessionStorage.removeItem(键);  --->删除
					- sessionStorage.clear(); --->清空

				- localStorage

					- localStorage.setItem(键, 值); --->保存
					- localStorage.getItem(键)；--->获取
					- localStorage.removeItem(键);  --->删除
					- localStorage.clear(); --->清空

				- 总结

					- 1. sessionStorage 和 localStorage 都是以键值对的形式保存的值
					- 2. sessionStorage 保存的是临时数据【网页关闭，数据清空】
					- 3. localStorage 保存的数据持久化的数据
					- 4. sessionStorage 保存的值只能在当前页面中使用
					- 5. localStorage  保存的值可以在其他页面中使用
					- 6. sessionStorage 保存的数据大约在 5M
					- 7. localStorage 保存的数据大约在20M 

			- 操作多媒体

				- 方法

					- play()---实现播放功能
					- pause()---实现暂停功能

				- 属性

					-  paused---播放状态

						- true（暂停状态）
						- false （播放状态）

					-  duration---获取多媒体的总时长 （秒）
					-  currentTime---获取当前播放时间 （秒）

				- 事件

					- timeupdate--- 检测当时间发生更改后事件

				- 注

				  计算当前进度条的宽度 = 整个进度条的宽度 *  当前播放时长 / 总时长
				  
				  当前进度条的宽度 ： 整个进度条的宽度 = 当前播放时长 ： 总时长
				  跳播：设置当前播放时间
				  
				  当前播放时长 =   当前进度条的宽度[当前鼠标点击的位置] *  总时长 / 整个进度条的宽度;

- JQuery(对原生js的封装)

	- 快速,简洁的JavaScript库(js文件)
	- 优点

		- 轻量级
		- 链式编程 

			- a.b.c.d

		-  隐式迭代

			- 遍历内部DOM元素的过程

	- 如何使用

		- 下载

		- 创建js文件
		- 使用

	- jQuery入门

		- 入口函数

			- 第一种写法

			  $(function(){
			  
			     // 开始写 jQuery 代码...
			  
			   });

			- 第二种写法

			  $(document).ready(function(){
			  
			     // 开始写 jQuery 代码...
			  
			   });

		- $    顶级对象
		- 相互转换

			- DOM==>jQuery $(DOM)

			  var div = document.querySelector("div");
			  $(div).css("background", "red");

			- jQuery==>DOM  $(元素)[下标]

			  $("div")[0].style.background = "red";

	- jQuery常用API

		- jQuery选择器

			- $('元素')    元素选择器
			- $('#id')    #id 选择器
			- $('.class')    .class 选择器
			- $('*')    通配符选择器
			- $('元素','元素')    并集选择器
			- $('元素.class')    交集选择器
			- $('元素>元素')    子代选择器
			- $('元素 元素')    后代选择器

		- jQuery筛选选择器

			- $('元素:first')    第一个元素
			- $('元素:last')    最后一个元素
			- $('元素:eq(index)')    第几个元素
			- $('元素:odd')    基数
			- $('元素':even)    偶数
			- $("元素:checked")    选中的表单元素

		- jQuery筛选方法

			- .parent()    父集
			- .parent("名称")    找上级
			- .children('元素')    子集(只找儿子)
			- .find('元素')    后代
			- .siblings('元素')    兄弟
			- .nextAll()    后面的
			- .prevAll()    前面的
			- .hasClass('类名')    判断是否包含类名
			- .eq(index)    索引方法

		- jQuery的排他思想

			- 想要多选一的效果，排他思想：当前元素设置样式，其余的兄弟元素清除样式。
			- 案例

			  $(this).css(“color”,”red”);
			  
			  $(this).siblings(). css(“color”,””);

		- jQuery事件

			- 绑定事件

				- click()    点击事件

				  $("p").click(function(){ 
				    $(this).hide(); 
				  });

				- dblclick()    双击事件
				- change()    发生改变
				- scroll()    滚动事件
				- focus()    获取焦点
				- 事件切换

					- hover([鼠标移入函数,]鼠标移出函数)

				- 事件源.on(事件类型,[委派],函数)

					- 多事件多处理程序

					  $(“div”).on({
					    mouseover: function(){}, 
					    mouseout: function(){},
					    click: function(){}  
					  });

					- 事件委派/委托

					  $('ul').on('click', 'li', function() {
					  ​    alert('hello world!');
					  });

					- 动态创建的可以绑定事件

					  $(“div").on("click",”p”, function(){
					  ​     alert("给动态生成的元素绑定事件")
					   });

			- 解绑事件

				- 事件源.off()    解除全部事件
				- 事件源.off( "click")    解除那个事件
				- 事件源.off("click", "li");    解除事件委派

			- 自动触发事件

				- 事件源.trigger(事件类型)
				- 事件源.triggerHandler(事件类型)

		- jQuery事件对象参数

			- e.stopPropagation()    阻止冒泡
			- e.preventDefault()    阻止默认行为

		- 操作CSS方法

			- $(元素).css(''样式'')    返回样式值
			- $(元素).css(''样式'', ''值'')    设置样式
			- $(元素).css({ "样式":"值","样式":"值"})    对象方式设置样式

		- 设置类样式方法

			- $(“元素”).addClass(''类名'')    添加类
			- $(“元素”).removeClass(''类名'')    删除类
			- $(“元素”).toggleClass(''类名'')    切换类

		- JQuery效果 动画

			- 动画队列及其停止排队方法

				- .stop()    停止排队

			- 显示隐藏效果

				- show([速度,[切换效果],[回调函数]])    显示隐藏效果
				- hide([速度,[切换效果],[回调函数]])    隐藏效果
				- toggle([速度,[切换效果],[回调函数]])    事件切换

			- 滑动效果

				- slideDown([速度,[切换效果],[回调函数]])    下滑效果
				- slideUp([速度,[切换效果],[回调函数]])    上滑效果
				- slideToggle([速度,[切换效果],[回调函数]])    事件切换

			- 淡入淡出效果

				- fadeIn([速度,[切换效果],[回调函数]])    淡入
				- fadeOut([速度,[切换效果],[回调函数]])    淡出
				- fadeToggle([速度,[切换效果],[回调函数]])    切换
				- fadeTo([[速度],透明度,[切换效果],[回调函数]])    到大某个位置

			- 自定义动画

				- animate(样式属性,[速度],[切换效果],[回调函数])

		- jQuery属性操作

			- 固有属性

				- prop("属性名")    获取属性值
				- prop("属性名","属性值")    设置属性值

			- 自定义属性

				- attr("属性名")    获取属性值
				- attr(''属性'', ''属性值'')    设置属性值

		- 数据缓存

			- data("属性名")    获取
			- data("属性名","值")    设置

		- jQuery内容文本值

			- html()    获取元素的内容
			- html("内容")    设置元素的内容
			- text()    获取元素的文本内容
			- text("内容")    设置元素的文本内容
			- val()    获取表单的值
			- val("内容")    设置表单的值
			- toFixed(数量)    保留几位小数

		- jQuery元素操作

			- 遍历元素

				- $('元素').each()    用来遍历元素

				  var ary = ["red", "blue", "yellow"]
				          $("div").each(function (i, eml) {
				              $(eml).css("background", ary[i]);
				          })

				- $.each(对象，function(index, element){ xxx;}）用来遍历数据

				  var ary = ["red", "blue", "yellow"]
				  $.each($("div"),function(i,eml){
				      $(eml).css("background", ary[i]);
				  })

			- 创建元素

				- $(''<li></li>'');   

			- 内部添加(父子关系)

				- 元素.append(''内容'')    添加到末尾
				- 元素.prepend(''内容'')    添加到开头

			- 外部添加(兄弟关系)

				- 元素.after(''内容'')    后面添加
				- 元素.before(''内容'')    添加到前面

			- 删除元素

				- 元素.remove()    删除元素
				- 元素.empty()    删除标签内容
				- 元素.html('''')    清空元素内容

		- jQuery尺寸/位置

			- 内容

				- width()    获取宽
				- width(值)    设置宽
				- height()    获取高
				- height(值)    设置高

			- 内+内容

				- innerWidth()    获取宽
				- innerWidth(值)    设置宽
				- innerHeight()    获取高
				- innerHeight(值)    设置高

			- 内、边、内容

				- outerWidth()    获取宽
				- outerWidth(值)    设置宽
				- outerHeight()    获取高
				- outerHeight(值)    设置高

			- 外、内、边、内容

				- outerWidth(true)    获取宽
				- outerHeight(true)    获取高

		- jQuery位置

			- 文档

				- offset().top    获取
				- offset().left    获取
				- offset({ top: 10, left: 30 });    设置

			- 带有定位的父级

				- position().top
				- position().left

			- 卷起

				- scrollTop()
				- scrollLeft()

	- JSON

		- var arr = JSON.parse(str);    字符串转数组
		- var str = JSON.stringify(arr);    数组转字符串

- JavaScript高级

	- ES5

		- 创造对象

			- 对象字面量
			- 构造函数
			- 自定义构造函数

		- 静态成员

			- 在构造函数本上添加的成员称为静态成员，只能由构造函数本身来访问

		- 实例成员

			- 在构造函数内部创建的对象成员称为实例成员，只能由实例化的对象来访问

		- 原型对象

			- 是为了共享方法，从而达到节省内存
			- 函数名.prototype.方法名

			  function Star (uname, age) {
			  
			  ​		this.uname = uname;
			  ​		this.age = age;
			  ​		// this.sing = function () {
			  ​		// 	console.log(this.name + '在唱歌');
			  ​		// }
			  
			  ​	}
			  ​	Star.prototype.sing = function () {
			  ​		console.log(this.uname + '在唱歌');
			  ​	}
			  
			  ​	var zxc = new Star('周星驰', 22);
			  ​	var ldh = new Star('刘德华', 22);
			  ​	// console.log( Star.prototype );
			  ​	ldh.sing();
			  ​	zxc.sing();

		- 对象原形

			- 指向prototype
			- __proto__

		- 构造函数

			- constructor 

				- 记录是哪个构造函数创建出来的

		- 原形链

			- 提供一个成员的查找机制，或者查找规则
			- 原型链.jpg

		- 继承

			- fn.call(this,参数1,参数2)    属性继承
			- 方法继承

		- 方法

			- 数组方法

				- arr.forEach(fn(value,index,arr){}) 遍历数组

				  var arr = ['red','blue','yellow','orange'];
				  arr.forEach(function (elm,i,arrAbc) {
				  	console.log(elm,i,arrAbc);
				  });

				- arr.filter(fn(value, index,arr))数组遍历筛选

				  var arr = [100,66,99,123,333,33,44,66];
				  var reArr = arr.filter(function (elm, a, n) {

				  	// console.log(elm,a, n);
				  	return elm % 2 == 0;
				  });
				  console.log(reArr);

				- arr.some(fn(value,index, arr))数组遍历查找--找到停止

				  var arr = [100,200,300,400];
				  var re = arr.some(function (elm,i,arr) {
				  		// console.log(elm,i,arr);
				  		console.log(i);
				  		return elm >= 200;
				  	});
				  console.log(re);

			- 字符串方法

				- str.trim()    删除两边空白

		- 函数进价

			- 函数定义和调用

		- 改变函数内部this指向

			- fn.call(obj,arg1,arg2...)    会调用,会改变this
			- fn.apply(this,[传递的值])

			  var arr = [1, 2, 3, 4, 5];
			  console.log(Math.max.apply(null, arr))

			- fn.bind(obj,arg1,arg2...)    不会调用函数,可以改变this指向

			  var btn =
			  document.querySelector("input")
			  btn.onclick = function () {
			          this.disabled = true;
			          setTimeout(function () {
			          this.disabled = false;
			              }.bind(this), 3000);
			   }

	- ES6

		- 类

			- 抽象了对象的公共部分 泛指某一大类
			- 创建类

				- class 类名 {}

				  class Star {
				  };
				  var ldh = new Star();

			- 构造函数

				- constructor() {}

				  class Star {
				  	constructor (uname,age){
				  		this.uname = uname;
				  		this.age = age;
				  	}
				  }

				- 接收参数,添加属性,返回实例对象
				- this    当前实例对象

			- 添加方法

				- class 类名 { constructor(){}   方法名(){} }

				  class Star {
				  
				  	constructor () {}
				  	
				  	sing () {}
				  	
				  	tiao () {}
				  
				  }

				- 类中定义属性，调用方法都得用this
				- this    谁调用就指向谁
				- 不能添加 function
				- 不能添加  , 号

			- 继承

				- extends

				  class Father {}

				  class Son extends Father{}

				- 子类继承父类
				- super关键字

					- super关键字用于访问和调用对象父类上的函数。可以调用父类的构造函数，也可以调用父类的普通函数
					- super(参数)    调用父类构造函数

					  class F { constructor(name, age){} }
					  
					  class S extends F {
					  	constructor (name, age) { 				         
					  	super(name,age); 
					  	}
					  }

					- super.方法();    调用父类普通函数

					  class F {
					  constructor(name, age){} say () {} 
					  }

					  class S extends F {
					  	 constructor (name, age) { 		super(name,age); 
					  }
					   say () { super.say() } 
					  }

			- 注意

				- 没有变量提升，所以必须先定义类，才能通过类实例化对象.
				- 类里面的共有属性和方法一定要加this使用.

		- 对象

			- 特指某一个,通过类实例化一个具体的对象
			- 属性:对象.属性
			- 方法:对象.方法()

		- 添加元素

			- 元素.insertAdjacentHTML(位置，要创建的元素)

				- beforebegin    元素前面
				- afterend    元素后面
				- afterbegin    元素内部的最前面
				- beforeend    元素内部的最后面

	- 运行模式

		- 正常模式
		- 严格模式----use strict

			- 提高安全性,
			- 开启严格模式

				- 为脚本开启

				  <script>"use strict"</script>

				- 为函数开启

				  function fn() {
				              "use strict"
				              var n = 2;
				              console.log(n)
				          }
				          fn();

			- 变量规定

				- 声明必须加var
				- 不能删除已定义的变量

			- this指向

				- 普通函数this是undefined

			- 函数变化

				- 参数不能重名
				- 函数必须声明在顶层

			- 更多严格模式要求参考

	- 高阶函数

		- 对其他函数进行操作的函数，它接收函数作为参数或将函数作为返回值输出。

	- 闭包

		- 一个作用域可以访问另外一个函数内部的局部变量
		- 变量作用域

			- 函数内部可以使用全局变量
			- 函数外部不可以使用局部变量
			- 当函数执行完毕，本作用域内的局部变量会销毁

	- 递归

		- 函数内部自己调用自己
		- 退出条件 return

	- 拷贝

		- 浅拷贝

			- 只拷贝最外面一层
			- for in方法拷贝

			  var obj = {
			  			name : '张三丰',
			  			age : 22
			  		};
			  
			  		var newObj = {};
			  		for (key in obj) {
			  			newObj[key] = obj[key];
			  		}
			  	
			  		console.log(newObj);

			- Object.assign(新, 旧)

			  Object.assign(target, sources);
			  
			  console.log(newObj);

		- 深拷贝

			- 使用递归

			  var obj = {
			  			name : '1张三丰',
			  			age : 22,
			  			messige : {
			  				sex : '男',
			  				score : 16
			  			},
			  			color : ['red','purple','qing']
			  
			  		}
			  	
			  		var newObj = {};
			  
			  
			  		function kaobei (newObj,obj) {
			  	
			  			for (key in obj) {
			  	
			  				if (obj[key] instanceof Array) {
			  					newObj[key] = [];
			  					kaobei(newObj[key],obj[key]);
			  				} else if (obj[key] instanceof Object) {
			  					newObj[key] = {};
			  					kaobei(newObj[key],obj[key])
			  				} else {
			  					newObj[key] = obj[key];
			  				}
			  	
			  			}
			  	
			  		}
			  		obj.messige.sex = 99;
			  		kaobei(newObj,obj);
			  		console.log(newObj);

	- 正则表达式

		- 使用

			- 实例化对象

			  var regexp = new RegExp(/123/);
			  console.log(regexp);

			- 字面量创建

			  var rg = /abc/;

		- 测试正则表达式 

			- 表达式名.test(str)

		- 表达式

			- 简单字符
			- 特殊字符

		- 边界符

			- ^    以谁开始

			  var reg = /^abc/;
			  console.log(reg.test('abca'));

			- $    以谁结束

			  var q = /abc$/;
			  console.log(q.test('aabc'));

			- /^ $/    精准匹配

			  var q = /^abc$/;
			  console.log(q.test('abc'));

		- 字符类

			- [] 方括号

				- /[abc]/    包含其中一个
				- /[a|b|c]/    包含其中一个
				- /^[a-zA-Z0-9]$/    包含
				- /^[^a-zA-Z0-9]$/    取反

			- 量词符

				- *    重复0次或更多次
				- +    重复1次或更多次
				- ?    重复0次或1次
				- {n}    重复n次
				- {n,}    重复n次或更多次
				- {n,m}    重复n到m次

			- 预定义类

				- \d    匹配0-9之间任意数字
				- \D    匹配0-9以外任意字符
				- \w    匹配任意的字母 数字 下划线
				- \W    除所有字母 数字 下划线以外的字符
				- \s    匹配空格
				- \S    匹配非空格的字符

- AJAX编程

	- 个人整理

		- 什么是AJAX?

			- async javascript and xml

				- 异步的JavaScript和XML

			- 什么是异步?

				- 不阻塞

			- XML    数据格式

				- 子主题 1

			- 优点

				- 局部更新，用户体验好
				- 分离，有利于前后端分工合作

			- 什么时候使用AJAX?

				- 在不更新页面的情况下,浏览器从web服务器新数据以更新界面

		- 请求与响应

			- request    请求：浏览器向web服务器请求地址（文件，接口）
			- response    响应：web服务器处理请求，返回结果（结果在响应体中）

		- 服务器与客户端

			- 服务器==高配置+特殊软件
			- 客户端==低配置硬件 + 一般软件

		- 本地虚拟服务器--小黑窗的使用

			- 自己访问网页
			- 让其它同学访问网页
			- 访问内置接口

		- 使用jQuery调用

			- $.ajax({})

				- async    是否需要异步
				- cache    缓存
				- url    接口地址
				- type    请求方式
				- success    成功执行函数
				- error    错误执行函数

		- 使用原生调用

			- get

				- 创建对象

					- var xhr = new XMLHttpRequest();

				- 设置请求

					- xhr.open("get", "url"+?参数=值&);

				- 设置回调函数

					- xhr.onload=function () { console.log(xhr.responseText); };
					- xhr.onreadystatechange = function(){}兼容ie

				- 发送

					-  xhr.send();

			- post

				- 创建对象

					- var xhr = new XMLHttpRequest();

				- 设置请求

					- xhr.open("post", "url");

				- 设置请求头

					- xhr.setRequestHeader()

				- 设置回调函数

					- xhr.onload=function () { console.log(xhr.responseText); };
					- xhr.onreadystatechange = function(){}兼容ie

				- 发送

					-  xhr.send(参数);

		- 服务器返回的数据

			- JSON字符串

				- var arr = JSON.parse(str);    字符串转数组
				- var str = JSON.stringify(arr);    数组转字符串

			- XML字符串

		- 同步与异步

			- xml.open(类型,地址,是否异步)
			- 建议使用异步

		- 接口

			- 后端写好的函数，前端直接调用
			- 小黑窗服务器已经内置几个接口
			- 是一段代码

		- http协议

			- 浏览器与web服务器的约定
			- 内容

				- 请求报文

					- 行

						- 请求方式   路径    协议及版本

					- 头

						- 浏览器在向服务器发送请求的时候自动携带的信息

					- 体

						- post的传入的参数

				- 响应报文

					- 行

						- Status    状态码

							- 200    成功
							- 302    重定向
							- 304    读取缓存
							- 404    资源不存在
							- 500    服务器内部错误

					- 头

						- 服务器返回响应的时候携带了附加信息
						- 由键值对组成
						- 每个请求的响应头可能都不一样：它完全取决于服务器；

					- 体

						- 响应内容，最重要的。

	- 讲师整理

		- $.ajax()

			- $.ajax({url, type, data,success:function(res){}     })

		- 接口

			- 后端写好的函数，前端直接调用
			- 小黑窗服务器已经内置几个接口
			- 是一段代码

		- http协议

			- 浏览器与web服务器的约定
			- 内容

				- 请求报文

					- 行

						- 路径

					- 头
					- 体

				- 响应报文

					- 行

						- 状态码

							- 记得5个

					- 头
					- 体

						- 响应内容，最重要的。

		- 服务器与客户端

			- 服务器：高配置+特殊软件

		- 本地虚拟服务器--小黑窗的使用

			- 自己访问网页
			- 让其它同学访问网页
			- 访问内置接口

		- 请求与响应

			- 请求：浏览器向web服务器请求地址（文件，接口）
			- 响应：web服务器处理请求，返回结果（结果在响应体中）

		- ajax

			- 场景

				- 局部更新

			- 是什么

				- async javascript and xml
				- 异步
				- XML

			- 优点

				- 局部更新，用户体验好
				- 分离，有利于前后端分工合作

		- 留言板案例
		- 原生ajax

			- get-带参数

				- var xhr = new XMLHttpRequest()
				- xhr.open('get','url?参数1=值1&参数2=值2&参数3=值3'）
				- xhr.onload=function(){ xhr.responseText ;// 响应体}
				- xhr.send()

			- post-带参数

				- var xhr = new XMLHttpRequest()
				- xhr.open('post','url'）
				- xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
				- xhr.onload=function(){ xhr.responseText ;// 响应体}
				- xhr.send(参数1=值1&参数2=值2&参数3=值3)

			- 服务器返回的数据

				- JSON字符串

					- 把JSON字符串转对象

						- JSON.parse()

					- 把js数据转成JSON字符串

						- JSON.stringify()

				- XML字符串

			- ajax同步与异步

				- xhr.open(类型,地址,是否异步)
				- 建议使用异步。

			- ie 的问题

				- 兼容性 onload 用 onreadystatechange
				- ie get请求有缓存

					- 解决：url?_=时间戳

			- 解决ajax的异常

				- 500,404错误
				- xhr.status 表示http响应状态码。

			- FormData

				- 1.上传文件 

					- 进度条
					- xhr.upload.onprogress

				- 2.快速获取表单元素的值

					- var fd = new FormData(表单的dom元素)；xhr.send(fd)
					- 不需要额外设置请求头

			- 封装

				- $.ajax({url,data,type,success})

		- postman

			- 测试接口

		- ajax库

			- $.ajax()其它参数

				- $.get
				- $.post
				- $.getJSON

			- axios

				- 会用get 
				- 会用post

		- [案例]会员管理系统

- 服务端程序

### js效果

- 制作游戏(手机端)
- 通过JS实现地理定位
- 实现服务端应用(bodejs)

## Git阶段

### 个人整理

- 基本指令

	- mkdir  目录名    新建目录
	- cd 目录名    进入目录
	- cd ..    返回上级
	- ls    查看目录
	- la -a    查看隐藏的目录
	- touch  文件名    新建文件
	- rm  文件名    删除文件
	- clear    清屏
	- cat  文件名    查看文件内容
	- less  文件名  查看文件内容 按q退出

- 常见命令

	- git init    初始化
	- git add .   添加文件
	- git commit -m ""    添加备注
	- git log    查看日志
	- git status    查看状态

		- untracked    未跟踪
		- staged    已暂存
		- committed    已提交
		- modified    已修改

	- git checkout .    放弃工作区的修改

### 讲师整理

- 作用

	- 对代码进行版本管理

- 工作流程

	- 初始git

		- 一个空目录
		- git init

	- 向这个目录添加文件 
	- git add
	- git commit
	- 修改文件 
	- git commit -a -m ""

- 三个区域

	- 工作区
	- 暂存区

		- add

	- 仓库

		- commit

- 文件四种状态

	- 未跟踪
	- 已跟踪

		- 已修改
		- 已提交
		- 已暂存

- 还原代码

	- 从工作区还原

		- git checkout -- 文件名
		- git checkout .

	- 从暂存区还原

		- 某个文件 

			- git reset HEAD 文件名
			- git checkout -- 文件名

		- 全部

			- git reset HEAD
			- git checkout .

	- 从仓库中还原

		- 找出commitID

			- git log
			- git log --oneline

		- 整体还原

			- git reset --hard commitID

		- 还原某个文件

			- git checkout commitID 文件名

- 分支

	- 为什么要建分支

		- 为了不影响原来的代码。

	- 命令

		- 创建

			- git branch 分支名

		- 切换

			- git checkout 分支名

		- 创建并切换

			- git checkout -b 分支名

		- 删除

			- git brand -d 分支名

	- 合并分支

		- 为什么要合并
		- git merge 分支名

	- 冲突

		- 手动解决
		- add ,commit

- 远程仓库

	- github

		- git clone

			- 第一天上班，down代码
			- 找代码管理员要权限

		- git pull

			- 每天上班第一件事，拉最新的代码

		- git push

			- 下班最后一件班，提本地最新的代码

## 大事件

### 操作

- 建立远程仓库 github
- git clone 到本地
- 加入初始的代码

	- apiserver
	- web_back

		- 管理员使用的页面

	- web_front

		- 游客使用的页面

- 本地提交一次，形成第一个版本
- git push 到远程
- 在本地开发：

	- 拉分支

		- git checkout -b  dev

### 开发具体功能

- 测接口是否正常工作 

	- postman

- 发ajax请求。。。。。。
- 开发完成之后

	- git 提交新版本
	- vscode -git-提交版本

### ajax操作的封装

- js/utils

	- config.js

		- 把项目中要用到的配置信息，单独放置。包括每个接口的url地址

	- user.js

		- 把所有涉及用户操作的代码，全写在一起。

### 具体功能

- 管理员

	- 用户的登陆

		- bootstrap的模态框

	- 用户的退出
	- 用户获取个人信息
	- 修改个人信息

- 文章类型管理

	- 添加
	- 修改
	- 删除
	- 查询-显示

- 文章管理

	- 显示，筛选
	- 分页
	- 添加
	- 删除
	- 编辑

- 插件

	- 分页
	- 日历
	- 富文本框

- 游客

	- 主页
	- 详情页

		- 添加
		- 查看评论

### 排错

- 观察在控制台中，是否出现了错误

### arttemplate

- 模板引擎

	- 作用：把数据快速转换成html字符串

- 步骤

	- 引入 .js文件
	- 准备数据 res

		- 一定是一个对象 ｛ name: "XXX" ｝

	- 准备模板
```js
<script id="" type="text/html">{{name}}</script>
{{each res对象中的属性名-数组  item index}}

var htmlStr = template(模板id，res)
```


### iframe

- 在一个网页中嵌入另一个网页
- 典型结构

	- a href="" target="iframe的name"

### 达成的目标

- 初步建立pc端网站模块化的开发思想

- 熟悉常见的操作流程

	- 添加

		- 收集信息
		- 检测信息的有效性

			- 用户名不能为空
			- 长度不能太小
			- email格式
			- ......

		- 调用接口

			- 成功
			- 失败

				- 模态框提示

	- 删除

		- 提示是否删除
		- 收集信息

			- 掌握从地址栏中传值到另一个页面

		- 检测信息的有效性

			- 用户名不能为空
			- 长度不能太小
			- email格式
			- ......

		- 调用接口

			- 成功
			- 失败

	- 修改

		- 获取出详情数据
		- 显示在页面上
		- 收集信息
		- 检测信息的有效性

			- 用户名不能为空
			- 长度不能太小
			- email格式
			- ......

		- 调用接口

			- 成功
			- 失败

	- 查询

		- 收集信息
		- 检测信息的有效性

			- 用户名不能为空
			- 长度不能太小
			- email格式
			- ......

		- 组装查询条件
		- 调用接口

			- 成功

				- 使用模板引擎进行数据渲染

			- 失败

- 解决错误的基本方法

	- alert()
	- console.log()
	- 加断点

		- debugger

- ajax使用

	- 在network面板中观察

		- 请求行

			- 有接口的地址

		- 参数

			- 格式 
			- 个数

		- 响应结果

- 代码量的训练

*XMind: ZEN - Trial Version*
---
title: Jquery的常见问题
date: 2019-10-14 20:29:46
categories: 技术文档
tags: JavaScript
keywords:
description:
top_img:
comments:
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png
---

# 你在公司是怎么使用 jquery 的？

> 在项目中是怎么用的，就是面试官想考核你是否具备实际的项目开发经验，这个时候可以结合项目中的实际情况来解答（比如用过的选择器，复选框，表单，ajax，事件等）
> 配置 jquery 环境，下载 jquery 类库，在 jsp 页面引入 jquery 类库即可
>
> ```js
> <script type="text/javascript" src="jquery/jquery-1.7.2.min.js" />
> ```
>
> 接下来通过在
>
> ```js
> <script> $(function(){}); </script>
> ```

# 你为什么要使用 jquery?(或者是这样问的：你认为 jquery 有哪些好处？)

> 因为 jQuery 是轻量级的框架，大小不到 30kb,它有强大的选择器，出色的 DOM 操作的封装，有可靠的事件处理机制(jQuery 在处理事件绑定的时候相当的可靠)，完善的 ajax(它的 ajax 封装的非常的好，不需要考虑复杂浏览器的兼容性和 XMLHttpRequest 对象的创建和使用的问题。) 出色的浏览器的兼容性。 而且支持链式操作，隐式迭代。行为层和结构层的分离，还支持丰富的插件，jquery 的文档也非常的丰富。

# 你知道 jquery 中的选择器吗，请讲一下有哪些选择器？

> jQuery 中的选择器大致分为:基本选择器，层次选择器，过滤选择器，表单选择器

# jquery 中的选择器 和 css 中的选择器有区别吗？

> jQuery 选择器支持 CSS 里的选择器，jQuery 选择器可用来添加样式和添加相应的行为 CSS 中的选择器是只能添加相应的样式

# 觉得 jquery 中的选择器有什么优势？

> 简单的写法 \$('ID') 来代替 document.getElementById()函数
> 支持 CSS1 到 CSS3 选择器完善的处理机制(就算写错了 id 也不会报错)

# 你在使用选择器的时候有有没有什么觉得要注意的地方？

> - 选择器中含有".","#","[" 等特殊字符的时候需要进行转译
> - 属性选择器的引号问题
> - 选择器中含有空格的注意事

# jquery 对象和 dom 对象是怎样转换的？

> jquery 转 DOM 对象:jQuery 对象是一个数组对象，可以通过[index]的丰富得到相应的 DOM 对象还可以通过 get[index]去得到相应的 DOM 对象。
> DOM 对象转 jQuery 对象:\$(DOM 对象)

# 你是如何使用 jquery 中的 ajax 的？

> 如果是一些常规的 ajax 程序的话，使用 load(),$.get(),$.post(),就可以搞定了，一般我会使用的是$.post() 方法。如果需要设定beforeSend(提交前回调函数),error(失败后处理),success(成功后处理)及complete(请求完成后处理)回调函数等，这个时候我会使用$.ajax()

# 你觉得 jquery 中的 ajax 好用吗，为什么？

> 好用。 因为 jQuery 提供了一些日常开发中的快捷操作，例如 load，ajax，get，post 等等，所以使用 jQuery 开发 ajax 将变得极其简单，我们就可以集中精力在业务和用户的体验上，不需要去理会那些繁琐的 XMLHttpRequest 对象了

# jquery 中$.get()提交和$.post()提交有区别吗？

> - $.get() 方法使用GET方法来进行异步请求的。$.post() 方法使用 POST 方法来进行异步请求的。
> - get 请求会将参数跟在 URL 后进行传递，而 POST 请求则是作为 HTTP 消息的实体内容发送给 Web 服务器的，这种传递是对用户不可见的。
> - get 方式传输的数据大小不能超过 2KB 而 POST 要大的多
> - GET 方式请求的数据会被浏览器缓存起来，因此有安全问题。

# jquery 中的 load 方法一般怎么用的？

> load 方法一般在 载入远程 HTML 代码并插入到 DOM 中的时候用，通常用来从 Web 服务器上获取静态的数据文件。如果要传递参数的话，可以使用$.get() 或 $.post()。

# 在 jquery 中你是如何去操作样式的？

> addClass() 来追加样式 ，removeClass() 来删除样式，toggle() 来切换样式

# 简单的讲叙一下 jquery 是怎么处理事件的，你用过哪些事件？

> 首先去装载文档，在页面家在完毕后，浏览器会通过 javascript 为 DOM 元素添加事件。

# 你使用过 jquery 中的动画吗，是怎样用的？

> hide() 和 show() 同时修改多个样式属性。像高度，宽度，不透明度。 fadeIn() 和 fadeOut() fadeTo() 只改变不透明度
> slideUp() 和 slideDown() slideToggle() 只改变高度
> animate() 属于自定义动画的方法.
> 在此说一个重点，就是 css3 动画和 animate 动画的区别是什么？重点看一下

# 你一般用什么去提交数据，为什么？

答案:
一般我会使用的是$.post() 方法。
如果需要设定beforeSend(提交前回调函数),error(失败后处理),success(成功后处理及complete(请求完成后处理)回调函数等，这个时候我会使用$.ajax()

# 在 jquery 中引入 css 有几种方式？

答案:
四种 ：行内式，内嵌式，导入式，链接式

# 你在 jquery 中使用过哪些插入节点的方法，它们的区别是什么？

答案：
append(),appendTo(),prepend(),prependTo(),after(),insertAfter()，before(),insertBefore() 大致可以分为内部追加和外部追加 append() 表示向每个元素内部追加内容。appendTo()表示将所有的元素追加到指定的元素中。例\$(A)appendTo(B) 是将 A 追加到 B 中下面的方法解释类似

# 你使用过包裹节点的方法吗，包裹节点有方法有什么好处？

答案:
wrapAll(),wrap(), wrapInner() 需要在文档中插入额外的结构化标记的时候可以使用这些包裹的方法因为它不会改变原始文档的语义

# jquery 中如何来获取或和设置属性？

答案：
jQuery 中可以用 attr()方法来获取和设置元素属性 removeAttr() 方法来删除元素属性

# 如何来设置和获取 HTML 和文本的值？

答案：
html()方法类似于 innerHTML 属性 可以用来读取或者设置某个元素中的 HTML 内容
注意：html() 可以用于 xhtml 文档不能用于 xml 文档，text() 类似于 innerText 属性 可以用来读取或设置某个元素中文本内容。val() 可以用来设置和获取元素的值

# 你 jquery 中有哪些方法可以遍历节点？

答案 ：
children() 取得匹配元素的子元素集合,只考虑子元素不考虑后代元素
next() 取得匹配元素后面紧邻的同辈元素
prev() 取得匹配元素前面紧邻的同辈元素
siblings() 取得匹配元素前后的所有同辈元素
closest() 取得最近的匹配元素
find() 取得匹配元素中的元素集合 包括子代和后代

# 子元素选择器 和后代选择器元素有什么区别？

答案:
子代元素是找子节点下的所有元素,后代元素是找子节点或子节点的子节点中的元素

# 你觉得 beforeSend 方法有什么用？

答案：
发送请求前可以修改 XMLHttpRequest 对象的函数，在 beforeSend 中如果返回 false 可以取消本次的 Ajax 请求。XMLHttpRequest 对象是唯一的参数所以在这个方法里可以做验证

# siblings() 方法 和 \$('prev~div')选择器是一样的吗？

> \$('prev~div') 只能选择'#prev'元素后面的同辈<div>元素而 siblings()方法与前后的文职无关，只要是同辈节点就都能匹配

# 你在 ajax 中使用过 JSON 吗，你是如何用的？

使用过，在$.getJSON() 方法的时候就是。
因为 $.getJSON() 就是用于加载 JSON 文件的

# 有哪些查询节点的选择器？

答案：
我在公司使用过 :first 查询第一个，:last 查询最后一个，:odd 查询奇数但是索引从 0 开始:even 查询偶数，:eq(index)查询相等的 ,:gt(index)查询大于 index 的 ,:lt 查询小于 index:header 选取所有的标题等

27. nextAll() 能 替代$('prev~siblindgs')选择器吗？
答案:
能。 使用nextAll() 和使用$('prev~siblindgs') 是一样的
28. jQuery 中有几种方法可以来设置和获取样式
    答案：
    addClass() 方法，attr() 方法
29. $(document).ready()方法和window.onload有什么区别？
答案: 两个方法有相似的功能，但是在实行时机方面是有区别的。 
window.onload方法是在网页中所有的元素(包括元素的所有关联文件)完全加载到浏览器后才执行的。
$(document).ready() 方法可以在 DOM 载入就绪时就对其进行操纵，并调用执行绑定的函数
30. jQuery 是如何处理缓存的？
    答案：
    要处理缓存就是禁用缓存.
    1 通过$.post() 方法来获取数据，那么默认就是禁用缓存的。
2 通过$.get()方法 来获取数据，可以通过设置时间戳来避免缓存。可以在 URL 后面加上+(+new Date)例 $.get('ajax.xml?'+(+new Date),function () { //内容 }); 
3 通过$.ajax 方法来获取数据，只要设置 cache:false 即可
31. $.getScript()方法 和 $.getJson() 方法有什么区别？
    答案:
    1 $.getScript() 方法可以直接加载.js文件，并且不需要对javascript文件进行处理，javascript文件会自动执行。
2 $.getJson() 是用于加载 JSON 文件的 ，用法和\$.getScript()
32. 你读过有关于 jQuery 的书吗？
    《jquery 基础教程》 《jquery 实战》《锋利的 jquery》 《巧用 jquery》 《jQuery 用户界面库学习指南》等
    重点：其中《锋利的 jquery》这本书可以看一下
33. jQuery 能做什么？
    答案：
    1 获取页面的元素
    2 修改页面的外观
    3 改变页面大的内容
    4 响应用户的页面操作
    5 为页面添加动态效果
    6 无需刷新页面，即可以从服务器获取信息
    7 简化常见的 javascript 任务
34. 在 ajax 中 data 主要有几种方式？
    答案：
    三种，html 拼接的，json 数组，form 表单经 serialize()序列化的
35. jQuery 中的 hover()和 toggle()有什么区别？
    答案：
    hover()和 toggle()都是 jQuery 中两个合成事件。
    hover()方法用于模拟光标悬停事件。
    toggle()方法是连续点击事件
36. 你知道 jQuery 中的事件冒泡吗，它是怎么执行的，何如来停止冒泡事件？
    答案:
    知道,事件冒泡是从里面的往外面开始触发。在 jQuery 中提供了 stopPropagation()方法可以停止冒泡
37. jquery 表单提交前有几种校验方法？分别为？
    a) formData:返回一个数组，可以通过循环调用来校验
    b) jaForm：返回一个 jQuery 对象，所有需要先转换成 dom 对象
    c) fieldValue：返回一个数组 beforeSend()
38. jQuery 的实现原理？
    答案：
    (function(window, undefined) {})(window);
    jQuery 利用 JS 函数作用域的特性，采用立即调用表达式包裹了自身，解决命名空间和变量污染问题
    window.jQuery = window.$ = jQuery;
在闭包当中将 jQuery 和 $ 绑定到 window 上，从而将 jQuery 和 \$ 暴露为全局变量
39. jQuery.fn 的 init 方法返回的 this 指的是什么对象？ 为什么要返回 this？
    答案：
    jQuery.fn 的 init 方法 返回的 this 就是 jQuery 对象
    用户使用 jQuery() 或 \$() 即可初始化 jQuery 对象，不需要动态的去调用 init 方法
40. jQuery.extend 与 jQuery.fn.extend 的区别？
    答案：
    $.fn.extend() 和 $.extend() 是 jQuery 为扩展插件提拱了两个方法
    \$.extend(object); // 为 jQuery 添加“静态方法”（工具方法）
41. jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？
    答案：
    浅拷贝（只复制一份原始对象的引用） var newObject = $.extend({}, oldObject);
深拷贝（对原始对象属性所引用的对象进行进行递归拷贝） var newObject = $.extend(true, {}, oldObject);
42. jQuery 中的 bind(), live(), delegate(), on()的区别？
    答案：
    bind 直接绑定在目标元素上
    live 通过冒泡传播事件，默认 document 上，支持动态数据
    delegate 更精确的小范围使用事件代理，性能优于 live
    on 是最新的 1.9 版本整合了之前的三种方式的新事件绑定机制
43. 针对 jQuery 的优化方法？
    答案：
    缓存频繁操作 DOM 对象
    尽量使用 id 选择器代替 class 选择器
    总是从#id 选择器来继承
    尽量使用链式操作
    使用事件委托 on 绑定事件
    采用 jQuery 的内部函数 data()来存储数据
    使用最新版本的 jQuery
44. jQuery 的 slideUp 动画，当鼠标快速连续触发, 动画会滞后反复执行，该如何处理呢?
    答案：
    在触发元素上的事件设置为延迟处理：使用 JS 原生 setTimeout 方法
    在触发元素的事件时预先停止所有的动画，再执行相应的动画事件：\$('.tab').stop().slideUp();
45. jQuery 与 jQuery UI、jQuery Mobile 区别？
    答案：
    jQuery 是 JS 库，兼容各种 PC 浏览器，主要用作更方便地处理 DOM、事件、动画、AJAX
    jQuery UI 是建立在 jQuery 库上的一组用户界面交互、特效、小部件及主题
    jQuery Mobile 以 jQuery 为基础，用于创建“移动 Web 应用”的框架
46. jQuery 和 Zepto 的区别？ 各自的使用场景？
    答案：
    jQuery 主要目标是 PC 的网页中，兼容全部主流浏览器。在移动设备方面，单独推出 jQuery Mobile
    Zepto 从一开始就定位移动设备，相对更轻量级。它的 API 基本兼容 jQuery，但对 PC 浏览器兼容不理想
47. jQuery 库中的 $() 是什么？
答案：
$() 函数是 jQuery() 函数的别称，$() 函数用于将任何对象包裹成 jQuery 对象，接着就被允许调用定义在 jQuery 对象上的多个不同方法。甚至可以将一个选择器字符串传入 $() 函数，它会返回一个包含所有匹配的 DOM 元素数组的 jQuery 对象。
48. jQuery 中 detach() 和 remove() 方法的区别是什么?
    答案：
    detach() 和 remove() 方法都被用来移除一个 DOM 元素, 两者之间的主要不同在于 detach() 会保持对过去被解除元素的跟踪, 因此它可以被取消解除, 而 remove() 方法则会保持过去被移除对象的引用. 你还可以看看 用来向 DOM 中添加元素的 appendTo() 方法

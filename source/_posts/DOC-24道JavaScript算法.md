---
title: 24道JavaScript算法题
date: 2019-10-13 20:29:46
categories: 技术文档
tags: JavaScript
keywords:
description:
top_img:
comments:
cover: https://gcore.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png
---

# 标准排序

## 第一种

```js
var arr = [5, 8, 3, 6, 9];
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    var temp;
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
```

## 第二种：冒泡排序

```js
var arr = [5, 4, 6, 1, 3, 2];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length - i + 1; j++) {
    var temp;
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
```

# 字符串出现最多个数（2 种）

## 第一种

```js
//str=”abcdefgaaass”找字符中出现最多的;第一种
var str = "abcdefgaaass";
var newarr = str.split("");
var max = 0,
  val = "";
function fn(arr, a) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == a) {
      count++;
    }
  }
  return count;
}
for (var i = 0; i < newarr.length; i++) {
  var ind = fn(newarr, newarr[i]);
  if (ind > max) {
    max = ind;
    val = newarr[i];
  }
}
console.log("出现最多的字符是" + val + "出现的次数是" + max);
```

## 第二种

```js
var strr = "aaasssssbbbcccccccccccccccccccccc";
function change(arr) {
  for (var j = 0, len = 0, str1 = ""; j < arr.length; j++) {
    var x = arr.substr(j, 1);
    var y = arr.split(x);
    if (y.length - 1 > len) {
      len = y.length - 1;
      str1 = x + "," + len;
    }
  }
  return str1;
}
console.log(change(strr));
```

# 编程实现，往数组里插入一个元素

```js
var arr = ["1411A", "44", "34305", "djg", "pic"];
function fun3(ar, index, date) {
  for (var i = ar.length - 1; i >= index; i--) {
    ar[i + 1] = ar[i];
  }
  ar[index] = date;
}
fun3(arr, 2, "hello");
console.log(arr);
```

# 编程实现 IndexOf 方法

```js
var brr = [5, 9, 6, 3, 2, 5];
function indexfun(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return i;
    }
  }
  return -1;
}
console.log(indexfun(brr, 13));
```

# 求数组中最大值和最小值

```js
var arr = [2, 41, 3, 1, 8];
var temp = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < temp) {
    temp = arr[i];
  }
}
console.log(temp);
```

# 将字符串转换为驼峰形式

```js
var str = "border-bottom-color";
function isstr(str) {
  var arr = str.split("-");
  var one = arr[0];
  for (var i = 1; i < arr.length; i++) {
    one += arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
  }
  return one;
}
console.log(isstr(str));
```

# var str='a2b4admin3'字符的每个数字都乘 2 ,成为'a4b8admin6'

```js
var url = "a2b4admin3";
var str11 = "";
for (var i = 0; i < url.length; i++) {
  if (!isNaN(url[i])) {
    str11 = str11 + url[i] * 2;
  } else {
    str11 = str11 + url[i];
  }
}
console.log(str11);
```

# var str='a2b4admin3'将字符串中的数字用中括号括起来 'a[2]b[4]admin[3]'

```js
function num(str) {
  var arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      arr[i] = "[" + arr[i] + "]";
    }
  }
  return arr.join("");
}
console.log(num(url));
```

# 首先判断在数组中哪个数最大，然后让数组中的第一个数与最大的数相乘，返回结果

```js
function maxn(arr) {
  var big = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > big) {
      big = arr[i];
    }
  }
  return big * arr[0];
}
console.log(maxn([2, 1, 80, 6, 10]));
```

# var str='abc' 让字符串重复 3 遍，成为 str='abcabcabc'

```js
var str = "abc";
function xun(a, b) {
  var newstr = "";
  for (var i = 1; i <= b; i++) {
    newstr += a;
  }
  return newstr;
}
console.log(xun(str, 3));
```

# 10 到 100 的十位随机数并排序

```js
for (var i = 1; i <= 10; i++) {
  var ran = Math.floor(Math.random() * 91 + 10);
  arr.push(ran);
}
console.log(
  arr.sort(function (a, b) {
    return a - b;
  })
);
```

# 写出一个段脚本，输出当前日期 5 天之后是星期几,三种方法

## 第一种

```js
var now = new Date();
var day = now.getDate();
var week = ["日", "一", "二", "三", "四", "五", "六"];
now.setDate(day + 5);
console.log("星期" + week[now.getDay()]);
```

## 第二种

```js
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var week = ["日", "一", "二", "三", "四", "五", "六"];
var fulture = new Date(year, month, date + 5);
console.log("5天之后是星期" + week[fulture.getDay()]);
```

## 第三种

```js
var now=new Date();
var time=now.getTime();
var fulture=new Date();
var ftime=time+24*60*60*1000*5;
var week=['日','一','二','三','四','五','六'];
fulture.setTime(ftime);
console.log('5天之后是星期'+week[fulture.getDay()])*/
```

# 封装一个 n 天之后是星期几的函数

```js
function getday(n) {
  n = typeof n === "undefined" ? 0 : n;
  var now = new Date();
  var time = now.getTime();
  var fulture = new Date();
  var ftime = time + 24 * 60 * 60 * 1000 * n;
  fulture.setTime(ftime);
  return fulture.getDay();
}
console.log(getday());
```

# "wellcome to beijing"把第一个变大写返回'WellcomeToBeijing'

```js
//和上题相同。驼峰
```

# 封装一个方法，实现求任意多个数的平均值。

```js
function f1() {
  //用一个变量接收和
  var temp = 0;
  //循环每个参数
  for (var i = 0; i < arguments.length; i++) {
    temp += arguments[i];
  }
  //返回平均数
  return temp / arguments.length;
}
console.log(f1(1, 2, 3, 4, 9));
```

# 判断字符串是否对称

```js
var str1 = "abch6g5g6hcba";
aba;
function isduic(str) {
  for (var i = 0, len = str1.length; i < len / 2; i++) {
    alert(str[i]);
    if (str[i] != str[len - 1 - i]) {
      str.charAt(i) != str.charAt(len - 1 - i);
      return "不对称";
    }
  }
  return "对称";
}
console.log(isduic(str1));
```

# 千分符

```js
var str2=46548978911;
function qianff(str){
    var strn=str.toString(),
    len=strn.length,
    ind=len%3,
    console.log(strn);
    newstr=strn.substr(0,ind);
    console.log(newstr);
    if(ind==0){
        newstr=strn.substr(0,3);
        ind=3;
        console.log(newstr);
    }
    for(i=ind;i<len;i=i+3){
        newstr+=","+strn.substr(i,3);
    }
    return newstr;
}
console.log(qianff(str2))
```

# 随机生成十六进制的颜色值 var arr=["0","2","3","4","5","6","7","8","9","a","b","c","d"]

```js
var arrHex = ["0", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d"];
var fuhao = "#";
for (var i = 0; i < 6; i++) {
  var color = arrHex[Math.floor(Math.random() * arrHex.length)];
  fuhao = fuhao + color;
  str = str + arrHex[a];
}
console.log(fuhao);
```

# 随机从数组中取出三个不同的值。var arr = [1,2,3,4,5,6,7,8,9];

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var brr = [];
for (var i = 0; brr.length < 3; i++) {
  var a = Math.floor(Math.random() * arr.length);
  var b = arr[a];
  if (brr.indexOf(b) == -1) {
    brr.push(b);
  }
}
console.log(brr);
```

# 求数组中字符串的个数

```js
var str=[0,1,2,3,4,5,"a","b","c","b"],sum=0;
function strn(arr){
    for(var i=0;i<arr.length;i++){
    if(typeof(arr[i])=="string"){
        sum+
```

# 求数组中字符串的个数

```js
var str = [0, 1, 2, 3, 4, 5, "a", "b", "c", "b"],
  sum = 0;
function strn(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string") {
      sum++;
    }
  }
  return sum;
}
console.log(strn(str));
```

# 删除数组中指定的值

```js
var drr = ["1411A", "44", "34305", "djg", "pic", 100, 35, 28];
function fun5(rr, num) {
  for (var i = 0; i < rr.length; i++) {
    if (rr[i] == num) {
      rr.splice(i, 1);
      break;
    }
  }
  var newrr = rr.splice(num, 1);
  return rr;
}
console.log(fun5(drr, 1));
```

# 把重复的值放入一个新的数组中 这中方法过于繁琐，可以使用 indexOf 方法，等于-1 判断

```js
var hrr = ["55", "55", "2", "1"];
function fun7(rra, num) {
  var a = 0;
  for (var i = 0; i < rra.length; i++) {
    if (rra[i] == num) {
      a++;
    }
  }
  return a;
}
var rrb = [];
for (var i = 0; i < hrr.length; i++) {
  var length = fun7(hrr, hrr[i]);
  if (length > 1) {
    rrb.push(hrr[i]);
  }
}
console.log(rrb);
```

# 截取字符串的 var s="abcdefg";截取完成后实现反转功能：g,f,e 其实等同于数组翻转

## 第一种

```js
var str = "hello";
var arr = str.split("");
var rts = arr.reverse();
console.log(rts);
```

## 第二种

```js
var str = "hello";
var strn = "";
for (var i = str.length; i >= 0; i--) {
  strn += str[i];
}
console.log(strn);
```

## 第三种

```js
var str = "hello",
  arr = [];
for (var i = 0; i < str.length; i++) {
  arr.unshift(str[i]);
}
console.log(arr);
```

# 拓展一个方法，用于删除数组中的指定值。同 21 题一样

# 编程实现数组中有几个字符串元素

```js
var brr = ["1411A", "44", "34305", "djg", "pic", 100, 35, 28];
function fun4(crr) {
  var count = 0;
  for (var i = 0; i < crr.length; i++) {
    if (typeof crr[i] == "string") {
      count++;
    }
  }
  return count;
}
fun4(brr);
```

# 数组反转

```js
var s = "abcdefghiklmn";
function fun6(str) {
  var ss = s.splice("");
  var ss = s.split("");
  var ssa = [];
  for (var i = 0; i < ss.length; i++) {
    ssa.unshift(ss[i]);
  }
  return ssa.join("");
}
fun6(s);
```

# 将所有数组内所有重复的值取出来放到一个新的数组中

```js
var st = "123abcdefgaaaasssssssssssssss123",
  srn = "",
  cou = 0;
var str = st.split("");
function stn(srr, strn) {
  var count = 0;
  for (var i = 0; i < srr.length; i++) {
    if (srr[i] == strn) {
      count++;
    }
  }
  return count;
}
for (var i = 0; i < str.length; i++) {
  var anr = stn(str, str[i]);
  if (anr > cou) {
    cou = anr;
    srn = str[i];
  }
}
console.log("出现最多的字母是" + srn + "次数" + cou);
```

# 求出一组数中的最大值和最小值并返回俩数的积

```js
var arr = [45, 234, 24, 34, 35, 4, 6, 57, 65];
function maxValue(arr) {
  //假设一个最大值
  var max = 0,
    min = 999999999999;
  //遍历数组
  for (var i = 0; i < arr.length; i++) {
    //判断当前值是否大于max
    if (max < arr[i]) {
      max = arr[i]; //234
    }
    //判断当前值是否小min
    if (min > arr[i]) {
      min = arr[i]; //4
    }
  }
  return max * min;
}
console.log(maxValue(arr));
```

# 10 到 100 的十位随机数并升序排序(不允许重复)

```js
function fn() {
  //定义新数组
  var arr = [];
  while (arr.length < 10) {
    //随机获取10-100之间的随机数
    var val = Math.floor(Math.random() * 91 + 10);
    //判断获取的随机数 是否出现在新数组中
    if (arr.indexOf(val) == -1) {
      //将不重复的值添加到新数组中
      arr.push(val);
    }
  }
  //返回升序排序的数组
  return arr.sort(function (x, y) {
    return x - y;
  });
}
console.log(fn());
```

# CSS 学习笔记

## 1. CSS 简介

CSS（Cascading Style Sheets，层叠样式表）用于控制网页元素的样式。

主要负责：

* 颜色
* 字体
* 大小
* 间距
* 布局
* 动画

HTML 负责结构，CSS 负责样式。

---

# 2. CSS 样式定义方式

## 2.1 行内样式

直接写在标签内部。

```html
<div style="color:red;">
    Hello
</div>
```

特点：

* 优先级高
* 不方便维护

---

## 2.2 内部样式表

写在 HTML 的 `<style>` 标签中。

```html
<style>
div {
    color: red;
}
</style>
```

特点：

* 适合小型页面
* 样式和结构仍然混在一起

---

## 2.3 外部样式表（推荐）

HTML：

```html
<link rel="stylesheet" href="style.css">
```

CSS：

```css
div {
    color: red;
}
```

特点：

* 易维护
* 可复用

---

# 3. CSS 选择器

## 3.1 标签选择器

```css
div {
    color: red;
}
```

选中所有 div。

---

## 3.2 类选择器

```css
.box {
    color: blue;
}
```

HTML：

```html
<div class="box"></div>
```

最常用的选择器。

---

## 3.3 ID选择器

```css
#header {
    color: red;
}
```

HTML：

```html
<div id="header"></div>
```

一个页面中 id 应唯一。

---

## 3.4 通配符选择器

```css
* {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
```

选中所有元素，用来规定整个css的样式

---

# 4. 组合选择器

## 后代选择器

```css
div p {
    color: red;
}
```

选中 div 内部所有 p。

---

## 子代选择器

```css
div > p {
    color: red;
}
```

选中 div 的直接子元素 p。

---


## 交集选择器

```css
div.box {
    color: red;
}
```

选中 class 为 box 的 div。

---

# 5. 伪类选择器

也可以认为状态选择器，当状态发生改变的时候触发

## hover

鼠标悬停时触发

```css
button:hover {
    background: orange;
}
```

---

## first-child

第一个子元素。

```css
li:first-child {
    color: red;
}
```

---

## last-child

最后一个子元素。

```css
li:last-child {
    color: red;
}
```

---

## nth-child()

第 n 个子元素。

```css
li:nth-child(3) {
    color: red;
}
```

---

### 奇数

```css
li:nth-child(odd)
```

---

### 偶数

```css
li:nth-child(even)
```

---

# 6. 颜色

可以使用微信或qq的截图工具来取色

## 6.1 英文颜色名

```css
color: red;
color: blue;
color: green;
color: orange;
```

---

## 6.2 十六进制颜色

```css
color: #FF0000;
```

格式：

```css
#RRGGBB
```

示例：

```css
#FFFFFF
```

白色

```css
#000000
```

黑色

```css
#FF0000
```
---

## 6.3 RGB

```css
color: rgb(255, 0, 0);
```

格式：

```css
rgb(红,绿,蓝)
```

取值：

```text
0 ~ 255
```

---

## 6.4 RGBA

带透明度。

```css
color: rgba(255, 0, 0, 0.5);
```

格式：

```css
rgba(红,绿,蓝,透明度)
```

透明度：

```text
0~1
```

```text
0 完全透明
1 完全不透明
```

---

# 7. 文本样式

## 1. text-align

控制行内内容的水平对齐方式。

```css
text-align: left;
text-align: center;
text-align: right;
text-align: justify;
```

### left

左对齐（默认）

```css
p {
    text-align: left;
}
```

### center

居中对齐

```css
p {
    text-align: center;
}
```

### right

右对齐

```css
p {
    text-align: right;
}
```

### justify

两端对齐

```css
p {
    text-align: justify;
}
```

注意：

```text
text-align 不控制元素自身位置
只控制元素内部内容的位置
```

---

## 2. line-height

控制一行文字占据的总高度。

```css
line-height: 40px;
```

例如：

```css
font-size: 20px;
line-height: 40px;
```

表示：

```text
文字大小：20px
行高度：40px
```

---

### 单行文字垂直居中

```css
div {
    height: 100px;
    line-height: 100px;
}
```

原理：

```text
height = line-height
```

---

## 3. letter-spacing

控制字符之间的距离。

```css
letter-spacing: 5px;
```

效果：

```text
H e l l o
```

---

## 4. text-indent

控制首行缩进。

```css
text-indent: 2em;
```

效果：

```text
    第一行缩进
第二行不缩进
```

常用于：

- 文章
- 小说
- 新闻

---

## 5. text-decoration

控制文字装饰线。

### 去除下划线

```css
text-decoration: none;
```

---

### 下划线

```css
text-decoration: underline;
```

---

### 删除线

```css
text-decoration: line-through;
```

---

### 上划线

```css
text-decoration: overline;
```

---

## 6. text-shadow

给文字添加阴影。

```css
text-shadow: 2px 2px 5px gray;
```

格式：

```css
text-shadow:
    水平偏移
    垂直偏移
    模糊半径
    颜色;
```

示例：

```css
h1 {
    text-shadow: 3px 3px 5px black;
}
```

---

# 长度单位

## px

设备上的像素点

```css
font-size: 20px;
```

---

## %

相对于父元素的大小百分比

```css
width: 50%;
```

---

## em

相对于当前元素字体大小

```css
font-size: 2em;
```

---

## rem

相对于 html 根元素字体大小

```css
font-size: 2rem;
```

---

## vw

相对于视口宽度

```css
width: 50vw;
```

---

## vh

相对于视口高度

```css
height: 100vh;
```

---

# 长度单位总结

| 单位 | 描述 |
|------|------|
| px | 设备上的像素点 |
| % | 相对于父元素的百分比 |
| em | 相对于当前元素字体大小 |
| rem | 相对于根元素字体大小 |
| vw | 相对于视窗宽度的百分比 |
| vh | 相对于视窗高度的百分比 |

---

# 8. 字体与文本

## 8.1 字体大小（font-size）

设置文字大小。

```css
font-size: 20px;
```

## 8.2 字体类型（font-family）

设置字体。

```css
font-family: "Microsoft YaHei";
```

多个字体备用：

```css
font-family: "Microsoft YaHei", Arial, sans-serif;
```

## 8.3 字体粗细（font-weight）

设置字体粗细。

```css
font-weight: normal;
font-weight: bold;
```

常见取值：

| 值 | 说明 |
|--------|--------|
| normal | 正常（400） |
| bold | 加粗（700） |
| 100~900 | 数字控制粗细 |

示例：

```css
font-weight: 700;
font-weight: 900;
```

---

## 8.4 字体样式（font-style）

设置字体是否倾斜。

```css
font-style: normal;
font-style: italic;
font-style: oblique;
```

| 值 | 说明 |
|--------|--------|
| normal | 正常 |
| italic | 斜体 |
| oblique | 强制倾斜 |

---

### 如何让单行文字垂直居中

```css
height: 40px;
line-height: 40px;
```

或者：

```css
display: flex;
align-items: center;
justify-content: center;
```

---
# 9. 背景（Background）

## 9.1 背景颜色（background-color）

设置元素背景颜色。

```css
background-color: red;
```

十六进制：

```css
background-color: #ff0000;
```

RGB：

```css
background-color: rgb(255, 0, 0);
```

RGBA：

```css
background-color: rgba(255, 0, 0, 0.5);
```

透明背景：

```css
background-color: transparent;
```

---

## 9.2 背景图片（background-image）

为元素设置一个或多个背景图片。

```css
background-image: url("./bg.jpg");
```

多个背景图：

```css
background-image:
    url("./left.png"),
    url("./right.png");
```

注意：

```text
先写的图片显示在上层
后写的图片显示在下层
```

---

### 渐变背景

线性渐变：

```css
background-image:
    linear-gradient(red, blue);
```

透明渐变：

```css
background-image:
    linear-gradient(
        rgba(0,0,255,0.5),
        rgba(255,255,0,0.5)
    );
```

示例：

```css
background-image:
    linear-gradient(
        rgba(0,0,255,0.5),
        rgba(255,255,0,0.5)
    );
```

---

## 9.3 背景大小（background-size）

设置背景图片大小。

### 固定大小

```css
background-size: 200px 100px;
```

格式：

```css
background-size: 宽度 高度;
```

---

### 百分比

```css
background-size: 50% 100%;
```

相对于背景容器尺寸计算。

---

### cover

```css
background-size: cover;
```

特点：

```text
保持图片比例
铺满整个容器
可能裁剪图片
不留空白
```

适用于：

```text
网页背景
Banner背景
首页大图
```

---

### contain

```css
background-size: contain;
```

特点：

```text
保持图片比例
完整显示图片
可能出现空白
不裁剪图片
```

适用于：

```text
Logo
商品图
图标
```

---

## 9.4 背景重复（background-repeat）

控制背景图片是否平铺。

默认：

```css
background-repeat: repeat;
```

效果：

```text
水平和垂直同时重复
```

---

不重复：

```css
background-repeat: no-repeat;
```

---

水平重复：

```css
background-repeat: repeat-x;
```

---

垂直重复：

```css
background-repeat: repeat-y;
```

---

## 9.5 背景位置（background-position）

设置背景图片起始位置。

默认：

```css
background-position: left top;
```

---

常见写法：

```css
background-position: center center;
```

```css
background-position: center;
```

```css
background-position: right bottom;
```

---

使用具体坐标：

```css
background-position: 100px 50px;
```

表示：

```text
向右100px
向下50px
```

---

多个背景图：

```css
background-position:
    left top,
    right top;
```

---

## 9.6 背景固定（background-attachment）

控制背景是否跟随页面滚动。

### scroll（默认）

```css
background-attachment: scroll;
```

效果：

```text
页面滚动
背景跟着滚动
```

---

### fixed

```css
background-attachment: fixed;
```

效果：

```text
页面滚动
背景固定不动
```

示例：

```css
body {
    background-image: url("./bg.jpg");
    background-attachment: fixed;
}
```

---


## 9.7 background-image 与 img 的区别

### img

```html
<img src="cat.jpg">
```

表示：

```text
图片属于页面内容
```

适用于：

```text
头像
商品图
文章配图
Logo
```

---

### background-image

```css
background-image: url("bg.jpg");
```

表示：

```text
图片属于页面装饰
```

适用于：

```text
背景图
Banner图
按钮背景
卡片背景
```

---
# 10. 边框（Border）

## 10.1 边框样式（border-style）

设置边框的样式。

```css
border-style: solid;
```

常见取值：

| 值 | 说明 |
|------|------|
| none | 无边框 |
| solid | 实线 |
| dashed | 虚线 |
| dotted | 点线 |
| double | 双实线 |

示例：

```css
border-style: dashed;
```

---

## 10.2 边框宽度（border-width）

设置边框粗细。

```css
border-width: 2px;
```

示例：

```css
border-width: 5px;
```

也可以分别设置：

```css
border-top-width: 2px;
border-right-width: 4px;
border-bottom-width: 6px;
border-left-width: 8px;
```

---

## 10.3 边框颜色（border-color）

设置边框颜色。

```css
border-color: red;
```

---

### 单独设置四条边

```css
border-top-color: red;
border-right-color: blue;
border-bottom-color: green;
border-left-color: yellow;
```

---

## 10.4 边框简写（border）

最常用写法。

```css
border: 2px solid red;
```

格式：

```css
border: 宽度 样式 颜色;
```

例如：

```css
border: 1px solid black;
```

```css
border: 5px dashed blue;
```

---

## 10.5 圆角边框（border-radius）

设置边框圆角。

```css
border-radius: 10px;
```

效果：

```text
┌─────┐
│     │
└─────┘

↓

╭─────╮
│     │
╰─────╯
```

---

### 圆形

当宽高相等时：

```css
border-radius: 50%;
```

例如：

```css
img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
```

效果：

```text
□ → ○
```

常用于：

```text
头像
用户图片
Logo
```

---

### 椭圆

```css
border-radius: 50px / 25px;
```

效果：

```text
○ → ⬭
```

---

### 单独设置四个角

```css
border-radius: 10px 20px 30px 40px;
```

顺序：

```text
左上
右上
右下
左下
```

---

## 10.6 表格边框合并（border-collapse）

用于 table 表格。

默认：

```css
border-collapse: separate;
```

效果：

```text
每个单元格拥有自己的边框
```

---

合并边框：

```css
border-collapse: collapse;
```

效果：

```text
相邻边框合并为一条线
```

示例：

```css
table {
    border-collapse: collapse;
}
```

```html
<table>
    <tr>
        <td>A</td>
        <td>B</td>
    </tr>
</table>
```

---

## 10.7 单独设置四条边

上边框：

```css
border-top: 1px solid red;
```

右边框：

```css
border-right: 1px solid blue;
```

下边框：

```css
border-bottom: 1px solid green;
```

左边框：

```css
border-left: 1px solid yellow;
```


---

# 11. 显示模式与文本溢出

## 11.1 display

用于设置元素的显示模式。

---

### block（块级元素）

特点：

- 独占一行
- 可以设置 width
- 可以设置 height
- 可以设置 margin
- 可以设置 padding
- 默认宽度占满父元素

示例：

```css
display: block;
```

常见块级元素：

```html
<div></div>
<p></p>
<h1></h1>
<section></section>
<article></article>
```

效果：

```text
元素1
────────

元素2
────────
```

每个元素单独占一行。

---

### inline（行内元素）

特点：

- 可以与其他元素处于同一行
- width 无效
- height 无效
- 水平方向 margin 有效
- 水平方向 padding 有效
- 垂直方向 margin 无效
- 垂直方向 padding 不影响布局
- 宽度默认由内容决定

示例：

```css
display: inline;
```

常见行内元素：

```html
<span></span>
<a></a>
```

效果：

```text
文字1 文字2 文字3
```

位于同一行。

---

### inline-block（行内块元素）

特点：

- 可以与其他元素处于同一行
- 可以设置 width
- 可以设置 height
- 可以设置 margin
- 可以设置 padding
- 宽度默认由内容决定

示例：

```css
display: inline-block;
```

常见应用：

```html
<button></button>
<img>
<input>
```

效果：

```text
┌────┐ ┌────┐ ┌────┐
│按钮1│ │按钮2│ │按钮3│
└────┘ └────┘ └────┘
```

---

### display 对比

| 特性 | block | inline | inline-block |
|--------|--------|--------|--------|
| 独占一行 | √ | × | × |
| 设置 width | √ | × | √ |
| 设置 height | √ | × | √ |
| 设置 margin | √ | 部分有效 | √ |
| 设置 padding | √ | 部分有效 | √ |
| 默认宽度 | 100% | 内容宽度 | 内容宽度 |

---

## 11.2 white-space

控制空白字符与换行方式。

默认：

```css
white-space: normal;
```

特点：

```text
自动换行
多个空格合并为一个
```

---

### nowrap

```css
white-space: nowrap;
```

特点：

```text
禁止换行
```

文字会一直向右延伸。

---

### pre

```css
white-space: pre;
```

特点：

```text
保留空格
保留换行
保留Tab
```

效果类似：

```html
<pre></pre>
```

---

## 11.3 overflow

控制内容超出容器后的处理方式。

---

### visible（默认）

```css
overflow: visible;
```

特点：

```text
超出继续显示
```

---

### hidden

```css
overflow: hidden;
```

特点：

```text
超出隐藏
```

常用于：

```text
图片裁剪
圆角头像
文本省略
```

---

### scroll

```css
overflow: scroll;
```

特点：

```text
始终显示滚动条
```

---

### auto

```css
overflow: auto;
```

特点：

```text
超出时显示滚动条
未超出不显示
```


---

### overflow-x

控制水平方向溢出。

```css
overflow-x: auto;
```

---

### overflow-y

控制垂直方向溢出。

```css
overflow-y: auto;
```

---

## 11.4 text-overflow

控制被隐藏文字的显示方式。

注意：

```css
text-overflow
```

只对文本有效。

---

### clip（默认）

```css
text-overflow: clip;
```

效果：

```text
直接裁掉
```

例如：

```text
这是一段很长很长的文字

↓

这是一段很长很
```

---

### ellipsis

```css
text-overflow: ellipsis;
```

效果：

```text
显示 ...
```

例如：

```text
这是一段很长很长的文字

↓

这是一段很长...
```

---

## 11.5 单行文本省略号

实现：

```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```

三者缺一不可。

效果：

```text
这是一段非常非常长的文字...
```

---

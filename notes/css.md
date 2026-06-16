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
# 12. 外边距（Margin）与内边距（Padding）

## 12.1 Margin（外边距）

Margin（外边距）用于控制：

```text
当前元素与其他元素之间的距离
```

位置：

```text
margin
↓
border
↓
padding
↓
content
```

盒模型：

```text
┌───────────────────────┐
│        margin         │
│ ┌───────────────────┐ │
│ │      border       │ │
│ │ ┌───────────────┐ │ │
│ │ │   padding     │ │ │
│ │ │ ┌───────────┐ │ │ │
│ │ │ │ content   │ │ │ │
│ │ │ └───────────┘ │ │ │
│ │ └───────────────┘ │ │
│ └───────────────────┘ │
└───────────────────────┘
```

---

## 12.2 Margin 简写

### 一个值

```css
margin: 20px;
```

表示：

```text
上 右 下 左
20 20 20 20
```

---

### 两个值

```css
margin: 20px 10px;
```

表示：

```text
上下 20px
左右 10px
```

---

### 三个值

```css
margin: 20px 10px 5px;
```

表示：

```text
上   20px
左右 10px
下   5px
```

---

### 四个值

```css
margin: 20px 10px 5px 30px;
```

表示：

```text
上   20px
右   10px
下   5px
左   30px
```

顺时针记忆：

```text
上 → 右 → 下 → 左
```

---

## 12.3 单独设置 Margin

```css
margin-top: 20px;
margin-right: 20px;
margin-bottom: 20px;
margin-left: 20px;
```

---

## 12.4 Margin 可取值

### length

固定值：

```css
margin: 20px;
```

---

### %

百分比

```css
margin: 10%;
```

注意：

```text
margin百分比
永远相对于父元素宽度计算
```

即使：

```css
margin-top: 10%;
```

也是参考父元素宽度。

---

### auto

```css
margin: auto;
```

浏览器自动计算。

---

## 12.5 水平居中

```css
.box {
    width: 300px;
    margin: 0 auto;
}
```

条件：

```text
必须是块级元素
必须有宽度
```

效果：

```text
左右剩余空间平均分配
```

---

## 12.6 Margin 塌陷（Margin Collapse）


---

### 相邻兄弟元素

```html
<div class="a"></div>
<div class="b"></div>
```

```css
.a {
    margin-bottom: 50px;
}

.b {
    margin-top: 100px;
}
```

实际上：

```text
间距 = 100px
```

浏览器取最大值。

这叫：

```text
Margin Collapse
外边距合并
```

---

### 父子元素塌陷

```html
<div class="parent">
    <div class="child"></div>
</div>
```

```css
.child {
    margin-top: 100px;
}
```

可能出现：

```text
父元素整体向下移动100px
```

而不是：

```text
子元素在父元素内部下移100px
```

---

### 为什么发生？

当父元素：

```text
没有 border
没有 padding
```

时：

```text
子元素 margin-top
会跑到父元素外面
```

---

### 解决方法

#### 方法1：添加 padding

```css
.parent {
    padding-top: 1px;
}
```

---

#### 方法2：添加 border

```css
.parent {
    border: 1px solid transparent;
}
```

---

#### 方法3：overflow

```css
.parent {
    overflow: hidden;
}
```

---

#### 方法4：flex

```css
.parent {
    display: flex;
}
```

现代开发最常用。

---

## 12.7 Padding（内边距）

### 什么是 Padding

Padding 用于控制：

```text
内容(content)
与
边框(border)
之间的距离
```

位置：

```text
border
↓
padding
↓
content
```

---

## 12.8 Padding 简写

### 一个值

```css
padding: 20px;
```

表示：

```text
上右下左
20px
```

---

### 两个值

```css
padding: 20px 10px;
```

表示：

```text
上下20px
左右10px
```

---

### 三个值

```css
padding: 20px 10px 5px;
```

表示：

```text
上20px
左右10px
下5px
```

---

### 四个值

```css
padding: 20px 10px 5px 30px;
```

表示：

```text
上 20
右 10
下 5
左 30
```

---

## 12.9 单独设置 Padding

```css
padding-top: 20px;
padding-right: 20px;
padding-bottom: 20px;
padding-left: 20px;
```

---

## 12.10 Padding 可取值

### length

```css
padding: 20px;
```

---

### %

```css
padding: 10%;
```

同样：

```text
百分比参考父元素宽度
```

---

## 12.11 Padding 与 Margin 区别

### Padding

```text
内容与边框之间距离
```

```css
padding: 20px;
```

效果：

```text
┌─────────┐
│         │
│ content │
│         │
└─────────┘
```

---

### Margin

```text
元素与元素之间距离
```

```css
margin: 20px;
```

效果：

```text
┌─────┐

↑20px

┌─────┐
```

---

## 12.12 Padding 会影响盒子大小

默认：

```css
box-sizing: content-box;
```

例如：

```css
.box {
    width: 200px;
    padding: 20px;
}
```

最终宽度：

```text
200 + 20 + 20
=
240px
```

---

## 12.13 Box-Sizing

### content-box（默认）

```css
box-sizing: content-box;
```

表示：

```text
width
=
content宽度
```

最终宽度：

```text
content
+
padding
+
border
```

---

### border-box

```css
box-sizing: border-box;
```

表示：

```text
width
=
整个盒子宽度
```

例如：

```css
.box {
    width: 200px;
    padding: 20px;
    border: 10px solid red;

    box-sizing: border-box;
}
```

计算：

```text
content
=
200
-20
-20
-10
-10

=
140px
```

最终宽度：

```text
200px
```

---

## 12.14 Background 与 Padding

默认：

```css
background-clip: border-box;
```

背景颜色会覆盖：

```text
content ✔
padding ✔
border下方 ✔
margin ✘
```

即：

```css
background-color: lightblue;
```

看到的是：

```text
整个盒子都有背景色

除了margin
```

---
# 13. box-sizing

## 13.1 什么是 box-sizing

`box-sizing` 用于定义浏览器如何计算元素的总宽度和总高度。

即：

```text
width 和 height
到底表示内容区大小
还是整个盒子大小
```

---

## 13.2 content-box（默认值）

```css
box-sizing: content-box;
```

特点：

```text
width = content宽度
height = content高度
```

设置：

```css
.box {
    width: 200px;
    padding: 20px;
    border: 10px solid black;
}
```

计算：

```text
总宽度
=
content
+
padding-left
+
padding-right
+
border-left
+
border-right

=
200
+
20
+
20
+
10
+
10

=
260px
```

即：

```text
padding 和 border
会增加元素最终尺寸
```

---

## 13.3 border-box

```css
box-sizing: border-box;
```

特点：

```text
width = 整个盒子宽度
height = 整个盒子高度
```

设置：

```css
.box {
    width: 200px;
    padding: 20px;
    border: 10px solid black;

    box-sizing: border-box;
}
```

计算：

```text
content宽度
=
200
-
20
-
20
-
10
-
10

=
140px
```

最终：

```text
盒子总宽度
=
200px
```

即：

```text
padding 和 border
不会增加元素最终尺寸

而是压缩 content 区域
```

---

## 13.4 content-box 与 border-box 对比

| 属性 | content-box | border-box |
|--------|--------|--------|
| 默认值 | √ | × |
| width表示 | 内容区宽度 | 整个盒子宽度 |
| padding影响总宽度 | √ | × |
| border影响总宽度 | √ | × |
| content区域会被压缩 | × | √ |

---

# 14. 定位（Position）


`position` 用于指定元素在页面中的定位方式。

```css
position: static;
```

通过：

```css
top
right
bottom
left
```

控制元素的位置。

---

## 14.2 定位元素（Positioned Element）

只要元素的：

```css
position
```

不是：

```css
static
```

那么该元素就是：

```text
定位元素（Positioned Element）
```

即：

```css
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

都属于定位元素。

---

## 14.3 top、right、bottom、left

用于控制定位元素的位置。

```css
top: 20px;
right: 20px;
bottom: 20px;
left: 20px;
```

含义：

```text
top
↓
距离上边距离

right
↓
距离右边距离

bottom
↓
距离下边距离

left
↓
距离左边距离
```

注意：

```css
position: static;
```

时：

```css
top
right
bottom
left
```

全部无效。

---

# 14.4 static（默认定位）

默认值：

```css
position: static;
```

特点：

```text
正常文档流
```

元素按照：

```html
HTML书写顺序
```

排列。

---

例如：

```html
<div>A</div>
<div>B</div>
<div>C</div>
```

显示：

```text
A
B
C
```

---

此时：

```css
top
left
right
bottom
z-index
```

全部无效。

---

# 14.5 relative（相对定位）

```css
position: relative;
```

特点：

```text
相对于自身原来的位置移动
```

---

例如：

```css
.box {
    position: relative;

    left: 50px;
    top: 20px;
}
```

效果：

```text
原位置
↓

向右50px
向下20px
```

---

## relative 最大特点

元素原来的位置仍然保留。

例如：

```text
A
B
C
```

B：

```css
position: relative;
left: 100px;
```

显示：

```text
A

      B

C
```

但是：

```text
B原来的位置仍然占着
```

所以：

```text
C不会上来
```

---

## 为什么经常写 relative

因为：

```css
position: relative;
```

可以作为：

```text
absolute的参考点
```

例如：

```css
.parent {
    position: relative;
}
```

---

# 14.6 absolute（绝对定位）

```css
position: absolute;
```

特点：

```text
脱离文档流
```

---

例如：

```css
.box {
    position: absolute;
}
```

效果：

```text
不再占据原来的位置
```

---

## absolute 的参考对象

规则：

```text
寻找最近的非static祖先元素
```

即：

```css
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

都可以作为参考。

---

例如：

```html
<div class="parent">
    <div class="child"></div>
</div>
```

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 0;
    left: 0;
}
```

结果：

```text
child
相对于parent左上角定位
```

---

如果找不到：

```css
position: relative;
```

则：

```text
参考浏览器窗口
```

---

## absolute + relative


```css
.parent {
    position: relative;
}

.child {
    position: absolute;
}
```


---

# 14.7 fixed（固定定位）

```css
position: fixed;
```

特点：

```text
脱离文档流
```

并且：

```text
始终相对于浏览器窗口
```

---

例如：

```css
.box {
    position: fixed;

    right: 20px;
    bottom: 20px;
}
```

效果：

```text
右下角悬浮
```

---

滚动页面：

```text
元素不会移动
```

---

常见用途：

```text
返回顶部按钮
客服按钮
导航栏
悬浮菜单
```

---

# 14.8 sticky（粘性定位）

```css
position: sticky;
```

特点：

```text
relative + fixed
的结合
```

---

例如：

```css
.title {
    position: sticky;
    top: 0;
}
```

效果：

```text
未滚动
↓
像relative

滚动到顶部
↓
像fixed
```

---

常见用途：

```text
吸顶导航栏
目录栏
分类标题
```

---

# 14.9 z-index

控制元素层级。

```css
z-index: 1;
```

数字越大：

```text
越靠上
```

例如：

```css
.box1 {
    z-index: 1;
}

.box2 {
    z-index: 10;
}
```

结果：

```text
box2覆盖box1
```

---

注意：

```css
z-index
```

只对：

```text
定位元素
```

有效。

即：

```css
relative
absolute
fixed
sticky
```

---

# 14.10 Position 对比

| 属性 | 是否脱离文档流 | 参考对象 |
|--------|--------|--------|
| static | × | 无 |
| relative | × | 自己原来的位置 |
| absolute | √ | 最近非static祖先 |
| fixed | √ | 浏览器窗口 |
| sticky | ×（部分时间） | 滚动容器 |

---

# 15. 浮动（Float）

## 15.1 什么是 Float

`float` 用于让元素向左或向右排列。

实现文字环绕图片

```html
<img src="cat.jpg">
<p>这是一段文字...</p>
```

```css
img {
    float: left;
}
```

效果：

```text
┌────┐ 文字文字文字文字
│图片│ 文字文字文字文字
│图片│ 文字文字文字文字
└────┘ 文字文字文字文字
```

---

## 15.2 Float 的取值

### 左浮动

```css
float: left;
```

效果：

```text
所有元素向左排列
```

例如：

```css
.box {
    float: left;
}
```

显示：

```text
┌──┐┌──┐┌──┐
│A ││B ││C │
└──┘└──┘└──┘
```

---

### 右浮动

```css
float: right;
```

效果：

```text
所有元素向右排列
```

显示：

```text
                ┌──┐
          ┌──┐  │C │
┌──┐      │B │  └──┘
│A │      └──┘
└──┘
```

---

### 不浮动

```css
float: none;
```

默认值。

---

## 15.3 Float 的特点

### 1. 脱离普通文档流

例如：

```html
<div class="box"></div>
<p>文字</p>
```

```css
.box {
    float: left;
}
```

结果：

```text
文字会上来环绕浮动元素
```

---

### 2. 保留部分流动性

这是 float 和 absolute 最大区别。

#### absolute

```css
position: absolute;
```

完全脱离文档流。

后面元素会认为：

```text
这个元素不存在
```

---

#### float

```css
float: left;
```

后面文字仍然会避开它。

```text
文字会围绕它排列
```

---

### 3. 会影响 display

例如：

```css
span {
    display: inline;
    float: left;
}
```

浏览器会自动变成：

```css
display: block;
```

所以：

```text
浮动元素都可以设置宽高
```

---

## 15.4 浮动布局

例如：

```html
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
```

```css
.box {
    width: 100px;
    height: 100px;

    float: left;
}
```

效果：

```text
┌───┐┌───┐┌───┐
│ A ││ B ││ C │
└───┘└───┘└───┘
```

---

## 15.5 浮动导致的问题

### 父元素高度塌陷

例如：

```html
<div class="parent">
    <div class="child"></div>
</div>
```

```css
.parent {
    background: lightblue;
}

.child {
    width: 100px;
    height: 100px;

    float: left;
}
```

结果：

```text
parent高度变成0
```

因为：

```text
浮动元素脱离普通文档流
```

父元素计算高度时：

```text
看不到child
```

---

## 15.6 清除浮动（Clear）

用于控制：

```text
当前元素不能与浮动元素同行
```

---

### clear:left

```css
clear: left;
```

表示：

```text
清除左侧浮动
```

---

### clear:right

```css
clear: right;
```

表示：

```text
清除右侧浮动
```

---

### clear:both

```css
clear: both;
```

表示：

```text
同时清除左右浮动
```

开发最常用。

---

## 15.7 清除浮动示例

```html
<div class="left"></div>

<div class="clear"></div>

<p>文字</p>
```

```css
.left {
    float: left;
}

.clear {
    clear: both;
}
```

效果：

```text
┌────┐
│浮动│
└────┘

文字
```

文字被强制放到下面。

---

## 15.8 解决高度塌陷



### 方法：伪元素

```css
.parent::after {
    content: "";

    display: block;
    clear: both;
}
```

---


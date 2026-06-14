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

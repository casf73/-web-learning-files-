# HTML 学习笔记

## 1. HTML 文件结构

### HTML 代码示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web应用课</title>
</head>
<body>
    <h1>第一讲</h1>
</body>
</html>
```

### 常见标签说明

| 标签                | 作用          |
| ----------------- | ----------- |
| `<!DOCTYPE html>` | 声明 HTML5 文档 |
| `<html>`          | HTML 根标签    |
| `<head>`          | 页面配置信息      |
| `<body>`          | 页面主体内容      |
| `<title>`         | 网页标题        |

---

## 2. 文本标签

### 常用文本标签

大部分的文本标签其实都可以被认为是div和span，通过css调整具体样式形成的

#### `<div>`

块级容器标签。

```html
<div>内容</div>
```

#### `<span>`

行内容器标签。

```html
<span>内容</span>
```

#### 标题标签

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

#### 段落标签

```html
<p>这是一个段落</p>
```

#### 预格式化文本

```html
<pre>
保留空格和换行
</pre>
```

#### 水平分割线

```html
<hr>
```

#### 斜体

```html
<i>斜体文字</i>
```

#### 粗体

```html
<b>粗体文字</b>
```

#### 删除线

```html
<del>删除线文字</del>
```

---

## 3. 图片

### 图片标签

```html
<img src="图片地址" alt="图片描述">
```

### 常用属性

| 属性       | 作用           |
| -------- | ------------ |
| `src`    | 图片路径         |
| `alt`    | 图片加载失败时显示的文本 |
| `width`  | 图片宽度         |
| `height` | 图片高度         |

### 示例

```html
<img
    src="./images/html.png"
    alt="HTML Logo"
    width="300">
```

---

## 4. 音频与视频

### 音频

```html
<audio controls>
    <source src="/audios/sound1.mp3" type="audio/mpeg">
    <source src="/audios/sound2.mp3" type="audio/mpeg">
</audio>
```

### 视频

```html
<video controls width="800">
    <source src="/videos/video1.mp4" type="video/mp4">
    <source src="/videos/video2.mp4" type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
</video>
```

### 常用属性

| 属性         | 作用     |
| ---------- | ------ |
| `controls` | 显示播放控件 |
| `autoplay` | 自动播放   |
| `loop`     | 循环播放   |
| `muted`    | 静音     |
| `width`    | 视频宽度   |

---

## 5. 超链接

### 超链接标签

```html
<a href="https://www.baidu.com">
    百度
</a>
```

### 常用属性

| 属性                | 作用     |
| ----------------- | ------ |
| `href`            | 跳转地址   |
| `target="_blank"` | 新标签页打开 |

### 示例

```html
<a
    href="https://www.baidu.com"
    target="_blank">
    百度
</a>
```

---

## 6. 表单

### form

用于收集用户信息。

```html
<form>
</form>
```

### 常用表单元素

#### label

```html
<label for="username">
    用户名
</label>
```

#### input

```html
<input type="text">
```

常见类型：

```html
<input type="text">
<input type="password">
<input type="email">
<input type="number">
<input type="radio">
<input type="checkbox">
<input type="file">
```

#### textarea 可以改变大小的文本输入框

```html
<textarea></textarea>
```

#### button

```html
<button>提交</button>
```

#### select

```html
<select>
    <option>选项1</option>
    <option>选项2</option>
</select>
```

### 示例

```html
<label for="pet-select">
    Choose a pet:
</label>

<select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>
```

---

## 7. 列表

### 无序列表

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

效果：

* HTML
* CSS
* JavaScript

---

### 有序列表

```html
<ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ol>
```

效果：

1. HTML
2. CSS
3. JavaScript

---

### 列表项

```html
<li></li>
```

表示列表中的一项。

---

## 8. 表格

### 表格示例

```html
<table>
    <caption>My Table</caption>

    <thead>
        <tr>
            <th colspan="2">
                The table header
            </th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>
```

### 常用标签

| 标签        | 作用    |
| --------- | ----- |
| `table`   | 创建表格  |
| `caption` | 表格标题  |
| `thead`   | 表头    |
| `tbody`   | 表体    |
| `tr`      | 表格行   |
| `th`      | 表头单元格 |
| `td`      | 数据单元格 |

---

## 9. 语义标签

HTML5 提供了一系列描述页面结构的标签。

### 常见语义标签

```html
<header></header>

<nav></nav>

<main></main>

<section></section>

<article></article>

<aside></aside>

<footer></footer>
```

### 作用

* 提高代码可读性
* 有利于 SEO
* 更符合网页结构设计

### 结构图

```md
header
│
├── nav
│
├── main
│   ├── section
│   ├── article
│   └── aside
│
└── footer
```
---

### 其他常见语义标签

#### `<figure>`

表示独立内容容器。

通常用于：

* 图片
* 图表
* 插图
* 代码块
* 示例内容

示例：

```html
<figure>
    <img src="html.png"
         alt="HTML Logo">
</figure>
```

---

#### `<figcaption>`

表示 `figure` 的标题或说明文字。

通常与 `figure` 搭配使用。

示例：

```html
<figure>
    <img src="html.png"
         alt="HTML Logo">

    <figcaption>
        HTML5 Logo
    </figcaption>
</figure>
```

效果：

```text
┌───────────┐
│   图片     │
└───────────┘

HTML5 Logo
```

---

### figure 与 div 的区别

传统写法：

```html
<div class="image">
    <img src="html.png">

    <div class="caption">
        HTML5 Logo
    </div>
</div>
```

HTML5 语义化写法：

```html
<figure>
    <img src="html.png">

    <figcaption>
        HTML5 Logo
    </figcaption>
</figure>
```

优点：

* 代码可读性更高
* 语义更明确
* 更有利于 SEO
* 更符合 HTML5 规范

---

### 常见语义标签总结

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

用于描述网页整体结构。

---

```html
<aside>
<figure>
<figcaption>
<details>
<summary>
<time>
<mark>
```

用于增强页面语义化。

---

### 推荐网页结构

```html
<body>

<header>
    网站头部
</header>

<nav>
    导航栏
</nav>

<main>

    <section>

        <article>

            <h1>文章标题</h1>

            <figure>
                <img src="html.png">

                <figcaption>
                    HTML5 Logo
                </figcaption>
            </figure>

        </article>

    </section>

</main>

<footer>
    网站页脚
</footer>

</body>
```


---

## 10. HTML 特殊符号

### 常用特殊字符

| 显示  | 写法        |
| --- | --------- |
| `<` | `&lt;`    |
| `>` | `&gt;`    |
| `&` | `&amp;`   |
| 空格  | `&nbsp;`  |
| ©   | `&copy;`  |
| ™   | `&trade;` |
| ¥   | `&yen;`   |

---




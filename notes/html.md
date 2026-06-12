# HTML 学习笔记

- ## html基础标签
  - 1.html文件结构
    - html代码示例
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
  - 2.文本标签
    - 大部分文本标签都可以看成&lt;div&gt;与 &lt;span&gt;
    - &lt;div&gt;
    - &lt;span&gt;
    - &lt;h1&gt; - &lt;h6&gt;
    - &lt;p&gt;
    - &lt;pre&gt;
    - &lt;hr&gt; 生成一个水平线
    - &lt;i&gt; <i>>表示斜体</i>
    - &lt;b&gt; <b>>表示粗体</b>
    - &lt;del&gt; <del>>表示删除线</del>
  - 3.图片
    - &lt;img&gt;
      - src属性表示图片的地址
      - alt属性表示图片无法正常显示后的文本
      - height和width属性用来调节图片的大小
  - 4.音频与视频
    - &lt;audio&gt; 和&lt;video&gt;
      - 同样使用src表示地址
      - 如果有多个资源则浏览器会从上往下尝试加载
```html
<audio controls>
    <source src="/audios/sound1" type="audio/mpeg"/>
    <source src="/audios/sound2" type="audio/mpeg"/>
</audio>

<video controls width="800">

    <source src="/videos/video1.mp4"
            type="video/mp4">

    <source src="/videos/video2.mp4"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
</video>
```
  - 5.超链接
    - &lt;a&gt;
      - href表示跳转的链接
      - target="blank" 表示新开一个标签页打开网站
  - 6.表单
    - &lt;form&gt;用来需要向用户收集信息的时候使用
      - 每个标签都可以使用&lt;label&gt;修饰
      - 包括input的各种类型输入
      - textarea
      - button
      - select
```html
<label for="pet-select">Choose a pet:</label>

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
  - 7.列表
    - 分别为&lt;ul&gt; 和 &lt;ol&gt;列表
    - &lt;li&gt;是用来表示一行的
  - 8.表格
    - &lt;table&gt;创建一个表格
    -  &lt;caption&gt;表示表格的标题
    -  &lt;thead&gt;表示表格的列头
    -  &lt;tbody&gt; 表示表格的数据
    -  &lt;tr&gt; 表示一行
    -  &lt;th&gt; 用来表示表头行
    -  &lt;td&gt; 用来表示数据行
  - 9.语义标签
    - <img src="/assets/images/语义标签.gif">
  - 10.特殊符号
    -  <img src="/assets/images/特殊符号.png">

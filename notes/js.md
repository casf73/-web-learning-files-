# JS 学习笔记

---

# 1 JavaScript 调用方式

JavaScript 的调用方式本质是：代码在什么时间执行 + 由什么触发执行。

---

## ES6模块化调用（import/export）

### HTML

```html
<script type="module">
import { main } from "./index.js";
main();
</script>
```

### JS

```js
export function main() {
    console.log("hello");
}
```

特点：
- 现代前端开发标准
- 必须 type="module"
- 支持模块化

---

# 2 let 与 const

用于声明变量，作用范围为当前作用域。

- `let` 用来定义变量（可变）
- `const` 用来定义常量（不可变）

---

## 2.1 示例

```js
let s = "acwing", x = 5;

let d = {
    name: "yxc",
    age: 18,
};

const n = 100;
```

---

## 2.2 变量类型

### number（数值类型）
```js
1, 2.5
```

---

### string（字符串）
```js
"acwing", 'yxc'
```

特点：
- 单引号和双引号都可以
- 字符串中的每个字符都是只读的

---

### boolean（布尔值）
```js
true, false
```

---

### object（对象）
类似于“键值对集合”，类似 C++ 指针/结构体概念：

```js
[1, 2, 3]

{name: "yxc", age: 18}

null
```

---

### undefined（未定义）
```js
let a;
console.log(a); // undefined
```

---

## 2.3 类型特点

JavaScript 中变量类型是**动态变化的**：

```js
let x = 1;
x = "hello";
x = true;
```

---

## 2.4 运算符

### 常见运算符

- `+` 加法
- `-` 减法
- `*` 乘法
- `/` 除法
- `**` 幂运算（指数）

```js
2 ** 3 // 8
```

---

### 比较运算符

等于: ===
不等于 !==

---

# 3 格式化字符串

---

## 3.1 字符串中插入变量（模板字符串）

使用反引号 `` ` ` `` 和 `${}` 插入变量：

```js
let name = "yxc", age = 18;

let s = `My name is ${name}, I'm ${age} years old.`;
```

特点：
- 使用反引号 `` ` ``
- `${}` 中可以写变量或表达式
- 比字符串拼接更清晰

---

## 3.2 定义多行字符串

```js
let s = `
<div>
    <h2>标题</h2>
    <p>段落</p>
</div>
`;
```

特点：
- 支持直接换行
- 常用于生成 HTML 结构
- 不需要 `+` 拼接

---

## 3.3 保留小数位（toFixed）

```js
let x = 1.234567;

let s = `${x.toFixed(2)}`;
```

输出：

```text
1.23
```

特点：
- 控制小数位数
- 返回字符串类型
- 常用于金额 / 精度显示

---

# 4 Object 对象

---

## 4.1 基本概念

类似于 C++ 中的 `map`，由 `key : value` 组成。

```js
let person = {
    name: "yxc",
    age: 18,
    money: 0,
    add_money: function (x) {
        this.money += x;
    }
};
```

---

## 4.2 对象特点

- `value` 可以是：
  - 数值
  - 字符串
  - 数组
  - 对象
  - 函数

```js
let obj = {
    a: 1,
    b: "hello",
    c: [1, 2, 3],
    d: { x: 10 },
    e: function () {
        console.log("hi");
    }
};
```

---

## 4.3 this 的作用

```js
this.money += x;
```

### 含义：
- `this` 指当前对象本身
- 用来访问对象内部属性

---

## 4.4 对象属性访问方式

### 方式1：点语法

```js
person.name;
person.add_money();
```

---

### 方式2：方括号语法

```js
person["name"];
person["add_money"]();
```

---

## 4.5 两种方式区别

| 方式 | 特点 |
|------|------|
| . | 简洁直观 |
| []  | 变量 key / 动态访问 |

---

## 4.6 示例调用

```js
person.add_money(100);
console.log(person.money);
```

---

# 5 JavaScript 数组（Array）

---

## 5.1 数组的概念

数组是一种特殊的对象。

类似于 C++ 中的数组，但 JS 数组的特点是：

> 元素类型可以不同

---

## 5.2 数组示例

```js
let a = [1, 2, "a", "lyy"];
```

---

## 5.3 数组可以包含任意类型

```js
let b = [
    1,                  // 数字
    "lyy",             // 字符串
    ["a", "b", 3],    // 数组
    function () {     // 函数
        console.log("Hello World");
    },
    { name: "lyy", age: 18 } // 对象
];
```

---

## 5.4 访问数组元素

通过下标访问（从 0 开始）

```js
a[0] = 1;

console.log(a[0]);
```

---

## 5.5 数组常用属性与方法

### length（长度）

```js
a.length;
```

特点：
- 是属性，不是函数
- 不需要加 ()

---

### push（尾部添加）

```js
a.push(10);
```

---

### pop（尾部删除）

```js
a.pop();
```

---

### splice（删除/替换）

```js
a.splice(1, 2);
```

含义：
- 从下标 1 开始
- 删除 2 个元素

---

### sort（排序）

```js
a.sort();
```

---

## 5.6 自定义排序

```js
a.sort((x, y) => x - y);
```

含义：
- 返回 < 0：x 在前
- 返回 > 0：y 在前
- 返回 = 0：不变

---

# 6. 函数

## 箭头函数

```js
const show = () => {
    console.log("这是箭头函数");
};

show();
```

带参数：

```js
const add = (a, b) => {
    return a + b;
};

console.log(add(3, 5));
```

如果函数体只有一行，并且直接返回结果，可以简写：

```js
const add = (a, b) => a + b;
```

等价于：

```js
const add = (a, b) => {
    return a + b;
};
```

---
# 7.类

js中的类跟java中差不多

## 定义

- 创建类，创建类的示例
- 继承
- 静态方法与静态变量
这些都与java中一样

---

# 8. 事件

## 8.1 事件是什么

JavaScript 中的代码很多时候不是一打开页面就执行，而是等用户做了某些操作后再执行。

这些操作就叫做事件。

例如：

```txt
点击按钮
按下键盘
输入内容
鼠标移动
页面加载完成
窗口大小改变
```

简单理解：

```txt
事件 = 用户或浏览器发生的某种行为
```

---

## 8.2 addEventListener 绑定事件

可以通过 `addEventListener()` 给元素绑定事件。

基本语法：

```js
元素.addEventListener("事件名", () => {
    // 事件触发后执行的代码
});
```

例如：

```js
let btn = document.querySelector("click");

btn.addEventListener("click", () => {
    console.log("按钮被点击了");
});
```

意思是：

```txt
当按钮被点击时，执行里面的代码
```

---

## 8.3 鼠标事件

### 8.3.1 click

`click` 表示鼠标左键点击。

```js
btn.addEventListener("click", () => {
    console.log("点击了按钮");
});
```

---

### 8.3.2 dblclick

`dblclick` 表示鼠标左键双击。

```js
btn.addEventListener("dblclick", () => {
    console.log("双击了按钮");
});
```

---

### 8.3.3 contextmenu

`contextmenu` 表示鼠标右键点击，通常会弹出右键菜单。

```js
box.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    console.log("右键点击");
});
```

`e.preventDefault()` 可以阻止浏览器默认右键菜单。

---

### 8.3.4 mousedown

`mousedown` 表示鼠标按下。

```js
box.addEventListener("mousedown", (e) => {
    console.log("鼠标按下");
});
```

可以通过：

```js
e.button
```

判断按下的是哪个鼠标键。

```txt
0：鼠标左键
1：鼠标中键
2：鼠标右键
```

例如：

```js
box.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        console.log("按下左键");
    } else if (e.button === 1) {
        console.log("按下中键");
    } else if (e.button === 2) {
        console.log("按下右键");
    }
});
```

---

### 8.3.5 mouseup

`mouseup` 表示鼠标松开。

```js
box.addEventListener("mouseup", (e) => {
    console.log("鼠标松开");
});
```

同样也可以用：

```js
e.button
```

判断松开的是哪个鼠标键。

---

## 8.4 键盘事件

### 8.4.1 keydown

`keydown` 表示键盘按键被按下。

```js
document.addEventListener("keydown", (e) => {
    console.log("按下了键盘");
});
```

如果按住不松，`keydown` 可能会连续触发。

可以通过：

```js
e.code
```

判断按下的是哪个键。

例如：

```js
document.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        console.log("按下了 Enter");
    }
});
```

---

### 8.4.2 keyup

`keyup` 表示键盘按键被松开。

```js
document.addEventListener("keyup", (e) => {
    console.log("键盘松开");
});
```

可以通过：

```js
e.key
```

判断松开的键。

例如：

```js
document.addEventListener("keyup", (e) => {
    if (e.key === "a") {
        console.log("松开了 a 键");
    }
});
```


---

## 8.5 键盘事件中的常用属性

### 8.5.1 e.key

`e.key` 表示用户实际按下的键值。

```js
document.addEventListener("keydown", (e) => {
    console.log(e.key);
});
```

例如：

```txt
a
A
Enter
Shift
Control
Escape
ArrowLeft
```

常见判断：

```js
if (e.key === "Enter") {
    console.log("按下 Enter");
}
```

---

### 8.5.2 e.code

`e.code` 表示键盘上的物理按键位置。

```js
document.addEventListener("keydown", (e) => {
    console.log(e.code);
});
```

例如：

```txt
KeyA
Enter
Space
ArrowLeft
```

简单区别：

```txt
e.key  看输入结果
e.code 看键盘位置
```

---

### 8.5.3 e.altKey / e.ctrlKey / e.shiftKey

这三个属性用来判断是否同时按下了功能键。

```js
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey) {
        console.log("按住了 Ctrl");
    }

    if (e.shiftKey) {
        console.log("按住了 Shift");
    }

    if (e.altKey) {
        console.log("按住了 Alt");
    }
});
```

例如判断 `Shift + Enter`：

```js
input.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.key === "Enter") {
        console.log("按下了 Shift + Enter");
    }
});
```

---

## 8.6 表单事件

### 8.6.1 focus

`focus` 表示元素获得焦点。

例如点击输入框后，输入框进入可输入状态。

```js
input.addEventListener("focus", () => {
    console.log("输入框获得焦点");
});
```

---

### 8.6.2 blur

`blur` 表示元素失去焦点。

```js
input.addEventListener("blur", () => {
    console.log("输入框失去焦点");
});
```

---

### 8.6.3 change

`change` 表示表单内容发生改变，并且失去焦点后触发。

```js
input.addEventListener("change", () => {
    console.log("输入内容发生改变");
});
```

---

### 8.6.4 input

`input` 表示输入框内容正在发生变化。

```js
input.addEventListener("input", () => {
    console.log(input.value);
});
```

如果想实现输入框和页面内容同步：

```js
input.addEventListener("input", () => {
    output.textContent = input.value;
});
```

---

## 8.7 窗口事件

窗口事件一般绑定在：

```js
window
```

上。

---

### 8.7.1 load

`load` 表示页面资源加载完成后触发。

```js
window.addEventListener("load", () => {
    console.log("页面加载完成");
});
```

常用于页面加载完后再执行 JS。

---

### 8.7.2 resize

`resize` 表示窗口大小发生变化。

```js
window.addEventListener("resize", () => {
    console.log("窗口大小改变");
});
```

---

### 8.7.3 scroll

`scroll` 表示页面发生滚动。

```js
window.addEventListener("scroll", () => {
    console.log("页面正在滚动");
});
```

---

## 8.8 事件对象 event

事件触发时，浏览器会自动传入一个事件对象。

写成：

```js
element.addEventListener("click", (e) => {
    console.log(e);
});
```
`e` 里面保存了本次事件的信息。

例如：

```txt
鼠标按了哪个键
键盘按了哪个键
事件发生在哪个元素上
鼠标位置在哪里
是否按住了 Ctrl / Shift / Alt
```

---


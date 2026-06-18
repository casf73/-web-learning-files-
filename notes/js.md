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
# 9. JavaScript 定时器

## 9.1 setTimeout()

`setTimeout()` 用来设置一个**一次性定时器**。

语法：

```js
setTimeout(func, delay);
```

含义：

```txt
delay 毫秒之后，执行一次函数 func()
```

其中：

- `func`：要执行的函数
- `delay`：延迟时间，单位是毫秒

例如：

```js
setTimeout(() => {
    console.log("Hello World!");
}, 2000);
```

表示：

```txt
2 秒后在控制台输出 "Hello World!"
```

注意：

```txt
1000 毫秒 = 1 秒
2000 毫秒 = 2 秒
```

---

## 9.2 clearTimeout()

`clearTimeout()` 用来**取消 setTimeout 定时器**。

如果定时器还没有执行，可以用 `clearTimeout()` 将它清除。

例如：

```js
let timeout_id = setTimeout(() => {
    console.log("Hello World!");
}, 2000);

clearTimeout(timeout_id);
```

解释：

```txt
原本 2 秒后要输出 "Hello World!"
但是调用 clearTimeout(timeout_id) 后
这个定时器被清除了
所以最终不会输出内容
```

重点：

```js
let timeout_id = setTimeout(...);
```

`setTimeout()` 会返回一个定时器编号，需要用变量保存。

取消定时器时：

```js
clearTimeout(timeout_id);
```

---

## 9.3 setInterval()

`setInterval()` 用来设置一个**周期性定时器**。

语法：

```js
setInterval(func, delay);
```

含义：

```txt
每隔 delay 毫秒，执行一次函数 func()
```

其中：

- `func`：要周期性执行的函数
- `delay`：每次执行之间的间隔时间，单位是毫秒

例如：

```js
let interval_id = setInterval(() => {
    console.log("Hello World!");
}, 2000);
```

表示：

```txt
每隔 2 秒，输出一次 "Hello World!"
```

注意：

```txt
setInterval() 会重复执行
第一次执行也是在 delay 毫秒之后
```

也就是说：

```js
setInterval(() => {
    console.log("Hello World!");
}, 2000);
```

不是立刻执行，而是：

```txt
2 秒后执行第一次
之后每隔 2 秒再执行一次
```

---

## 9.4 clearInterval()

`clearInterval()` 用来**关闭周期性定时器**。

它通常和 `setInterval()` 配合使用。

例如：

```js
let interval_id = setInterval(() => {
    console.log("Hello World!");
}, 2000);

clearInterval(interval_id);
```

解释：

```txt
原本每隔 2 秒要输出一次 "Hello World!"
但是调用 clearInterval(interval_id) 后
这个周期性定时器被清除了
所以不会继续执行
```

重点：

```js
let interval_id = setInterval(...);
```

`setInterval()` 会返回一个定时器编号。

清除时：

```js
clearInterval(interval_id);
```

---

# 10. requestAnimationFrame 动画帧

## 10.1 requestAnimationFrame()

`requestAnimationFrame()` 是 JavaScript 中专门用于制作动画的方法。

语法：

```js
requestAnimationFrame(func);
```

含义：

```txt
在浏览器下一次刷新页面之前，执行一次函数 func()
```

通常会配合递归写法使用，让函数不断执行，从而形成动画效果。

---

## 10.2 基本特点

`requestAnimationFrame()` 会在浏览器准备重新绘制页面之前执行。

它通常可以让函数大约每秒执行 60 次。

因为大多数浏览器/屏幕的刷新频率约为：

```txt
60Hz
```

也就是：

```txt
1 秒刷新约 60 次
1000ms / 60 ≈ 16.7ms
```

所以 `requestAnimationFrame()` 常用于动画。

---

## 10.3 回调函数的参数 timestamp

`requestAnimationFrame()` 调用的函数会自动接收一个参数。

这个参数通常叫：

```js
timestamp
```

表示当前函数执行时的时间戳，单位是毫秒。

例如：

```js
let step = (timestamp) => {
    console.log(timestamp);

    requestAnimationFrame(step);
};

requestAnimationFrame(step);
```

这里每一帧执行时，都会输出当前时间戳。

---

## 10.4 示例：每帧让 div 宽度增加 1px

HTML：

```html
<div></div>
```

CSS：

```css
div {
    width: 100px;
    height: 100px;
    background-color: skyblue;
}
```

JS：

```js
let step = (timestamp) => {
    // 每帧将 div 的宽度增加 1 像素
    let div = document.querySelector("div");

    div.style.width = div.clientWidth + 1 + "px";

    requestAnimationFrame(step);
};

requestAnimationFrame(step);
```

执行过程：

```txt
执行 step()
↓
div 宽度增加 1px
↓
requestAnimationFrame(step)
↓
浏览器下一次刷新前继续执行 step()
↓
不断重复
```

这样就形成了动画效果。

---

## 10.5 递归写法

`requestAnimationFrame()` 最常见的写法是递归调用：

```js
function step() {
    // 每一帧要执行的代码

    requestAnimationFrame(step);
}

requestAnimationFrame(step);
```

注意：

```txt
这里的递归不是立即调用自己
而是让浏览器在下一帧再调用
```

所以不会像普通递归那样马上造成栈溢出。

---

## 10.6 停止动画

如果不加条件，动画会一直执行。

可以通过条件判断来停止：

```js
let width = 100;

function step() {
    let div = document.querySelector("div");

    width += 1;
    div.style.width = width + "px";

    if (width < 300) {
        requestAnimationFrame(step);
    }
}

requestAnimationFrame(step);
```

这里当 `width` 达到 `300px` 后，就不会继续执行动画。

---
# 11. Map 和 Set

## 11.1 Map

`Map` 对象用于保存**键值对**。

可以理解为：

```txt
key => value
```

也就是一个键对应一个值。

---

## 11.2 Map 的特点

`Map` 中的数据是按照插入顺序保存的。

可以使用：

```js
for...of
```

或者：

```js
forEach()
```

按照插入顺序进行遍历。

`Map` 的键可以是任意类型，包括：

```txt
字符串
数字
布尔值
对象
数组
函数
```

普通对象 `{}` 的键通常会被转成字符串，而 `Map` 的键可以保留原本的数据类型。

---

## 11.3 Map 的基本使用

```js
const map = new Map();

map.set("name", "张三");
map.set("age", 18);
map.set("gender", "男");

console.log(map);
```

这里表示保存了三个键值对：

```txt
name => 张三
age => 18
gender => 男
```

---

## 11.4 Map 常用 API

| 方法 / 属性 | 作用 |
|---|---|
| `set(key, value)` | 插入键值对，如果 `key` 已存在，则覆盖原有的 `value` |
| `get(key)` | 查找关键字，如果不存在，返回 `undefined` |
| `size` | 返回键值对数量 |
| `has(key)` | 判断是否包含关键字 `key` |
| `delete(key)` | 删除关键字 `key` |
| `clear()` | 删除所有元素 |

---

## 11.5 set(key, value)

`set()` 用来添加或修改键值对。

```js
const map = new Map();

map.set("name", "张三");
map.set("age", 18);

console.log(map);
```

如果 `key` 已经存在，会覆盖原来的值：

```js
map.set("name", "李四");

console.log(map.get("name")); // 李四
```

---

## 11.6 get(key)

`get()` 用来根据 `key` 获取对应的值。

```js
const map = new Map();

map.set("name", "张三");

console.log(map.get("name")); // 张三
console.log(map.get("age"));  // undefined
```

如果 `key` 不存在，会返回：

```js
undefined
```

---

## 11.7 size

`size` 用来获取 `Map` 中键值对的数量。

```js
const map = new Map();

map.set("name", "张三");
map.set("age", 18);

console.log(map.size); // 2
```

注意：

```txt
size 是属性，不是方法
```

所以不能写成：

```js
map.size();
```

---

## 11.8 has(key)

`has()` 用来判断 `Map` 中是否存在某个 `key`。

```js
const map = new Map();

map.set("name", "张三");

console.log(map.has("name")); // true
console.log(map.has("age"));  // false
```

---

## 11.9 delete(key)

`delete()` 用来删除指定的键值对。

```js
const map = new Map();

map.set("name", "张三");
map.set("age", 18);

map.delete("age");

console.log(map);
```

删除后，`age` 这个键值对就不存在了。

---

## 11.10 clear()

`clear()` 用来清空整个 `Map`。

```js
const map = new Map();

map.set("name", "张三");
map.set("age", 18);

map.clear();

console.log(map.size); // 0
```

---

## 11.11 遍历 Map

### 11.11.1 使用 forEach()

```js
const map = new Map();

map.set("name", "张三");
map.set("age", 18);

map.forEach((value, key) => {
    console.log(key, value);
});
```

注意参数顺序是：

```js
(value, key)
```

也就是：

```txt
第一个参数是 value
第二个参数是 key
```

---

### 11.11.2 使用 for...of

```js
const map = new Map();

map.set("name", "张三");
map.set("age", 18);

for (const [key, value] of map) {
    console.log(key, value);
}
```

这里的：

```js
[key, value]
```

是数组解构。

因为 `Map` 每一项可以看成：

```js
["name", "张三"]
["age", 18]
```

---

## 11.12 Set

`Set` 对象用于存储**唯一值**。

也就是说，`Set` 中不能有重复元素。

---

## 11.13 Set 的特点

`Set` 可以保存任意类型的值，包括：

```txt
基本数据类型
对象引用
数组
函数
```

`Set` 中的值是唯一的。

如果添加重复值，重复的值不会被保存。

---

## 11.14 Set 的基本使用

```js
const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(1);

console.log(set);
```

结果中只会保留一个 `1`。

```txt
Set(3) {1, 2, 3}
```

---

## 11.15 Set 常用 API

| 方法 / 属性 | 作用 |
|---|---|
| `add()` | 添加元素 |
| `has()` | 判断是否包含某个元素 |
| `size` | 返回元素数量 |
| `delete()` | 删除某个元素 |
| `clear()` | 删除所有元素 |

---

## 11.16 add()

`add()` 用来向 `Set` 中添加元素。

```js
const set = new Set();

set.add("苹果");
set.add("香蕉");
set.add("橘子");

console.log(set);
```

如果添加重复元素：

```js
set.add("苹果");
set.add("苹果");
set.add("苹果");

console.log(set);
```

最终只会保留一个 `"苹果"`。

---

## 11.17 has()

`has()` 用来判断 `Set` 中是否存在某个元素。

```js
const set = new Set();

set.add("苹果");

console.log(set.has("苹果")); // true
console.log(set.has("香蕉")); // false
```

---

## 11.18 size

`size` 用来获取 `Set` 中元素的数量。

```js
const set = new Set();

set.add(1);
set.add(2);
set.add(3);

console.log(set.size); // 3
```

注意：

```txt
size 是属性，不是方法
```

不能写成：

```js
set.size();
```

---

## 11.19 delete()

`delete()` 用来删除指定元素。

```js
const set = new Set();

set.add("苹果");
set.add("香蕉");

set.delete("香蕉");

console.log(set);
```

删除后，`Set` 中就没有 `"香蕉"` 了。

---

## 11.20 clear()

`clear()` 用来清空整个 `Set`。

```js
const set = new Set();

set.add(1);
set.add(2);
set.add(3);

set.clear();

console.log(set.size); // 0
```

---

## 11.21 遍历 Set

### 11.21.1 使用 forEach()

```js
const set = new Set();

set.add("苹果");
set.add("香蕉");
set.add("橘子");

set.forEach((value) => {
    console.log(value);
});
```

---

### 11.21.2 使用 for...of

```js
const set = new Set();

set.add("苹果");
set.add("香蕉");
set.add("橘子");

for (const value of set) {
    console.log(value);
}
```

---

## 11.22 Set 常见用途：数组去重

`Set` 最常见的用途之一是数组去重。

```js
const arr = [1, 2, 2, 3, 3, 4];

const newArr = [...new Set(arr)];

console.log(newArr);
```

输出：

```js
[1, 2, 3, 4]
```

这里：

```js
new Set(arr)
```

会自动去掉重复值。

```js
[...new Set(arr)]
```

会把 `Set` 再转换回数组。

---

# 12. localStorage


`localStorage` 是浏览器提供的一种**本地存储方式**。

它可以在用户的浏览器中保存数据。

简单理解：

```txt
localStorage 可以把数据存到浏览器里
即使刷新页面，数据也不会消失
```

例如：

```js
localStorage.setItem("name", "张三");
```

这行代码会把 `"张三"` 保存到浏览器中。

---

## 12.2 localStorage 的特点

`localStorage` 的特点：

```txt
1. 数据保存在浏览器中
2. 刷新页面后数据仍然存在
3. 关闭浏览器后数据通常也还在
4. 数据以键值对形式保存
5. key 和 value 都是字符串
```

可以理解为：

```txt
key => value
```

例如：

```txt
"name" => "张三"
"age"  => "18"
```

---

## 12.3 常用 API

| 方法 | 作用 |
|---|---|
| `setItem(key, value)` | 插入或修改数据 |
| `getItem(key)` | 查找数据 |
| `removeItem(key)` | 删除指定数据 |
| `clear()` | 清空所有数据 |

---

## 12.4 setItem(key, value)

`setItem()` 用来向 `localStorage` 中保存数据。

语法：

```js
localStorage.setItem(key, value);
```

例如：

```js
localStorage.setItem("username", "admin");
```

表示：

```txt
把 username 这个 key 保存到浏览器中
它对应的 value 是 admin
```

如果这个 `key` 已经存在，再次设置会覆盖原来的值。

```js
localStorage.setItem("username", "admin");
localStorage.setItem("username", "root");

console.log(localStorage.getItem("username")); // root
```

---

## 12.5 getItem(key)

`getItem()` 用来获取保存的数据。

语法：

```js
localStorage.getItem(key);
```

例如：

```js
localStorage.setItem("username", "admin");

let username = localStorage.getItem("username");

console.log(username); // admin
```

如果这个 `key` 不存在，会返回：

```js
null
```

例如：

```js
console.log(localStorage.getItem("age")); // null
```

---

## 12.6 removeItem(key)

`removeItem()` 用来删除指定的数据。

语法：

```js
localStorage.removeItem(key);
```

例如：

```js
localStorage.setItem("username", "admin");

localStorage.removeItem("username");

console.log(localStorage.getItem("username")); // null
```

删除后，就不能再通过这个 `key` 获取对应数据了。

---

## 12.7 clear()

`clear()` 用来清空 `localStorage` 中的所有数据。

语法：

```js
localStorage.clear();
```

例如：

```js
localStorage.setItem("username", "admin");
localStorage.setItem("age", "18");

localStorage.clear();

console.log(localStorage.getItem("username")); // null
console.log(localStorage.getItem("age"));      // null
```

注意：

```txt
clear() 会清空当前网站下 localStorage 中的所有数据
使用时要小心
```

---

## 12.8 localStorage 只能存字符串

`localStorage` 中保存的 `key` 和 `value` 都是字符串。

例如：

```js
localStorage.setItem("age", 18);

console.log(localStorage.getItem("age"));
console.log(typeof localStorage.getItem("age"));
```

输出：

```txt
18
string
```

虽然保存时写的是数字 `18`，但取出来后是字符串 `"18"`。

---

## 12.9 存储对象

如果想保存对象，不能直接这样写：

```js
let user = {
    name: "张三",
    age: 18
};

localStorage.setItem("user", user);
```

这样保存进去的结果可能是：

```txt
[object Object]
```

正确写法是先用 `JSON.stringify()` 转成 JSON 字符串：

```js
let user = {
    name: "张三",
    age: 18
};

localStorage.setItem("user", JSON.stringify(user));
```

取出来时，再用 `JSON.parse()` 转回对象：

```js
let userStr = localStorage.getItem("user");

let user = JSON.parse(userStr);

console.log(user.name); // 张三
console.log(user.age);  // 18
```

---

## 12.10 常见使用场景

`localStorage` 常用于保存一些不太敏感、需要长期保留的数据。

例如：

```txt
登录状态标记
用户主题设置
网页背景颜色
搜索历史
购物车数据
表单草稿
```

例如保存主题：

```js
localStorage.setItem("theme", "dark");
```

下次进入页面时读取：

```js
let theme = localStorage.getItem("theme");

if (theme === "dark") {
    document.body.classList.add("dark");
}
```

---
# 13. JSON

## 13.1 JSON 是什么

`JSON` 是一种常用的数据格式，常用于前端和后端之间传递数据。

JSON 可以表示以下数据类型：

```txt
对象
数组
数值
字符串
布尔值
null
```

例如：

```json
{
    "name": "张三",
    "age": 18,
    "isStudent": true,
    "hobby": ["篮球", "编程"],
    "address": null
}
```

---

## 13.2 JSON 的作用

JSON 主要用于**数据序列化**。

所谓序列化，可以简单理解为：

```txt
把对象、数组等数据转换成字符串，方便存储或传输
```

比如：

```js
const user = {
    name: "张三",
    age: 18
};
```

这是 JavaScript 对象。

如果要通过网络发送给后端，通常需要先转换成 JSON 字符串：

```js
JSON.stringify(user);
```

---

## 13.3 JSON.parse()

`JSON.parse()` 用来把 **JSON 字符串解析成 JavaScript 对象**。

语法：

```js
JSON.parse(jsonString);
```

例如：

```js
const jsonStr = '{"name":"张三","age":18}';

const user = JSON.parse(jsonStr);

console.log(user.name); // 张三
console.log(user.age);  // 18
```

这里：

```js
JSON.parse(jsonStr)
```

会把 JSON 字符串转换成 JS 对象。

---

## 13.4 JSON.stringify()

`JSON.stringify()` 用来把 **JavaScript 对象转换成 JSON 字符串**。

语法：

```js
JSON.stringify(obj);
```

例如：

```js
const user = {
    name: "张三",
    age: 18
};

const jsonStr = JSON.stringify(user);

console.log(jsonStr);
```

输出：

```json
{"name":"张三","age":18}
```

---

## 13.5 JSON 在 localStorage 中的使用

`localStorage` 只能存字符串。

如果要存对象，需要先用 `JSON.stringify()` 转成字符串：

```js
const user = {
    name: "张三",
    age: 18
};

localStorage.setItem("user", JSON.stringify(user));
```

取出来时，再用 `JSON.parse()` 转回对象：

```js
const userStr = localStorage.getItem("user");

const user = JSON.parse(userStr);

console.log(user.name); // 张三
```

---
# 14. WebSocket

## 14.1 WebSocket 是什么

`WebSocket` 是一种浏览器和服务器之间进行**全双工通信**的技术。

简单理解：

```txt
WebSocket 可以让前端和服务器建立一条长期连接
连接建立后，双方都可以主动发送消息
```

和普通 `fetch` 请求不同：

```txt
fetch：前端请求一次，服务器响应一次
WebSocket：连接建立后，前端和服务器可以一直互相通信
```

---

## 14.2 WebSocket 的特点

WebSocket 的特点：

```txt
1. 与服务器建立长连接
2. 支持前端和后端双向通信
3. 服务器可以主动向前端推送消息
4. 适合实时通信场景
```

常见使用场景：

```txt
聊天系统
直播弹幕
实时通知
在线游戏
股票价格实时更新
多人协作编辑
```

---

## 14.3 创建 WebSocket 连接

语法：

```js
const socket = new WebSocket("ws://localhost:8080");
```

这里：

```txt
ws://localhost:8080
```

表示 WebSocket 服务地址。

如果是加密连接，通常使用：

```txt
wss://
```

例如：

```js
const socket = new WebSocket("wss://example.com");
```

简单对应关系：

```txt
http  对应  ws
https 对应  wss
```

---

## 14.4 常用 API

| API | 作用 |
|---|---|
| `new WebSocket("ws://localhost:8080")` | 建立 WebSocket 连接 |
| `send()` | 向服务器发送消息 |
| `onopen` | 当连接建立成功后触发 |
| `onmessage` | 当收到服务器消息后触发 |
| `close()` | 关闭连接 |
| `onclose` | 当连接关闭后触发 |

---

## 14.5 send()

`send()` 用来向服务器发送消息。

```js
const socket = new WebSocket("ws://localhost:8080");

socket.onopen = function () {
    socket.send("Hello Server");
};
```

这里表示：

```txt
WebSocket 连接建立成功后
向服务器发送字符串 "Hello Server"
```

一般情况下，如果要发送对象，通常会先用 `JSON.stringify()` 转成 JSON 字符串：

```js
const message = {
    type: "chat",
    content: "你好"
};

socket.send(JSON.stringify(message));
```

---

## 14.6 onopen

`onopen` 会在 WebSocket 连接建立成功后触发。

```js
const socket = new WebSocket("ws://localhost:8080");

socket.onopen = function () {
    console.log("WebSocket 连接成功");
};
```

常见用途：

```txt
连接成功后发送初始化消息
连接成功后更新页面状态
连接成功后开启聊天功能
```

---

## 14.7 onmessage

`onmessage` 会在收到服务器发送的消息时触发。

```js
const socket = new WebSocket("ws://localhost:8080");

socket.onmessage = function (event) {
    console.log("收到服务器消息：", event.data);
};
```

这里：

```js
event.data
```

表示服务器发送过来的数据。

如果服务器发送的是 JSON 字符串，可以用 `JSON.parse()` 转成对象：

```js
socket.onmessage = function (event) {
    const data = JSON.parse(event.data);

    console.log(data);
};
```

---

## 14.8 close()

`close()` 用来主动关闭 WebSocket 连接。

```js
const socket = new WebSocket("ws://localhost:8080");

socket.close();
```

常见场景：

```txt
用户退出登录
离开聊天页面
不再需要实时通信
```

---

## 14.9 onclose

`onclose` 会在 WebSocket 连接关闭后触发。

```js
const socket = new WebSocket("ws://localhost:8080");

socket.onclose = function () {
    console.log("WebSocket 连接已关闭");
};
```

连接关闭可能是：

```txt
前端主动关闭
服务器关闭连接
网络断开
页面关闭
```

---

## 14.10 完整示例

```js
const socket = new WebSocket("ws://localhost:8080");

socket.onopen = function () {
    console.log("连接成功");

    socket.send("Hello Server");
};

socket.onmessage = function (event) {
    console.log("收到服务器消息：", event.data);
};

socket.onclose = function () {
    console.log("连接关闭");
};
```

执行过程：

```txt
创建 WebSocket 连接
↓
连接成功后触发 onopen
↓
使用 send() 向服务器发送消息
↓
收到服务器消息时触发 onmessage
↓
连接关闭后触发 onclose
```

---
# 15. 页面跳转与刷新

## 15.1 window.open()

`window.open()` 用来在**新标签页或新窗口**中打开页面。

语法：

```js
window.open("https://www.acwing.com");
```

含义：

```txt
在新的标签页中打开指定网址
```

例如：

```js
window.open("https://www.acwing.com");
```

执行后，浏览器会打开 AcWing 页面。

---

## 15.2 location.reload()

`location.reload()` 用来刷新当前页面。

语法：

```js
location.reload();
```

含义：

```txt
重新加载当前页面
```

它的效果类似于用户点击浏览器的刷新按钮。

例如：

```js
location.reload();
```

执行后，当前页面会被重新刷新。

---

## 15.3 location.href

`location.href` 用来控制当前页面跳转到指定地址。

语法：

```js
location.href = "https://www.acwing.com";
```

含义：

```txt
在当前标签页中打开指定网址
```

例如：

```js
location.href = "https://www.acwing.com";
```

执行后，当前页面会跳转到 AcWing。

---

## 15.4 window.open 和 location.href 的区别

| 方法 | 作用 | 打开位置 |
|---|---|---|
| `window.open(url)` | 打开指定页面 | 通常在新标签页或新窗口 |
| `location.href = url` | 跳转到指定页面 | 当前标签页 |
| `location.reload()` | 刷新页面 | 当前页面 |

---

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

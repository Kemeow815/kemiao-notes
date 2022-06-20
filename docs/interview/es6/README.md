# ES6 常用知识

`ECMAScript 6` (简称 `ES6`) 是 `JavaScript` 语言的下一代标准

`ECMAScript` 的提案流程

- `Stage 0 - Strawman`（展示阶段）
- `Stage 1 - Proposal`（征求意见阶段）
- `Stage 2 - Draft`（草案阶段）
- `Stage 3 - Candidate`（候选人阶段）
- `Stage 4 - Finished`（定案阶段）

一个提案只要能进入 `Stage 2` 就差不多肯定会包括在以后的正式标准里面

[ECMAScript 当前的所有提案](https://github.com/tc39/ecma262)

::: tip ES6 和 ES2015 的区别
`ES2015` 是一个年份标记，表示当年发布的 `ECMAScript` 标准的正式版本，其全称为《`ECMAScript 2015` 标准》（简称 `ES2015`）<br>
`ES6` 是一个历史名词也是一个泛指，含义是 `5.1` 版以后的 `JavaScript` 的下一代标准，涵盖了 `ES2015、ES2016、ES2017 ES2018` 等等
:::

## let const

`ES6` 新增了 **`let`** 和 **`const`** 命令，用于声明变量，其声明的变量只在声明所在的块级作用域内有效

::: tip let const var 的区别

- `var` 声明的变量会提升到作用域的顶部，`let const` 不存在变量提升
- `var` 声明的全局变量会被挂载到全局对象 `window` 上，而 `let const` 不会
- `var` 可以对一个变量进行重复声明，而 `let const` 不能重复声明
- `var` 声明的变量作用域范围是函数作用域，`let const` 声明的变量作用域范围是块级作用域
- `const` 声明的是一个只读的常量，一旦声明常量的值就不能改变(必须对变量进行初始化)
  - 基本类型保证值不可变
  - 引用类型保证内存指针不可变

:::

### 变量提升

```js
console.log(a) // 输出 undefined
console.log(b) // 报错
console.log(c) // 报错

var a = 'var'
let b = 'let'
const c = 'const'
```

### 挂载到全局对象

```js
var a = 'var'
let b = 'let'
const c = 'const'

console.log(window.a) // 输出 var
console.log(window.b) // 输出 undefined
console.log(window.c) // 输出 undefined
```

### 重复声明

```js
var a = 'var'
var a
console.log(a) // 输出 var

let b = 'let'
let b // 报错
```

### 作用域范围

```js
function fn() {
  if (true) {
    var a = 'var'
    let b = 'let'

    console.log(a) // 输出 var
    console.log(b) // 输出 let
  }

  console.log(a) // 输出 var
  console.log(b) // 报错
}

fn()
```

### const 常量定义

```js
const NAME = 'maomao'
NAME = 'maomao1996' // 报错
```

## 模板字符串

模板字符串 (template string) 是增强版的字符串，用反引号(**`**)标识。它可以当作普通字符串、定义多行字符串或者在字符串中嵌入变量、函数调用以及表达式

```js
let name = 'maomao'
let age = 18

/* ES5 拼接字符串 */
let es5Str = '我叫: ' + name + '，我的年龄是: ' + (age + 1) + ' 岁'

/* ES6 模板字符串 */
let es6Str = `我叫: ${name}，我的年龄是: ${age + 1} 岁`
```

## 解构赋值

### 解构对象

```js
const obj = {
  name: 'maomao',
  age: 18
}

// ES5 写法
const name = obj.name
const age = obj.age

/* ES6 解构写法 */
const { name, age } = obj
// 重命名
const { name: myName } = obj
```

### 解构数组

```js
const arr = ['maomao', 18]

/* ES5 写法 */
const name = arr[0]
const age = arr[1]

/* ES6 解构写法 */
const [name, age] = arr
const { 0: name, 1: age } = arr
```

## 函数的扩展

### 参数默认值

```js
/* ES5 */
function add(x, y) {
  // 当参数 y 对应的布尔值为 false 则该赋值不起作用
  y = y || 1
  console.log(x + y)
}
add(10) // 11
add(10, 2) // 12
add(10, 0) // 11

/* ES6 */
function add(x, y = 1) {
  console.log(x + y)
}
add(10) // 11
add(10, 2) // 12
add(10, 0) // 10
```

::: tip 函数参数的默认值

- 参数变量是默认声明的不能用 `let`或 `const` 再次声明，否则会报错
- 使用参数默认值时函数不能有同名参数
- 参数默认值的位置应该是函数的尾参数

:::

### 剩余参数(rest 参数)

`ES6` 引入 `rest` 参数(形式为 `...变量名`) 用于获取函数的剩余参数(可以替换 `arguments` 对象)

```js
function log(name, ...params) {
  console.log(name, params)
}

log('maomao', 1, 2) // maomao [1, 2]
log('maomao', 1, 2, 3) // maomao [1, 2, 3]
```

::: tip 剩余参数(rest 参数)

- `rest` 参数是一个真正的数组，数组特有的方法都可以使用
- `rest` 参数之后不能再有其他参数，否则会报错
- 函数的 `length` 属性，不包括 `rest` 参数

:::

### 箭头函数

`ES6` 允许使用**箭头**(`=>`)定义函数

```js
// 不需要参数时使用一个圆括号代表参数部分
const fn = () => {}
// 等同于
const fn = function () {}

// 当函数体只有 return 时
const fn = (value) => value
// 等同于
const fn = function (value) {
  return value
}
const fn = () => {
  console.log('this', this)
}
```

::: tip 箭头函数与普通函数的区别

- `this`
  - 普通函数
    - `this` 指向是动态的(取决于函数的调用方式)
    - 可以用 `call apply bind` 改变 `this` 指向
  - 箭头函数
    - `this` 指向是固定的，指向定义时上层作用域中的 `this`(它没有自己的 `this`)
    - `call apply bind` 无法改变箭头函数的 `this` 指向(上下文值始终按词法解析)
    - 全局作用域下 `this` 指向全局对象
- 箭头函数不可以当作构造函数(不能使用 `new` 运算符，否则会报错)
- 箭头函数的函数体内不可以使用`arguments super new.target`
- 箭头函数不可以使用 yield 命令(不能用作 `Generator` 函数)
- 在 `class` 中使用箭头函数其 `this` 会和类实例进行绑定

:::

[利用 `babel` 编译箭头函数代码查看 `this` 的指向](https://www.babeljs.cn/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYewdgzgLgBANiA5jAvDAFASlQPhgbwCgYZRIQ4BTAOgUXQHI6YoALASwgC4GAaFjhEyEAvoUIAzAK5hgUduBgSwWAsRgRKUACrsAtpRBSo6VSjxESJMhAo06jZQM49-bTsJIj-ARgAMfsIiQA&debug=false&forceAllTransforms=true&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=script&lineWrap=true&presets=env%2Creact&prettier=false&targets=&version=7.17.11&externalPlugins=&assumptions=%7B%7D)

```js
/* ES6 */
const log = () => {
  console.log('log this:', this)
}

function fn() {
  setTimeout(() => {
    console.log('fn this:', this)
  }, 100)
}

/* babel 编译后的 ES5 代码 */
var _this = this

var log = function log() {
  console.log('log this:', _this)
}

function fn() {
  var _this2 = this

  setTimeout(function () {
    console.log('fn this:', _this2)
  }, 100)
}
```

## 扩展运算符

扩展运算符 (`spread`)是三个点 (`...`) 它好比 `rest` 参数的逆运算

### 函数调用

扩展运算符在函数调用时可以将一个数组变为参数序列，从而可以替代函数的 `apply()` 方法

```js
// 举个 🌰 求出一个数组最大元素
/* ES5 写法 */
Math.max.apply(null, [2022, 520, 1314])

/* ES6 写法 */
Math.max(...[2022, 520, 1314])
// 等同于
Math.max(2022, 520, 1314)
```

### 拷贝数组/对象

```js
/* 拷贝数组 */
const arr1 = [1, 2, 3]
// 写法一
const arr2 = [...arr1]
// 写法二
const [...arr2] = arr1

/* 拷贝对象 */
const obj1 = { name: 'maomao' }
// 写法一
const obj2 = { ...obj1 }
// 写法二
const { ...obj2 } = obj1
```

### 合并数组/对象

```js
/* 合并数组 */
const arr1 = [1, 2, 3]
const arr2 = ['a', 'b', 'c']
const arr = [...arr1, ...arr2]

/* 合并对象 */
const obj1 = { name: 'maomao' }
const obj2 = { age: 18 }
const obj = { ...obj1, ...obj2 }
```

### 使用表达式

```js
const obj = {
  ...(false ? { a: 1 } : {}),
  b: 2
}
// {b: 2}

const obj = {
  ...(true ? { a: 1 } : {}),
  b: 2
}
// {a: 1, b: 2}
```

### 与解构赋值结合

```js
const arr1 = [1, 2, 3]

/* ES5 写法 */
const first = arr1[0]
const rest = arr1.slice(1)

/* ES6 写法 */
const [first, ...rest] = arr1
```

::: tip 扩展运算符

- 使用扩展运算符拷贝数组或对象时其都是**浅拷贝**
- 对象的扩展运算符等同于使用 `Object.assign()` 方法
- 只有函数调用时扩展运算符才可以放在圆括号中，否则会报错
- 扩展运算符用于赋值时只能放在参数的最后一位，否则会报错

:::

## 数组的扩展

### Array.from()

`Array.from()` 用于将两类对象转为真正的数组

- 类似数组的对象 (`array-like object`)
  - `DOM` 操作返回的 `NodeList`
  - `arguments` 对象
- 可遍历 (`iterable`) 的对象 (包括 `ES6` 新增的数据结构 `Set` 和 `Map`)

```js
/* array-like object 转数组 */
const arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}

// ES5 写法
var arr1 = [].slice.call(arrayLike) // ['a', 'b', 'c']

// ES6 写法
let arr2 = Array.from(arrayLike) // ['a', 'b', 'c']
```

::: tip Array.from()

`Array.from()` 可以接受一个函数作为第二个参数，作用类似于数组的`map()` 用来对每个元素进行处理，将处理后的值放入返回的数组

在字符串转为数组时 `Array.from()` 能正确处理各种 `Unicode` 字符，可以避免 `JavaScript` 将大于 `\uFFFF` 的 `Unicode` 字符算作两个字符的 `bug`

```js
'𠮷'.length // 2
Array.from('𠮷').length // 1

'👪'.length // 2
Array.from('👪').length // 1
```

:::

### Array.of()

`Array.of()` 用于将一组值转换为数组

```js
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
```

::: tip Array.of()

`Array.of()` 方法的主要目的是弥补数组构造函数 `Array()` 的不足(因为参数个数的不同会导致`Array()`的行为有差异)

```js
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
```

`Array.of()` 总是返回参数值组成的数组。如果没有参数就返回一个空数组

```js
/* Array.of() 的模拟实现 */
function ArrayOf() {
  return [].slice.call(arguments)
}
```

:::

### 实例方法: includes()

`includes()` 方法返回一个布尔值，表示某个数组是否包含给定的值(`ES2016` 引入)

```js
const arr = [1, 2, NaN]
arr.includes(2) // true
arr.includes(4) // false
arr.includes(NaN) // true
```

::: tip includes() 和 indexOf() 的对比

`indexOf()` 不够语义化，其含义是找到参数值的第一个出现位置，所以要去比较是否不等于 `-1`，表达起来不够直观<br>
`indexOf()` 内部使用严格相等运算符 (`===`) 进行判断，这会导致对 `NaN` 的误判

:::

### 实例方法: find() 和 findIndex()

`find()` 方法用于找出第一个符合条件的数组成员，如果**没有符合条件的成员则返回 `undefined`**

`findIndex()` 方法用于找出第一个符合条件的数组成员的位置，如果**没有符合条件的成员则返回 `-1`**

```js
const arr = [1, 5, 10, 15]

/* find() */
arr.find((item) => item > 9) // 10
arr.find((item) => item === 9) // undefined

/* findIndex() */
arr.findIndex((item) => item > 9) // 2
arr.findIndex((item) => item === 9) // -1
```

### 实例方法: at()

`at()` 方法接受一个整数(支持负数)作为参数返回对应位置的成员，如果**参数位置超出了数组范围则返回 `undefined`**

```js
const arr = ['maomao', 18]

arr.at(0) // 'maomao'
arr.at(-1) // 18
arr.at(99) // undefined
```

### 实例方法: flat() 和 flatMap()

`flat()` 方法用于将嵌套的数组拍平变成一维的数组，该方法**返回一个新数组不改变原数组**

`flatMap()` 方法会先对原数组的每个成员执行一个函数(相当于执行 `Array.prototype.map()`) 然后对返回值组成的数组执行 `flat()` 方法，该方法**返回一个新数组不改变原数组**

```js
/* flat() */
const arr1 = [1, 2, [3, [4, 5]]]
const arr2 = [1, 2, , 4, 5]

arr1.flat() // [1, 2, 3, [4, 5]]
arr1.flat(2) // [1, 2, 3, 4, 5]

arr2.flat() // [1, 2, 4, 5]

/* flatMap() */
const arr = [1, 2, 3, 4]
arr.flatMap((x) => [[x * 2]]) // [[2], [4], [6], [8]]
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
```

::: tip flat() 和 flatMap() 注意点

- `flat()` 方法默认只会拉平一层
- `flat()`方法会跳过原数组中的空位
- `flatMap()` 只能展开一层数组

:::

## 对象的扩展

### 属性简写

`ES6` 允许在大括号里面直接写入变量和函数作为对象的属性和方法

```js
/* 属性简写 */
// ES5 写法
const key = 'maomao'
const obj = { key: key }

// ES6 写法
const key = 'maomao'
const obj = { key }

/* 方法简写 */
// ES5 写法
const obj = {
  log: function () {
    console.log('maomao')
  }
}

// ES6 写法
const key = 'maomao'
const obj = {
  log() {}
}
```

::: tip 属性简写

简写的对象方法不能用作构造函数否则会报错

```js
const obj = {
  f() {
    this.name = 'maomao'
  }
}

new obj.f() // 报错
```

:::

### 属性名表达式

```js
// 定义属性名
const key = 'age'
const obj = {
  ['name' + 1]: 'maomao',
  [key]: 18
}

// 定义方法名
const obj = {
  ['log' + 'name']() {
    console.log('maomao')
  }
}
```

::: tip 属性名表达式

属性名表达式与属性简写不能同时使用否则会报错

```js
// 报错
const key = 'name';
const obj = { [key] }

// 正确
const key = 'name';
const obj = { [key]: 'maomao'};
```

属性名表达式如果是一个对象会自动将其转为字符串 `[object Object]`

```js
const keyA = { a: 1 }
const keyB = { b: 2 }

const obj = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
}

console.log(obj) // {[object Object]: 'valueB'}
```

:::

### Object.is()

`Object.is()` 方法用来比较两个值是否严格相等，严格比较运算符 (`===`) 的行为基本一致

```js
Object.is('key', 'key') // true
Object.is({}, {}) // false
```

::: tip Object.is() 与 === 的不同之处

`+0`不等于`-0`

```js
/* +0 不等于 -0 */
;+0 === -0 // true
Object.is(+0, -0) // false

/* NaN 等于自身 */
NaN === NaN // false
Object.is(NaN, NaN) // true
```

:::

### Object.assign()

`Object.assign()` 方法用于对象的合并，将源对象的所有可枚举属性复制到目标对象（第一个参数是目标对象后面的参数都是源对象）

```js
const target = { a: 1, b: 1 }

const source1 = { b: 2, c: 2 }
const source2 = { c: 3 }

Object.assign(target, source1, source2)
```

##### 只有一个参数时会直接返回该参数

```js
const obj = { a: 1 }
Object.assign(obj) === obj // true
```

##### 传入参数不是对象时会先转成对象再返回

```js
typeof Object.assign(1) // "object"
typeof Object.assign(true) // "object"
```

##### 传入非对象类型的场景

```js
/* undefined 和 null */
// 首位参数时会报错
Object.assign(undefined) // TypeError
Object.assign(null) // TypeError
// 非首位参数时会忽略
const obj = {}
Object.assign(obj, undefined) === obj // true
Object.assign(obj, null) === obj // true

/* 非首位参数为数值 布尔值 字符串时 */
// 数值和布尔值会忽略
const obj = {}
Object.assign(obj, 1, true) === obj // true
// 字符串会以字符数组的形式做合并
Object.assign({}, 'maomao') // {0: 'm', 1: 'a', 2: 'o', 3: 'm', 4: 'a', 5: 'o'}

/* 数组 */
// 当参数都为数组时
Object.assign([1, 2, 3], [4, 5]) // [4, 5, 3]
// 当首位参数为对象时，后续参数为数组时
Object.assign({ a: 1 }, [1, 2]) // {0: 1, 1: 2, a: 1}
```

##### 传入数组时会把数组当对象处理

```js
Object.assign([1, 2, 3], [4, 5]) // [4, 5, 3]
```

::: tip Object.assign() 总结和应用场景

总结

- `Object.assign()` 是**浅拷贝**方法
- 存在同名属性时，后面的属性会覆盖前面的属性
- 只有一个参数时会直接返回该参数
- 传入参数不是对象时会先转成对象再返回
- 传入 `undefined` 和 `null` 时
  - 如果为第一个参数会报错（无法转成对象）
  - 如果不为第一个参数时会被忽略
- 传入数组时会把数组当对象处理

应用场景

```js
/* 为对象添加属性 */
class Point {
  constructor(x, y) {
    Object.assign(this, { x, y })
  }
}

/* 为对象添加方法 */
Object.assign(Function.prototype, {
  log() {}
})

/* 拷贝对象 */
const clone = (origin) => Object.assign({}, origin)

/* 合并多个对象 */
const merge = (target, ...sources) => Object.assign(target, ...sources)

/* 为属性指定默认值 */
const DEFAULTS = { duration: 2000 }
function toast(options) {
  options = Object.assign({}, DEFAULTS, options)
}
toast({ content: '提示' }) // {duration: 2000, content: '提示'}
```

:::

### Object.keys() Object.value() Object.entries()

`Object.keys()` 方法返回一个数组，其成员为参数对象自身的（不含继承的）所有可遍历属性的键名(`ES5` 引入)

`Object.value()` 方法返回一个数组，其成员为参数对象自身的（不含继承的）所有可遍历属性的键值(`ES2017` 引入)

`Object.entries()` 方法返回一个数组（二维数组），其成员为参数对象自身的（不含继承的）所有可遍历属性的键值对数组(`ES2017` 引入)

```js
const obj = { name: 'maomao', age: 18 }
Object.keys(obj) // ['name', 'age']
Object.values(obj) //  ['maomao', 18]
Object.entries(obj) // [['name', 'maomao'], ['age', 18]]
```

### Object.fromEntries()

`Object.fromEntries()` 方法是 `Object.entries()` 的逆操作，用于将键值对的数据结构还原为对象

```js
Object.fromEntries([['name', 'maomao']]) // {name: 'maomao'}

/* Map 转对象 */
const map = new Map([['name', 'maomao']])
Object.fromEntries(map) // {name: 'maomao'}

/* 将查询字符串转为对象 */
const params = 'name=maomao&age=18'
Object.fromEntries(new URLSearchParams(params)) // {name: 'maomao', age: '18'}
```

### 对象遍历方法对比

| 方法名                       | 说明                                                 | 继承的原型属性 | 不可枚举属性 | Symbol 属性 |      返回值      |
| ---------------------------- | :--------------------------------------------------- | :------------: | :----------: | :---------: | :--------------: |
| for...in                     | 遍历对象自身和继承的所有可枚举属性(不含 Symbol 属性) |       ✅       |      ❌      |     ❌      |       key        |
| Object.keys                  | 遍历对象自身所有可枚举属性(不含 Symbol 属性)         |       ❌       |      ❌      |     ❌      |     [key...]     |
| Object.getOwnPropertyNames   | 遍历对象自身所有属性(不含 Symbol 属性)               |       ❌       |      ✅      |     ❌      |     [key...]     |
| Object.getOwnPropertySymbols | 遍历对象自身所有的 Symbol 属性                       |       ❌       |      ✅      |     ✅      |     [key...]     |
| Reflect.ownKeys              | 遍历对象自身所有的属性(包含不可枚举和 Symbol 属性)   |       ❌       |      ✅      |     ✅      |     [key...]     |
| Object.values                | 遍历对象自身所有可枚举属性(不含 Symbol 属性)         |       ❌       |      ❌      |     ❌      |    [value...]    |
| Object.entries               | 遍历对象自身所有可枚举属性(不含 Symbol 属性)         |       ❌       |      ❌      |     ❌      | [[key,value]...] |

::: tip 遍历顺序

`ES5` 没有规定遍历顺序，其遍历顺序由浏览器厂商定义(可以简单理解为无序的)

`ES6` 之后规定遍历顺序将按如下规则进行

1. 首先遍历所有数值键，按照数值升序排列。
2. 其次遍历所有字符串键，按照加入时间升序排列。
3. 最后遍历所有 `Symbol` 键，按照加入时间升序排列。

`ES6` 内部定义了 [\[\[OwnPropertyKeys\]\]()](https://262.ecma-international.org/11.0/#sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys) 方法对属性进行分类和排序

:::

## 运算符的扩展

### ?. 可选链操作符

[ES2020](https://github.com/tc39/proposal-optional-chaining) 引入了可选链操作符(又名链判断运算符)，其允许我们在读取对象内部的某个属性时，不需要判断属性的上层对象是否存在

```js
// 可选链操作符之前的写法
const firstName =
  (message &&
    message.body &&
    message.body.user &&
    message.body.user.firstName) ||
  'default'

// 可选链操作符简化写法
const firstName = message?.body?.user?.firstName || 'default'
```

可选链操作符 `?.` 的三种写法

```js
/* 属性是否存在 */
obj?.prop
obj?.[expr]
// 等同于
obj == null ? undefined : obj.prop

/* 函数或对象方法是否存在 */
func?.(...args)
// 等同于
func == null ? undefined : func()
```

::: tip 注意点

1. 可选链操作符相当于一种短路机制，只要不满足条件就不再往下执行
2. 当有括号时，可选链操作符对圆括号外部没有影响，只对圆括号内部有影响。
3. 右侧不得为十进制数值。为了保证兼容以前的代码，允许 `foo?.3:0` 会被解析成 `foo ? .3 : 0`，因此规定如果 `?.` 后面紧跟一个十进制数字，那么 `?.` 不再被看成是一个完整的运算符，而会按照三元运算符进行处理，即小数点会归属于后面的十进制数字形成一个小数。
4. 禁止使用以下写法

```js
// 构造函数
new a?.()
new a?.b()

// 右侧有模板字符串
a?.`{b}`
a?.b`{c}`

// 左侧是 super
super?.()
super?.foo

// 用于赋值运算符左侧
a?.b = c
```

:::

### ?? 空值合并运算符

[ES2020](https://github.com/tc39/proposal-nullish-coalescing)引入了空值合并运算符，只有运算符左侧的值为 `null` 或 `undefined` 时才会返回右侧的值

@[code](./code/nullish-coalescing.js)

::: tip ?? 和 || 的区别

- **`??` 运算符**只有左侧是 `null` 或 `undefined`才会返回右侧的值
- **`||` 运算符**只要左侧是 [假值](/interview/base/conversions.html#toboolean) 就会返回右侧的值

:::

### 逻辑赋值运算符

`ES2021` 引了入三个新的逻辑赋值运算符，用于将逻辑运算符与赋值运算符进行结合

```js
/* 或赋值运算符 */
x ||= y
// 等同于
x || (x = y)

/* 与赋值运算符 */
x &&= y
// 等同于
x && (x = y)

/* Null 赋值运算符 */
x ??= y
// 等同于
x ?? (x = y)
```

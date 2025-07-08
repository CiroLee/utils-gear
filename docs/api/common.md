# common

[source code](https://github.com/CiroLee/utils-gear/blob/main/src/utils.ts)

通用工具函数

## getType

获取参数类型

signature:

```typescript
function getType(v?: any): string;
```

example:

```typescript
getType(1); // 'number'
getType('1'); // 'string'
getType({}); // 'object'
getType(() => null); // 'function'
getType(null); // 'null'
getType(NaN); // 'nan'
getType(new Set()); // 'set'
getType(new Map()); // 'map'
getType(new Date()); // 'date'
getType(new RegExp('')); // 'regexp'
getType(new Error('error')); // 'error'
```

## throttle

节流函数

signature:

```typescript
function throttle(fn: Function, wait = 300): Function;
```

example:

```typescript
window.addEventListener(
  'resize',
  throttle(function () {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250),
);
// 最多每 250 毫秒记录一次窗口尺寸
```

## debounce

防抖函数

signature:

```typescript
function debounce(fn: Function, delay = 300): Function;
```

example:

```typescript
$('input').addEventListener(
  'input',
  debounce((event) => {
    console.log(event.target.value);
  }, 250),
);
// 最多每250毫秒打印输入的内容
```

## deepClone

深拷贝。默认使用`structuredClone`，如果`structuredClone`不可用，则使用`JSON.parse(JSON.stringify())`。

signature:

```typescript
function deepClone<T>(value: Record<string | number | symbol, T> | T[]): Record<string | number | symbol, T> | T[];
```

example:

```typescript
const obj = { a: 1, b: 2 };
const cloneObj = deepClone(obj);
Object.is(obj, cloneObj); // false
```

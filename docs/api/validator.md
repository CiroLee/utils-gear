# validator

常用验证函数

## isAnyTrue

数组中任意一个元素为真值，则返回 true。接受自定义判断函数

signature:

```typescript
function isAnyTrue(arr: T[], fn?: (p: T) => boolean): boolean;
```

example:

```typescript
const arr = [0, 1, 2, 3, 4, 5];
isAnyTrue(arr); // true

// 使用自定义函数
isAnyTrue(arr, function (num) {
  return num > 10;
}); // false
```

## isAllTrue

判断数组中所有元素是否都为真值

signature:

```typescript
function isAllTrue(arr: T[], fn?: (p: T) => boolean): boolean;
```

example:

```typescript
const arr = [0, 1, 2, 3, 4, 5];
isAllTrue(arr); // false

// 使用自定义函数
isAllTrue(arr, function (num) {
  return num > -1;
}); // true
```

## isNumberLike

判断输入是否为数字或是否可以转换为数字  
signature:

```typescript
function isNumberLike(param: any): boolean;
```

example:

```typescript
isNumberLike('1'); // true
isNumberLike('0xff'); // true
isNumberLike(null); // true
isNumberLike(''); // true
```

## isEmptyObject

判断输入是否为空对象  
signature:

```typescript
function isEmptyObject(param: ObjType): boolean;
```

example:

```typescript
isEmptyObject({}); // true
isEmptyObject({ a: 1 }); // false
isEmptyObject([]); // true
isEmptyObject(null); // false
```

## isValidDate

验证是否为有效日期

signature:

```typescript
function isValidDate(date: any): boolean;
```

example:

```typescript
isValidDate('2022 12 12'); // true
isValidDate('2022-12-12 T12:12:00'); // false
isValidDate({}); // false
```

## isPrime

验证是否为质数(素数)

signature:

```typescript
function isPrime(num: number): boolean;
```

example:

```typescript
isPrime(23); // true
isPrime(1); // false
isPrime(-1); // false
isPrime(1.2); // false
```

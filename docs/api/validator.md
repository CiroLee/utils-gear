# validator

[source code](https://github.com/CiroLee/utils-gear/blob/main/src/validator.ts)

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

判断一个对象是否为空

```ts
function isEmptyObject(obj: ObjType): boolean;
```

```ts
const obj1 = { a: 1, b: null };
const obj2 = {};
Object.defineProperty(obj2, 'attr', {
  value: 'sth',
  enumerable: false,
});

isEmptyObject(obj1); // false
isEmptyObject(obj2); // false
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

## isBase64

检查字符串是否为base64格式  
signature:

```typescript
function isBase64(str: string): boolean;
```

example:

```typescript
isBase64('aGVsbG8='); // true
```

## isEmail

检查字符串是否为邮箱格式  
signature:

```typescript
function isEmail(str: string): boolean;
```

example:

```typescript
isEmail('test@test.com'); // true
isEmail('test@test'); // false
```

## isPhoneNumber

检查字符串是否为中国手机号, 可选验证严格程度, low(1开头): 宽松, medium: 常规(13,14,15,16,17,18,19), high: 严格, 默认为medium  
signature:

```typescript
function isPhoneNumber(str: number | string, strictness?: 'low' | 'medium' | 'high'): boolean;
```

example:

```typescript
isPhoneNumber(12345678901, 'low'); // true
isPhoneNumber(13876543210); // true
isPhoneNumber('+8613876543210', 'high'); // true
isPhoneNumber(14234567890, 'high'); // false
```

## isIDNumber

检查字符串是否为中国内地二代身份证号码  
signature:

```ts
function isIDNumber(id: string): boolean;
```

example:

```ts
isIDNumber('440301199012301234'); // true
isIDNumber('440301199912321212'); // false, ps: 日期错误
```

## isFloat

检查数字是否为浮点数  
signature:

```ts
function isFloat(num: number): boolean;
```

example:

```ts
isFloat(1.2); // true
isFloat(1); // false
```

## isInt

检查数字是否为整数

signature:

```ts
function isInt(num: number): boolean;
```

example:

```ts
isInt(1); // true
isInt(1.2); // false
isInt(0); // true
```

## isUrl

检查字符串是否为URL

signature:

```ts
function isUrl(url: string): boolean;
```

example:

```ts
isUrl('https://www.baidu.com'); // true
isUrl('http://www.baidu.com'); // true
isUrl('ftp://www.example.com'); // true
```

## isQQNumber

检查输入是否为QQ号码

signature:

```ts
function isQQNumber(qq: number | string): boolean;
```

example:

```ts
isQQNumber(123456789); // true
isQQNumber('0123573'); // false
```

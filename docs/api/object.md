# object

常用对象处理函数

## pick

挑出对象中指定 key 的数据

signature:

```typescript
function pick<T>(obj: ObjType, arr: string[]): T;
```

```typescript
type ObjType = Record<string | number | symbol, any>;
```

example:

```typescript
const obj = {
  name: 'Tom',
  age: 10,
  sex: 'male',
};
pick(obj, ['name', 'age']); // { name: 'Tom', age: 10 };
```

## omit

剔除对象中指定 key 的数据

signature:

```typescript
function omit<T>(obj: ObjType, arr: string[]): T;
```

example:

```typescript
const obj = {
  name: 'Tom',
  age: 10,
  sex: 'male',
};
omit(obj, ['name', 'age']); // { sex: 'male' }
```

## pickBy

挑出一个由给定函数返回 true 的属性组成的对象

signature:

```typescript
function pickBy<T>(obj: ObjType, fn: (item?: ObjType[keyof ObjType]) => boolean): T;
```

example:

```typescript
const obj = {
  name: 'Tom',
  age: 10,
  sex: 'male',
};
pickBy(obj, (el = typeof el === 'string')); // { name: 'Tom', sex: 'male' };
```

## omitBy

剔除一个由给定函数返回 false 的属性组成的对象

signature:

```typescript
function omitBy<T>(obj: ObjType, fn: (item?: ObjType[keyof ObjType]) => boolean): T;
```

signature:

```typescript
const obj = {
  name: 'Tom',
  age: 10,
  sex: 'male',
};
omitBy(obj, (el = typeof el === 'string')); // { age: 10 }
```

## objectTrueValue

提取对象中的真值组成的对象signature:

```typescript
function objectTrueValue<T>(obj: ObjType): T;
```

```ts
const obj = {
  a: 1,
  b: null,
};
objectTrueValue(obj); // { a: 1 }
```

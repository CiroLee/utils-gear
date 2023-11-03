# math

[source code](https://github.com/CiroLee/utils-gear/blob/main/src/math.ts)

常用数学相关函数

## zeroFill

补零, 如果数字小于 10, 则在数字前补 0 占位

signature:

```typescript
function zeroFill(num: number | string): string;
```

example:

```typescript
zeroFill(1); // '01'
zeroFill(11); // '11'
zeroFill(-1); // '-1'
zeroFill('1.1'); // '-01.1'
```

## max

计算数组中的最大值  
signature:

```typescript
function max(array: number[]): number;
```

example:

```typescript
max([1, 2, 3]); // 3
```

## min

计算数组中的最小值

signature:

```typescript
function min(array: number[]): number;
```

example:

```typescript
min([1, 2, 3]); // 1
```

## intersection

计算两个**基本数据类型数组**的交集

signature:

```typescript
function intersection(a: BaseType[], b: BaseType[]): BaseType[];
```

```typescript
type BaseType = number | string | null | undefined | boolean | symbol;
```

example:

```typescript
intersection([1, 2], [2, 3]); // [2];
intersection([1, 2], ['2', 3]); // []
```

## union

计算两个**基本数据类型数组**的并集  
signature:

```typescript
function union(a: BaseType[], b: BaseType[]): BaseType[];
```

example:

```typescript
union([1, 2], [2, 3]); // [1,2,3]
union([1, 2], [2, '3']); // [1,2,'3'];
```

## pickUniqueNumber

从数组中选出n个不重复的数字  
signature:

```typescript
function pickUniqueNumber(array: number[], n: number): number[];
```

example:

```typescript
pickUniqueNumber([1, 2, 3, 4], 2); // e.g. [1,4]
```

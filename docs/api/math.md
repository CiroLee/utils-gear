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
zeroFill(-1); // '-01'
zeroFill('1.1'); // '01.1'
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

## shuffle

随机打乱数组(fisher-yates洗牌算法)  
signature:

```typescript
function shuffle(array: number[]): void;
```

example:

```typescript
const array = [1, 2, 3, 4];
shuffle(array); // [4, 2, 1, 3]
```

## randomInt

生成指定范围内的随机整数, 包含min和max。如果max缺省，则min作为max， 0作为min; 如果min > max, 会倒置min,max  
signature:

```typescript
function randomInt(min: number, max?: number): number;
```

example:

```typescript
randomInt(1, 10); // 3
randomInt(4); // 2 refer: [0,4]
randomInt(10, 1); // 4  refer: [1, 10]
```

## mean

计算数组元素的平均值  
signature:

```typescript
function mean(array: number[]): number;
```

example:

```typescript
mean([1, 2, 3, 4, 5]); // 3
```

## sum

计算数组元素的和  
signature:

```typescript
function sum(array: number[]): number;
```

example:

```typescript
sum([1, 2, 3]); // 6
```

## stdDev

计算数组元素的标准差(standard deviation)  
signature:

```typescript
function stdDev(array: number[]): number;
```

example:

```typescript
stdDev([1, 2, 3, 4, 5]); // ≈ 1.41
```

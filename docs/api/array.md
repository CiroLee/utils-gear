# array

[source code](https://github.com/CiroLee/utils-gear/blob/main/src/array.ts)

## fillArray

以任意长度值填充数组

signature:

```ts
function fillArray<T>(value: T, length: number): T[];
```

example:

```ts
fillArray(1, 4); // [1,1,1,1]
```

## sortArrayByField

对象数组根据指定字段排序。如果元素中不存在指定字段，则该元素会被排列在最后。

signature:

```ts
function sortArrayByField<T>(arr: T[], field: keyof T, ascending = true): T[];
```

example:

```ts
const items = [{ id: 2 }, { id: 3 }, { id: 1 }];
sortArrayByField(items, 'id'); // [{ id: 1 }, { id: 2 }, { id: 3 }]s
const names = [{ name: 'John' }, { name: 'Alice' }, { name: 'Bob' }];
sortArrayByField(names, 'name', false); // [{ name: 'Alice' }, { name: 'Bob' }, { name: 'John' }]
```

## groupBy

对象数组排序。iterate可以是对象的key也可以是自定义函数

```ts
function groupBy<T, K extends keyof T | ((item: T) => string | number | boolean)>(
  arr: T[],
  iterate?: K,
): Record<string, T[]>;
```

example

```ts
type Person = { name: string; age: number; gender: string };

const people: Person[] = [
  { name: 'Alice', age: 30, gender: 'female' },
  { name: 'Bob', age: 30, gender: 'male' },
  { name: 'Charlie', age: 25, gender: 'male' },
  { name: 'David', age: 25, gender: 'male' },
  { name: 'Eve', age: 35, gender: 'female' },
];

groupBy(people, 'age');
// output
'30': [
    { name: 'Alice', age: 30, gender: 'female' },
    { name: 'Bob', age: 30, gender: 'male' },
  ],
'25': [
  { name: 'Charlie', age: 25, gender: 'male' },
  { name: 'David', age: 25, gender: 'male' },
],
'35': [{ name: 'Eve', age: 35, gender: 'female' }],
}

const numbers = [1, 2, 3, 4, 5, 6];
const groupedByEvenOdd = arr.groupBy(numbers, (num) => (num % 2 === 0 ? 'even' : 'odd'));
// output
{
  odd: [1, 3, 5],
  even: [2, 4, 6],
}
```

## reverse

反转数组，返回新数组，不会改变原数组

signature:

```ts
function reverse<T>(arr: T[]): T[];
```

example:

```ts
const arr = [1, 2, 3, 4, 5];
reverse(arr); // [5, 4, 3, 2, 1]
```

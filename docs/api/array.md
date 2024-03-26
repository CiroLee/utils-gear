# array

[source code](https://github.com/CiroLee/utils-gear/blob/main/src/array.ts)

## fillArray

以任意长度值填充数组

signature:

```ts
function fillArray<T>(value: T, length: number): T[]
```

example:

```ts
fillArray(1, 4); // [1,1,1,1]
```

## sortArrayByField
     
对象数组根据指定字段排序。如果元素中不存在指定字段，则该元素会被排列在最后。            

signature:     
```ts
function sortArrayByField<T>(arr: T[], field: keyof T, ascending = true): T[]
```

example:      
```ts
const items = [{ id: 2 }, { id: 3 }, { id: 1 }];
sortArrayByField(items, 'id'); // [{ id: 1 }, { id: 2 }, { id: 3 }]s
const names = [{ name: 'John' }, { name: 'Alice' }, { name: 'Bob' }];
sortArrayByField(names, 'name', false); // [{ name: 'Alice' }, { name: 'Bob' }, { name: 'John' }]
```
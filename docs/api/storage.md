# Storage

localStorage类cookie操作封装，支持设置过期时间， set, get, delete方法均为静态方法

## Storage.set

设置storage, 支持设置过期时间

signature:

```typescript
Storage.set(key: string, value: ObjType | BaseType, expireHour?: number): void
```

example:

```typescript
Storage.set('name', 'Tom', 1);
Storage.set('obj', { name: 'Tom', age: 1 }, 1);
```

## Storage.get

按key获取storage, ignoreExpire = true时, 不会校验过期时间, 反之会校验时间是否过期。默认为false, 校验过期时间

signature:

```typescript
Storage.get(key: string, ignoreExpire: boolean): ObjType | BaseType | undefined
```

example:

```
// set
Storage.set('test', 123); // 不设置过期时间
Storage.get('test'); // 默认校验过期时间，因此返回null
Storage.get('test', true); // 123
```

## Storage.delete

删除storage  
signature:

```typescript
Storage.delete(key: string): void
```

example:

```typescript
Storage.delete('test');
```

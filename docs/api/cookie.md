# Cookie

[source code](https://github.com/CiroLee/utils-gear/blob/main/src/cookie.ts)

常用的 cookie 操作静态类封装, set, get, delete 方法均为静态方法

## Cookie.get

获取指定名称(name)的 cookie 值，如果省略，则获取所有有效的 cookie  
signature:

```typescript
Cookie.get(name?: string): string | ObjType | Nullish
```

```typescript
type ObjType = Record<string | number | symbol, any>;
```

example:

```typescript
Cookie.get('pid'); // '000'
Cookie.get(); // { pid: '000', name: 'user'}
```

## Cookie.set

设置cookie, 支持过期时间，域名设置

signature:

```typescript
Cookie.set(param: CookieParam): void
```

```typescript
interface CookieParam {
  name: string; // 设置的cookie名称
  value: string; // she设置的cookie值
  expireHour?: number; // 过期时间，默认为1小时
  domain?: string; // 作用域名
}
```

example:

```typescript
Cookie.set({
  name: 'pid',
  value: '001',
});
```

## Cookie.delete

删除指定名称的 cookie，如果省略 name, 则删除所有 cookie  
signature:

```typescript
Cookie.delete(name?:string):void
```

example:

```typescript
Cookie.delete('pid');
Cookie.delete(); // 删除所有cookie
```

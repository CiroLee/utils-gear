## browser

> 浏览器相关函数

### getPlatformType(ua: string): [PlatformType](../src/types.ts)

> 通过userAgent获取常用平台类型

```typescript
const ua = window.navigator.userAgent;
getPlatformType(ua); // 'macOS'
```

### parseURLParams(url: string): Record<string, string>

> 将 url 参数解析为对象(自动解码 url)

```typescript
const url = 'https://example.com/path?param1=value%201&param2=value%202';
parseURLParams(url); // { param1: 'value 1', param2: 'value 2' }
```

### stringifyURLParams(params: Record<string, string>): string

> 将对象转换为 url 参数

```typescript
const params = {
  param1: 'value1',
  param2: 'value2',
};
stringifyURLParams(params); // 'param1=value1&param2=value2'
```

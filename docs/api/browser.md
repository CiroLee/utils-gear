# browser

[source code](https://github.com/CiroLee/utils-gear/blob/main/src/browser.ts)

浏览器相关函数

## getPlatformType

通过userAgent获取常用平台类型

signature:

```typescript
function getPlatformType(ua: string): PlatformType;
```

```typescript
type PlatformType = 'iPhone' | 'iPad' | 'Android' | 'Windows' | 'macOS' | 'Linux' | 'unknown';
```

example:

```typescript
const ua = window.navigator.userAgent;
getPlatformType(ua); // 'macOS'
```

## parseURLParams

将 url 参数解析为对象

signature:

```typescript
function parseURLParams(url: string): ObjType;
```

```typescript
const url = 'https://example.com/path?param1=value%201&param2=value%202';
parseURLParams(url); // { param1: 'value 1', param2: 'value 2' }
```

## stringifyURLParams

将对象转换为 url 参数

signature:

```typescript
function stringifyURLParams(params: ObjType): string;
```

example:

```typescript
const params = {
  param1: 'value1',
  param2: 'value2',
};
stringifyURLParams(params); // 'param1=value1&param2=value2'
```

## isDarkMode

判断浏览器当前是否为深色模式  
signature:

```typescript
function isDarkMode(): boolean;
```

example:

```typescript
isDarkMode(); // true
```

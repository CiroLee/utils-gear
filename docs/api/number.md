# number

[source code](https://github.com/CiroLee/utils-gear/blob/main/src/number.ts)

常用数字处理函数

## convertToChineseCurrency

将数字转换为中文大写金额  
signature:

```typescript
function convertToChineseCurrency(num: number): string;
```

example:

```typescript
convertToChineseCurrency(123.4543); // 壹佰贰拾叁元肆角伍分肆厘叁
convertToChineseCurrency(123.0); // 壹佰贰拾叁元整
```

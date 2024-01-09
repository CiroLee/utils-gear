# number

[source code](https://github.com/CiroLee/utils-gear/blob/main/src/number.ts)

常用数字处理函数

## convertToZhCurrency

将数字转换为中文大写金额  
signature:

```typescript
function convertToZhCurrency(num: number): string;
```

example:

```typescript
convertToZhCurrency(123.4543); // 壹佰贰拾叁元肆角伍分肆厘叁
convertToZhCurrency(123.0); // 壹佰贰拾叁元整
```

## toCurrency

根据指定的货币格式将数字转换为金额  
signature:

```typescript
function toCurrency(num: number, currency: string, langFormat?: string): string;
```

`note`:  
货币名称简写: https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes  
语言格式: https://www.techonthenet.com/js/language_tags.php

example:

```typescript
toCurrency(123.12, 'EUR'); // €123.12
toCurrency(123.12, 'CNY', 'zh-CN'); // '¥123.12'
```

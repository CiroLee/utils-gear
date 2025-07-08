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

## formatNumber

将数字格式化为字符串  
signature:

```typescript
function formatNumber(value: number, config: NumberFormatConfig = {}): string;
```

example:

```typescript
formatNumber(1234.56); // '1,234.56'
formatNumber(1234.56, { minimumFractionDigits: 3 }); // '1,234.560'
```

## formatCurrency

将数字格式化为货币字符串  
signature:

```typescript
formatCurrency(value: number, currency: string, locale?: string | string[],options?: Omit<NumberFormatConfig, 'style' | 'currency'>): string
```

example:

```typescript
formatCurrency(1234.56, 'USD'); // '$1,234.56'
formatCurrency(1234.56, 'USD', 'zh-CN', { currencyDisplay: 'code' }); // 'USD 1,234.56'
```

## formatPercent

将数字格式化为百分比字符串  
signature:

```typescript
function formatPercent(value: number, locale?: string | string[], options?: Omit<NumberFormatConfig, 'style'>): string;
```

example:

```typescript
formatPercent(0.5678, 'en-US', { maximumFractionDigits: 3 }); // '56.78%'
```

## formatUnit

将数字格式化为带单位字符串  
signature:

```typescript
function formatUnit(
  value: number,
  unit: string,
  locale?: string | string[],
  options?: Omit<NumberFormatConfig, 'style' | 'unit'>,
): string;
```

example:

```typescript
number.formatUnit(12345.679, 'meter'); // '12,345.679 m'
number.formatUnit(12345.679, 'meter', 'zh-CN'); // '12,345.679米'
```

## formatCompact

将数字格式化为紧凑的字符串  
signature:

```typescript
function formatCompact(value: number, locale?: string | string[], display: CompactDisplay = 'short'): string;
```

example:

```typescript
formatCompact(1234567); // '1.2M'
formatCompact(1234567, 'zh-CN', 'long'); // '123万'
```

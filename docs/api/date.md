# date

常用日期处理函数

## week

获取星期数，默认返回中文日期；如果需要返回英文日期或英文简写日期

signature:

```typescript
function week(param?: Week | Date): string | Nullish;
```

```typescript
interface Week {
  date?: Date; // 日期
  lang?: string; // 语言 zh:中文 en: 英文
  abbr?: boolean; // 是否输出简写, 仅英文有效
}
type Nullish = null | undefined;
```

example:

```typescript
week(); // 省略入参，返回当天日期星期数
week(new Date('2022-1-18')); // '二' 默认返回中文星期
week({
  date: new Date('2022-1-18'),
  lang: 'en',
}); // 'Tuesday'
week({
  date: new Date('2022-1-18'),
  lang: 'en',
  attr: true,
}); // 'Tue.' 英文星期简写末尾有点号
```

## dateFormat

日期格式化。默认格式为: yyyy-mm-dd HH:MM:SS。option 为 string 类型时，表示格式字符串。需要设置日期是否自动补零，使用 DateFormatOption 类型  
signature:

```typescript
function dateFormat(date: Date, option?: string | DateFormatOption): string;
```

```typescript
export interface DateFormatOption {
  format?: string; // 格式化字符串
  padZero?: boolean; // 是否补零
}
```

```typescript
dateFormat(new Date(1642479132 * 1000)); // 2022-01-18 12:12:12
dateFormat(new Date(1642479132 * 1000), false); // 2022-1-18 12:12:12
dateFormat(new Date(1642479132 * 1000), 'yyyy/mm/dd'); // 2022/01/18
dateFormat(new Date(1642479132 * 1000), 'yyyy年mm月dd日'); // 2022年01月18日
dateFormat(new Date(1642479132 * 1000), {
  format: 'yyyy/mm/dd HH:MM:SS',
  padZero: false,
}); // 2022/1/18 12:12:12
```

## dateOffset

日期偏移函数。支持年，月，日等格式

signature:

```typescript
function dateOffset(date: Date, amount: number, unit: TimeUnit): Date;
```

```typescript
type TimeUnit = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';
```

example:

```typescript
const initialDate = new Date('2023-05-01');
dateOffset(initialDate, 2, 'year'); // 2025-05-01T00:00:00.000Z
dateOffset(initialDate, 3, 'month'); // 2023-08-01T00:00:00.000Z
dateOffset(initialDate, -3, 'month'); // 2023-02-01T00:00:00.000Z
```

## dateEqual

判断两个日期是否相等  
signature:

```typescript
function dateEqual(a: Date, b: Date): boolean;
```

example:

```typescript
const date1 = new Date('2022-01-01 12:00:00');
const date2 = new Date('2022-01-01 12:00:00');
const result = date.dateEqual(date1, date2); // true
```

## dateMaxMin

获取一组日期中的最大或最小值  
signature:

```typescript
function (dates: Date[], type: 'max' | 'min'): Date
```

example:

```typescript
const dates = [new Date('2023-01-01 12:00:00'), new Date('2024-01-01 12:00:00')];
dateMaxMin(dates, 'max'); // Mon Jan 01 2024 12:00:00 GMT+0800
```

## dateDiff

计算两个日期之间的差值

signature:

```typescript
function dateDiff(a: Date, b: Date, unit: TimeUnit): number;
```

example:

```typescript
const d1 = new Date('2023-12-01 12:00:00');
const d2 = new Date('2021-12-01 12:00:00');
dateDiff(d1, d2, 'year'); // 2
dateDiff(d1, d2, 'hour'); // 17520
```
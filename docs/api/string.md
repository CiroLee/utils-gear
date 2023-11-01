# string

常用 string 处理函数

## encryptedPhone

隐藏手机中文四位数

signature:

```typescript
function encryptedPhone(num: string | number): string;
```

example:

```typescript
encryptedPhone(13311112222); // '133****2222'
```

## transFirstLetterTo

字符串首字母大小写转换

signature:

```typescript
function transFirstLetterTo(str: string, to: 'upper' | 'lower'): string;
```

example:

```typescript
transFirstLetterTo('abc', 'upper'); // Abc
transFirstLetterTo('abc-de', 'upper'); // Abc-de''
transFirstLetterTo('ABC', 'lower'); // aBC
```

## whiteSpace

返回指定数量的空格。 num 需要大于 0，默认 num = 1

signature:

```typescript
function whiteSpace(num: number): string;
```

## camelCase

字符串转为 camelCase 格式

signature:

```typescript
function camelCase(str: string): string;
```

example:

```typescript
camelCase('foo-bar'); // fooBar
camelCase('FooBar'); // fooBar
```

## pascalCase

字符串转为 pascalCase 格式

signature:

```typescript
function pascalCase(str: string): string;
```

example:

```typescript
pascalCase('foo-bar'); // FooBar
pascalCase('Foo-Bar'); // FooBar
```

## kebabCase

字符串转 kebab-case

signature:

```typescript
function kebabCase(str: string): string;
```

```typescript
kebabCase('FooBar'); // foo-bar
kebabCase('foo bar'); // foo-bar
```

## snakeCase

字符串转 snake_case

signature:

```typescript
function snakeCase(str: string): string;
```

example:

```typescript
snakeCase('fooBar'); // foo_bar
snakeCase('FooBar'); // foo_bar
```

## replaceAt

替换字符串中指定索引位置的字符

signature:

```typescript
function replaceAt(str: string, index: number, char: string): string;
```

example:

```typescript
replaceAt('footbar', 3, 'T'); // fooTbar
```

## deleteAt

删除字符串中指定索引位置的字符

signature:

```typescript
function deleteAt(str: string, index: number): string;
```

example:

```typescript
deleteAt('footbar', 3); // foobar
```

## removeSpaces

移除字符串中指定位置的空格

signature:

```typescript
function removeSpaces(str: string, option: 'start' | 'end' | 'both' | 'all' = 'all'): string;
```

example:

```typescript
removeSpaces('  hello world  '); // "helloworld"
removeSpaces('  hello world  ', 'start'); // "hello world  "
removeSpaces('  hello world  ', 'end'); // "  hello world"
removeSpaces('  hello world  ', 'both'); // "hello world"
```

## uuid

随机生成一个uuid(v4)

signature:

```typescript
function uuid(): string;
```

example:

```typescript
uuid(); // '4e5f6f7f-8f9a-11ec-9dcb-0242ac120002'
```

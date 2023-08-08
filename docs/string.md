## string

> 常用 string 处理函数

### encryptedPhone(num: string | number): string

> 隐藏手机中文四位数

```typescript
encryptedPhone(13311112222); // '133****2222'
```

### transFirstLetterTo(str: string, to: 'upper' | 'lower'): string

> 字符串首字母大小写转换

```typescript
transFirstLetterTo('abc', 'upper'); // Abc
transFirstLetterTo('abc-de', 'upper'); // Abc-de''
transFirstLetterTo('ABC', 'lower'); // aBC
```

### whiteSpace(num: number): string

> 返回指定数量的空格。 num 需要大于 0，默认 num = 1

### camelCase(str: string): string

> 字符串转为 camelCase 格式

```typescript
camelCase('foo-bar'); // fooBar
camelCase('FooBar'); // fooBar
```

### pascalCase(str: string): string

> 字符串转为 pascalCase 格式

```typescript
pascalCase('foo-bar'); // FooBar
pascalCase('Foo-Bar'); // FooBar
```

### kebabCase(str: string): string

> 字符串转 kebab-case

```typescript
kebabCase('FooBar'); // foo-bar
kebabCase('foo bar'); // foo-bar
```

### snakeCase(str: string): string

> 字符串转 snake_case

```typescript
snakeCase('fooBar'); // foo_bar
snakeCase('FooBar'); // foo_bar
```

### replaceAt(str: string, index: number, char: string): string

> 替换字符串中指定索引位置的字符

```typescript
replaceAt('footbar', 3, 'T'); // fooTbar
```

### deleteAt(str: string, index: number): string

> 删除字符串中指定索引位置的字符

```typescript
deleteAt('footbar', 3); // foobar
```

### removeSpaces(str: string, option: 'start' | 'end' | 'both' | 'all' = 'all'): string

> 移除字符串中指定位置的空格

```typescript
removeSpaces('  hello world  '); // "helloworld"
removeSpaces('  hello world  ', 'start'); // "hello world  "
removeSpaces('  hello world  ', 'end'); // "  hello world"
removeSpaces('  hello world  ', 'both'); // "hello world"
```

### uuid(): string

> 随机生成一个uuid(v4)

```typescript
uuid(); // '4e5f6f7f-8f9a-11ec-9dcb-0242ac120002'
```

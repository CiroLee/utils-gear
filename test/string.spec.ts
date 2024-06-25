import * as str from '@src/string';

describe('encryptedPhone test', () => {
  test('ENCRYPTEDPHONE: invalid phone and return itself', () => {
    const phoneNum = 123456;
    expect(() => {
      str.encryptedPhone(phoneNum);
    }).toThrow();
  });
  test('ENCRYPTEDPHONE: valid phone number and hide its middle four digits', () => {
    const phoneNum = 13700001111;
    const result = str.encryptedPhone(phoneNum);
    expect(result).toBe('137****1111');
  });
  test('ENCRYPTEDPHONE: custom placeholder', () => {
    const phoneNum = 13700001111;
    const result = str.encryptedPhone(phoneNum, '#');
    expect(result).toBe('137####1111');
  });
});

describe('upperCaseFirstLetter test', () => {
  test('UPPERCASEFIRSTLETTER: param is a string, to upper', () => {
    const param = 'i am a boy';
    expect(str.transFirstLetterTo(param, 'upper')).toBe('I am a boy');
  });
  test('transFirstLetterTo: to lower', () => {
    const param = 'I am A boy';
    expect(str.transFirstLetterTo(param, 'lower')).toBe('i am A boy');
  });
  test('UPPERCASEFIRSTLETTER: param is a not string', () => {
    const param = ['i am a boy'];
    expect(str.transFirstLetterTo(param as unknown as string, 'lower')).toEqual(param);
  });
});

describe('whiteSpace test', () => {
  test('whitespace: fill 2 spaces before the string', () => {
    const result = `${str.whiteSpace(2)}123`;
    expect(result).toHaveLength(5);
    expect(result.match(/\s/g)).toHaveLength(2);
  });
  test('whitespace: fill 1 space before the string', () => {
    const result = `${str.whiteSpace()}123`;
    expect(result).toHaveLength(4);
    expect(result.match(/\s/g)).toHaveLength(1);
  });
});

describe('string case convert test', () => {
  test('camelCase', () => {
    const strArr = [
      {
        s: 'foo-bar',
        v: 'fooBar',
      },
      {
        s: 'foo_bar',
        v: 'fooBar',
      },
      {
        s: 'Foo-Bar',
        v: 'fooBar',
      },
      {
        s: 'Foo-bar',
        v: 'fooBar',
      },
      {
        s: '_foo-bar',
        v: 'fooBar',
      },
    ];
    strArr.forEach((el) => {
      expect(str.camelCase(el.s)).toBe(el.v);
    });
  });
  test('pascalCase', () => {
    const strArr = [
      {
        s: 'foo-bar',
        v: 'FooBar',
      },
      {
        s: 'foo_bar',
        v: 'FooBar',
      },
      {
        s: 'Foo-Bar',
        v: 'FooBar',
      },
      {
        s: 'Foo-bar',
        v: 'FooBar',
      },
      {
        s: '_foo-bar',
        v: 'FooBar',
      },
    ];
    strArr.forEach((el) => {
      expect(str.pascalCase(el.s)).toBe(el.v);
    });
  });
  test('snakeCase', () => {
    const strArr = [
      {
        s: 'foo-bar',
        v: 'foo_bar',
      },
      {
        s: 'Foo-Bar',
        v: 'foo_bar',
      },
      {
        s: 'Foo-bar',
        v: 'foo_bar',
      },
      {
        s: 'foo bar',
        v: 'foo_bar',
      },
      {
        s: 'Foo-bar rest',
        v: 'foo_bar_rest',
      },
    ];
    strArr.forEach((el) => {
      expect(str.snakeCase(el.s)).toBe(el.v);
    });
  });
  test('kebabCase', () => {
    const strArr = [
      {
        s: 'fooBar',
        v: 'foo-bar',
      },
      {
        s: 'FooBar',
        v: 'foo-bar',
      },
      {
        s: 'foo bar',
        v: 'foo-bar',
      },
      {
        s: 'Foo-bar rest',
        v: 'foo-bar-rest',
      },
    ];
    strArr.forEach((el) => {
      expect(str.kebabCase(el.s)).toBe(el.v);
    });
  });
});

describe('replaceAr and deleteAt test', () => {
  test('deleteAt', () => {
    expect(str.deleteAt('footbar', 3)).toBe('foobar');
  });
  test('replaceAt', () => {
    expect(str.replaceAt('footbar', 3, 'T')).toBe('fooTbar');
  });
});

describe('removeSpaces test', () => {
  test('remove the start space', () => {
    expect(str.removeSpaces('  hello world  ', 'start')).toBe('hello world  ');
  });
  test('remove the end space', () => {
    expect(str.removeSpaces('  hello world  ', 'end')).toBe('  hello world');
  });
  test('remove both start end end spaces', () => {
    expect(str.removeSpaces('  hello world  ', 'both')).toBe('hello world');
  });
  test('remove all spaces', () => {
    expect(str.removeSpaces('  hello world  ')).toBe('helloworld');
  });
  test('invalid option', () => {
    expect(str.removeSpaces('  hello world  ', 'invalid' as any)).toBe('  hello world  ');
  });
});

describe('uuid test', () => {
  it('should generate a uuid string', () => {
    expect(str.uuid()).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
  });

  it('should generate different uuid each time', () => {
    const id1 = str.uuid();
    const id2 = str.uuid();
    expect(id1).not.toBe(id2);
  });
});

describe('encodeBase64 and decodeBase64 test', () => {
  it('should encode correctly', () => {
    expect(str.encodeBase64('hello 😁 世界')).toBe('aGVsbG8g8J+YgSDkuJbnlYw=');
  });
  it('should decode correctly', () => {
    expect(str.decodeBase64('aGVsbG8g8J+YgSDkuJbnlYw=')).toBe('hello 😁 世界');
  });
});

describe('countChar', () => {
  it('counts occurrences of a character in a string', () => {
    expect(str.countChar('hello world', 'o')).toBe(2);
    expect(str.countChar('hello world', 'l')).toBe(3);
    expect(str.countChar('hello world', 'z')).toBe(0);
  });
  it('counts occurrences of special characters', () => {
    expect(str.countChar('a+b=c!', '=')).toBe(1);
  });
  it('throws Error if arguments are not strings', () => {
    expect(() => str.countChar(123 as any, '1')).toThrow(Error);
    expect(() => str.countChar('string', 1 as any)).toThrow(Error);
    expect(() => str.countChar({} as any, 'o')).toThrow(Error);
    expect(() => str.countChar('string', {} as any)).toThrow(Error);
    expect(() => str.countChar('hello', 'll')).toThrow(Error);
  });
});

describe('formatBytes', () => {
  it('should format bytes to human-readable form', () => {
    expect(str.formatBytes(1024)).toBe('1KB');
    expect(str.formatBytes(1048576)).toBe('1MB');
  });
  it('should handle decimal places correctly', () => {
    expect(str.formatBytes(1234.5678, 2)).toBe('1.21KB');
    expect(str.formatBytes(5000, 3)).toBe('4.883KB');
  });
  it('should return "0 Bytes" for zero input', () => {
    expect(str.formatBytes(0)).toBe('0Bytes');
  });
  it('should handle very small numbers gracefully', () => {
    expect(str.formatBytes(0.001, 3)).toBe('0.001Bytes');
  });
  it('should handle negative byte values', () => {
    expect(str.formatBytes(-1024)).toBe('-1KB');
  });
  it('decimals less than 0', () => {
    expect(str.formatBytes(1024, -1)).toBe('1KB');
  });
});

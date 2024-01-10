import * as validator from '@src/validator';
const mockArr = [1, 2, -1, 0];

describe('isAllTrue test', () => {
  test('isAllTrue: isAllTrue that uses default callback function', () => {
    const result = validator.isAllTrue(mockArr);
    expect(result).toBeFalsy();
  });
  test('isAllTrue: isAllTure that uses custom callback function', () => {
    const result = validator.isAllTrue(mockArr, (item: number) => item > -1);
    expect(result).toBeFalsy();
  });
});

describe('isAnyTrue test', () => {
  test('isAnyTrue: isAnyTrue that use default callback function', () => {
    const result = validator.isAnyTrue(mockArr);
    expect(result).toBeTruthy();
  });
  test('isAnyTrue: isAnyTure that uses custom callback function', () => {
    const result = validator.isAnyTrue(mockArr, (item: number) => item > -1);
    expect(result).toBeTruthy();
  });
});

describe('isNumberLike test', () => {
  test('ISNUMBERLIKE: input is number-like string', () => {
    expect(validator.isNumberLike('1')).toBeTruthy();
  });
  test('ISNUMBERLIKE: input is not a number-like string', () => {
    expect(validator.isNumberLike({ n: 123 })).toBeFalsy();
  });
  test('ISNUMBERLIKE: input is hexadecimal color', () => {
    expect(validator.isNumberLike('0xFF0000')).toBeTruthy();
  });
});

describe('isEmptyObject test', () => {
  test('param is not an object, should throw an error', () => {
    expect(() => {
      validator.isEmptyObject([]);
    }).toThrow(/isEmptyObject/);
  });
  test('param is not an object, should return false correctly', () => {
    const obj1 = { a: 1, b: null };
    const obj2 = {};
    Object.defineProperty(obj2, 'attr', {
      value: 'sth',
      enumerable: false,
    });

    expect(validator.isEmptyObject(obj1)).toBeFalsy();
    expect(validator.isEmptyObject(obj2)).toBeFalsy();
  });
  test('param is an empty object, should return true correctly', () => {
    expect(validator.isEmptyObject({})).toBeTruthy();
  });
});

describe('isLeap test', () => {
  test('ISLEAP: judge input year is leap', () => {
    const year1 = 1996;
    const year2 = 2001;
    const year3 = 2100;
    const year4 = 2400;
    expect(validator.isLeap(year1)).toBeTruthy();
    expect(validator.isLeap(year2)).toBeFalsy();
    expect(validator.isLeap(year3)).toBeFalsy();
    expect(validator.isLeap(year4)).toBeTruthy();
  });
});

describe('IsPrime test', () => {
  test('ISPRIME: num is integer', () => {
    const result = validator.IsPrime(23);
    expect(result).toBeTruthy();
  });
  test('ISPRIME: num is 2', () => {
    const result = validator.IsPrime(2);
    expect(result).toBeTruthy();
  });
  test('ISPRIME: num is Infinity', () => {
    expect(() => {
      validator.IsPrime(Infinity);
    }).toThrow();
  });
  test('ISPRIME: invalid num', () => {
    const nums = [-1, 0, 1, 1.2, 4];
    nums.forEach((n) => {
      const result = validator.IsPrime(n);
      expect(result).toBeFalsy();
    });
  });
});

describe('isBase64 test', () => {
  it('text is not base64, should return false', () => {
    expect(validator.isBase64('asdasd===')).toBeFalsy();
  });
  it('text is base64, should return true', () => {
    expect(validator.isBase64('aGVsbG8g8J+YgSDkuJbnlYw=')).toBeTruthy();
  });
});

import * as math from '@src/math';

describe('zeroFill test', () => {
  test('ZEROFILL: invalid param that will return itself', () => {
    const param1 = -Infinity;
    const param2 = Infinity;
    const param3 = '123';
    expect(math.zeroFill(param1)).toBe(String(param1));
    expect(math.zeroFill(param2)).toBe(String(param2));
    expect(math.zeroFill(param3)).toBe(param3);
  });
  test('ZEROFILL: param le zero', () => {
    const param1 = -9;
    const param2 = -10;
    expect(math.zeroFill(param1)).toBe('-09');
    expect(math.zeroFill(param2)).toBe('-10');
  });
  test('ZEROFILL: param ge zero', () => {
    const param1 = 0;
    const param2 = 1;
    const param3 = 10;
    expect(math.zeroFill(param1)).toBe('00');
    expect(math.zeroFill(param2)).toBe('01');
    expect(math.zeroFill(param3)).toBe('10');
  });
  test('ZEROFILL: param is number-like string', () => {
    const parma1 = '1';
    const param2 = '10';
    const param3 = '-1.1';
    const param4 = 'num';
    expect(math.zeroFill(parma1)).toBe('01');
    expect(math.zeroFill(param2)).toBe('10');
    expect(math.zeroFill(param3)).toBe('-01.1');
    expect(math.zeroFill(param4)).toBe('num');
  });
});

describe('max test', () => {
  test('MAX: input is a number array', () => {
    const param = [1, 2, 3];
    expect(math.max(param)).toBe(3);
  });
  test('MAX: input is a string array', () => {
    const param = ['1', '2', '3'];
    expect(() => math.max(param as unknown as number[])).toThrow();
  });
});

describe('min test', () => {
  test('MIN: input is a number array', () => {
    const param = [1, 2, 3];
    expect(math.min(param)).toBe(1);
  });
  test('MIN: input is a number-like string array', () => {
    const param = ['1', '2', '3'];
    expect(() => math.min(param as unknown as number[])).toThrow();
  });
});

describe('intersection test', () => {
  test('INTERSECTION: two arries has intersection', () => {
    const result = math.intersection([1, 2, 3], [1, 2]);
    expect(result).toEqual([1, 2]);
  });
  test('INTERSECTION: two arraies has no interaction by different type', () => {
    const result = math.intersection([1, 2], ['1', '2'] as unknown as number[]);
    expect(result).toEqual([]);
  });
});

describe('union test', () => {
  test('UNION: return the union of two arries with same type', () => {
    const result = math.union([1, 2], [1, 3]);
    expect(result).toEqual([1, 2, 3]);
  });
  test('UNION: return the union of two arries with different types', () => {
    const result = math.union([1, 2], ['1', '2']);
    expect(result).toEqual([1, 2, '1', '2']);
  });
});

describe('pickUniqueNumbers', () => {
  it('should pick n unique elements from array', () => {
    const arr = [1, 2, 2, 3];
    const result = math.pickUniqueNumber(arr, 3);

    expect(new Set(result).size).toBe(3);
    expect(result.length).toBe(3);
  });

  it('should throw if n > array length', () => {
    const arr = [1, 2];
    expect(() => {
      math.pickUniqueNumber(arr, 3);
    }).toThrow();
  });

  it('should handle duplicate elements', () => {
    const arr = [1, 2, 2, 3];
    const result = math.pickUniqueNumber(arr, 3);

    expect(new Set(result).size).toBe(3);
  });
});

describe('shuffle', () => {
  it('should contain the same elements', () => {
    const array = [1, 2, 3];
    math.shuffle(array);
    expect(array).toEqual(expect.arrayContaining(array));
  });

  it('param is not an array, should throw error', () => {
    expect(() => math.shuffle(123 as unknown as any[])).toThrow();
  });
});

describe('randomInt', () => {
  it('should return the random int correctly', () => {
    const result = math.randomInt(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  it('should throw error if the param is not an integer', () => {
    expect(() => math.randomInt('1' as unknown as number, 10)).toThrow();
  });
  it('only one param', () => {
    const result = math.randomInt(10);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(10);
  });
});

describe('mean', () => {
  it('should return mean value of the array correctly', () => {
    const result = math.mean([1, 2, 3]);
    expect(result).toBe(2);
  });
  it('array is not an array, should throw error', () => {
    expect(() => math.mean(123 as unknown as any[])).toThrow();
  });
  it('elements in array is not number, should throw error', () => {
    const array = [1, 2, '3'];
    expect(() => math.mean(array as number[])).toThrow();
  });
});

describe('sum', () => {
  it('should return the sum value correctly', () => {
    const result = math.sum([1, 2, 3]);
    expect(result).toBe(6);
  });
  it('param is not an array, should throw error', () => {
    expect(() => math.sum(123 as unknown as any[])).toThrow();
  });
  it('element in param is not array type, should throw error', () => {
    expect(() => math.sum([1, 2, '3'] as number[])).toThrow();
  });
});

describe('stdDev', () => {
  it('should return standard deviation correctly', () => {
    expect(math.stdDev([1, 2, 3, 4, 5])).toBeCloseTo(1.41);
  });
  it('param is not array, should throw error', () => {
    expect(() => math.stdDev(123 as unknown as any[])).toThrow();
  });
  it('element in param is not number, should throw error', () => {
    expect(() => math.stdDev([1, 2, '3'] as number[])).toThrow();
  });
});

import * as arr from '@src/array';
describe('fillArray test', () => {
  it('fill an array, length equals 4', () => {
    const array = arr.fillArray(1, 4);
    expect(array.length).toBe(4);
    expect(array.every((item) => typeof item === 'number')).toBeTruthy();
  });
  it('fill an array, with invalid length, should throw error', () => {
    expect(() => {
      arr.fillArray(1, -1);
    }).toThrow();
  });
  it('fill an array, length equals 0', () => {
    const array = arr.fillArray(1, 0);
    expect(array.length).toBe(0);
  });
});

describe('sortArrayByField', () => {
  test('should sort items by string field in ascending order', () => {
    const items = [{ name: 'John' }, { name: 'Alice' }, { name: 'Bob' }];
    expect(arr.sortArrayByField(items, 'name')).toEqual([{ name: 'Alice' }, { name: 'Bob' }, { name: 'John' }]);
  });
  test('should sort items by string field in descending order', () => {
    const items = [{ name: 'John' }, { name: 'Alice' }, { name: 'Bob' }];
    expect(arr.sortArrayByField(items, 'name', false)).toEqual([{ name: 'John' }, { name: 'Bob' }, { name: 'Alice' }]);
  });
  test('should sort items by absent field moving them to the end', () => {
    const items = [{ name: 'John' }, { age: 30 }, { name: 'Alice' }];
    expect(arr.sortArrayByField(items, 'name')).toEqual([{ name: 'Alice' }, { name: 'John' }, { age: 30 }]);
  });
  test('should handle all items missing the field', () => {
    const items = [{ age: 30 }, { age: 25 }, { age: 40 }];
    // 假设我们正在尝试按不存在的'field'字段来排序
    expect(arr.sortArrayByField(items, 'field' as any)).toEqual([{ age: 30 }, { age: 25 }, { age: 40 }]);
  });
  test('should handle sorting with null values', () => {
    const items = [{ name: 'Alice' }, { name: null }, { name: 'Bob' }];
    expect(arr.sortArrayByField(items, 'name')).toEqual([{ name: 'Alice' }, { name: 'Bob' }, { name: null }]);
  });
  test('should handle sorting with undefined and null values', () => {
    const items = [{}, { name: 'Alice' }, { name: null }, { name: 'Bob' }];
    expect(arr.sortArrayByField(items, 'name')).toEqual([{ name: 'Alice' }, { name: 'Bob' }, {}, { name: null }]);
  });
  test('should sort items by number field in ascending order', () => {
    const items = [{ id: 2 }, { id: 3 }, { id: 1 }];
    expect(arr.sortArrayByField(items, 'id')).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
  test('should sort items by number field in descending order', () => {
    const items = [{ id: 2 }, { id: 3 }, { id: 1 }];
    expect(arr.sortArrayByField(items, 'id', false)).toEqual([{ id: 3 }, { id: 2 }, { id: 1 }]);
  });
});

describe('groupBy', () => {
  type Person = { name: string; age: number; gender: string };

  const people: Person[] = [
    { name: 'Alice', age: 30, gender: 'female' },
    { name: 'Bob', age: 30, gender: 'male' },
    { name: 'Charlie', age: 25, gender: 'male' },
    { name: 'David', age: 25, gender: 'male' },
    { name: 'Eve', age: 35, gender: 'female' },
  ];
  test('groups by a key name', () => {
    const groupedByAge = arr.groupBy(people, 'age');
    expect(groupedByAge).toEqual({
      '30': [
        { name: 'Alice', age: 30, gender: 'female' },
        { name: 'Bob', age: 30, gender: 'male' },
      ],
      '25': [
        { name: 'Charlie', age: 25, gender: 'male' },
        { name: 'David', age: 25, gender: 'male' },
      ],
      '35': [{ name: 'Eve', age: 35, gender: 'female' }],
    });
  });
  test('groups by a custom function', () => {
    const groupedByGender = arr.groupBy(people, (person) => person.gender);
    expect(groupedByGender).toEqual({
      female: [
        { name: 'Alice', age: 30, gender: 'female' },
        { name: 'Eve', age: 35, gender: 'female' },
      ],
      male: [
        { name: 'Bob', age: 30, gender: 'male' },
        { name: 'Charlie', age: 25, gender: 'male' },
        { name: 'David', age: 25, gender: 'male' },
      ],
    });
  });
  test('handles array of primitive types', () => {
    const numbers = [1, 2, 3, 4, 5, 6];

    // Group numbers by whether they are even or odd
    const groupedByEvenOdd = arr.groupBy(numbers, (num) => (num % 2 === 0 ? 'even' : 'odd'));

    expect(groupedByEvenOdd).toEqual({
      odd: [1, 3, 5],
      even: [2, 4, 6],
    });
  });
});

describe('reverse test', () => {
  it('reverse an array of primitive elements', () => {
    const array = [1, 2, 3, 4, 5];
    expect(arr.reverse(array)).toEqual([5, 4, 3, 2, 1]);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });
  it('reverse an array of objects', () => {
    const array = [{ a: 1 }, { a: 2 }, { a: 3 }];
    expect(arr.reverse(array)).toEqual([{ a: 3 }, { a: 2 }, { a: 1 }]);
    expect(array).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
  });
});

describe('flatArray', () => {
  it('flatten an array with deep 1', () => {
    const array = [1, 2, 3, [4, 5, [6, 7]]];
    const result = arr.flatArray(array, 1);
    expect(result).toEqual([1, 2, 3, 4, 5, [6, 7]]);
  });
  it('flatten an array with default deep, will flat all', () => {
    const array = [1, 2, 3, [4, 5, [6, 7]]];
    const result = arr.flatArray(array);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  it('flatten an array with invalid deep', () => {
    const array = [1, 2, 3, [4, 5]];
    const result = arr.flatArray(array, -1);
    expect(result).toEqual([1, 2, 3, [4, 5]]);
  });
});

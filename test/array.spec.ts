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

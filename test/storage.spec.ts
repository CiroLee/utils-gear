import { Storage } from '@src/storage';
let mockStorageSet: jest.SpyInstance<void>;
describe('Storage test', () => {
  beforeEach(() => {
    Storage.delete('test');
    mockStorageSet = jest.spyOn(Storage, 'set');
  });
  test('STORAGE: set a valid storage with expireHour', () => {
    Storage.set('test', { val: 123 }, 1);
    expect(mockStorageSet).toHaveBeenCalledTimes(1);
  });
  test('STORAGE: set a invalid storage with non-json value', () => {
    const a: any = {};
    a.b = a;
    const val = a;
    expect(() => Storage.set('test', val, 1)).toThrow('Failed to serialize storage value');
    expect(mockStorageSet).toHaveBeenCalledTimes(1);
  });
  test('STORAGE: empty storage', () => {
    const result = Storage.get('a');
    expect(result).toBeNull();
  });
  test('STORAGE: set expire storage and get with ignore = true', () => {
    Storage.set('test', 123, 0);
    const result = Storage.get('test', true);
    expect(result).toBe(123);
  });
  test('STORAGE: set expire storage and get with ignore = false', () => {
    Storage.set('test', 123, 0);
    const result = Storage.get('test', false);

    expect(result).toBeNull();
  });
});

import * as utils from '@src/utils';

describe('getType', () => {
  test('undefined type', () => {
    expect(utils.getType()).toBe('undefined');
  });
  test('null type', () => {
    expect(utils.getType(null)).toBe('null');
  });
  test('NaN type', () => {
    expect(utils.getType(NaN)).toBe('nan');
  });
  test('number type', () => {
    expect(utils.getType(123)).toBe('number');
  });
  test('boolean type', () => {
    expect(utils.getType(false)).toBe('boolean');
  });
  test('string type', () => {
    expect(utils.getType('use-utils')).toBe('string');
  });
  test('Array type', () => {
    expect(utils.getType([])).toBe('array');
  });
  test('Object type', () => {
    expect(utils.getType({})).toBe('object');
  });
  test('Function type', () => {
    expect(
      utils.getType(() => {
        console.log(123);
      }),
    ).toBe('function');
  });
  test('Date type', () => {
    expect(utils.getType(new Date('2022'))).toBe('date');
  });
  test('HTMLElement type', () => {
    document.body.innerHTML = '<div id="test"></div>';
    const element = document.getElementById('test');
    if (element) {
      expect(utils.getType(element)).toBe('element');
    }
  });
  test('RegExp type', () => {
    expect(utils.getType(/abc/)).toBe('regexp');
  });
  test('Map type', () => {
    expect(utils.getType(new Map())).toBe('map');
  });
  test('Set type', () => {
    expect(utils.getType(new Set())).toBe('set');
  });
  test('WeakMap type', () => {
    expect(utils.getType(new WeakMap())).toBe('weakmap');
  });
  test('WeakSet type', () => {
    expect(utils.getType(new WeakSet())).toBe('weakset');
  });
  test('Error type', () => {
    expect(utils.getType(new Error())).toBe('error');
  });
  test('BigInt type', () => {
    expect(utils.getType(BigInt(123))).toBe('bigint');
  });
  test('custom class type will return object', () => {
    class CustomClass {}
    const customInstance = new CustomClass();
    expect(utils.getType(customInstance)).toBe('object');
  });
  test('THROTTLE: throttle test', (done) => {
    const mockFn = jest.fn();
    // async call throttle twice
    const fn = utils.throttle(mockFn, 10);
    fn(1);
    fn(2);

    setTimeout(() => {
      const calls = mockFn.mock.calls;
      expect(calls.length).toBe(1);
      expect(calls[0][1]).toEqual([1]);
      done();
    }, 50);
  });
  test('DEBOUNCE: debounce test', (done) => {
    const mockFn = jest.fn();
    // async call throttle twice
    const fn = utils.debounce(mockFn, 10);
    fn(1);
    fn(2);

    setTimeout(() => {
      const calls = mockFn.mock.calls;
      expect(calls.length).toBe(1);
      expect(calls[0][0]).toEqual(2);
      done();
    }, 50);
  });
});

describe('utils.deepClone', () => {
  it('should clone an object correctly using structuredClone if available', () => {
    const original = { a: 1, b: { c: 2 } };

    // 模拟 structuredClone 存在
    const mockStructuredClone = jest.fn().mockImplementation((value) => value);
    global.structuredClone = mockStructuredClone;

    const clone = utils.deepClone(original);

    expect(mockStructuredClone).toHaveBeenCalledWith(original);
    expect(clone).toEqual(original);
  });

  it('should clone an object correctly using JSON if structuredClone is not available', () => {
    const original = { a: 1, b: { c: 2 } };

    //@ts-ignore
    global.structuredClone = undefined;

    const clone = utils.deepClone(original);

    expect(clone).toEqual(original);
    expect(clone).not.toBe(original); // 检查是否是深拷贝
  });

  it('should clone an array correctly', () => {
    const original = [1, 2, { a: 3 }];

    const clone = utils.deepClone(original);

    expect(clone).toEqual(original);
    expect(clone).not.toBe(original); // 检查是否是深拷贝
  });

  it('should handle an empty object', () => {
    const original = {};

    const clone = utils.deepClone(original);

    expect(clone).toEqual(original);
    expect(clone).not.toBe(original);
  });

  it('should handle an empty array', () => {
    const original: any[] = [];

    const clone = utils.deepClone(original);

    expect(clone).toEqual(original);
    expect(clone).not.toBe(original);
  });
});

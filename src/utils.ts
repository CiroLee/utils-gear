/* eslint-disable no-unused-vars */
/**
 * @description 获取数据类型
 */
const typeMap: { [key: string]: string } = {
  Array: 'array',
  RegExp: 'regexp',
  Date: 'date',
  Map: 'map',
  Set: 'set',
  WeakMap: 'weakmap',
  WeakSet: 'weakset',
  Error: 'error',
  BigInt: 'bigint',
  Element: 'element',
};

export function getType(v?: any): string {
  if (v === null) return 'null';
  if (v === undefined) return 'undefined';
  if (Number.isNaN(v)) return 'nan';

  const type = typeof v;
  if (type !== 'object') return type; // 处理原始类型

  // 使用更底层的 `Object.prototype.toString` 并规避 Symbol.toStringTag 的干扰
  const rawType = Object.prototype.toString
    .call(Object.getPrototypeOf(v) || v)
    .slice(8, -1)
    .toLowerCase();

  // 检查是否为 DOM 元素
  if (typeof HTMLElement === 'function' && v instanceof HTMLElement) return 'element';

  // 使用类型映射对象进行类型检测
  for (const [typeName, typeValue] of Object.entries(typeMap)) {
    // 兼容node环境和browser环境
    const typeConstructor =
      typeof window !== 'undefined' ? (window as any)[typeName] : globalThis[typeName as keyof typeof globalThis];
    if (typeof typeConstructor === 'function' && v instanceof typeConstructor) return typeValue;
  }

  return rawType;
}

/**
 * @description 节流函数
 */
export function throttle(fn: Function, wait = 300) {
  let last: number = 0;
  return function (this: any, ...args: any[]) {
    if (Date.now() - last > wait) {
      fn(this, args);
      last = Date.now();
    }
  };
}
/**
 * @description 防抖函数
 */
export function debounce(fn: Function, delay = 300) {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * @description 深拷贝 默认使用structuredClone，不支持则使用JSON.parse, JSON.stringify转换
 * @param {Object | Array} value 需要深拷贝的数据
 * @returns {Object | Array}
 */
export function deepClone<T>(value: Record<string | number | symbol, T>): Record<string | number | symbol, T>;
export function deepClone<T>(value: T[]): T[];
export function deepClone<T>(
  value: Record<string | number | symbol, T> | T[],
): Record<string | number | symbol, T> | T[] {
  if (typeof structuredClone === 'function') {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

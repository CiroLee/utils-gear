/* eslint-disable no-unused-vars */
/**
 * @description 获取数据类型
 */
export function getType(v?: any): string {
  return Object.prototype.toString.call(v).slice(8, -1).toLowerCase();
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

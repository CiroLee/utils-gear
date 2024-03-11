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
 * @description 填充数组
 * @param {T} value 填充数组的值
 * @param {Number} length 数组长度
 * @returns {T[]}
 */
export function fillArray<T>(value: T, length: number): T[] {
  return new Array(length).fill(value);
}

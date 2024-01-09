import { ObjType } from './types';
import { getType } from './utils';
/**
 * @desc 判断数组中所有元素是否都为真值
 * @param arr any[] 待处理的数组
 * @param fn function, 判断函数, 默认为Boolean函数
 * @returns boolean
 */
export function isAllTrue<T = boolean>(arr: T[], fn = (p: T): boolean => Boolean(p)): boolean {
  return arr.every(fn);
}

/**
 * @desc 数组中任意一个元素为真值，则返回true
 * @param arr any[] 待处理的数组
 * @param fn function, 判断函数, 默认为Boolean函数
 * @returns boolean
 */
export function isAnyTrue<T = boolean>(arr: T[], fn = (p: T): boolean => Boolean(p)): boolean {
  return arr.some(fn);
}

/**
 * @desc 判断输入是否为数字或是否可以转换为数字
 * @param value any
 * @returns boolean
 */
export function isNumberLike(value: unknown): boolean {
  return !isNaN(Number(value));
}

/**
 * @desc 判断输入是否为空对象
 */
export function isEmptyObject(param: ObjType): boolean {
  if (getType(param) !== 'object' && getType(param) !== 'array') {
    return false;
  }
  return !Object.keys(param).length;
}

/**
 * @desc 判断年份是否为闰年
 */
export function isLeap(year: number): boolean {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

/**
 * @desc 是否为质数(素数)
 */
export function IsPrime(num: number): boolean {
  if (!Number.isFinite(num)) {
    throw new Error(`IsPrime: ${num} is not a valid number`);
  }
  if (num <= 1 || !Number.isInteger(num)) {
    return false;
  }
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * @desc 检查字符串是否为base64格式
 * @param {String} text
 * @returns {Boolean}
 */
export function isBase64(text: string): boolean {
  return /^[A-Za-z0-9+/]*={0,2}$/.test(text);
}

import { isAnyTrue, isAllTrue, isNumberLike } from '@src/validator';
import { BaseType } from './types';
/**
 * @description 补零, 如果数字小于10，则在数字前补充0占位
 */
export function zeroFill(num: number | string): string {
  const invalidArr = [num === -Infinity, num === Infinity];
  if (isAnyTrue(invalidArr) || !isNumberLike(num)) {
    return String(num);
  }
  const digit = Number(num);
  if (digit < 0) {
    return Math.abs(digit) < 10 ? `-0${Math.abs(digit)}` : `${digit}`;
  }
  return digit < 10 ? `0${digit}` : `${digit}`;
}

/**
 * @description 计算数组中的最大值
 * @param array {number[]} 待计算的数组
 */
export function max(array: number[]): number {
  const isValidParam = isAllTrue(array, (v) => typeof v === 'number');
  if (!isValidParam) {
    throw new Error('max: element in array must be number');
  }
  return Math.max(...array);
}

/**
 * @description 计算数组中的最小值
 * @param array {number[]} 待计算的数组
 */
export function min(array: number[]): number {
  const isValidParam = isAllTrue(array, (v) => typeof v === 'number');
  if (!isValidParam) {
    throw new Error('max: element in array must be number');
  }
  return Math.min(...array);
}
/**
 * @description  计算两个基本数据类型数组的交集
 */
export function intersection(a: BaseType[], b: BaseType[]): BaseType[] {
  const s = new Set(b);
  return [...new Set(a)].filter((x) => s.has(x));
}
/**
 * @description 计算两个基础数据类型数组的并集
 */
export function union(a: BaseType[], b: BaseType[]): BaseType[] {
  return [...new Set([...a, ...b])];
}

/**
 * @description 从数组中选出n个不重复的数字
 * @param array: number[] 待选取的数组
 * @param n: number 选取的数量
 * @return number[]
 */

export function pickUniqueNumber(array: number[], n: number): number[] {
  const deduped = [...new Set(array)];
  if (n > deduped.length) {
    throw new Error('n must be less than or equal to deduped array length');
  }

  // 打乱数组
  shuffle(deduped);
  const picked = new Set<number>();

  for (let i = 0; i < n; i++) {
    picked.add(deduped[i]);
  }

  return [...picked];
}

/**
 * @description 随机打乱一个数组(fisher-yates洗牌算法)
 * @param array {T[]}
 */
export function shuffle<T>(array: T[]): void {
  if (!Array.isArray(array)) {
    throw new Error('shuffle: array must be an Array');
  }
  let i = array.length;
  let temp: T;
  let random: number;
  while (i !== 0) {
    random = Math.floor(Math.random() * i);
    i -= 1;
    temp = array[i];
    array[i] = array[random];
    array[random] = temp;
  }
}
/**
 * @description 生成指定范围内的随机整数, 包含min,max
 * @param min {number} 范围最小值
 * @param max {number} 范围最大值
 * @note
 * 如果省略max, 会将min作为max, 0作为min;
 *
 * 如果min > max, 会倒置min,max, 即min -> max, max -> min
 */
export function randomInt(min: number, max?: number): number {
  if (typeof min !== 'number') {
    throw new Error('randomInt: first param must be a number');
  }
  if (max === undefined || typeof max !== 'number') {
    max = min;
    min = 0;
  }
  const _min = Math.min(min, max);
  const _max = Math.max(min, max);
  return Math.floor(Math.random() * (_max - _min + 1) + _min);
}

/**
 * @description 计算数组的平均值
 * @param array {number[]}
 */
export function mean(array: number[]): number {
  if (!Array.isArray(array) || isAnyTrue(array, (n) => typeof n !== 'number')) {
    throw new Error('mean: array must be a number Array');
  }
  return array.reduce((a, b) => a + b, 0) / array.length;
}

/**
 * @description 求和
 * @param array {number[]}
 */
export function sum(array: number[]): number {
  if (!Array.isArray(array) || isAnyTrue(array, (n) => typeof n !== 'number')) {
    throw new Error('sum: array must be a number Array');
  }
  return array.reduce((a, b) => a + b, 0);
}

/**
 * @param 标准差
 * @param array {number[]}
 */
export function stdDev(array: number[]): number {
  if (!Array.isArray(array) || isAnyTrue(array, (n) => typeof n !== 'number')) {
    throw new Error('stdDev: array must be a number Array');
  }
  const avg = mean(array);
  const squareDiff = array.map((x) => (x - avg) ** 2);
  return Math.sqrt(mean(squareDiff));
}

import { isAnyTrue, isAllTrue, isNumberLike } from '@src/validator';
import { BaseType } from './types';
/**
 * @desc 补零, 如果数字小于10，则在数字前补充0占位
 */
export const zeroFill = (num: number | string): string => {
  const invalidArr = [num === -Infinity, num === Infinity];
  if (isAnyTrue(invalidArr) || !isNumberLike(num)) {
    return String(num);
  }
  const digit = Number(num);
  if (digit < 0) {
    return Math.abs(digit) < 10 ? `-0${Math.abs(digit)}` : `${digit}`;
  }
  return digit < 10 ? `0${digit}` : `${digit}`;
};

/**
 * @desc 计算数组中的最大值
 * @param array (string | number)[] 待计算的数组
 */
export const max = (array: (string | number)[]): number | undefined => {
  const isValidParam = isAllTrue(array, (v) => isNumberLike(v));
  return isValidParam ? Math.max(...(array as number[])) : undefined;
};

/**
 * @desc 计算数组中的最小值
 * @param array (string | number)[] 待计算的数组
 */
export const min = (array: (string | number)[]): number | undefined => {
  const isValidParam = isAllTrue(array, (v) => isNumberLike(v));
  return isValidParam ? Math.min(...(array as number[])) : undefined;
};
/**
 * @desc  计算两个基本数据类型数组的交集
 */
export const intersection = (a: BaseType[], b: BaseType[]): BaseType[] => {
  const s = new Set(b);
  return [...new Set(a)].filter((x) => s.has(x));
};
/**
 * @desc 计算两个基础数据类型数组的并集
 */
export const union = (a: BaseType[], b: BaseType[]): BaseType[] => [...new Set([...a, ...b])];

/**
 * @desc 从数组中选出n个不重复的数字
 * @param array: number[] 待选取的数组
 * @param n: number 选取的数量
 * @return number[]
 */

export const pickUniqueNumber = (array: number[], n: number): number[] => {
  const deduped = [...new Set(array)];
  if (n > deduped.length) {
    throw new Error('n must be less than or equal to deduped array length');
  }

  // 打乱数组
  deduped.sort(() => Math.random() - 0.5);
  const picked = new Set<number>();

  for (let i = 0; i < n; i++) {
    picked.add(deduped[i]);
  }

  return [...picked];
};

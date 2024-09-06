import { deepClone } from './utils';
import { isAllTrue, isPrimitive } from './validator';

/**
 * @description 填充数组
 * @param {T} value 填充数组的值
 * @param {Number} length 数组长度
 * @returns {T[]}
 */
export function fillArray<T>(value: T, length: number): T[] {
  return new Array(length).fill(value);
}

/**
 * @description 对象数组排序
 * @param {T} objectArray 对象数组
 * @param {keyof T} field 排序字段
 * @param {Boolean} ascending 是否升序排列
 * @returns {T}
 */
export function sortArrayByField<T>(objectArray: T[], field: keyof T, ascending = true): T[] {
  const copiedArray = [...objectArray];
  function getValue<T = any>(value: T): [boolean, any] {
    if (value === undefined || value === null) return [true, null];
    return [false, value];
  }
  return copiedArray.sort((a: T, b: T) => {
    const [isAMissing, valueA] = getValue(a[field]);
    const [isBMissing, valueB] = getValue(b[field]);
    if (isAMissing && isBMissing) return 0;
    if (isAMissing) return 1;
    if (isBMissing) return -1;
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return ascending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }
    return ascending ? Number(valueA) - Number(valueB) : Number(valueB) - Number(valueA);
  });
}

/**
 * @description 对象数组分类
 * @param {Array<T>} arr 待处理数组
 * @param {Function | keyof T} iterate 过滤函数或键名
 */
// eslint-disable-next-line no-unused-vars
export function groupBy<T, K extends keyof T | ((item: T) => string | number | boolean)>(
  arr: T[],
  iterate?: K,
): Record<string, T[]> {
  return arr.reduce(
    (acc, curr) => {
      const key = typeof iterate === 'function' ? iterate(curr) : (curr[iterate as keyof T] as unknown as K);
      if (!acc[key as string]) {
        acc[key as string] = [];
      }
      acc[key as string].push(curr);
      return acc;
    },
    {} as Record<string, T[]>,
  );
}
/**
 * @description 反转数组，返回一个新数组
 * @param {Array} array
 * @returns {Array}
 */
export function reverse<T>(array: T[]): T[] {
  if (isAllTrue(array, isPrimitive)) {
    return [...array].reverse();
  }
  const cloned = deepClone<T>(array);
  return cloned.reverse();
}

import { SpaceOption } from './types';

/**
 * @desc 隐藏手机中间四位数字
 * @param num string
 */
export const encryptedPhone = (num: string | number): string => {
  if (num.toString().length < 11) {
    throw new Error('phone number must be 11 digits');
  }
  return num.toString().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
};
/**
 * @desc 转换字符串首字母为大写或小写
 * @param str string
 * @param to 'upper' | 'lower'
 */
export const transFirstLetterTo = (str: string, to: 'upper' | 'lower'): string => {
  if (typeof str !== 'string') return str;
  return str.replace(/^\S/, (L) => (to === 'upper' ? L.toUpperCase() : L.toLowerCase()));
};
/**
 * @desc 返回指定数量的空格
 * @param num number 空格数量, 默认为1
 */
export const whiteSpace = (num = 1): string => '\xa0'.repeat(num);

/**** string case convert *****/
const convertRefExp = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g;

/*
 * @desc 字符串转小驼峰格式(camelCase)
 */
export const camelCase = (str: string): string => {
  const matches = str.match(convertRefExp) as RegExpExecArray;
  const s = matches.map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()).join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

/*
 * @desc 字符串转大驼峰格式(PascalCase)
 */
export const pascalCase = (str: string): string => {
  const matches = str.match(convertRefExp) as RegExpExecArray;
  return matches.map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join('');
};

/*
 * @desc 字符串转烤串式(kebab-case)
 */
export const kebabCase = (str: string): string => {
  const matches = str.match(convertRefExp) as RegExpExecArray;
  return matches.map((x) => x.toLowerCase()).join('-');
};
/*
 * @desc 字符串转蛇式(snake_case)
 */
export const snakeCase = (str: string) => {
  const matches = str.match(convertRefExp) as RegExpExecArray;
  return matches.map((x) => x.toLowerCase()).join('_');
};
/*
 * @desc 删除字符串中的指定索引的字符
 * @param str 目标字符串
 * @param index 删除位置索引
 */
export const deleteAt = (str: string, index: number): string => {
  return str.substring(0, index) + str.substring(index + 1);
};

/*
@desc 替换字符串中指定索引的字符
@param str 目标字符串
@param char 替换的字符
@param index 替换位置索引
*/
export const replaceAt = (str: string, index: number, char: string): string => {
  return str.substring(0, index) + char + str.substring(index + 1);
};

/**
 * @desc 去除字符串中的空格
 * @param str 目标字符串
 * @param option 'start' | 'end' | 'middle' | 'all', 默认为all, 去除所有空格
 * @returns string
 */
export const removeSpaces = (str: string, option: SpaceOption = 'all') => {
  switch (option) {
    case 'start':
      return str.trimStart();
    case 'end':
      return str.trimEnd();
    case 'both':
      return str.trim();
    case 'all':
      return str.replace(/\s/g, '');
    default:
      return str;
  }
};

/**
 * @desc 生成一个uuid(v4)
 * @returns string
 */
export const uuid = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

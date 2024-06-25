import { SpaceOption } from './types';

/**
 * @description 隐藏手机中间四位数字
 * @param num string
 */
export function encryptedPhone(num: string | number, placeholder = '*'): string {
  if (num.toString().length < 11) {
    throw new Error('phone number must be 11 digits');
  }
  const ph = placeholder.repeat(4);
  return num.toString().replace(/(\d{3})\d{4}(\d{4})/, `$1${ph}$2`);
}
/**
 * @description 转换字符串首字母为大写或小写
 * @param str string
 * @param to 'upper' | 'lower'
 */
export function transFirstLetterTo(str: string, to: 'upper' | 'lower'): string {
  if (typeof str !== 'string') return str;
  return str.replace(/^\S/, (L) => (to === 'upper' ? L.toUpperCase() : L.toLowerCase()));
}
/**
 * @description 返回指定数量的空格
 * @param num number 空格数量, 默认为1
 */
export function whiteSpace(num = 1): string {
  return '\xa0'.repeat(num);
}

/**** string case convert *****/
const convertRefExp = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g;

/*
 * @description 字符串转小驼峰格式(camelCase)
 */
export function camelCase(str: string): string {
  const matches = str.match(convertRefExp) as RegExpExecArray;
  const s = matches.map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()).join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
}

/*
 * @description 字符串转大驼峰格式(PascalCase)
 */
export function pascalCase(str: string): string {
  const matches = str.match(convertRefExp) as RegExpExecArray;
  return matches.map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join('');
}

/*
 * @description 字符串转烤串式(kebab-case)
 */
export function kebabCase(str: string): string {
  const matches = str.match(convertRefExp) as RegExpExecArray;
  return matches.map((x) => x.toLowerCase()).join('-');
}
/*
 * @description 字符串转蛇式(snake_case)
 */
export function snakeCase(str: string) {
  const matches = str.match(convertRefExp) as RegExpExecArray;
  return matches.map((x) => x.toLowerCase()).join('_');
}
/*
 * @description 删除字符串中的指定索引的字符
 * @param str 目标字符串
 * @param index 删除位置索引
 */
export function deleteAt(str: string, index: number): string {
  return str.substring(0, index) + str.substring(index + 1);
}

/*
@description 替换字符串中指定索引的字符
@param str 目标字符串
@param char 替换的字符
@param index 替换位置索引
*/
export function replaceAt(str: string, index: number, char: string): string {
  return str.substring(0, index) + char + str.substring(index + 1);
}

/**
 * @description 去除字符串中的空格
 * @param str 目标字符串
 * @param option 'start' | 'end' | 'both' | 'all', 默认为all, 去除所有空格
 * @returns string
 */
export function removeSpaces(str: string, option: SpaceOption = 'all') {
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
}

/**
 * @description 生成一个uuid(v4)
 * @returns string
 */
export function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * @description 将字符串编码为base64格式
 * @param {String} str
 * @returns {String}
 */
export function encodeBase64(str: string): string {
  const encoder = new TextEncoder();
  const data = Array.from(new Uint8Array(encoder.encode(str)));
  return btoa(String.fromCharCode.apply(null, data));
}

/**
 * @description 解码base64
 * @param {String} base64
 * @returns {String}
 */
export function decodeBase64(base64: string): string {
  const bytes = atob(base64);
  const uint8Array = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    uint8Array[i] = bytes.charCodeAt(i);
  }
  return new TextDecoder('utf-8').decode(uint8Array);
}

/**
 * @description 统计字符串中指定字符出现的次数
 * @param {String} str 目标字符串
 * @param {String} char 指定字符
 * @returns {Number}
 */
export function countChar(str: string, char: string): number {
  if (typeof str !== 'string' || typeof char !== 'string') {
    throw new Error('both arguments must be strings');
  }
  if (char.length !== 1) {
    throw new Error('char argument must be a single character');
  }
  const escapedChar = char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escapedChar, 'g');
  return (str.match(regex) || []).length;
}

/**
 * @description 格式化字节数
 * @param {String} bytes 需要格式化的字节数
 * @param {Number} decimals 需要保留的精度，默认为2
 * @returns {String}
 */
export function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes < 0) {
    return '-' + formatBytes(-bytes).replace('-', '');
  }
  if (bytes === 0) return '0Bytes';
  if (bytes < 1 && bytes > 0) return parseFloat(bytes.toFixed(decimals)) + 'Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
}

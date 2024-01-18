import { ObjType } from './types';
import { getType } from './utils';
/**
 * @description 判断数组中所有元素是否都为真值
 * @param arr any[] 待处理的数组
 * @param fn function, 判断函数, 默认为Boolean函数
 * @returns boolean
 */
export function isAllTrue<T = boolean>(arr: T[], fn = (p: T): boolean => Boolean(p)): boolean {
  return arr.every(fn);
}

/**
 * @description 数组中任意一个元素为真值，则返回true
 * @param arr any[] 待处理的数组
 * @param fn function, 判断函数, 默认为Boolean函数
 * @returns boolean
 */
export function isAnyTrue<T = boolean>(arr: T[], fn = (p: T): boolean => Boolean(p)): boolean {
  return arr.some(fn);
}

/**
 * @description 判断输入是否为数字或是否可以转换为数字
 * @param value any
 * @returns boolean
 */
export function isNumberLike(value: unknown): boolean {
  return !isNaN(Number(value));
}

/**
 * @description 判断输入是否为空对象
 */
export function isEmptyObject(param: ObjType): boolean {
  if (getType(param) !== 'object') {
    throw new Error('isEmptyObject: obj must be an object');
  }
  return Reflect.ownKeys(param).length === 0;
}

/**
 * @description 判断年份是否为闰年
 */
export function isLeap(year: number): boolean {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

/**
 * @description 是否为质数(素数)
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
 * @description 检查字符串是否为base64格式
 * @param {String} text
 * @returns {Boolean}
 */
export function isBase64(text: string): boolean {
  return /^[A-Za-z0-9+/]*={0,2}$/.test(text);
}

/**
 * @description 验证输入是否为有效邮箱
 * @param {String} str
 * @returns {Boolean}
 */
export function isEmail(str: string): boolean {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(str);
}

/**
 * @description 验证输入是否为中国手机号, 可选验证严格程度, low(1开头): 宽松, medium: 常规(13,14,15,16,17,18,19), high: 严格
 * @param {Number | String} num 手机号码
 * @param strictLevel 严格程度, 可选 low | medium | high, 默认为medium
 * @returns {Boolean}
 */
export function isPhoneNumber(num: number | string, strictLevel: 'low' | 'medium' | 'high' = 'medium'): boolean {
  let regex: RegExp;
  switch (strictLevel) {
    case 'low':
      regex = /^(?:(?:\+|00)86)?1\d{10}$/;
      break;
    default:
    case 'medium':
      regex = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
      break;
    case 'high':
      regex =
        /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[01256789]))\d{8}$/;
      break;
  }
  return regex.test(`${num}`);
}

/**
 * @description 验证输入是否为中国内地二代身份证号码
 * @param id 待验证身份证号码
 * @returns {Boolean}
 */
export function isIDNumber(id: string): boolean {
  const regex = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;
  return regex.test(id);
}

/**
 * @description 验证输入数字是否为浮点数
 * @param {Number} num 待验证数字
 * @returns {Boolean}
 */
export function isFloat(num: number): boolean {
  const regex = /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9])$/;
  return regex.test(`${num}`);
}

/**
 * @description 验证输入数字是否为整数
 * @param {Number} num 待验证数字
 * @returns {Boolean}
 */
export function isInt(num: number): boolean {
  const regex = /^(?:0|(?:-?[1-9]\d*))$/;
  return regex.test(`${num}`);
}

/**
 * @description 验证输入是否为有效的网址
 * @param {String} url 待验证网址
 * @returns  {Boolean}
 */
export function isUrl(url: string): boolean {
  const regex = /(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]+\.)+[a-z]{2,6}(\/.*)?/;
  return regex.test(url);
}

/**
 * @description 验证输入是否为qq号
 * @param {Number} qq 待验证的qq号码
 * @returns {Boolean}
 */
export function isQQNumber(qq: number | string): boolean {
  const regex = /^[1-9][0-9]{4,10}$/;
  return regex.test(`${qq}`);
}

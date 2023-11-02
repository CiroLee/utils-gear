/* eslint-disable no-unused-vars */
import type { Nullish, Week, DateFormatOption, TimeUnit, DateObject } from '@src/types';
import { getType } from './utils';
import { max, min, zeroFill } from './math';
import { isAllTrue } from './validator';
import { TimeUintMap } from './constants';
const weekMapZh = ['日', ' 一', '二', '三', '四', '五', '六'];
const weekMapEn = [
  { val: 'Sunday', abbr: 'Sun.' },
  { val: 'Monday', abbr: 'Mon.' },
  { val: 'Tuesday', abbr: 'Tue.' },
  { val: 'Wednesday', abbr: 'Wed.' },
  { val: 'Thursday', abbr: 'Thu.' },
  { val: 'Friday', abbr: 'Fri.' },
  { val: 'Saturday', abbr: 'Sat.' },
];
/**
 * @desc 返回指定日期的星期数, 如果未传入参数, 默认返回当天日期的中文星期数
 */
export function week(param?: Week | Date): string | Nullish {
  let weekParam: Week = {
    date: undefined,
    lang: 'zh',
    abbr: false,
  };

  if (getType(param) !== 'date' && getType(param) === 'object') {
    weekParam = {
      ...weekParam,
      ...(param as Week),
    };
  } else {
    weekParam.date = param as Date;
  }
  const { date, lang, abbr } = weekParam;
  const weekIndex = date ? new Date(date).getDay() : new Date().getDay();
  if (lang === 'zh') return weekIndex > -1 ? weekMapZh[weekIndex] : null;
  // 仅英文可以返回星期简写
  if (abbr) {
    return weekIndex > -1 ? weekMapEn[weekIndex].abbr : null;
  }
  return weekIndex > -1 ? weekMapEn[weekIndex].val : null;
}

/**
 * @desc 格式化日期 默认日期格式为 yyyy-mm-dd HH:MM:SS 如果是unix时间戳, 需要精确到毫秒
 * @param date 日期
 * @param option 选项(可选参数)
 */
export function dateFormat(date: Date, option?: string | DateFormatOption): string {
  if (getType(date) !== 'date') {
    throw new Error('dateFormat: date is invalid');
  }

  let _option = {
    format: 'yyyy-mm-dd HH:MM:SS',
    padZero: true,
  };
  // 参数兼容
  if (typeof option === 'string') {
    _option.format = option;
  } else if (
    isAllTrue([
      getType(option) === 'object',
      getType(option?.format) === 'string' || getType(option?.padZero) === 'boolean',
    ])
  ) {
    _option = {
      ..._option,
      ...option,
    };
  }

  const o = {
    yyyy: date.getFullYear(),
    mm: _option.padZero ? zeroFill(date.getMonth() + 1) : date.getMonth() + 1,
    dd: _option.padZero ? zeroFill(date.getDate()) : date.getDate(),
    HH: _option.padZero ? zeroFill(date.getHours()) : date.getHours(),
    MM: _option.padZero ? zeroFill(date.getMinutes()) : date.getMinutes(),
    SS: _option.padZero ? zeroFill(date.getSeconds()) : date.getSeconds(),
  };

  return _option.format
    .replace(/yyyy/g, `${o.yyyy}`)
    .replace(/mm/g, `${o.mm}`)
    .replace(/dd/g, `${o.dd}`)
    .replace(/HH/g, `${o.HH}`)
    .replace(/MM/g, `${o.MM}`)
    .replace(/SS/g, `${o.SS}`);
}

/**
 * 日期偏移函数。支持年，月，日, 周，时，分，秒，毫秒等格式
 *
 * @param {Date} date - 初始日期
 * @param {number} amount - 操作值，整数为加，负数为减
 * @param {TimeUnit} timeUnit - 操作单位.
 * @return {Date}
 */
export function dateOffset(date: Date, amount: number, timeUnit: TimeUnit): Date {
  if (getType(date) !== 'date') {
    throw new Error('dateOffset: date is invalid');
  }
  if (typeof amount !== 'number') {
    throw new Error('dateOffset: amount is invalid');
  }
  if (!TimeUintMap[timeUnit]) {
    throw new Error('dateOffset: timeUnit is invalid');
  }
  return new Date(date.getTime() + amount * TimeUintMap[timeUnit]);
}

/**
 *  @desc 比较两个日期(Date)是否相等
 */
export function dateEqual(a: Date, b: Date): boolean {
  if (getType(a) !== 'date' || getType(b) !== 'date') {
    throw new Error('dateEqual: a, b must be Date type');
  }
  return a.getTime() === b.getTime();
}

/**
 * @desc 返回一组日期数组中最大或最小日期
 * @param type {'max' | 'min'} 返回类型：最大或最小
 */
export function dateMaxMin(dates: Date[], type: 'max' | 'min'): Date {
  if (dates.some((d) => getType(d) !== 'date')) {
    throw new Error('dateMax: element in dates must be Date type');
  }
  const datesNum = dates.map((d) => d.getTime());
  const result = type === 'max' ? max(datesNum)! : min(datesNum)!;
  return new Date(result);
}

/**
 * @desc 返回两个时间的差值
 * @param a Date
 * @param b Date
 * @param type {TimeUnit} 差值类型
 */
export function dateDiff(a: Date, b: Date, unit: TimeUnit): number {
  if (getType(a) !== 'date' || getType(b) !== 'date') {
    throw new Error('dateDiff: a, b must be Date type');
  }
  const diff = a.getTime() - b.getTime();
  return Number((diff / TimeUintMap[unit]).toFixed(4));
}
/**
 * @desc 计算指定日期月份的天数
 * @param date {Date} 日期参数
 */
export function daysInMonth(date: Date): number {
  if (getType(date) !== 'date') {
    throw new Error('daysInMonth: date must be Date type');
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return new Date(year, month, 0).getDate();
}
/**
 * @desc 将日期转换为对象
 * @param date {Date} 日期
 */
export function dateToObject(date: Date): DateObject {
  if (getType(date) !== 'date') {
    throw new Error('dateToJSON: date must be Date type');
  }
  const year = date.getFullYear();
  const month = date.getMonth();
  const week = date.getDay();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const millisecond = date.getMilliseconds();

  return { year, month, day, week, hour, minute, second, millisecond };
}
/**
 * @desc 返回指定日期是本年的第几周
 * @param date: {Date} 日期
 */
export function weekOfYear(date: Date): number {
  if (getType(date) !== 'date') {
    throw new Error('weekOfYear: date must be Date type');
  }
  const year = date.getFullYear();
  const first = new Date(year, 0, 1);
  const duration = (date.getTime() - first.getTime()) / TimeUintMap.day;
  return Math.ceil(duration / 7);
}
/**
 * @desc 返回指定日期是本月的第几周
 * @param date: {Date} 日期
 */
export function weekOfMonth(date: Date): number {
  if (getType(date) !== 'date') {
    throw new Error('weekOfMonth: date must be Date type');
  }
  const year = date.getFullYear();
  const month = date.getMonth();
  const first = new Date(year, month, 1);
  const duration = (date.getTime() - first.getTime()) / TimeUintMap.day;
  return Math.ceil(duration / 7);
}
/**
 * @desc 是否为有效日期
 */
export function isValidDate(date: any): boolean {
  return !Number.isNaN(new Date(date).valueOf());
}

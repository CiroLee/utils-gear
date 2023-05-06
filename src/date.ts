import type { Nullish, Week, Time, DateFormatOption, DateName } from '@src/types';
import { getType } from './utils';
import { zeroFill } from './math';
import { isAllTrue, isValidDate } from './validator';
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
export const week = (param?: Week | Time): string | Nullish => {
  let weekParam: Week = {
    date: undefined,
    lang: 'zh',
    abbr: false,
  };
  if (getType(param) !== 'object') {
    weekParam.date = param as Time;
  } else {
    weekParam = {
      ...weekParam,
      ...(param as Week),
    };
  }
  const { date, lang, abbr } = weekParam;
  const weekIndex = date ? new Date(date).getDay() : new Date().getDay();
  if (lang === 'zh') return weekIndex > -1 ? weekMapZh[weekIndex] : null;
  // 仅英文可以返回星期简写
  if (abbr) {
    return weekIndex > -1 ? weekMapEn[weekIndex].abbr : null;
  }
  return weekIndex > -1 ? weekMapEn[weekIndex].val : null;
};

/**
 * @desc 格式化日期 默认日期格式为 yyyy-mm-dd HH:MM:SS 如果是unix时间戳, 需要精确到毫秒
 * @param date 日期
 * @param option 选项(可选参数)
 */
export const dateFormat = (date: Time, option?: string | DateFormatOption): string => {
  if (!isValidDate(date)) {
    throw new Error('dateFormat: date is invalid');
  }
  const _date =
    date instanceof Date
      ? date
      : typeof date === 'number'
      ? new Date(date)
      : new Date(String(date).replaceAll('-', '/'));
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
    yyyy: _date.getFullYear(),
    mm: _option.padZero ? zeroFill(_date.getMonth() + 1) : _date.getMonth() + 1,
    dd: _option.padZero ? zeroFill(_date.getDate()) : _date.getDate(),
    HH: _option.padZero ? zeroFill(_date.getHours()) : _date.getHours(),
    MM: _option.padZero ? zeroFill(_date.getMinutes()) : _date.getMinutes(),
    SS: _option.padZero ? zeroFill(_date.getSeconds()) : _date.getSeconds(),
  };

  return _option.format
    .replace(/yyyy/g, `${o.yyyy}`)
    .replace(/mm/g, `${o.mm}`)
    .replace(/dd/g, `${o.dd}`)
    .replace(/HH/g, `${o.HH}`)
    .replace(/MM/g, `${o.MM}`)
    .replace(/SS/g, `${o.SS}`);
};

/**
 * @description 偏移日期函数
 * @param {Date} date - 要偏移的日期对象
 * @param {{ type: DateName, offset: number }} config - 偏移的配置对象
 * @returns {Date} - 偏移后的日期对象
 */
export const dateOffset = (date: Date, config: { type: DateName; offset: number }): Date => {
  const { type, offset } = config;
  const newDate = new Date(date.getTime());
  switch (type) {
    case 'year':
      newDate.setFullYear(newDate.getFullYear() + offset);
      break;
    case 'month':
      newDate.setMonth(newDate.getMonth() + offset);
      break;
    case 'day':
      newDate.setDate(newDate.getDate() + offset);
      break;
    case 'hour':
      newDate.setHours(newDate.getHours() + offset);
      break;
    case 'minute':
      newDate.setMinutes(newDate.getMinutes() + offset);
      break;
    case 'second':
      newDate.setSeconds(newDate.getSeconds() + offset);
      break;
    case 'millisecond':
      newDate.setMilliseconds(newDate.getMilliseconds() + offset);
      break;
    case 'week':
      newDate.setDate(newDate.getDate() + offset * 7);
      break;
    default:
      break;
  }
  return newDate;
};

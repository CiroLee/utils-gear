import { TimeUintMap } from './constants';
export type Nullish = null | undefined;
export type ObjType = Record<string | number | symbol, any>;
export type BaseType = number | string | null | undefined | boolean | symbol;
export type TimeUnit = keyof typeof TimeUintMap;
export interface CookieParam {
  name: string; // 名称
  value: string; // cookie值
  expireHour?: number; // 过期时间
  domain?: string; // 作用域名
}
export interface Week {
  date?: Date; // 日期
  lang?: string; // 语言 zh:中文 en: 英文
  abbr?: boolean; // 是否输出简写, 仅英文有效
}

export interface DateDetail {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
}

export interface DateFormatOption {
  format?: string;
  padZero?: boolean;
}

export interface StorageItem {
  value: ObjType | BaseType;
  expires?: number;
}

export type PlatformType = 'iPhone' | 'iPad' | 'Android' | 'Windows' | 'macOS' | 'Linux' | 'unknown';
export type SpaceOption = 'start' | 'end' | 'both' | 'all';

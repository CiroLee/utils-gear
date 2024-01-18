/* eslint-disable no-unused-vars */
import { CookieParam, ObjType, Nullish } from '@src/types';
import { TimeUintMap } from './constants';

export class Cookie {
  /**
   * @description 获取cookie
   * @param name string[可选] cookie名称，
   */
  static get(): ObjType | Nullish;
  static get(name: string): string | Nullish;
  static get(name?: string): string | ObjType | Nullish {
    if (!document.cookie.length) return null;
    const storage = document.cookie.replace(/\s*/g, '').split(';');
    const cookieValues: ObjType = {};
    storage.forEach((item: string) => {
      const temp = item.split('=');
      cookieValues[`${temp[0]}`] = decodeURI(temp[1]);
    });
    return name ? cookieValues[name] : cookieValues;
  }
  /**
   * @description 以key-value 对象形式设置cookie, 默认过期时间为1小时
   */
  static set({ name, value, expireHour = 1, domain }: CookieParam): void {
    const date = new Date();
    date.setTime(date.getTime() + expireHour * TimeUintMap.hour);
    const expires = `;expires=${date.toUTCString()}`;
    const setDomian = domain ? `;domain=${domain}` : '';

    document.cookie = `${name}=${encodeURI(value)}${expires}${setDomian}`;
  }
  /**
   * @description 删除cookie, 省略name则删除所有cookie
   */
  static delete(name?: string): void {
    if (name) {
      this.set({ name, value: '', expireHour: 0 });
    } else {
      const cookies = this.get();
      cookies &&
        Object.keys(cookies).forEach((name) => {
          this.set({ name, value: '', expireHour: 0 });
        });
    }
  }
}

import { ObjType, BaseType, StorageItem } from '@src/types';
import { TimeUintMap } from './constants';
export class Storage {
  /*
   * @description 设置任意值得storage。过期时间以小时为单位[可选]
   * @param key storage的key
   * @param value storage的值。可以是基础类型和引用类型的值
   */
  static set(key: string, value: ObjType | BaseType, expireHour?: number) {
    const obj: StorageItem = {
      value,
    };
    if (expireHour && expireHour > 0) {
      obj.expires = Date.now() + TimeUintMap.hour * expireHour;
    }
    let stringify = '';
    try {
      stringify = JSON.stringify(obj);
    } catch (error: unknown) {
      throw new Error(
        `Failed to serialize storage value for key "${key}": ${error instanceof Error ? error.message : String(error)}`,
      );
    }

    localStorage.setItem(key, stringify);
  }
  /*
   * @description 获取storage
   * @param key storage的key
   * @param ignoreExpire 是否忽略过期时间。默认为false
   */
  static get(key: string, ignoreExpire = false): ObjType | BaseType | undefined {
    const data = localStorage.getItem(key);
    if (!data) return data;
    let obj: ObjType = {};
    try {
      obj = JSON.parse(data);
    } catch (error) {
      return data;
    }

    const { value, expires = 0 } = obj as StorageItem;
    if (!ignoreExpire && new Date(expires).getTime() < Date.now()) {
      return null;
    }
    return value;
  }
  /*
   * @description 删除一个storage
   * @param key 要删除的storage的key
   */
  static delete(key: string): void {
    localStorage.removeItem(key);
  }
}

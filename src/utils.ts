/**
 * @desc 获取数据类型
 */
export const getType = (v?: any): string => Object.prototype.toString.call(v).slice(8, -1).toLowerCase();

/**
 * @desc 节流函数
 */
export const throttle = (fn: Function, wait = 300) => {
  let last: number = 0;
  return function (this: any, ...args: any[]) {
    if (Date.now() - last > wait) {
      fn(this, args);
      last = Date.now();
    }
  };
};
/**
 * @desc 防抖函数
 */
export const debounce = (fn: Function, delay = 300) => {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
};

/**
 * @desc 获取平台
 * @param ua user-agent
 */
export const getPlatformType = (ua: string): string => {
  const platformTypes = [
    { regex: /windows/i, type: 'Windows' },
    { regex: /macintosh|mac os x/i, type: 'macOS' },
    { regex: /android/i, type: 'Android' },
    { regex: /iphone/i, type: 'iPhone' },
    { regex: /ipad/i, type: 'iPad' },
    { regex: /ipod/i, type: 'iPod' },
    { regex: /blackberry/i, type: 'BlackBerry' },
    { regex: /linux/i, type: 'Linux' },
  ];

  for (let i = 0; i < platformTypes.length; i++) {
    if (platformTypes[i].regex.test(ua)) {
      return platformTypes[i].type;
    }
  }
  return 'unknown';
};

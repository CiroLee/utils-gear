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

/**
 * @desc 将url参数解析为对象
 */
export const parseURLParams = (url: string): Record<string, string> => {
  const _url = new URL(url);
  const params = new URLSearchParams(_url.search);
  const parsedParams: Record<string, string> = {};

  for (const param of params.entries()) {
    const [key, value] = param;
    parsedParams[key] = value;
  }
  return parsedParams;
};

/**
 * @desc 将对象转换为url参数
 * @param params 需要转换的参数对象
 * @param encode {boolean} 转换结果是否编码，默认不编码
 */
export const stringifyURLParams = (params: Record<string, string>): string => {
  const urlParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    urlParams.append(key, value);
  }
  return urlParams.toString();
};

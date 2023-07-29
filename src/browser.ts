import type { PlatformType } from './types';
/**
 * @desc 通过userAgent获取常用平台类型
 * @param ua {String} userAgent
 */
export const getPlatformType = (ua: string): PlatformType => {
  const platformMatchers = [
    { type: 'iPhone', regex: /\b(iPhone)\b/i },
    { type: 'iPad', regex: /\b(iPad)\b/i },
    { type: 'Android', regex: /Android/i },
    { type: 'Windows', regex: /Windows/i },
    { type: 'macOS', regex: /\b(Macintosh|Mac OS X)\b/i },
    { type: 'Linux', regex: /Linux/i },
  ];

  for (const matcher of platformMatchers) {
    if (matcher.regex.test(ua)) {
      return matcher.type as PlatformType;
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

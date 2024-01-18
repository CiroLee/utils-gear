import type { ObjType, PlatformType } from './types';
/**
 * @description 通过userAgent获取常用平台类型
 * @param ua {String} userAgent
 */
export function getPlatformType(ua: string): PlatformType {
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
}

/**
 * @description 将url参数解析为对象
 */
export function parseURLParams(url: string): ObjType {
  const _url = new URL(url);
  const params = new URLSearchParams(_url.search);
  const parsedParams: ObjType = {};

  for (const param of params.entries()) {
    const [key, value] = param;
    parsedParams[key] = value;
  }
  return parsedParams;
}

/**
 * @description 将对象转换为url参数
 * @param params 需要转换的参数对象
 * @param encode {boolean} 转换结果是否编码，默认不编码
 */
export function stringifyURLParams(params: ObjType): string {
  const urlParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    urlParams.append(key, value);
  }
  return urlParams.toString();
}

/**
 * @description 是否为暗色模式
 */
export function isDarkMode(): boolean {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

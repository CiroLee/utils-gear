type NumberFormatStyle = 'decimal' | 'percent' | 'currency' | 'unit';
type CurrencyDisplay = 'symbol' | 'code' | 'name' | 'narrowSymbol';
type NotationType = 'standard' | 'scientific' | 'engineering' | 'compact';
type UnitDisplay = 'long' | 'short' | 'narrow';
type SignDisplay = 'auto' | 'never' | 'always' | 'exceptZero';
type CompactDisplay = 'short' | 'long';

function convertSection(section: string, chineseNumbers: string[], unit: string[]): string {
  let sectionStr = '';
  let lastNonZero = false; // 用于标记上一个非零数字
  for (let i = 0; i < section.length; i++) {
    const num = section[i];
    if (num !== '0') {
      sectionStr += chineseNumbers[Number(num)] + unit[section.length - 1 - i];
      lastNonZero = true;
    } else if (lastNonZero && i < section.length - 1 && section[i + 1] !== '0') {
      // 处理连续的零
      sectionStr += '零';
      lastNonZero = false;
    }
  }
  return sectionStr !== '' ? sectionStr : '零';
}

/**
 * @description 将阿拉伯数字金额转为中文大写金额
 * @param {Number} currency 数字金额
 * @returns {String}
 */
export function convertToZhCurrency(currency: number): string {
  const chineseNumbers = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const unit1 = ['', '拾', '佰', '仟'];
  const unit2 = ['', '万', '亿', '万亿'];

  let amount = currency.toString();
  const isNegative = amount.startsWith('-');
  if (isNegative) {
    amount = amount.slice(1);
  }
  const decimalIndex = amount.indexOf('.');
  let integerPart = amount;
  let decimalPart = '';

  if (decimalIndex !== -1) {
    integerPart = amount.slice(0, decimalIndex);
    decimalPart = amount.slice(decimalIndex + 1);
  }

  const sections: string[] = [];
  const sectionStart = integerPart.length % 4;
  if (sectionStart !== 0) {
    sections.push(integerPart.substring(0, sectionStart));
  }

  for (let i = sectionStart; i < integerPart.length; i += 4) {
    sections.push(integerPart.substring(i, i + 4));
  }

  let chineseCurrency = '';

  for (let i = 0; i < sections.length; i++) {
    const section = convertSection(sections[i], chineseNumbers, unit1);
    if (section !== '') {
      chineseCurrency += section + unit2[sections.length - 1 - i];
    }
  }

  chineseCurrency = chineseCurrency.replace(/零+$/, '');

  // 小数部分
  if (decimalPart !== '') {
    chineseCurrency += '元';
    for (let i = 0; i < decimalPart.length; i++) {
      const num = parseInt(decimalPart[i]);
      chineseCurrency += chineseNumbers[num];
      switch (i) {
        case 0:
          chineseCurrency += '角';
          break;
        case 1:
          chineseCurrency += '分';
          break;
        case 2:
          chineseCurrency += '厘';
          break;
      }
    }
  } else {
    chineseCurrency += integerPart !== '0' ? '元整' : '零元整';
  }
  return (isNegative ? '负' : '') + chineseCurrency;
}

interface NumberFormatConfig {
  /** 用于格式化的语言环境 */
  locale?: string | string[];
  /** 数字的显示样式 */
  style?: NumberFormatStyle;
  /** 货币格式化的货币代码 */
  currency?: string;
  /** 单位格式化的单位标识符 */
  unit?: string;
  /** 如何显示货币信息 */
  currencyDisplay?: CurrencyDisplay;
  /** 如何显示单位信息 */
  unitDisplay?: UnitDisplay;
  /** 最小小数位数 */
  minimumFractionDigits?: number;
  /** 最大小数位数 */
  maximumFractionDigits?: number;
  /** 是否使用分组分隔符 */
  useGrouping?: boolean;
  /** 数字表示格式 */
  notation?: NotationType;
  /** 紧凑显示格式 */
  compactDisplay?: CompactDisplay;
  /** 如何显示负号 */
  signDisplay?: SignDisplay;
}

/** 创建数字格式化器的缓存 */
type FormatterCache = Record<string, Intl.NumberFormat>;

/** 创建缓存键 */
function generateCacheKey(locale?: string | string[], options?: Intl.NumberFormatOptions): string {
  const localePart = Array.isArray(locale) ? locale.join(',') : locale || 'default';
  const optionsPart = options ? JSON.stringify(options) : 'no-options';
  return `${localePart}|${optionsPart}`;
}

/** 模块中的缓存 */
const cache: FormatterCache = {};

/**
 * 格式化数字、货币或单位
 * @param value 目标数字
 * @param config 配置对象
 * @returns 格式化后的字符串
 */
export function formatNumber(value: number, config: NumberFormatConfig = {}): string {
  const {
    locale,
    style = 'decimal',
    currency,
    unit,
    currencyDisplay = 'symbol',
    unitDisplay = 'short',
    minimumFractionDigits,
    maximumFractionDigits,
    useGrouping = true,
    notation,
    compactDisplay,
    signDisplay,
  } = config;

  const options: Intl.NumberFormatOptions = {
    style,
    ...(style === 'currency' && currency && { currency }),
    ...(style === 'currency' && { currencyDisplay }),
    ...(style === 'unit' && unit && { unit }),
    ...(unitDisplay && { unitDisplay }),
    ...(minimumFractionDigits !== undefined && { minimumFractionDigits }),
    ...(maximumFractionDigits !== undefined && { maximumFractionDigits }),
    useGrouping,
    ...(notation && { notation }),
    ...(compactDisplay && { compactDisplay }),
    ...(signDisplay && { signDisplay }),
  };

  const cacheKey = generateCacheKey(locale, options);

  // use cache or create a new instance
  if (!cache[cacheKey]) {
    cache[cacheKey] = new Intl.NumberFormat(locale, options);
  }

  return cache[cacheKey].format(value);
}

/**
 * 货币格式化
 * @param value 目标值
 * @param currency 货币代码 (ISO 4217)
 * @param locale 语言环境
 * @param options 其他配置 (省略 style 和 currency)
 */
export function formatCurrency(
  value: number,
  currency: string,
  locale?: string | string[],
  options?: Omit<NumberFormatConfig, 'style' | 'currency'>,
): string {
  return formatNumber(value, {
    ...options,
    locale,
    style: 'currency',
    currency,
  });
}

/**
 * 百分比格式化器
 * @param value 目标值（介于 0 和 1 之间）
 * @param locale 语言环境配置
 * @param options 其他配置（省略 style）
 */
export function formatPercent(
  value: number,
  locale?: string | string[],
  options?: Omit<NumberFormatConfig, 'style'>,
): string {
  return formatNumber(value, {
    ...options,
    locale,
    style: 'percent',
  });
}

/**
 * 单位格式化器
 * @param value 目标值，要格式化的数值
 * @param unit 单位
 * @param locale 语言环境配置
 * @param options 其他配置（省略 style 和 unit）
 */
export function formatUnit(
  value: number,
  unit: string,
  locale?: string | string[],
  options?: Omit<NumberFormatConfig, 'style' | 'unit'>,
): string {
  return formatNumber(value, {
    ...options,
    locale,
    style: 'unit',
    unit,
  });
}

/**
 * 紧凑数字格式化器
 * @param value 目标值
 * @param locale 语言环境配置
 * @param display 紧凑显示样式（short 或 long）
 */
export function formatCompact(value: number, locale?: string | string[], display: CompactDisplay = 'short'): string {
  return formatNumber(value, {
    locale,
    notation: 'compact',
    compactDisplay: display,
  });
}

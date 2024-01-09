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
 * @desc 将阿拉伯数字金额转为中文大写金额
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

  console.log(chineseCurrency);
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

/**
 * @desc 根据指定的货币格式将数字转换为金额
 * @param {String} currency  货币名称简写 参考: https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes
 * @param {String} langFormat 语言格式 参考: https://www.techonthenet.com/js/language_tags.php
 * @returns {String}
 */
export function toCurrency(num: number, currency: string, langFormat?: string): string {
  return Intl.NumberFormat(langFormat, { style: 'currency', currency }).format(num);
}

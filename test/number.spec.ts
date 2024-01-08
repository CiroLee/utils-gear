import * as number from '@src/number';

describe('convertToZhCurrency test', () => {
  it('should handle the minimum valid input', () => {
    expect(number.convertToZhCurrency(0)).toBe('零元整');
  });
  it('should handle the maximum valid decimal input', () => {
    const maxValue = Number.MAX_SAFE_INTEGER;
    expect(number.convertToZhCurrency(maxValue)).toBe('玖仟零柒万亿壹仟玖佰玖拾贰亿伍仟肆佰柒拾肆万玖佰玖拾壹元整');
  });
  it('should handle numbers width multiple trailing zeros in decimal part', () => {
    const input = 123.0;
    expect(number.convertToZhCurrency(input)).toBe('壹佰贰拾叁元整');
  });
  it('should handle negative numbers', () => {
    const input = -123.45;
    expect(number.convertToZhCurrency(input)).toBe('负壹佰贰拾叁元肆角伍分');
  });
  it('should handle with max three decimals', () => {
    const input = 123.4543;
    expect(number.convertToZhCurrency(input)).toBe('壹佰贰拾叁元肆角伍分肆厘叁');
  });
});

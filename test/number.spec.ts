import * as number from '@src/number';

describe('convertToZhCurrency test', () => {
  it('should handle the minimum valid input', () => {
    expect(number.convertToZhCurrency(0)).toBe('零元整');
  });
  it('should handle the maximum valid decimal input', () => {
    const maxValue = Number.MAX_SAFE_INTEGER;
    expect(number.convertToZhCurrency(maxValue)).toBe('玖仟零柒万亿壹仟玖佰玖拾贰亿伍仟肆佰柒拾肆万玖佰玖拾壹元整');
  });
  it('should handle numbers with multiple trailing zeros in decimal part', () => {
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
  it('should handle numbers with multiple sections', () => {
    const input = 12345678;
    expect(number.convertToZhCurrency(input)).toBe('壹仟贰佰叁拾肆万伍仟陆佰柒拾捌元整');
  });
  it('should handle zero in middle sections', () => {
    const input = 1000001;
    expect(number.convertToZhCurrency(input)).toBe('壹佰万壹元整');
  });
});

describe('formatNumber test', () => {
  it('should format number with default decimal style', () => {
    expect(number.formatNumber(1234.5678)).toMatch(/1,234\.568|1 234,568/);
  });
  it('should format number with specific locale', () => {
    expect(number.formatNumber(1234.5678, { locale: 'zh-CN' })).toBe('1,234.568');
  });
  it('should format number with minimum and maximum fraction digits', () => {
    expect(number.formatNumber(1234.5678, { minimumFractionDigits: 3, maximumFractionDigits: 3 })).toMatch(
      /1,234\.568|1 234,568/,
    );
  });
  it('should format number without grouping', () => {
    expect(number.formatNumber(1234.5678, { useGrouping: false })).toMatch(/1234\.568|1234,568/);
  });
  it('should format number with scientific notation', () => {
    expect(number.formatNumber(1234.5678, { notation: 'scientific' })).toMatch(/1\.235E3|1,235E3/);
  });
  it('should format number with sign display always', () => {
    expect(number.formatNumber(1234.5678, { signDisplay: 'always' })).toMatch(/\+1,234\.568|\+1 234,568/);
  });
});

describe('formatCurrency test', () => {
  it('should format currency with default symbol display', () => {
    expect(number.formatCurrency(1234.5678, 'USD')).toMatch(/US\$1,234\.57|\$1,234\.57|USD1,234\.57/);
  });
  it('should format currency with specific locale and code display', () => {
    expect(number.formatCurrency(1234.5678, 'USD', 'zh-CN', { currencyDisplay: 'code' })).toBe('USD 1,234.57');
  });
});

describe('formatPercent test', () => {
  it('should format percent with default settings', () => {
    expect(number.formatPercent(0.5678)).toMatch(/57%|56\.78%/);
  });
  it('should format percent with specific locale', () => {
    expect(number.formatPercent(0.5678, 'zh-CN')).toBe('57%');
  });
});

describe('formatUnit test', () => {
  it('should format unit with default settings', () => {
    expect(number.formatUnit(1234.5678, 'meter')).toMatch(/1,234\.568 m|1,234\.568米/);
  });
  it('should format unit with specific locale and long display', () => {
    expect(number.formatUnit(1234.5678, 'meter', 'zh-CN', { unitDisplay: 'long' })).toBe('1,234.568米');
  });
});

describe('formatCompact test', () => {
  it('should format compact number with short display', () => {
    expect(number.formatCompact(1234567)).toMatch(/1\.2M|1\.23M|123万/);
  });
  it('should format compact number with long display', () => {
    expect(number.formatCompact(1234567, undefined, 'long')).toMatch(/1\.2 million|1\.23 million|123万/);
  });
  it('should format compact number with specific locale', () => {
    expect(number.formatCompact(1234567, 'zh-CN')).toMatch(/123万/);
  });
  it('should format compact number with different values to ensure cache usage', () => {
    expect(number.formatCompact(12345678, 'zh-CN')).toMatch(/1,235万|1235万/);
  });
});

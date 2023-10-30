import * as date from '@src/date';
const mockDate = new Date('2022-1-18 12:12:12'); // 星期二
const mockTimestamp = 1642479132;
const mockWeeks = ['日', ' 一', '二', '三', '四', '五', '六'];
describe('week test', () => {
  test('WEEK: get week by Date input', () => {
    const week = date.week(mockDate);
    expect(week).toBe('二');
  });
  test('WEEK: get week by a string which is not a number nor can not be transformed to Date', () => {
    expect(date.week('date')).toBe(null);
  });
  test('WEEK: get day of week', () => {
    const week = date.week();
    expect(mockWeeks).toContain(week);
  });
  test('WEEK: return english week', () => {
    const week = {
      date: mockDate,
      lang: 'en',
    };
    expect(date.week(week)).toBe('Tuesday');
  });
  test('WEEK: return english abbreviated week', () => {
    const week = {
      date: mockDate,
      lang: 'en',
      abbr: true,
    };
    expect(date.week(week)).toBe('Tue.');
  });
  test('WEEK: return null', () => {
    const week = {
      date: 'date',
      lang: 'en',
    };
    expect(date.week({ ...week, abbr: true })).toBeNull();
    expect(date.week(week)).toBeNull();
  });
});

describe('dateFormat test', () => {
  test('DATEFORMAT: no option', () => {
    const result = date.dateFormat(mockDate);
    expect(result).toBe('2022-01-18 12:12:12');
  });
  test('DATEFORMAT: option is string type', () => {
    const result = date.dateFormat(mockDate, 'yyyy/mm/dd');
    expect(result).toBe('2022/01/18');
  });
  test('DATEFORMAT: option is object', () => {
    const result = date.dateFormat(mockDate, {
      format: 'yyyy/mm/dd HH:MM',
      padZero: false,
    });
    expect(result).toBe('2022/1/18 12:12');
  });
  test('DATEFORMAT: date is timestamp', () => {
    const result = date.dateFormat(mockTimestamp * 1000);
    expect(result).toBe('2022-01-18 12:12:12');
  });
  test('DATEFORMAT: format is invalid', () => {
    const result = date.dateFormat(mockTimestamp * 1000, 'yy-mm-dd');
    expect(result).toBe('yy-01-18');
  });
  test('DATEFORMAT: padZero is false', () => {
    const result = date.dateFormat(mockTimestamp * 1000, {
      padZero: false,
    });
    expect(result).toBe('2022-1-18 12:12:12');
  });

  test('DATEFORMAT: invalid date', () => {
    expect(() => {
      date.dateFormat(String(mockTimestamp * 1000));
    }).toThrowError();
  });
});

describe('dateOffset', () => {
  const initialDate = new Date('2023-05-01T00:00:00.000Z');

  it('should offset the year correctly', () => {
    const result = date.dateOffset(initialDate, 2, 'year');
    expect(result.getFullYear()).toBe(2025);
  });

  it('should offset the month correctly', () => {
    const result = date.dateOffset(initialDate, 3, 'month');
    expect(result.getMonth() + 1).toBe(7);
  });

  it('should offset the day correctly', () => {
    const result = date.dateOffset(initialDate, -5, 'day');
    expect(result.getDate()).toBe(26);
  });

  it('should offset the hour correctly', () => {
    const result = date.dateOffset(initialDate, 6, 'hour');
    expect(result.getUTCHours()).toBe(6);
  });

  it('should offset the minute correctly', () => {
    const result = date.dateOffset(initialDate, 30, 'minute');
    expect(result.getMinutes()).toBe(30);
  });

  it('should offset the second correctly', () => {
    const result = date.dateOffset(initialDate, 45, 'second');
    expect(result.getSeconds()).toBe(45);
  });

  it('should offset the millisecond correctly', () => {
    const result = date.dateOffset(initialDate, 500, 'millisecond');
    expect(result.getMilliseconds()).toBe(500);
  });

  it('should offset the week correctly', () => {
    const result = date.dateOffset(initialDate, -2, 'week');
    expect(result.getDate()).toBe(17);
  });
  it('invalid date', () => {
    expect(() => {
      date.dateOffset('2022-1-1' as unknown as Date, 2, 'year');
    }).toThrowError();
  });
  it('invalid amount', () => {
    expect(() => {
      date.dateOffset(initialDate, '2' as unknown as number, 'year');
    }).toThrowError();
  });
  it('invalid timeUnit', () => {
    expect(() => {
      date.dateOffset(initialDate, 2, 'years' as any);
    }).toThrowError();
  });
});

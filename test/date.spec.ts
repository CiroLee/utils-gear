import * as date from '@src/date';
import type { TimeUnit } from '@src/types';
const mockDate = new Date('2022-1-18 12:12:12'); // 星期二
const mockTimestamp = 1642479132;
const mockWeeks = ['日', ' 一', '二', '三', '四', '五', '六'];
describe('week test', () => {
  test('WEEK: get week by Date input', () => {
    const week = date.week(mockDate);
    expect(week).toBe('二');
  });
  test('WEEK: get week by a string which is not a number nor can not be transformed to Date', () => {
    expect(date.week('date' as any)).toBe(null);
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
      date: 'date' as unknown as Date,
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
  test('DATEFORMAT: format is invalid', () => {
    const result = date.dateFormat(mockDate, 'yy-mm-dd');
    expect(result).toBe('yy-01-18');
  });
  test('DATEFORMAT: padZero is false', () => {
    const result = date.dateFormat(mockDate, {
      padZero: false,
    });
    expect(result).toBe('2022-1-18 12:12:12');
  });

  test('DATEFORMAT: invalid date', () => {
    expect(() => {
      date.dateFormat(mockTimestamp as unknown as Date);
    }).toThrow();
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
    }).toThrow();
  });
  it('invalid amount', () => {
    expect(() => {
      date.dateOffset(initialDate, '2' as unknown as number, 'year');
    }).toThrow();
  });
  it('invalid timeUnit', () => {
    expect(() => {
      date.dateOffset(initialDate, 2, 'years' as any);
    }).toThrow();
  });
});

describe('dateMaxMin', () => {
  it('should return the max date correctly', () => {
    const dates = [new Date('2023-01-01 12:00:00'), new Date('2024-01-01 12:00:00')];
    const result = date.dateMaxMin(dates, 'max');
    expect(date.dateEqual(result, dates[1]));
  });
  it('invalid dates, should throw error', () => {
    const dates = ['2022-01-01:12:00:00', new Date('2024-01-01 12:00:00')];
    expect(() => {
      date.dateMaxMin(dates as Date[], 'max');
    }).toThrow();
  });
  it('should return the min date correctly', () => {
    const dates = [new Date('2023-01-01 12:00:00'), new Date('2024-01-01 12:00:00')];
    const result = date.dateMaxMin(dates, 'min');
    expect(date.dateEqual(result, dates[0]));
  });
});

describe('dateEqual', () => {
  it('valid date, should return date1 equals date2 correctly', () => {
    const date1 = new Date('2022-01-01 12:00:00');
    const date2 = new Date('2022-01-01 12:00:00');
    const result = date.dateEqual(date1, date2);
    expect(result).toBe(true);
  });
  it('invalid date, should throw error', () => {
    const date1 = new Date('2022-01-01 12:00:00');
    const date2 = '2022-01-01 12:00:00';
    expect(() => {
      date.dateEqual(date1, date2 as unknown as Date);
    }).toThrow();
  });
});

describe('dateDiff', () => {
  const d1 = new Date('2023-12-01 12:00:00');
  const d2 = new Date('2021-12-01 12:00:00');
  it('type is detail, should return detail object of diff', () => {
    const result: Record<TimeUnit, number> = {
      year: 2,
      month: 24.3333,
      day: 730,
      week: 104.2857,
      hour: 17520,
      minute: 1051200,
      second: 63072000,
      millisecond: 63072000000,
    };

    Object.keys(result).forEach((k) => {
      expect(date.dateDiff(d1, d2, k as TimeUnit)).toBe(result[k as TimeUnit]);
    });
  });
  it('invalid date, should throw error', () => {
    expect(() => date.dateDiff(d1, '2021-11-31 22:12:12' as unknown as Date, 'day')).toThrow();
  });
});

describe('isValidDate test', () => {
  test('ISVALIDDATE: assert the input is valid date', () => {
    const d1 = '2022年12月12日';
    const d2 = '2022 12 12';
    const d3 = '2022-12-12T12:12:00';
    const d4 = '2022-12-12 T12:12:00';
    const d5 = {};

    expect(date.isValidDate(d1)).toBeFalsy();
    expect(date.isValidDate(d2)).toBeTruthy();
    expect(date.isValidDate(d3)).toBeTruthy();
    expect(date.isValidDate(d4)).toBeFalsy();
    expect(date.isValidDate(d5)).toBeFalsy();
  });
});

describe('dateToObject', () => {
  it('invalid date, should throw error', () => {
    const dateParam = '2023-11-01:12:00:00';
    expect(() => date.dateToObject(dateParam as unknown as Date)).toThrow();
  });
  it('valid date, should return date object correctly', () => {
    const result = date.dateToObject(mockDate);
    expect(result.year).toBe(2022);
  });
});

describe('daysInMonth', () => {
  it('invalid date, should throw error', () => {
    const dateParam = '2023-11-01:12:00:00';
    expect(() => date.daysInMonth(dateParam as unknown as Date)).toThrow();
  });
  it('should return days correctly', () => {
    const result = date.daysInMonth(mockDate);
    expect(result).toBe(31);
  });
});

describe('weekOfYear', () => {
  it('invalid date, should throw error', () => {
    const dateParam = '2023-11-01:12:00:00';
    expect(() => date.weekOfYear(dateParam as unknown as Date)).toThrow();
  });
  it('should return week correctly', () => {
    const result = date.weekOfYear(mockDate);
    expect(result).toBe(3);
  });
});

describe('weekOfMonth', () => {
  it('invalid date, should throw error', () => {
    const dateParam = '2023-11-01:12:00:00';
    expect(() => date.weekOfMonth(dateParam as unknown as Date)).toThrow();
  });
  it('should return week correctly', () => {
    const result = date.weekOfMonth(mockDate);
    expect(result).toBe(3);
  });
});

describe('toDate', () => {
  it('string type, should convert to Date correctly', () => {
    const param = '2022-1-18 12:12:12';
    const result = date.toDate(param);
    expect(date.dateEqual(mockDate, result)).toBeTruthy();
  });
  it('unix timestamp, should convert to Date correctly', () => {
    const result = date.toDate(mockTimestamp * 1000);
    expect(date.dateEqual(mockDate, result)).toBeTruthy();
  });
  it('invalid date(e.g:{}), should throw error', () => {
    expect(() => date.toDate({} as any)).toThrow();
  });
  it('invalid date(e.g:""), should throw error', () => {
    expect(() => date.toDate('' as any)).toThrow();
  });
});

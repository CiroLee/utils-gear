import * as validator from '@src/validator';
const mockArr = [1, 2, -1, 0];

describe('isAllTrue test', () => {
  it('isAllTrue: isAllTrue that uses default callback function', () => {
    const result = validator.isAllTrue(mockArr);
    expect(result).toBeFalsy();
  });
  it('isAllTrue: isAllTure that uses custom callback function', () => {
    const result = validator.isAllTrue(mockArr, (item: number) => item > -1);
    expect(result).toBeFalsy();
  });
});

describe('isAnyTrue test', () => {
  it('isAnyTrue: isAnyTrue that use default callback function', () => {
    const result = validator.isAnyTrue(mockArr);
    expect(result).toBeTruthy();
  });
  it('isAnyTrue: isAnyTure that uses custom callback function', () => {
    const result = validator.isAnyTrue(mockArr, (item: number) => item > -1);
    expect(result).toBeTruthy();
  });
});

describe('isNumberLike test', () => {
  it('ISNUMBERLIKE: input is number-like string', () => {
    expect(validator.isNumberLike('1')).toBeTruthy();
  });
  it('ISNUMBERLIKE: input is not a number-like string', () => {
    expect(validator.isNumberLike({ n: 123 })).toBeFalsy();
  });
  it('ISNUMBERLIKE: input is hexadecimal color', () => {
    expect(validator.isNumberLike('0xFF0000')).toBeTruthy();
  });
});

describe('isEmptyObject test', () => {
  it('param is not an object, should throw an error', () => {
    expect(() => {
      validator.isEmptyObject([]);
    }).toThrow(/isEmptyObject/);
  });
  it('param is not an object, should return false correctly', () => {
    const obj1 = { a: 1, b: null };
    const obj2 = {};
    Object.defineProperty(obj2, 'attr', {
      value: 'sth',
      enumerable: false,
    });

    expect(validator.isEmptyObject(obj1)).toBeFalsy();
    expect(validator.isEmptyObject(obj2)).toBeFalsy();
  });
  it('param is an empty object, should return true correctly', () => {
    expect(validator.isEmptyObject({})).toBeTruthy();
  });
});

describe('isLeap test', () => {
  it('ISLEAP: judge input year is leap', () => {
    const year1 = 1996;
    const year2 = 2001;
    const year3 = 2100;
    const year4 = 2400;
    expect(validator.isLeap(year1)).toBeTruthy();
    expect(validator.isLeap(year2)).toBeFalsy();
    expect(validator.isLeap(year3)).toBeFalsy();
    expect(validator.isLeap(year4)).toBeTruthy();
  });
});

describe('IsPrime test', () => {
  it('ISPRIME: num is integer', () => {
    const result = validator.IsPrime(23);
    expect(result).toBeTruthy();
  });
  it('ISPRIME: num is 2', () => {
    const result = validator.IsPrime(2);
    expect(result).toBeTruthy();
  });
  it('ISPRIME: num is Infinity', () => {
    expect(() => {
      validator.IsPrime(Infinity);
    }).toThrow();
  });
  it('ISPRIME: invalid num', () => {
    const nums = [-1, 0, 1, 1.2, 4];
    nums.forEach((n) => {
      const result = validator.IsPrime(n);
      expect(result).toBeFalsy();
    });
  });
});

describe('isBase64 test', () => {
  it('text is not base64, should return false', () => {
    expect(validator.isBase64('asdasd===')).toBeFalsy();
  });
  it('text is base64, should return true', () => {
    expect(validator.isBase64('aGVsbG8g8J+YgSDkuJbnlYw=')).toBeTruthy();
  });
});

describe('isEmail test', () => {
  it('should return true for valid email', () => {
    expect(validator.isEmail('example@example.com')).toBeTruthy();
  });
  it('should return true for email with numbers in local part', () => {
    expect(validator.isEmail('ex4mple@example.com')).toBeTruthy();
  });
  it('should return true for email with special characters in local part', () => {
    expect(validator.isEmail('ex.ample@example.com')).toBeTruthy();
  });
  it('should return false for email without @', () => {
    expect(validator.isEmail('example.example.com')).toBeFalsy();
  });
  it('should return false for email with multiple @', () => {
    expect(validator.isEmail('exa@mple@example.com')).toBeFalsy();
  });
  it('should return false for email without . in domain', () => {
    expect(validator.isEmail('example@examplecom')).toBeFalsy();
  });
  it('should return true for valid email with IP address as domain', () => {
    expect(validator.isEmail('example@[127.0.0.1]')).toBeTruthy();
  });
  it('should return false for invalid email with IP address as domain', () => {
    expect(validator.isEmail('example@[127.0.0]')).toBeFalsy();
  });
});

describe('Testing validator.isPhoneNumber function', () => {
  it('should return true for valid phone number (low level)', () => {
    expect(validator.isPhoneNumber('12345678901', 'low')).toBeTruthy();
  });
  it('should return false for phone number with more than 11 digits (low level)', () => {
    expect(validator.isPhoneNumber('+861234567890123', 'low')).toBeFalsy();
  });
  it('should return false for phone number with less than 11 digits (low level)', () => {
    expect(validator.isPhoneNumber('+86123456789', 'low')).toBeFalsy();
  });
  it('should return true for valid phone number (medium level)', () => {
    expect(validator.isPhoneNumber('13876543210')).toBeTruthy();
  });
  it('should return true for valid phone number (wrong level and will use default)', () => {
    expect(validator.isPhoneNumber('13876543210', 'very-high' as any)).toBeTruthy();
  });
  it('should return false for invalid starting number (medium level)', () => {
    expect(validator.isPhoneNumber('11234567890', 'medium')).toBeFalsy();
  });
  it('should return true for valid phone number (high level)', () => {
    expect(validator.isPhoneNumber('13876543210', 'high')).toBeTruthy();
  });
  it('should return false for invalid carrier code (high level)', () => {
    expect(validator.isPhoneNumber('14234567890', 'high')).toBeFalsy();
  });
});

describe('Testing isIDNumber function', () => {
  it('should return true for valid ID', () => {
    expect(validator.isIDNumber('440301199012301234')).toBeTruthy();
  });
  it('should return false for invalid ID with incorrect area code', () => {
    expect(validator.isIDNumber('000000199912121212')).toBeFalsy();
  });
  it('should return false for invalid ID with incorrect birth month', () => {
    expect(validator.isIDNumber('440301199013121212')).toBeFalsy();
  });
  it('should return false for invalid ID with incorrect birth day', () => {
    expect(validator.isIDNumber('440301199912321212')).toBeFalsy();
  });
  it('should return true for valid ID with X as checksum', () => {
    expect(validator.isIDNumber('44030119901230123X')).toBeTruthy();
  });
  it('should return false for invalid ID with incorrect length', () => {
    expect(validator.isIDNumber('4403011990121234')).toBeFalsy();
  });
});

describe('isInt test', () => {
  it('should return true for integer number', () => {
    expect(validator.isInt(10)).toBeTruthy();
    expect(validator.isInt(0)).toBeTruthy();
    expect(validator.isInt(-5)).toBeTruthy();
  });
  it('should return false for float number', () => {
    expect(validator.isInt(10.5)).toBeFalsy();
    expect(validator.isInt(-5.5)).toBeFalsy();
  });
});

describe('isFloat test', () => {
  it('should return true for float number', () => {
    expect(validator.isFloat(10.5)).toBeTruthy();
    expect(validator.isFloat(-5.5)).toBeTruthy();
  });
  it('should return false for integer number', () => {
    expect(validator.isFloat(10)).toBeFalsy();
    expect(validator.isFloat(-5)).toBeFalsy();
  });
});

describe('validator.validator.isUrl function test', () => {
  it('should validate valid urls', () => {
    expect(validator.isUrl('http://www.example.com')).toBeTruthy();
    expect(validator.isUrl('https://www.example.com')).toBeTruthy();
    expect(validator.isUrl('ftp://www.example.com')).toBeTruthy();
    expect(validator.isUrl('http://subdomain.example.co.uk')).toBeTruthy();
    expect(validator.isUrl('https://username:password@www.example.com:8080/path?query=string#fragment')).toBeTruthy();
  });
  it('should not validate invalid urls', () => {
    expect(validator.isUrl('not a url')).toBeFalsy();
    expect(validator.isUrl('http://../')).toBeFalsy();
    expect(validator.isUrl('http://../../')).toBeFalsy();
    expect(validator.isUrl('http://./')).toBeFalsy();
    expect(validator.isUrl('http://123..456.789.0')).toBeFalsy();
    expect(validator.isUrl('http://-error-.invalid')).toBeFalsy();
    expect(validator.isUrl('http://a b c')).toBeFalsy();
    expect(validator.isUrl('http://123..456.789.0')).toBeFalsy();
  });
});

describe('isQQNumber test', () => {
  it('should return true valid qq number', () => {
    expect(validator.isQQNumber(12345)).toBeTruthy();
    expect(validator.isQQNumber(1234567890)).toBeTruthy();
  });
  it('should return false invalid qq number', () => {
    expect(validator.isQQNumber(123)).toBeFalsy();
    expect(validator.isQQNumber(12345678901232)).toBeFalsy();
    expect(validator.isQQNumber('01235434')).toBeFalsy();
  });
});

describe('isSparseArray test', () => {
  it('should return false with a non-array param', () => {
    const result = validator.isSparseArray({});
    expect(result).toBeFalsy();
  });
  it('should return false with a non-sparse array', () => {
    const result = validator.isSparseArray([1, 2, null, undefined]);
    expect(result).toBeFalsy();
  });
  it('should return false with a empty array', () => {
    const result = validator.isSparseArray([]);
    expect(result).toBeFalsy();
  });
  it('should return true with a sparse array', () => {
    // eslint-disable-next-line no-sparse-arrays
    const result = validator.isSparseArray([1, 2, , 3]);
    expect(result).toBeTruthy();
  });
});

describe('isPrimitive test', () => {
  it('should return true for primitive types', () => {
    expect(validator.isPrimitive(null)).toBeTruthy();
  });
});

describe('isMobile test', () => {
  let originalUserAgent: string;
  beforeAll(() => {
    originalUserAgent = window.navigator.userAgent;
  });
  afterAll(() => {
    // 测试结束后恢复原始userAgent
    Object.defineProperty(navigator, 'userAgent', {
      value: originalUserAgent,
      configurable: true,
    });
  });

  const setUserAgent = (ua: string) => {
    Object.defineProperty(navigator, 'userAgent', {
      value: ua,
      configurable: true,
    });
  };
  it('should return true for ua includes "iPhone"', () => {
    setUserAgent(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
    );
    expect(validator.isMobile()).toBeTruthy();
  });
  it('should return false for ua not includes mobile symbol', () => {
    setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    );
    expect(validator.isMobile()).toBeFalsy();
  });
});

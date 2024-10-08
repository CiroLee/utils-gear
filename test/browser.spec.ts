/* eslint-disable max-len */
import * as browser from '@src/browser';
describe('getPlatformType test', () => {
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
  it('should correctly identify Windows platform', () => {
    setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    );
    expect(browser.getPlatformType()).toBe('Windows');
  });

  it('should correctly identify macOS platform', () => {
    setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36',
    );
    expect(browser.getPlatformType()).toBe('macOS');
  });

  it('should correctly identify Android platform', () => {
    setUserAgent(
      'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36',
    );
    expect(browser.getPlatformType()).toBe('Android');
  });

  it('should correctly identify iOS platform', () => {
    setUserAgent(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Mobile/15E148 Safari/604.1',
    );

    expect(browser.getPlatformType()).toBe('iPhone');
  });

  it('should correctly identify Linux platform', () => {
    setUserAgent('Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0');
    expect(browser.getPlatformType()).toBe('Linux');
  });

  it('should correctly identify iPad platform', () => {
    setUserAgent(
      'Mozilla/5.0 (iPad; CPU OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1',
    );
    expect(browser.getPlatformType()).toBe('iPad');
  });

  it('should return an empty string for unknown platform', () => {
    const userAgent = 'Some random user agent string';
    expect(browser.getPlatformType(userAgent)).toBe('unknown');
  });
});

describe('parseURLParams test', () => {
  test('should parse URL parameters correctly', () => {
    const url = 'https://example.com/path?param1=value%201&param2=value%202';
    const params = browser.parseURLParams(url);

    expect(params).toEqual({
      param1: 'value 1',
      param2: 'value 2',
    });
  });
  test('no params', () => {
    const url = 'https://example.com/path';
    const params = browser.parseURLParams(url);
    expect(params).toEqual({});
  });
});

describe('stringifyURLParams', () => {
  it('converts an object to a query string', () => {
    const params = {
      foo: 'bar',
      baz: 'qux',
    };

    const queryString = browser.stringifyURLParams(params);

    expect(queryString).toBe('foo=bar&baz=qux');
  });

  it('handles empty params', () => {
    const queryString = browser.stringifyURLParams({});

    expect(queryString).toBe('');
  });

  it('encodes values correctly', () => {
    const params = {
      name: 'John Doe',
    };

    const queryString = browser.stringifyURLParams(params);

    expect(queryString).toBe('name=John+Doe');
  });
});

describe('isDarkMode', () => {
  test('should return true when prefers-color-scheme is dark', () => {
    // Mock window.matchMedia to simulate dark mode
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
    }));

    expect(browser.isDarkMode()).toBe(true);
  });

  test('should return false when prefers-color-scheme is not dark', () => {
    // Mock window.matchMedia to simulate light mode
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: light)',
    }));

    expect(browser.isDarkMode()).toBe(false);
  });
});

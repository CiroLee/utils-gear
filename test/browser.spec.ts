import * as browser from '@src/browser';
describe('getPlatformType test', () => {
  test('getPlatformType: valid userAgent', () => {
    const ua =
      // eslint-disable-next-line max-len
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3';
    expect(browser.getPlatformType(ua)).toBe('macOS');
  });
  test('getPlatformType: invalid userAgent', () => {
    const ua =
      // eslint-disable-next-line max-len
      'Mozilla/5.0 (Unknown; Unknown; Unknown) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3';
    expect(browser.getPlatformType(ua)).toBe('unknown');
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

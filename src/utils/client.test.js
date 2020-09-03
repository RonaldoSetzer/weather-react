import * as client from './client';

describe('Client utils', () => {
  it('should concat an url', () => {
    const value = ['a', 'b', 'c'];
    const expected = 'a/b/c';

    expect(client.concatUrl(...value)).toEqual(expected);
  });

  it('should create an url', () => {
    const baseUrl = 'http';
    const params = { a: 1, b: 2 };
    const expected = 'http?a=1&b=2';

    expect(client.createUrl(baseUrl, params)).toEqual(expected);
  });
});

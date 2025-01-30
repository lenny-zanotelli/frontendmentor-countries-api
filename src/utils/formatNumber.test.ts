import formatNumber from './formatNumber';

describe('Format Number function', () => {
  it('should return something', () => {
    expect(formatNumber).toBeDefined();
  });
  it('should return a string with en-US format for big number', () => {
    const number = 123456789;
    expect(formatNumber(number)).toBe('123,456,789');
  });
});

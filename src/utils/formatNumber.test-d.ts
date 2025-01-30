import formatNumber from './formatNumber';

describe('Format number population', () => {
  it('should be a function', () => {
    expectTypeOf(formatNumber).toBeFunction();
  });
  it('should got a number type in parameter and should return a string', () => {
    expectTypeOf(formatNumber).parameter(0).toEqualTypeOf<number>();
    expectTypeOf(formatNumber).returns.toEqualTypeOf<string>();
  });
});

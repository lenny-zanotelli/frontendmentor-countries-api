import { CountryApi } from './countryApi';

describe('Country Api class test', () => {
  describe('validateCCA3 method test', () => {
    it('should return a validation Error', () => {
      expect(() => {
        CountryApi.validateCCA3('string');
      }).toThrowError(/^CCA3 must be a 3-letter code$/);
    });

    it('should return void when a correct CCA3 is enter', () => {
      expect(() => {
        CountryApi.validateCCA3('FRA');
      }).not.toThrow();
    });
  });
});

import { describe, it, expect } from 'vitest';
import { CountryApi } from './countryApi';
import { ApiError, NetworkError, ValidationError } from './errors';
import { BASE_URL } from '../utils/constant';

describe('CountryApi Unit Tests', () => {
  describe('validateCCA3', () => {
    it('should throw ValidationError for empty string', () => {
      expect(() => CountryApi.validateCCA3('')).toThrow(ValidationError);
    });

    it('should throw ValidationError for code with less than 3 letters', () => {
      expect(() => CountryApi.validateCCA3('FR')).toThrow(ValidationError);
    });

    it('should throw ValidationError for code with more than 3 letters', () => {
      expect(() => CountryApi.validateCCA3('FRAN')).toThrow(ValidationError);
    });

    it('should throw ValidationError for code with numbers', () => {
      expect(() => CountryApi.validateCCA3('FR1')).toThrow(ValidationError);
    });

    it('should not throw for valid 3-letter code', () => {
      expect(() => CountryApi.validateCCA3('FRA')).not.toThrow();
    });
  });

  describe('handleResponse', () => {
    it('should return JSON data for successful response', async () => {
      const mockResponse = {
        ok: true,
        json: () => Promise.resolve({ data: 'test' }),
      } as Response;

      const result = await CountryApi.handleResponse(mockResponse);
      expect(result).toEqual({ data: 'test' });
    });

    it('should throw ApiError for unsuccessful response', async () => {
      const mockResponse = {
        ok: false,
        status: 404,
        json: () => Promise.resolve({ message: 'Not Found' }),
      } as Response;

      await expect(CountryApi.handleResponse(mockResponse)).rejects.toThrow(
        ApiError
      );
    });

    it('should handle JSON parse error in error response', async () => {
      const mockResponse = {
        ok: false,
        status: 500,
        json: () => Promise.reject(new Error('Invalid JSON')),
      } as Response;

      await expect(
        CountryApi.handleResponse(mockResponse)
      ).rejects.toThrowError(ApiError);
      await expect(
        CountryApi.handleResponse(mockResponse)
      ).rejects.toThrowError('Unknown Error');
    });
  });
});

const MOCK_COUNTRIES = [
  {
    name: { common: 'France', official: 'French Republic' },
    cca3: 'FRA',
    capital: ['Paris'],
    region: 'Europe',
  },
  {
    name: { common: 'Germany', official: 'Federal Republic of Germany' },
    cca3: 'DEU',
    capital: ['Berlin'],
    region: 'Europe',
  },
] as const;

const MOCK_FRANCE = MOCK_COUNTRIES[0];

const DEFAULT_HEADERS = {
  'Cache-Control': 'public, max-age=86400, immutable',
} as const;

// Helper functions pour les mocks
const mockSuccessResponse = (data: unknown) => ({
  ok: true,
  json: () => Promise.resolve(data),
});

const mockErrorResponse = (status: number, message: string) => ({
  ok: false,
  status,
  json: () => Promise.resolve({ message }),
});

const mockNetworkError = () => Promise.reject(new Error('Network failure'));

describe('CountryApi Integration Tests', () => {
  const mockFetch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    window.fetch = mockFetch;
  });

  describe('getAllCountries', () => {
    it('fetches and processes all countries successfully', async () => {
      mockFetch.mockResolvedValue(mockSuccessResponse(MOCK_COUNTRIES));

      const result = await CountryApi.getAllCountries();

      expect(mockFetch).toHaveBeenCalledWith(`${BASE_URL}/all`, {
        headers: DEFAULT_HEADERS,
      });
      expect(result).toEqual(MOCK_COUNTRIES);
    });

    it('handles empty response', async () => {
      mockFetch.mockResolvedValue(mockSuccessResponse(null));

      await expect(CountryApi.getAllCountries()).rejects.toThrow(
        new ApiError('No countries found', 404)
      );
    });

    it('handles network failure', async () => {
      mockFetch.mockImplementation(mockNetworkError);

      await expect(CountryApi.getAllCountries()).rejects.toThrow(NetworkError);
    });

    it('handles server error', async () => {
      mockFetch.mockResolvedValue(
        mockErrorResponse(500, 'Internal Server Error')
      );

      await expect(CountryApi.getAllCountries()).rejects.toThrow(ApiError);
    });
  });

  describe('fetchByCode', () => {
    it('fetches and processes a single country successfully', async () => {
      mockFetch.mockResolvedValue(mockSuccessResponse([MOCK_FRANCE]));

      const result = await CountryApi.fetchByCode('FRA');

      expect(mockFetch).toHaveBeenCalledWith(`${BASE_URL}/alpha/FRA`, {
        headers: DEFAULT_HEADERS,
      });
      expect(result).toEqual(MOCK_FRANCE);
    });

    it('normalizes country code input', async () => {
      mockFetch.mockResolvedValue(mockSuccessResponse([MOCK_FRANCE]));

      await CountryApi.fetchByCode('fra ');

      expect(mockFetch).toHaveBeenCalledWith(`${BASE_URL}/alpha/FRA`, {
        headers: DEFAULT_HEADERS,
      });
    });

    it('validates country code format', () => {
      expect(CountryApi.fetchByCode('INVALID')).rejects.toThrow(
        'CCA3 must be a 3-letter code'
      );

      expect(mockFetch).not.toHaveBeenCalled();
    });

    it('handles non-existent country code', async () => {
      mockFetch.mockResolvedValue(mockSuccessResponse([]));

      await expect(CountryApi.fetchByCode('XYZ')).rejects.toThrow(
        new ApiError('No Country found with code XYZ', 404)
      );
    });

    it('handles network failure', async () => {
      mockFetch.mockImplementation(mockNetworkError);

      await expect(CountryApi.fetchByCode('FRA')).rejects.toThrow(NetworkError);
    });

    it('handles server error', async () => {
      mockFetch.mockResolvedValue(
        mockErrorResponse(500, 'Internal Server Error')
      );

      await expect(CountryApi.fetchByCode('FRA')).rejects.toThrow(ApiError);
    });
  });
});

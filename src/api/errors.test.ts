import { BaseError, ApiError, NetworkError, ValidationError } from './errors';

describe('Error Classes', () => {
  describe('BaseError', () => {
    it('should create a BaseError with correct properties', () => {
      const error = new BaseError('test message', 'TEST_CODE', 400);

      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(BaseError);
      expect(error.message).toBe('test message');
      expect(error.code).toBe('TEST_CODE');
      expect(error.status).toBe(400);
      expect(error.name).toBe('BaseError');
    });

    it('should work without status parameter', () => {
      const error = new BaseError('test message', 'TEST_CODE');

      expect(error.message).toBe('test message');
      expect(error.code).toBe('TEST_CODE');
      expect(error.status).toBeUndefined();
    });
  });

  describe('ApiError', () => {
    it('should create an ApiError with correct properties', () => {
      const error = new ApiError('api error', 404);

      expect(error).toBeInstanceOf(BaseError);
      expect(error).toBeInstanceOf(ApiError);
      expect(error.message).toBe('api error');
      expect(error.code).toBe('API_ERROR');
      expect(error.status).toBe(404);
      expect(error.name).toBe('ApiError');
    });

    it('should maintain proper inheritance chain', () => {
      const error = new ApiError('api error', 404);
      expect(Object.getPrototypeOf(error)).toBe(ApiError.prototype);
      expect(error instanceof Error).toBe(true);
      expect(error instanceof BaseError).toBe(true);
    });
  });

  describe('NetworkError', () => {
    it('should create a NetworkError with correct properties', () => {
      const error = new NetworkError('network error');

      expect(error).toBeInstanceOf(BaseError);
      expect(error).toBeInstanceOf(NetworkError);
      expect(error.message).toBe('network error');
      expect(error.code).toBe('NETWORK_ERROR');
      expect(error.status).toBe(503);
      expect(error.name).toBe('NetworkError');
    });
  });

  describe('ValidationError', () => {
    it('should create a ValidationError with correct properties', () => {
      const error = new ValidationError('validation error');

      expect(error).toBeInstanceOf(BaseError);
      expect(error).toBeInstanceOf(ValidationError);
      expect(error.message).toBe('validation error');
      expect(error.code).toBe('VALIDATION_ERROR');
      expect(error.status).toBe(400);
      expect(error.name).toBe('ValidationError');
    });
  });

  describe('Error handling scenarios', () => {
    it('should be catchable as a normal error', () => {
      expect(() => {
        throw new ValidationError('invalid input');
      }).toThrow(Error);
    });

    it('should be identifiable by instanceof', () => {
      try {
        throw new NetworkError('connection failed');
      } catch (error) {
        expect(error instanceof NetworkError).toBe(true);
        expect(error instanceof BaseError).toBe(true);
        expect(error instanceof Error).toBe(true);
      }
    });
  });
});

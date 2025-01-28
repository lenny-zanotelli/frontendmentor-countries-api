export class BaseError extends Error {
  constructor(
    message: string,
    public code: string,
    public status?: number
  ) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, BaseError.prototype);
  }
}

export class ApiError extends BaseError {
  constructor(message: string, status: number) {
    super(message, 'API_ERROR', status);
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export class NetworkError extends BaseError {
  constructor(message: string) {
    super(message, 'NETWORK_ERROR', 503);
    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}

export class ValidationError extends BaseError {
  constructor(message: string) {
    super(message, 'VALIDATION_ERROR', 400);
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

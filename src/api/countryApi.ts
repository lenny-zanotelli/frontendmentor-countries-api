import { Country } from '../@types/countries';
import { BASE_URL } from '../utils/constant';
import { ApiError, BaseError, NetworkError, ValidationError } from './errors';

export class CountryApi {
  private static validateCCA3(cca3: string): void {
    if (!cca3?.match(/^[A-Za-z]{3}$/)) {
      throw new ValidationError('CCA3 must be a 3-letter code');
    }
  }
  private static async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: 'Unknown Error' }));
      throw new ApiError(error.message, response.status);
    }
    return response.json();
  }
  static async getAllCountries(): Promise<Country[]> {
    try {
      const response: Response = await fetch(`${BASE_URL}/all`, {
        headers: {
          'Cache-Control': 'public, max-age=86400, immutable',
        },
      });
      const countries: Country[] =
        await this.handleResponse<Country[]>(response);
      if (!countries) {
        throw new ApiError('No countries found', 404);
      }
      return countries;
    } catch (error) {
      if (error instanceof BaseError) throw error;
      if (error instanceof Error) {
        throw new NetworkError(`Failed to fetch countries: ${error.message}`);
      }
      throw new NetworkError('An unexpected error occured');
    }
  }
  static async fetchByCode(cca3: string): Promise<Country> {
    this.validateCCA3(cca3);
    try {
      const sanitizedCCA3 = cca3.toUpperCase().trim();
      const response: Response = await fetch(
        `${BASE_URL}/alpha/${sanitizedCCA3}`,
        {
          headers: {
            'Cache-Control': 'public, max-age=86400, immutable',
          },
        }
      );
      const data = await this.handleResponse<Country[]>(response);

      if (!data?.[0]) {
        throw new ApiError(`No Country found with code ${cca3}`, 404);
      }
      return data[0];
    } catch (error) {
      if (error instanceof BaseError) throw error;
      if (error instanceof Error) {
        throw new NetworkError(`Failed to fetch country: ${error.message}`);
      }
      throw new NetworkError('An unexpected error occured');
    }
  }
}

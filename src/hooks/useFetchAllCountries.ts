import { useCallback, useEffect, useState } from 'react';
import { Country } from '../@types/countries';
import { BaseError } from '../api/errors';
import { CountryAPi } from '../api/countryApi';

interface CountriesState {
  data: Country[] | null;
  error: BaseError | null;
  isLoading: boolean;
}

export const useFetchAllCountries = () => {
  const [state, setState] = useState<CountriesState>({
    data: null,
    error: null,
    isLoading: false,
  });

  const fetchCountries = useCallback(async () => {
    setState((prevState) => ({ ...prevState, isLoading: true, error: null }));

    try {
      const countries = await CountryAPi.getAllCountries();
      setState({ data: countries, error: null, isLoading: false });
    } catch (error) {
      setState({
        data: null,
        error:
          error instanceof BaseError
            ? error
            : new BaseError('Unknown error', 'UNKNOWN'),
        isLoading: false,
      });
    }
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    fetchCountries();
    return () => {
      abortController.abort();
    };
  }, []);
  return { state };
};

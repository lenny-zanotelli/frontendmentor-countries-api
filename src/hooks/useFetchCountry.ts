import { useCallback, useEffect, useState } from 'react';
import { Country } from '../@types/countries';
import { BaseError } from '../api/errors';
import { CountryApi } from '../api/countryApi';

interface CountryState {
  data: Country | null;
  error: BaseError | null;
  isLoading: boolean;
}

export const useFetchCountry = (initialCca3?: string) => {
  const [state, setState] = useState<CountryState>({
    data: null,
    error: null,
    isLoading: Boolean(initialCca3),
  });

  const fetchCountry = useCallback(async (cca3: string) => {
    setState((prevState) => ({ ...prevState, isLoading: true, error: null }));

    try {
      const country = await CountryApi.fetchByCode(cca3);
      setState({ data: country, error: null, isLoading: false });
    } catch (error) {
      const handledError =
        error instanceof BaseError
          ? error
          : new BaseError('Unknown error', 'UNKNOWN');
      setState({
        data: null,
        error: handledError,
        isLoading: false,
      });
    }
  }, []);

  useEffect(() => {
    if (initialCca3) {
      fetchCountry(initialCca3);
    }
  }, [initialCca3, fetchCountry]);

  return {
    ...state,
    fetchCountry,
  };
};

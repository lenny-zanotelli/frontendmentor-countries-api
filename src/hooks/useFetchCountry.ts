import { useCallback, useState } from 'react';
import { Country } from '../@types/countries';
import { BaseError } from '../api/errors';
import { CountryAPi } from '../api/countryApi';

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
      const country = await CountryAPi.fetchByCode(cca3);
      setState({ data: country, error: null, isLoading: false });
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
  return {
    ...state,
    fetchCountry,
  };
};

import { useQuery } from "@tanstack/react-query";
import getAllCountries from '../services/getAllCountries';

function useCountries() {
  return useQuery({
    queryFn: () => getAllCountries()
  });
}

export default useCountries;
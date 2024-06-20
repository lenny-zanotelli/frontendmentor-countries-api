import { Country } from '../@types/countries';

const baseUrl = import.meta.env.VITE_PRIVATE_API_URL;

const getAllCountries = async (): Promise<Country[]> => {
  try {
    console.log('Fetching Countries');
    const response = await fetch(`${baseUrl}/all`);
    const countries = await response.json();

    console.log('Countries :', countries);
    return countries;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export default getAllCountries;

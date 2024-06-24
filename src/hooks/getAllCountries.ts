import { Country } from '../@types/countries';

const baseUrl = import.meta.env.VITE_PRIVATE_API_URL;

const getAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch(`${baseUrl}/all`);
    const countries = await response.json();

    return countries;
  } catch (error) {
    console.log(error);
    throw error;
  }
  return [];
};

export default getAllCountries;

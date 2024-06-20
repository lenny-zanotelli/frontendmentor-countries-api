import { Country } from '../@types/countries';

const baseUrl = import.meta.env.VITE_PRIVATE_API_URL;

const getOneCountry = async (cca3: string): Promise<Country> => {
  try {
    console.log('Fetching info of the Country');
    const response = await fetch(`${baseUrl}/alpha/${cca3}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const countries = await response.json();

    if (!countries || countries.length === 0) {
      throw new Error(`Country '${cca3}' not found`);
    }

    const country = countries[0];
    console.log('Country ----------------:', country);

    return country as Country;
  } catch (error) {
    console.error('Error fetching country:', error);
    throw error;
  }
};

export default getOneCountry;

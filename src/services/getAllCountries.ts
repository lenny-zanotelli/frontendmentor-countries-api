import { Country } from '../@types/countries';
import { axiosInstance as axios } from '../utils/axios';

const getAllCountries = async (): Promise<Country[]> => {
  try {
    console.log('Fetching Countries');
    const response = await axios.get('/all');
    const countries = response.data;

    console.log('Countries :', countries);
    return countries;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export default getAllCountries;

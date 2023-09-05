/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { Country } from '../@types/countries';

export const findCountry = async (searchedName: string): Promise<Country> => {
  console.log('Fetching info of the Country');
  const response = await axios.get(`https://restcountries.com/v3.1/name/${searchedName}`);
  const country = response.data[0];
  console.log('Country :', country);

  return country;
};

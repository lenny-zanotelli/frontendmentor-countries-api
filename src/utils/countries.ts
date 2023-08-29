/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { Country } from '../@types/countries';

export const fecthCountries = async (): Promise<Country[]> => {
  console.log('Fetching Countries');
  const response = await axios.get('https://restcountries.com/v3.1/all');
  const countries = response.data;

  console.log('Countries :', countries);
  return countries;
};

export const fetchCountriesByName = async (name: string) => {
  if (!name) { /* empty */ } else {
    console.log(`Fetching ${name}`);
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    const countriesByName = response.data;
    console.log('Countries by name', countriesByName);

    return countriesByName;
  }
};

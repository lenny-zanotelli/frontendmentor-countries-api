/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { Country } from '../@types/countries';

export const getAllCountries = async (): Promise<Country[]> => {
  try {
    console.log('Fetching Countries');
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countries = response.data;

    console.log('Countries :', countries);
    return countries;
  } catch (error) {
    console.log(error);
  }
  return [];
};

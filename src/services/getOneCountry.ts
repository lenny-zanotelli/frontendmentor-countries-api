/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { Name } from '../@types/countries';

export const getOneCountry = async (searchedName: string) => {
  try {
    console.log('Fetching info of the Country');
    // const response = await axios.get(`https://restcountries.com/v3.1/name/${searchedName}?fullText=true`);
    // const country = await response.data[0];
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countries = response.data;
    const country = countries.find((c: Name) => c.name.common === searchedName);

    if (!country) {
      throw new Error(`Country '${searchedName}' not found`);
    }
    console.log('Country :', country);

    return country;
  } catch (error) {
    console.error(error);
  }
  return String;
};

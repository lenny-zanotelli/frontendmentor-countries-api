/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const getOneCountry = async (cca3: string) => {
  try {
    console.log('Fetching info of the Country');
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`);
    const country = response.data[0];

    if (!country.name && country.name.common) {
      throw new Error(`Country '${cca3}' not found`);
    }

    console.log('Country :', country);
    
    return country;
  } catch (error) {
    console.error(error);
  }
};

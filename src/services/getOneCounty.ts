/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const getOneCountry = async (searchedName: string) => {
  try {
    console.log('Fetching info of the Country');
    const response = await axios.get(`https://restcountries.com/v3.1/name/${searchedName}?fullText=true`);
    const country = await response.data[0];
    console.log('Country :', country);

    return country;
  } catch (error) {
    console.log(error);
  }
  return String;
};

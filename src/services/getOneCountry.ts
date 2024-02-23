import { axiosInstance as axios } from "../utils/axios";

export const getOneCountry = async (cca3: string) => {
  try {
    console.log('Fetching info of the Country');
    const response = await axios.get(`/alpha/${cca3}`);
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

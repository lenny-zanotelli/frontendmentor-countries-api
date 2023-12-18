/* eslint-disable import/no-extraneous-dependencies */
import Card from './Card';
import './styles.scss';
import { Country } from '../../@types/countries';
import { Grid } from '@radix-ui/themes';

interface CardResultsProps {
  countries: Country[];
  searchText: string;
  selectedRegion: string;
}

function CardResults({ countries, searchText, selectedRegion }: CardResultsProps) {
  const filteredCountries = countries
    .filter((country) => country.name.common
      .toLowerCase().includes(searchText.toLowerCase())
      && (selectedRegion === '' || country.region === selectedRegion));

  if (filteredCountries.length === 0) {
    return <p>No countries found.</p>;
  }

  return (
    <Grid 
      display='grid' 
      columns='4'
      gap='9' 
      justify='center' 
      align='center'
      style={{
        maxWidth: 1500,
      }}
    > 
      {filteredCountries
        .map((country) => (
          <Card
            key={country.name.official}
            country={country}
          />
        ))}
    </Grid>

  );
}

export default CardResults;

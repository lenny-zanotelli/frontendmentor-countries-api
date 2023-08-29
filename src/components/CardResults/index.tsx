/* eslint-disable import/no-extraneous-dependencies */
import Card from './Card';
import './styles.scss';
import { Country } from '../../@types/countries';

interface CardResultsProps {
  countries: Country[];
  searchText: string;
  selectedRegion: string;
}

function CardResults({ countries, searchText, selectedRegion }: CardResultsProps) {
  const filteredCountries = countries
    .filter((country) => country.name.common
      .toLowerCase().includes(searchText.toLowerCase())
      && (selectedRegion === 'all' || country.region === selectedRegion));

  return (
    <section className="card-container">
      {filteredCountries
        .map((country) => (
          <Card
            key={country.name.official}
            country={country}
          />
        ))}
    </section>

  );
}

export default CardResults;

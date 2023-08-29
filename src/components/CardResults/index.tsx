/* eslint-disable import/no-extraneous-dependencies */
import Card from './Card';
import './styles.scss';
import { Country } from '../../@types/countries';

interface CardResultsProps {
  countries: Country[];
  searchText: string;
}

function CardResults({ countries, searchText }: CardResultsProps) {
  console.log('Render');

  const filteredCountries = countries
    .filter((country) => country.name.common
      .toLowerCase().includes(searchText.toLowerCase()));

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

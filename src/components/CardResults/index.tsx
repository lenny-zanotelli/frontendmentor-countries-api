import { Icountry } from '../../@types/countries';
import Card from './Card';
import './styles.scss';

interface CountriesResultsProps {
  countries: Icountry[]

}

function CardResults({ countries }: CountriesResultsProps) {
  return (
    <section className="card-container">
      {countries.map((country) => (
        <Card
          key={country.name}
          country={country}
        />
      ))}
    </section>

  );
}

export default CardResults;

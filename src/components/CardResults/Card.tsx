import { Country } from '../../@types/countries';
import './styles.scss';

interface CountryProps {
  country: Country,
}

function Card({ country }: CountryProps) {
  return (
    <div className="card">
      <img src={country.flags.png} alt={country.name.common} />
      <h2 className="card-title">{country.name.common}</h2>
      <p className="card-element">
        Population :
        {' '}
        {country.population}
      </p>
      <p className="card-element">
        Region :
        {country.region}
      </p>
      <p className="card-element">
        Capital :
        {' '}
        {country.capital}
      </p>

    </div>
  );
}

export default Card;

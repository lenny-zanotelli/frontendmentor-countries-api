import { ICountry } from '../../@types/countries';
import './styles.scss';

interface CountryProps {
  country: ICountry
}

function Card({ country }: CountryProps) {
  return (
    <div className="card">
      <img src={country.flag} alt={country.name} />
      <h2 className="card-title">{country.name}</h2>
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

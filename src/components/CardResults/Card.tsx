/* eslint-disable no-nested-ternary */
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
        {country.population.toLocaleString('en', {
          useGrouping: true,
        })}
      </p>
      <p className="card-element">
        Region :
        {country.region}
      </p>
      <p className="card-element">
        {/* TODO: Can i do a better code than nested ternary for join multiple capitals here ? */}
        Capital :
        {' '}
        {country.capital ? (country.capital.length >= 2 ? (
          country.capital.join(', ')
        ) : (
          country.capital[0]
        )
        ) : (
          'N/A'
        )}
      </p>

    </div>
  );
}

export default Card;

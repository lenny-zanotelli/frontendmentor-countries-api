/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import { Country } from '../../@types/countries';
import './styles.scss';
import formatNumber from '../../utils/formatPopNumber';

interface CountryProps {
  country: Country,
}

function Card({ country }: CountryProps) {
  const populationFormat = formatNumber(country.population);
  return (
    <Link
      to={`/country/${country.cca3}`}
    >
      <div className="card">
        <img src={country.flags.png} alt={country.name.common} />
        <h2 className="card-title">{country.name.common}</h2>
        <p className="card-element">
          Population :
          {' '}
          {populationFormat}
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
    </Link>
  );
}

export default Card;

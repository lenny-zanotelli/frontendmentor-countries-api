/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { Country } from '../../@types/countries';
import { findCountry } from '../../utils/findCountries';
import './styles.scss';

function Detail() {
  const { countryName } = useParams();
  const {
    isError, isLoading, data: country, error,
  } = useQuery<Country>(
    ['country'],
    () => findCountry(countryName as string),
    { staleTime: 3000 },
  );

  if (isLoading) {
    console.log('Loading...');
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log('Error :', error);
    return <div>Error...</div>;
  }

  if (!country) {
    return <div>Country not found</div>;
  }
  return (
    <>
      <button type="button">
        <Link to="/">Back</Link>
      </button>
      <div>
        <img src={country.flags.png} alt={country.name.common} />
        <h1>{country.name.common}</h1>
        <p>
          Population:
          {' '}
          {country.population.toLocaleString('en', { useGrouping: true })}
        </p>
        <p>
          Region:
          {' '}
          {country.region}
        </p>
        <div>
          <h3>Border Countries :</h3>
          {/* TODO: How to put the common name for borders country ? */}
          {country.borders.join(', ')}
        </div>

      </div>

    </>

  );
}

export default Detail;

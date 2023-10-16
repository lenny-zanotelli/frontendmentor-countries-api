/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import { CSSProperties, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Country } from '../../@types/countries';
import { getOneCountry } from '../../services/getOneCountry';
import './styles.scss';
import Layout from '../../components/Layout';
import BackButton from '../../components/BackButton';
import formatNumber from '../../utils/formatPopNumber';
import { cca3ToNameMap } from '../../@types/cca3ToNameMap';
import CircleLoader from 'react-spinners/CircleLoader';

const override: CSSProperties = {
  display: "block",
  position: 'fixed',
  zIndex: '1',
  top: '50%',
  left: '50%',
};

function Detail() {
  const { cca3 } = useParams();

  const {
    isError, isLoading, data: country, error,
  } = useQuery<Country>(
    ['country', cca3],
    () => getOneCountry(cca3 as string),
    { staleTime: 3000 },
  );

  useEffect(() => {
    getOneCountry(cca3 as string);
  });

  if (isLoading) {
    console.log('Loading...');
    return <CircleLoader
    cssOverride={override} 
    aria-label='Loading Spinner' 
    data-testid='loader' 
    />;
  }

  if (isError) {
    console.log('Error :', error);
    return <div>Error...</div>;
  }

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <Layout>
      <BackButton />
      <section>
        <img src={country.flags.png} alt={country.name.common} />
        <h1>{country.name.common}</h1>
        <p>
          Population:
          {country?.population ? formatNumber(country?.population) : ''}
        </p>
        <p>
          Region:
          {country.region}
        </p>
        <p>
          Sub Region:
          {country.subregion}
        </p>
        <p>
          Capital :
          {country.capital}
        </p>
        <p>
          Top Level Domain :
          {country.tld}
        </p>
        <p>
          Currencies: 
          {Object.keys(country.currencies)
          .map((currencyCode, index, array) => (
            <span key={currencyCode}>
              {country.currencies[currencyCode].name}
              {index !== array.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
        <p>
          Languages : {Object.values(country.languages).join(', ')}

        </p>
        <div>
          <h3>Border Countries :</h3>
          {country?.borders?.map((border, index) => (
            <button
              type="button"
              key={index}
            >
              <Link
                to={`/country/${border}`}
                key={index}
              >
                {cca3ToNameMap[border]}
              </Link>
            </button>
          ))}
        </div>

      </section>
    </Layout>

  );
}

export default Detail;

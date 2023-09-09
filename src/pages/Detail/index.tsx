/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import lookup from 'country-code-lookup';
import { Country } from '../../@types/countries';
import { getOneCountry } from '../../services/getOneCounty';
import './styles.scss';
import Layout from '../../components/Layout';
import BackButton from '../../components/BackButton';
import formatNumber from '../../utils/formatPopNumber';

function Detail() {
  const { countryName } = useParams();

  const {
    isError, isLoading, data: country, error,
  } = useQuery<Country>(
    ['country', countryName],
    () => getOneCountry(countryName as string),
    { staleTime: 3000 },
  );

  useEffect(() => {
    getOneCountry(countryName as string);
  });

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
        <div>
          <h3>Border Countries :</h3>
          {country?.borders?.map((border, index) => (
            <button
              type="button"
              key={index}
            >
              <Link
                to={`/country/${lookup.byIso(border)?.country}`}
                key={index}
              >
                {lookup.byIso(border)?.country}
              </Link>
            </button>
          ))}
        </div>

      </section>

    </Layout>

  );
}

export default Detail;

import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Country } from '../../@types/countries';
import { cca3ToNameMap } from '../../@types/cca3ToNameMap';
import { getOneCountry } from '../../services/getOneCountry';
import Layout from '../../components/Layout';
import BackButton from '../../components/BackButton';
import Loader from '../../components/Loader';
import formatNumber from '../../utils/formatPopNumber';

import './styles.scss';



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
    return <Loader />;
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
      <section 
        className='container__details'
        >
        <BackButton />
        {/* --- IMAGE --- */}
        <div className='container-desktop'>
          <div 
            className='container__img'
            >
            <img 
              src={country.flags.svg} 
              alt={country.name.common} 
            />
          </div>
          <div className='container-desktop__all-content'>
            {/* --- TOP CONTENT --- */}
            <div className='container-desktop__top-bottom'>
              <div
                className='container__top-content'
              >
                <h1
                  className='content__title'
                >
                  {' '}
                  {country.name.common}
                </h1>
                <p 
                  className='content__element--title'
                >
                  Native Name:
                  {' '}
                  {Object.entries(country.name.nativeName)
                    .map(([key, translation], index, array) => (
                    <span
                      className='element--information' 
                      key={key}
                    >
                      {translation.common}
                      {index !== array.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                <p 
                  className='content__element--title'
                >
                  Population:
                  <span className='element--information' >
                    {' '}
                    {country?.population ? formatNumber(country?.population) : ''}
                  </span>
                </p>
                <p 
                  className='content__element--title'
                >
                  Region:
                  <span className='element--information'
                  >
                    {' '}
                    {country.region}
                  </span>
                </p>
                <p 
                  className='content__element--title'
                >
                  Sub Region:
                  <span 
                  className='element--information'
                  >
                    {' '}
                    {country.subregion}
                  </span>
                </p>
                <p 
                className='content__element--title'
                >
                  Capital:
                  <span 
                    className='element--information'
                  >
                    {' '}
                    {country.capital}
                  </span>
                </p>
              </div>
              {/* --- BOTTOM CONTENT --- */}
              <div 
              className='container__bottom-content'
              >
                <p 
                className='content__element--title'
                >
                  Top Level Domain:
                  <span 
                    className='element--information'
                  >
                    {' '}
                    {country.tld}
                  </span>
                </p>
                <p 
                className='content__element--title'
                >
                  Currencies:
                  {' '} 
                  {Object.keys(country.currencies)
                  .map((currencyCode, index, array) => (
                    <span
                      className='element--information'  
                      key={currencyCode}
                    >
                      {country.currencies[currencyCode].name}
                      {index !== array.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                <p 
                className='content__element--title'
                >
                  Languages: 
                  <span
                    className='element--information' 
                  >
                    {' '}
                    {Object.values(country.languages).join(', ')}
                  </span>
                </p>
              </div>
            </div>
            {/* --- BORDER COUNTRIES CONTENT --- */}
            <div
              className='container__border-content'  
            >
              <h3 
              className='border-content__subtitle'
              >
                Border Countries:
              </h3>
              {country?.borders?.map((border, index) => (
                <button
                  className='border-content__country'
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
          </div>
        </div>      
      </section>
    </Layout>

  );
}

export default Detail;

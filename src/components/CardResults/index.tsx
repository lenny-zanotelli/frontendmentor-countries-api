/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import Card from './Card';
import './styles.scss';
import { fecthCountries } from '../../utils/countries';

function CardResults() {
  console.log('Render');

  const {
    isError, isSuccess, isLoading, data, error,
  } = useQuery(
    ['countries'],
    fecthCountries,
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
  return (
    <section className="card-container">
      {data
        && data.map((country) => (
          <Card
            key={country.name.official}
            country={country}
          />
        ))}
    </section>

  );
}

export default CardResults;

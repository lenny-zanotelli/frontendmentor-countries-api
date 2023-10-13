/* eslint-disable no-console */
import { CSSProperties, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import './styles.scss';
import { Country } from '../../@types/countries';
import { getAllCountries } from '../../services/getAllCountries';
import Layout from '../../components/Layout';
import SearchBar from '../../components/SearchBar';
import FilterBar from '../../components/FilterBar';
import CardResults from '../../components/CardResults';
import { CircleLoader } from 'react-spinners';

const override: CSSProperties = {
  display: "block",
  position: 'fixed',
  zIndex: '1',
  top: '50%',
  left: '50%',
};

function Home() {
  const [textToSearch, setTextToSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const {
    isError, isLoading, data: allCountries, error,
  } = useQuery<Country[]>(
    ['countries'],
    getAllCountries,
    { staleTime: 3000 },
  );

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

  const handleSubmitSearch = (searchText: string) => {
    setTextToSearch(searchText);
  };

  const handleSelectRegion = (region: string) => {
    setSelectedRegion(region);
  };

  return (
    <div>
      <Layout>
        <div className="container-searchFilter">
          <SearchBar onSubmitSearch={handleSubmitSearch} />
          <FilterBar countries={allCountries} onSelectRegion={handleSelectRegion} />
        </div>
        <CardResults
          countries={allCountries}
          searchText={textToSearch}
          selectedRegion={selectedRegion}
        />
      </Layout>
    </div>
  );
}

export default Home;

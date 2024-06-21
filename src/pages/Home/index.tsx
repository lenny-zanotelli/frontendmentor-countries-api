import { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Country } from '../../@types/countries';
import getAllCountries from '../../hooks/getAllCountries';
import Layout from '../../components/Layout';
import SearchBar from '../../components/SearchBar';
import Select from '../../components/Filter';
import CardResults from '../../components/CardResults';
import Loader from '../../components/Loader';
import { Flex } from '@radix-ui/themes';

function Home() {
  const [textToSearch, setTextToSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const {
    isError,
    isLoading,
    data: allCountries,
    error
  } = useQuery<Country[]>(['countries'], getAllCountries, {
    staleTime: 5 * 60 * 1000
  });

  if (isLoading) {
    console.log('Loading...');
    return <Loader />;
  }

  if (isError) {
    console.log('Error :', error);
    return <div>Error...</div>;
  }

  const handleSubmitSearch = useCallback((searchText: string) => {
    setTextToSearch(searchText);
  } ,[]);

  const handleSelectRegion = useCallback((region: string) => {
    setSelectedRegion(region)
  }, []);

  return (
    <Layout>
      <Flex
        justify="between"
        align={{ initial: 'start', sm: 'center' }}
        gap={{ initial: '5', sm: '9' }}
        my="9"
        mx="4"
        width="max-content"
        direction={{ initial: 'column', sm: 'row' }}
      >
        <SearchBar onSubmitSearch={handleSubmitSearch} />
        <Select countries={allCountries} onSelectRegion={handleSelectRegion} />
      </Flex>
      <CardResults
        countries={allCountries}
        searchText={textToSearch}
        selectedRegion={selectedRegion}
      />
    </Layout>
  );
}

export default Home;

import { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Country } from '../../@types/countries';
import getAllCountries from '../../hooks/getAllCountries';
import Layout from '../../components/Layout/Layout';
import SearchBar from '../../components/SearchBar/SearcBar';
import Select from '../../components/Filter/Filter';
import CardResults from '../../components/CardResults/CardResults';
import Loader from '../../components/Loader/Loader';
import { Button, Flex, Text } from '@radix-ui/themes';
import Pagination from '../../components/Pagination/Pagination';

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

  const handleSubmitSearch = useCallback((searchText: string) => {
    setTextToSearch(searchText);
  }, []);

  const handleSelectRegion = useCallback((region: string) => {
    setSelectedRegion(region);
  }, []);

  if (isLoading) {
    console.log('Loading...');
    return <Loader />;
  }

  if (isError) {
    console.log('Error :', error);
    return <div>Error...</div>;
  }

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
      <Pagination currentPage={0} totalPages={0} goToPage={function (pageNumber: number): void {
        throw new Error('Function not implemented.');
      } } />
    </Layout>
  );
}

export default Home;

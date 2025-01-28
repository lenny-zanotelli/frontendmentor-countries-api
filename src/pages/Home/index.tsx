import { useCallback, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import SearchBar from '../../components/ui/SearchBar';
import Select from '../../components/ui/Filter';
import CardResults from '../../components/ui/CardResults';
import Loader from '../../components/ui/Loader';
import { Flex } from '@radix-ui/themes';
import Pagination from '../../components/Pagination';
import usePagination from '../../hooks/usePagination';
import { useFetchAllCountries } from '../../hooks/useFetchAllCountries';

function Home() {
  const [textToSearch, setTextToSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const { state } = useFetchAllCountries();

  const handleSubmitSearch = useCallback((searchText: string) => {
    setTextToSearch(searchText);
  }, []);

  const handleSelectRegion = useCallback((region: string) => {
    setSelectedRegion(region);
  }, []);

  const countries = state ? state.data : [];

  const filteredCountries = countries
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(textToSearch.toLowerCase())
      )
    : [];

  const regionFilteredCountries = selectedRegion
    ? filteredCountries?.filter((country) => country.region === selectedRegion)
    : filteredCountries;

  const { currentPage, startIndex, endIndex, totalPages, goToPage } =
    usePagination(regionFilteredCountries?.length);

  const paginatedCountries = regionFilteredCountries?.slice(
    startIndex,
    endIndex + 1
  );

  if (state.isLoading) {
    console.log('Loading...');
    return <Loader />;
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
        <Select countries={countries} onSelectRegion={handleSelectRegion} />
      </Flex>
      <CardResults
        countries={paginatedCountries}
        searchText={textToSearch}
        selectedRegion={selectedRegion}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />
    </Layout>
  );
}

export default Home;

import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ThemeContext } from '../../contexts/theme-context';
import './styles.scss';
import Header from '../Header';
import SearchBar from '../SearchBar';
import Layout from '../Layout';
import CardResults from '../CardResults';
import FilterBar from '../FilterBar';
import { fecthCountries } from '../../utils/getCountries';
import { Country } from '../../@types/countries';

function App() {
  const [textToSearch, setTextToSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  // Detecting the default theme
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const getDefautlTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefautlTheme);

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const themeMemo = useMemo(() => ({ theme, setTheme }), [theme]);
  const {
    isError, isLoading, data: allCountries, error,
  } = useQuery<Country[]>(
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

  const handleSubmitSearch = (searchText: string) => {
    setTextToSearch(searchText);
  };

  const handleSelectRegion = (region: string) => {
    setSelectedRegion(region);
  };

  return (
    <ThemeContext.Provider value={themeMemo}>
      <Header />
      <Layout>
        <SearchBar onSubmitSearch={handleSubmitSearch} />
        <FilterBar countries={allCountries} onSelectRegion={handleSelectRegion} />
        <CardResults
          countries={allCountries}
          searchText={textToSearch}
          selectedRegion={selectedRegion}
        />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;

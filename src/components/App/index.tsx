/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { fecthCountries, fetchCountriesByName } from '../../utils/countries';
import './styles.scss';
import Header from '../Header';
import SearchBar from '../SearchBar';
import Page from '../Page';
import CardResults from '../CardResults';
import SelectOptions from '../SelectOptions';

function App() {
  // SEARCH BAR BLOCK
  const [textToSearch, setTextToSearch] = useState('');

  const handleSubmitSearch = (searchText: string) => {
    fetchCountriesByName(searchText);
  };

  // const countries = data;
  // const filteredItems = useMemo(() => countries?.filter((item) => item.name.common.toLowerCase().includes(textToSearch.toLowerCase())), [countries, textToSearch]);

  // DARK MODE BLOCK
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(isBrowserDefaultDark() ? 'dark' : 'light');
  const themeMemo = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeMemo}>
      <div className={`theme-${theme}`}>
        <Header />
        <Page>
          <SearchBar onSubmitSearch={handleSubmitSearch} />
          <SelectOptions />
          <CardResults />
        </Page>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

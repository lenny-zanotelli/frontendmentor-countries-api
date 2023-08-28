/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import countriesData from '../../data.json';
import './styles.scss';
import Header from '../Header';
import SearchBar from '../SearchBar';
import Page from '../Page';
import CardResults from '../CardResults';

function App() {
  const [textToSearch, setTextToSearch] = useState('');

  const handleSubmitSearch = (searchText: string) => {
    setTextToSearch(searchText);
  };
  // Dark Mode
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(isBrowserDefaultDark() ? 'dark' : 'light');
  const themeMemo = useMemo(() => ({ theme, setTheme }), [theme]);

  const filteredItems = useMemo(() => countriesData.filter((item) => item.name.toLowerCase().includes(textToSearch.toLowerCase())), [textToSearch]);
  return (
    <ThemeContext.Provider value={themeMemo}>
      <div className={`theme-${theme}`}>
        <Header />
        <Page>
          <SearchBar onSubmitSearch={handleSubmitSearch} />
          <CardResults countries={filteredItems} />
        </Page>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

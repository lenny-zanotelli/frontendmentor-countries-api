import { useMemo, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import countriesData from '../../data.json';
import './styles.scss';
import Header from '../Header';
import SearchBar from '../SearchBar';
import Page from '../Page';
import CardResults from '../CardResults';
import { ICountryResponseApi } from '../../@types/countries';

function App() {
  // const [countriesData, setCountriesData] = useState<ICountryResponseApi>({
  //   items: [],
  // });
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(isBrowserDefaultDark() ? 'dark' : 'light');
  const themeMemo = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={themeMemo}>
      <div className={`theme-${theme}`}>
        <Header />
        <Page>
          <SearchBar />
          <CardResults countries={countriesData} />
        </Page>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

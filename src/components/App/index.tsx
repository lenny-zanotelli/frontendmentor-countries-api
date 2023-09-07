/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../page/Home';
import { ThemeContext } from '../../contexts/theme-context';
import './styles.scss';
import Detail from '../../page/Detail';
import Header from '../Header';

function App() {
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

  return (

    <ThemeContext.Provider value={themeMemo}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/country/:countryName"
          element={<Detail />}
        />
      </Routes>
    </ThemeContext.Provider>

  );
}

export default App;

import { useMemo, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import './styles.scss';
import Header from '../Header';

function App() {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(isBrowserDefaultDark() ? 'dark' : 'light');
  const themeMemo = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={themeMemo}>
      <div className={`theme-${theme}`}>
        <Header />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

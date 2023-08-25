/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from 'react';

import './styles.scss';
import { HiMoon, HiOutlineMoon } from 'react-icons/hi';
import { ThemeContext } from '../../contexts/theme-context';

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  };

  return (
    <header className="header">
      <h1 className="header__title">Where in the world ?</h1>

      <div className="header__toggle-btn-section">
        <button
          type="button"
          className="header__theme"
          onClick={handleThemeChange}
        >
          {theme === 'light' ? <HiOutlineMoon /> : <HiMoon />}
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </header>
  );
}

export default Header;

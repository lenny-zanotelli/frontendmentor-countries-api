/* eslint-disable import/no-extraneous-dependencies */
import './styles.scss';
import { HiOutlineMoon } from 'react-icons/hi';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Where in the world ?</h1>
      <p className="header__theme">
        <HiOutlineMoon />
        Dark Mode
      </p>
    </header>
  );
}

export default Header;

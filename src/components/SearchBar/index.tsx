import { HiOutlineSearch } from 'react-icons/hi';
import './styles.scss';

function SearchBar() {
  return (
    <section className="search-bar">
      <HiOutlineSearch />
      <input
        className="search-input"
        type="search"
        placeholder="Search for a country..."
      />
    </section>

  );
}

export default SearchBar;

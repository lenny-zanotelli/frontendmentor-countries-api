/* eslint-disable import/no-extraneous-dependencies */
import { HiOutlineSearch } from 'react-icons/hi';
import './styles.scss';
import {
  ChangeEvent, useState,
} from 'react';

interface SearchBarProps {
  onSubmitSearch: (searchText: string) => void;
}

function SearchBar({ onSubmitSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    setQuery(searchText);
    onSubmitSearch(searchText);
  };

  return (
    <div className="search-bar">
      <span className="search-svg"><HiOutlineSearch /></span>
      <input
        className="search-input"
        value={query}
        onChange={handleChange}
        name="searchbar"
        type="text"
        placeholder="Search for a country..."
      />
    </div>

  );
}

export default SearchBar;

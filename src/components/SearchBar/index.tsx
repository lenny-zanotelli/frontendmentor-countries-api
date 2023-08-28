/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HiOutlineSearch } from 'react-icons/hi';
import './styles.scss';
import {
  ChangeEvent, FormEvent, useMemo, useState,
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
    <section className="search-bar">
      <span className="search-svg"><HiOutlineSearch /></span>
      <input
        className="search-input"
        value={query}
        onChange={handleChange}
        type="search"
        placeholder="Search for a country..."
      />
    </section>

  );
}

export default SearchBar;

/* eslint-disable import/no-extraneous-dependencies */
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import {
  ChangeEvent, useState,
} from 'react';
import { TextFieldInput, TextFieldRoot, TextFieldSlot } from '@radix-ui/themes';

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

    <TextFieldRoot size='3' color='gray'>
      <TextFieldSlot color='gray'>
        <MagnifyingGlassIcon height='18' width='18' />
      </TextFieldSlot>
      <TextFieldInput
        onChange={handleChange} 
        placeholder='Search for a country...' 
        size='3' 
        color='gray' 
      />
    </TextFieldRoot>
  );
}

export default SearchBar;

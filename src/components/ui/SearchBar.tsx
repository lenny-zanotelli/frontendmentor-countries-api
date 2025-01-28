import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';
import { ChangeEvent, useCallback, useState } from 'react';
import React from 'react';

interface SearchBarProps {
  onSubmitSearch: (searchText: string) => void;
}

function SearchBar({ onSubmitSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const searchText = event.target.value;
      setQuery(searchText);
      onSubmitSearch(searchText);
    },
    [onSubmitSearch]
  );

  return (
    <TextField.Root
      variant="classic"
      size="3"
      color="gray"
      value={query}
      onChange={handleChange}
      placeholder="Search a country..."
    >
      <TextField.Slot>
        <MagnifyingGlassIcon height={18} width={18} />
      </TextField.Slot>
    </TextField.Root>
  );
}

export default React.memo(SearchBar);

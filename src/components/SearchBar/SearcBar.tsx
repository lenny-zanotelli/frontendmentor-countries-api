import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { ChangeEvent, useCallback, useState } from 'react';
import { TextFieldInput, TextFieldRoot, TextFieldSlot } from '@radix-ui/themes';
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
    <TextFieldRoot variant="classic" size="3" color="gray">
      <TextFieldSlot color="gray">
        <MagnifyingGlassIcon height="18" width="18" />
      </TextFieldSlot>
      <TextFieldInput
        value={query}
        onChange={handleChange}
        placeholder="Search for a country..."
        size="3"
        color="gray"
        variant="classic"
      />
    </TextFieldRoot>
  );
}

export default React.memo(SearchBar);

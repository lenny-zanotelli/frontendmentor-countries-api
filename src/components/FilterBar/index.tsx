/* eslint-disable import/no-extraneous-dependencies */
import Select from 'react-select';
import './styles.scss';
import { useState } from 'react';

const options = [
  { value: 'all', label: 'Filter by Region' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

function FilterBar({ onSelectRegion }: { onSelectRegion: (region: string) => void }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (selected: any) => {
    setSelectedOption(selected);
    onSelectRegion(selected.value);
  };
  return (
    <section className="select-options">
      <Select
        className="select-content"
        options={options}
        value={selectedOption}
        onChange={handleChange}
      />
    </section>
  );
}

export default FilterBar;

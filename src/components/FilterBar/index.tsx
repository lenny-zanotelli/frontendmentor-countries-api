import './styles.scss';
import { useState } from 'react';
import { Country } from '../../@types/countries';

interface FilterBarProps {
  countries: Country[];
  onSelectRegion: (region: string) => void;
}

function FilterBar({ countries, onSelectRegion } : FilterBarProps) {
  const [selectedOption, setSelectedOption] = useState('');

  // Make a set of unique regions...
  const regionSet = new Set(countries.map((country) => country.region));
  // ...and a sorted Array from the set
  const regionsArray = Array.from(regionSet).sort();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = event.target.value;
    setSelectedOption(selectedRegion);
    onSelectRegion(selectedRegion);
  };
  return (
    <section className="select-options">
      <select
        className="select-content"
        value={selectedOption}
        onChange={handleChange}
      >
        {regionsArray
          .map((region) => (
            <option
              key={region}
              value={region}
            >
              {region}
            </option>
          ))}
      </select>
    </section>
  );
}

export default FilterBar;

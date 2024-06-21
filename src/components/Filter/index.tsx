import { useCallback, useMemo, useState } from 'react';
import { Country } from '../../@types/countries';
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger
} from '@radix-ui/themes';

interface SelectBarProps {
  countries: Country[];
  onSelectRegion: (region: string) => void;
}

function Select({ countries, onSelectRegion }: SelectBarProps) {
  const [selectedOption, setSelectedOption] = useState('');

  
  const handleChange = useCallback((value: string) => {
    const selectedRegion = value;
    setSelectedOption(selectedRegion);
    onSelectRegion(selectedRegion);
  }, [onSelectRegion]);
  
  const regionsArray = useMemo(() => {
    const regionSet = new Set(countries.map((country) => country.region));
    return Array.from(regionSet).sort();
  }, [countries])
  return (
    <SelectRoot onValueChange={handleChange} value={selectedOption} size="3">
      <SelectTrigger
        variant="classic"
        placeholder="Filter by Region"
        aria-label="Filter by Region"
      />
      <SelectContent>
        <SelectGroup>
          <SelectLabel aria-labelledby="Aria Filter by Region">
            Filter by Region
          </SelectLabel>
          {regionsArray.map((region) => (
            <SelectItem key={region} value={region}>
              {region}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectRoot>
  );
}

export default Select;

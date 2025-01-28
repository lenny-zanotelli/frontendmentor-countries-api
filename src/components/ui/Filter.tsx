import { useCallback, useMemo, useState } from 'react';
import { Country } from '../../@types/countries';
import { Select } from '@radix-ui/themes';

interface SelectBarProps {
  countries: Country[] | null;
  onSelectRegion: (region: string) => void;
}

function Filter({ countries, onSelectRegion }: SelectBarProps) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = useCallback(
    (value: string) => {
      const selectedRegion = value;
      setSelectedOption(selectedRegion);
      onSelectRegion(selectedRegion);
    },
    [onSelectRegion]
  );

  const regionsArray = useMemo(() => {
    const regionSet = new Set(countries?.map((country) => country.region));
    return Array.from(regionSet).sort();
  }, [countries]);
  return (
    <Select.Root onValueChange={handleChange} value={selectedOption} size="3">
      <Select.Trigger
        variant="classic"
        placeholder="Filter by Region"
        aria-label="Filter by Region"
      />
      <Select.Content>
        <Select.Group>
          <Select.Label aria-labelledby="Aria Filter by Region">
            Filter by Region
          </Select.Label>
          {regionsArray.map((region) => (
            <Select.Item key={region} value={region}>
              {region}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}

export default Filter;

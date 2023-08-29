/* eslint-disable import/no-extraneous-dependencies */
import Select from 'react-select';
import './styles.scss';

const options = [
  { value: 'all', label: 'All' },
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

function SelectOptions() {
  return (
    <section className="select-options">
      <Select options={options} />
    </section>
  );
}

export default SelectOptions;

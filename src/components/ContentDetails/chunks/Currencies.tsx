import { Text } from '@radix-ui/themes';
import { ContentDetailsProps } from '../../../@types/ContentDetailsProps';

function Currencies({ country }: ContentDetailsProps) {
  return (
    <Text as="p" weight="bold">
      Currencies:
      {Object.keys(country.currencies).map((currencyCode, index, array) => (
        <Text as="span" weight="regular" key={currencyCode}>
          &nbsp;
          {country.currencies[currencyCode].name}
          {index !== array.length - 1 ? ', ' : ''}
        </Text>
      ))}
    </Text>
  );
}

export default Currencies;

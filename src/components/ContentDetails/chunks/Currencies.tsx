import { Text } from '@radix-ui/themes';
import { ContentDetailsProps } from '../../../@types/ContentDetailsProps';

function Currencies({ country }: ContentDetailsProps) {
  return (
    <Text as="p" weight="bold">
      Currencies:
      {country.currencies ? (
        Object.keys(country.currencies).map((currencyCode, index, array) => (
          <Text as="span" weight="regular" key={currencyCode}>
            &nbsp;
            {country.currencies[currencyCode].name}
            {index !== array.length - 1 ? ', ' : ''}
          </Text>
        ))
      ) : (
        <Text as="span" weight="regular">
          &nbsp; N/A
        </Text>
      )}
    </Text>
  );
}

export default Currencies;

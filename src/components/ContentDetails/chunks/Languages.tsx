import { Text } from '@radix-ui/themes';
import { ContentDetailsProps } from '../../../@types/ContentDetailsProps';

function Languages({ country }: ContentDetailsProps) {
  return (
    <Text as="p" weight="bold">
      Languages:
      <Text as="span" weight="regular">
        &nbsp;
        {Object.values(country.languages).join(', ')}
      </Text>
    </Text>
  );
}

export default Languages;

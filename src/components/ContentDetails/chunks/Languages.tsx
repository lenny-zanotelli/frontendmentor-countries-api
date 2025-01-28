import { Text } from '@radix-ui/themes';
import { ContentDetailProps } from '../../../@types/ContentDetailProps';

function Languages({ country }: ContentDetailProps) {
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

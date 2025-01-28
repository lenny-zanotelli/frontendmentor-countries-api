import { Text } from '@radix-ui/themes';
import { Country } from '../../../@types/countries';

interface Props {
  country: Country;
}

function TopLevelDomain({ country }: Props) {
  return (
    <Text as="p" weight="bold">
      Top Level Domain:
      <Text as="span" weight="regular">
        &nbsp;{country.tld}
      </Text>
    </Text>
  );
}

export default TopLevelDomain;

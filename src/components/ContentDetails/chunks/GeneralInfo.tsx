import { Flex, Text } from '@radix-ui/themes';
import { Country } from '../../../@types/countries';

interface Props {
  country: Country;
}
function GeneralInfo({ country }: Props) {
  return (
    <Flex direction="column" width="100%" justify="center" gap="3" mb="9">
      <Text as="p" weight="bold">
        Native Name:
        {Object.entries(country.name.nativeName).map(
          ([key, translation], index, array) => (
            <Text as="span" weight="regular" key={key}>
              &nbsp;
              {translation.common}
              {index !== array.length - 1 ? ', ' : ''}
            </Text>
          )
        )}
      </Text>

      <Text as="p" weight="bold">
        Region:
        <Text as="span" weight="regular">
          &nbsp;{country.region}
        </Text>
      </Text>

      <Text as="p" weight="bold">
        Sub Region:
        <Text as="span" weight="regular">
          &nbsp;{country.subregion}
        </Text>
      </Text>

      <Text as="p" weight="bold">
        Capital:
        <Text as="span" weight="regular">
          &nbsp;{country.capital}
        </Text>
      </Text>
    </Flex>
  );
}

export default GeneralInfo;

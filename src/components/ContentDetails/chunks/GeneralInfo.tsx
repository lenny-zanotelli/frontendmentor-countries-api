import { Flex, Text } from '@radix-ui/themes';
import { Country } from '../../../@types/countries';

interface Props {
  country: Country;
}

function GeneralInfo({ country }: Props) {
  const nativeName = country?.name?.nativeName;
  const region = country?.region;
  const subregion = country?.subregion;
  const capital = country?.capital;

  return (
    <Flex direction="column" width="100%" justify="center" gap="3" mb="9">
      <Text as="p" weight="bold">
        Native Name:
        {nativeName
          ? Object.entries(nativeName).map(
              ([key, translation], index, array) => (
                <Text as="span" weight="regular" key={key}>
                  &nbsp;
                  {translation.common}
                  {index !== array.length - 1 ? ', ' : ''}
                </Text>
              )
            )
          : 'N/A'}
      </Text>

      <Text as="p" weight="bold">
        Region:
        <Text as="span" weight="regular">
          &nbsp;{region || 'N/A'}
        </Text>
      </Text>

      <Text as="p" weight="bold">
        Sub Region:
        <Text as="span" weight="regular">
          &nbsp;{subregion || 'N/A'}
        </Text>
      </Text>

      <Text as="p" weight="bold">
        Capital:
        <Text as="span" weight="regular">
          &nbsp;{capital || 'N/A'}
        </Text>
      </Text>
    </Flex>
  );
}

export default GeneralInfo;

import { Button, Flex, Text } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import { ContentDetailProps } from '../../@types/ContentDetailsProps';
import { cca3ToNameMap } from '../../utils/cca3ToNameMap';

function BorderButton({ country }: ContentDetailProps) {
  return (
    <Flex
      gap="2"
      mt="3"
      wrap={{ initial: 'wrap', xl: 'nowrap' }}
      mb={{ initial: '9', md: '2' }}
      style={{
        maxWidth: 280,
      }}
    >
      {country.borders ? (
        country.borders.map((border: string, index: number) => (
          <Button size="1" variant="surface" color="gray" key={index}>
            <Link to={`/country/${border}`}>{cca3ToNameMap[border]}</Link>
          </Button>
        ))
      ) : (
        <Text as="span">&nbsp;No borders</Text>
      )}
    </Flex>
  );
}

export default BorderButton;

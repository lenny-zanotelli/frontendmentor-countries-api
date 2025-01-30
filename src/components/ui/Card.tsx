import { Link } from 'react-router-dom';
import {
  AspectRatio,
  Card,
  Flex,
  Heading,
  Inset,
  Strong,
  Text,
} from '@radix-ui/themes';
import { Country } from '../../@types/countries';
import formatNumber from '../../utils/formatNumber';
import FlagImage from './FlagImage';

interface CountryProps {
  country: Country;
}

function CardComponent({ country }: CountryProps) {
  const populationFormat = formatNumber(country.population);
  return (
    <Card
      asChild
      size="3"
      variant="classic"
      style={{ width: 300, height: 350 }}
    >
      <Link to={`/country/${country.cca3}`}>
        <Flex gap="5" direction="column">
          <Inset pb="current">
            <AspectRatio ratio={16 / 9}>
              <FlagImage src={country.flags.png} alt={country.flags.alt} />
            </AspectRatio>
          </Inset>
          <Flex direction="column" width="100%" justify="between">
            <Heading as="h2" mb="4" weight="bold">
              {country.name.common}
            </Heading>
            <Text as="p">
              <Strong>Population: </Strong> {populationFormat}
            </Text>
            <Text as="p">
              <Strong>Region: </Strong> {country.region}
            </Text>
            <Text as="p">
              <Strong>Capital: </Strong>
              {country.capital
                ? country.capital.length >= 2
                  ? country.capital.join(', ')
                  : country.capital[0]
                : 'N/A'}
            </Text>
          </Flex>
        </Flex>
      </Link>
    </Card>
  );
}

export default CardComponent;

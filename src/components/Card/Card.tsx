import { Link } from 'react-router-dom';
import { Country } from '../../@types/countries';
import {
  AspectRatio,
  Card,
  Flex,
  Heading,
  Inset,
  Strong,
  Text
} from '@radix-ui/themes';
import formatNumber from '../../utils/formatPopNumber';

interface CountryProps {
  country: Country;
}

function CardComponent({ country }: CountryProps) {
  const populationFormat = formatNumber(country.population);
  return (
    <Card asChild size="3" variant="classic" style={{ maxWidth: 300 }}>
      <Link to={`/country/${country.cca3}`}>
        <Flex gap="5" direction="column">
          <Inset pb="current">
            <AspectRatio ratio={2}>
              <img
                loading='lazy'
                src={country.flags.svg}
                alt={country.name.common}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }}
              />
            </AspectRatio>
          </Inset>
          <Flex direction="column" width="100%">
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
              {/* TODO: Can i do a better readable code than a nested ternary for join multiple capitals here ? */}
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

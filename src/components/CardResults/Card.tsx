/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import { Country } from '../../@types/countries';
import { Card, Flex, Heading, Inset, Strong, Text } from '@radix-ui/themes';
import formatNumber from '../../utils/formatPopNumber';
import './styles.scss';

interface CountryProps {
  country: Country,
}

function CardComponent({ country }: CountryProps) {
  const populationFormat = formatNumber(country.population);
  return (

      <Card asChild size='2' style={{ maxWidth: 240}} variant='surface' >
        <Link to={`/country/${country.cca3}`}>
          <Flex gap='3' justify='between' direction='column'>
            <Inset pb='current'>

              <img 
              src={country.flags.png} 
              alt={country.name.common}
              style={{
                display: 'block',
                objectFit: 'cover',
                width: '100%',
                height: 140,
              }}
              />
            </Inset>
            <Heading as='h2' weight='bold'>{country.name.common}</Heading>
            <Text as='p'>
              <Strong>Population:</Strong> {populationFormat}
            </Text>
            <Text as='p'>
              Region : {country.region}
            </Text>
            <Text as='p'>
              {/* TODO: Can i do a better readable code than a nested ternary for join multiple capitals here ? */}
              Capital :
              {country.capital ? (country.capital.length >= 2 ? (
                country.capital.join(', ')
              ) : (
                country.capital[0]
              )
              ): (
                'N/A'
              )}
            </Text>
          </Flex>
        </Link>  

      </Card>

  );
}

export default CardComponent;

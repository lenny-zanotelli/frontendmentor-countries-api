import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getOneCountry } from "../../../../services/getOneCountry";
import { useEffect } from "react";
import { Country } from "../../../../@types/countries";
import { cca3ToNameMap } from "../../../../@types/cca3ToNameMap";
import Loader from "../../../../components/Loader";
import { AspectRatio, Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";



function ContentDetail() {
  const { cca3 } = useParams();

  const {
    isError, isLoading, data: country, error,
  } = useQuery<Country>(
    ['country', cca3],
    () => getOneCountry(cca3 as string),
    { staleTime: 3000 },
  );

  useEffect(() => {
    getOneCountry(cca3 as string);
  });

  if (isLoading) {
    console.log('Loading...');
    return <Loader />;
  }

  if (isError) {
    console.log('Error :', error);
    return <div>Error...</div>;
  }

  if (!country) {
    return <div>Country not found</div>;
  }
  return(
    <Grid 
      columns={{initial: '1', md: '2'}}
      gap='6'
      justify='center' 
      style={{ 
        maxWidth: 1500
      }}
    >
      <Box width='auto' height='auto'>
        <AspectRatio ratio={16 / 9}>
          <img
            src={country.flags.svg}
            alt={country.name.common}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </AspectRatio>
      </Box>

      <Flex direction='column'
        >
        <Box width='100%' height='max-content' mb='6'>
          <Heading as='h1' size='8'>
            {country.name.common}
          </Heading>
        </Box>

        <Flex direction={{initial: 'column', sm: 'row'}}>

            <Flex 
              direction='column'
              width='100%' 
              justify='center'
              gap='3'
              mb='9'
            >

              <Text as='p' weight='bold'>
                Native Name:
                {Object.entries(country.name.nativeName)
                  .map(([key, translation], index, array) => (
                  <Text 
                    as='span'
                    weight='regular'
                    key={key}
                  >
                    &nbsp;
                    {translation.common}
                    {index !== array.length -1 ? ', ' : ''}
                  </Text>
                ))}
              </Text>

              <Text as='p' weight='bold'>
                Region:
                <Text as='span' weight='regular'>&nbsp;{country.region}</Text>
              </Text>

              <Text as='p' weight='bold'>
                Sub Region:
                <Text as='span' weight='regular'>&nbsp;{country.subregion}</Text>
              </Text>

              <Text as='p' weight='bold'>
              Capital:
                <Text as='span' weight='regular'>&nbsp;{country.capital}</Text>
              </Text>

            </Flex>

          
          <Flex 
            direction='column' 
            align='start'
            width='100%'
            gap='3'
          >
            <Text as='p' weight='bold'>
              Top Level Domain:
              <Text as='span' weight='regular'>&nbsp;{country.tld}</Text>
            </Text>

            <Text as='p' weight='bold'>
              Currencies:
              {Object.keys(country.currencies)
                .map((currencyCode, index, array) => (
                  <Text 
                    as='span'
                    weight='regular'
                    key={currencyCode}
                  >
                    &nbsp;
                    {country.currencies[currencyCode].name}
                    {index !== array.length - 1 ? ', ' : ''}
                  </Text>
                ))}
            </Text>

            <Text as='p' weight='bold'>
              Languages:
              <Text as='span' weight='regular'>
                &nbsp;
                {Object.values(country.languages).join(', ')}
              </Text>
            </Text>
          </Flex>
        </Flex>

          <Flex 
            direction={{initial: 'column', md: 'row'}}
            justify='start'
            align={{initial: 'start', md: 'center'}}
            mt={{initial: '9', sm:'1', md: '2'}}
            gap='2'
          >

            <Heading as='h3' size='4'>Border Countries:</Heading>

            <Flex
              gap='2'
              mt='3'
              mb={{initial: '9',md: '2'}}
              style={{
                maxWidth: 280
              }}
            >
              {country.borders ? (
              
                country.borders.map((border, index) => (
                  <Button
                    size='1'
                    variant='surface'
                    color='gray'
                    key={index}
                  >
                    <Link to={`/country/${border}`}>
                      {cca3ToNameMap[border]}
                    </Link>
                  </Button>
              ))
              ) : (
                <Text as='span'>&nbsp;No borders</Text>
              )}
            </Flex>
                  
            
          </Flex>
      </Flex>
    </Grid>

  );
}

export default ContentDetail;

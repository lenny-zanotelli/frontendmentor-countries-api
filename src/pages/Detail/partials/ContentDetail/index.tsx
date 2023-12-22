import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getOneCountry } from "../../../../services/getOneCountry";
import { useEffect } from "react";
import { Country } from "../../../../@types/countries";
import { cca3ToNameMap } from "../../../../@types/cca3ToNameMap";
import Loader from "../../../../components/Loader";
import { Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";



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
      columns='2' 
      gap='9'
      justify='center' 
      style={{ 
        width: 1500
      }}
    >
      <Box width='auto' height='auto'>
          <img
            src={country.flags.svg}
            alt={country.name.common}
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%',
            }}
          />
      </Box>

      <Flex direction='column' mt='9'>
        <Box width='100%' height='max-content' mb='9'>
          <Heading as='h1' size='8'>
            {country.name.common}
          </Heading>
        </Box>

        <Flex direction='row'>

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
            justify='start' 
            align='center'
            wrap='wrap'
            gap='2'
          >

            <Heading as='h3' size='3'>Border Countries:</Heading>
            {country?.borders?.map((border, index) => (
   
              <Button
                size='2'
                variant='surface'
                color='gray'
                highContrast
                key={index}
              >
                <Link to={`/country/${border}`}>
                  {cca3ToNameMap[border]}
                </Link>
              </Button>

            ))}
            
          </Flex>
      </Flex>

    </Grid>

  );
}

export default ContentDetail;

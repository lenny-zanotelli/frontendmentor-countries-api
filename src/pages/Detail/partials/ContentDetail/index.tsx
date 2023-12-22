import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getOneCountry } from "../../../../services/getOneCountry";
import { useEffect } from "react";
import { Country } from "../../../../@types/countries";
import Loader from "../../../../components/Loader";
import { Box, Button, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import { cca3ToNameMap } from "../../../../@types/cca3ToNameMap";



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
    <Flex>
      <img
        src={country.flags.svg}
        alt={country.name.common}
      />

      <Heading as='h1'>
        {country.name.common}
      </Heading>

      <Text as='p'>
        Native Name:
        {Object.entries(country.name.nativeName)
          .map(([key, translation], index, array) => (
          <Text as='span' key={key}>
            {translation.common}
            {index !== array.length -1 ? ', ' : ''}
          </Text>
        ))}
      </Text>

      <Text as='p'>
        Region:
        <Text as='span'>{country.region}</Text>
      </Text>

      <Text as='p'>
        Sub Region:
        <Text as='span'>{country.subregion}</Text>
      </Text>

      <Text as='p'>
      Capital:
        <Text as='span'>{country.capital}</Text>
      </Text>

      <Text as='p'>
        Top Level Domain:
        <Text as='span'>{country.tld}</Text>
      </Text>

      <Text as='p'>
        Currencies:
        {Object.keys(country.currencies)
          .map((currencyCode, index, array) => (
            <Text as='span' key={currencyCode}>
              {country.currencies[currencyCode].name}
              {index !== array.length - 1 ? ', ' : ''}
            </Text>
          ))}
      </Text>

      <Text as='p'>
        Languages:
        <Text as='span'>
          {Object.values(country.languages).join(', ')}
        </Text>
      </Text>
      <Box>
        <Heading as='h3'>Border Countries:</Heading>

        {country?.borders?.map((border, index) => (
          <Button
            key={index}
          >
            <Link to={`/country/${border}`}>
              {cca3ToNameMap[border]}
            </Link>

          </Button>
        ))}
        
      </Box>






      
    </Flex>

  );
}

export default ContentDetail;

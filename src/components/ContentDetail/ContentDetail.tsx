import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { AspectRatio, Box, Flex, Grid, Heading } from '@radix-ui/themes';
import { Country } from '../../@types/countries';
import Loader from '../Loader/Loader';
import getOneCountry from '../../hooks/getOneCountry';
import GeneralInfo from '../GeneralInfo/GeneralInfo';
import TopLevelDomain from '../TopLevelDomain/TopLevelDomain';
import Currencies from '../Currencies/Currencies';
import Languages from '../Languages/Languages';
import BorderButton from '../BorderButton/BorderButton';

function ContentDetail() {
  const { cca3 } = useParams();

  const {
    isError,
    isLoading,
    data: country,
    error
  } = useQuery<Country>(
    ['country', cca3],
    () => getOneCountry(cca3 as string),
    { staleTime: 5 * 60 * 1000 }
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
  return (
    <Grid
      columns={{ initial: '1', md: '2' }}
      gap="6"
      justify="center"
      style={{
        maxWidth: 1500
      }}
    >
      <Box width="auto" height="auto">
        <AspectRatio ratio={16 / 9}>
          <img
            src={country.flags.svg}
            alt={country.name.common}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          />
        </AspectRatio>
      </Box>

      <Flex direction="column">
        <Box width="100%" height="max-content" mb="6">
          <Heading as="h1" size="8">
            {country.name.common}
          </Heading>
        </Box>

        <Flex direction={{ initial: 'column', sm: 'row' }}>
          <GeneralInfo country={country} />

          <Flex direction="column" align="start" width="100%" gap="3">
            <TopLevelDomain country={country} />
            <Currencies country={country} />
            <Languages country={country} />
          </Flex>
        </Flex>

        <Flex
          direction={{ initial: 'column', md: 'row' }}
          justify="start"
          align={{ initial: 'start', md: 'center' }}
          mt={{ initial: '9', sm: '1', md: '2' }}
          gap="2"
        >
          <Heading as="h3" size="4">
            Border Countries:
          </Heading>

          <BorderButton country={country} />
        </Flex>
      </Flex>
    </Grid>
  );
}

export default ContentDetail;

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Box, Flex, Grid, Heading } from '@radix-ui/themes';
import Loader from '../ui/Loader';
import GeneralInfo from './chunks/GeneralInfo';
import TopLevelDomain from './chunks/TopLevelDomain';
import Currencies from './chunks/Currencies';
import Languages from './chunks/Languages';
import { useFetchCountry } from '../../hooks/useFetchCountry';
import BorderButton from '../ui/BorderButton';

function ContentDetails() {
  const { cca3 } = useParams();
  const { error, data: country, isLoading, fetchCountry } = useFetchCountry();

  useEffect(() => {
    if (cca3) {
      fetchCountry(cca3);
    }
  }, [cca3, fetchCountry]);

  if (error) {
    return <div>error: {error.message}</div>;
  }
  if (!country) return;
  return (
    <Grid
      columns={{ initial: '1', md: '2' }}
      gap="6"
      justify="center"
      style={{
        maxWidth: 1000,
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Box pb="6">
            <img
              src={country.flags.png}
              alt={country.flags.alt}
              style={{
                objectFit: 'cover',
              }}
            />
          </Box>
          <Flex direction="column">
            <Box height="max-content" mb="6">
              <Heading as="h1" size="8">
                {country.name.common}
              </Heading>
            </Box>

            <Flex direction={{ initial: 'column', sm: 'row' }} gap="6">
              <GeneralInfo country={country} />

              <Flex direction="column" align="start" gap="3">
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
        </>
      )}
    </Grid>
  );
}

export default ContentDetails;

import { Flex, Spinner } from '@radix-ui/themes';

function Loader() {
  return (
    <Flex display="flex" justify="center" align="center" height="100vh">
      <Spinner size="3" />
    </Flex>
  );
}

export default Loader;

import { Flex, Heading } from '@radix-ui/themes';
import ToggleButton from '../../ui/ToggleButton';

function Header() {
  return (
    <Flex
      justify="between"
      align="center"
      p="6"
      width="100%"
      style={{
        boxShadow: '0 1px var(--gray-a4)',
      }}
    >
      <Heading as="h1" weight="bold" size={{ initial: '4', sm: '6' }}>
        Where in the world ?
      </Heading>
      <ToggleButton />
    </Flex>
  );
}

export default Header;

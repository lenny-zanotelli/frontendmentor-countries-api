import { Flex } from '@radix-ui/themes';

interface Layoutrops {
  children: React.ReactNode;
}

function Layout({ children }: Layoutrops) {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      style={{
        margin: '0.76rem, 0.76rem',
      }}
    >
      {children}
    </Flex>
  );
}

export default Layout;

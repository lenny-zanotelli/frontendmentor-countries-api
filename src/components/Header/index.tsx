import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { Box, Flex, Heading, IconButton, AccessibleIcon } from '@radix-ui/themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };

  return (
    <Flex
    justify='between'
    align='center'
    p='6'
    width='100%'
    style={{
      boxShadow: '0 1px var(--gray-a4)'
    }}
    >
      <Heading 
        as='h1'
        weight='bold'
        size={{initial: '4', sm: '6'}}
      >
        Where in the world ?
        </Heading>

      <Box>
        <IconButton
          aria-
          color='gray'
          size='3'
          variant='ghost'
          onClick={handleThemeChange}
        >
          {theme === 'light' ?
          <>
            <SunIcon width='22' height='22' />
            <AccessibleIcon label='Icon Light Mode' />
          </>
          : <MoonIcon width='22' height='22' aria-labelledby='Icon Dark Mode' />}
        </IconButton>
      </Box>
    </Flex> 
    );
}

export default Header;

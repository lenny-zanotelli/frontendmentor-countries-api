import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { Box, Flex, Heading, IconButton } from '@radix-ui/themes';
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
    p='6'
    style={{
      boxShadow: '0.5px 12px 15px 0px rgba(43, 57, 69, 0.1)'
    }}
    >
      <Heading 
        as='h1'
        weight='bold'
      >
        Where in the world ?
        </Heading>

      <Box>
        <IconButton
          color='gray'
          size='3'
          variant='ghost'
          onClick={handleThemeChange}
        >
          {theme === 'light' ? 
          <SunIcon width='22' height='22' /> 
          : <MoonIcon width='22' height='22' />}
        </IconButton>
      </Box>
    </Flex> 
    );
}

export default Header;

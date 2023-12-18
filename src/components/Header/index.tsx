/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from 'react';
import './styles.scss';
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
      className='header'
      justify='between'
      p='6'
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

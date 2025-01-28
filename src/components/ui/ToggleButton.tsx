import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { Box, IconButton } from '@radix-ui/themes';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider';

function ToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };

  return (
    <Box>
      <IconButton
        aria-label="switch mode"
        color="gray"
        size="3"
        variant="ghost"
        onClick={handleThemeChange}
      >
        {theme === 'light' ? (
          <>
            <SunIcon width="22" height="22" />
          </>
        ) : (
          <MoonIcon width="22" height="22" />
        )}
      </IconButton>
    </Box>
  );
}

export default ToggleButton;

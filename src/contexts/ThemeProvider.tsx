import { createContext, useEffect, useMemo, useState } from 'react';

interface ThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const isBrowserDefaultDark = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefautlTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState<string>(getDefautlTheme());

  useEffect(() => {
    document.body.className = `${theme}`;
  }, [theme]);
  const themeMemo = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeMemo}>{children}</ThemeContext.Provider>
  );
}

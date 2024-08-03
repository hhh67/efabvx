import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({
  children,
}: AppProviderProps) => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </HelmetProvider>
  );
};

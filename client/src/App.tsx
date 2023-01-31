import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@theme/GlobalStyles';
import { theme } from '@theme/theme';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};


export default App;

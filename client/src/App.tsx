import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
//How you import icons.
// import { ReactComponent as Logo } from '@svg/bookmark.svg';
import { GlobalStyle } from '@theme/GlobalStyles';
import { theme } from '@theme/theme';
import Dashboard from '@src/pages/Dashboard';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  );
};


export default App;

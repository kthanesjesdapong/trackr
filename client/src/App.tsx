import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@theme/GlobalStyles';
import { theme } from '@theme/theme';
import Dashboard from './pages/Dashboard';
import History from './pages/History';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  );
};


export default App;


import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { ReactComponent as Logo } from '@svg/bookmark.svg';
import { GlobalStyle } from '@theme/GlobalStyles';
import { theme } from '@theme/theme';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Logo title={'l'} />
      <div>PENIS</div>
    </ThemeProvider>
  );
};


export default App;

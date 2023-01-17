
//Example of how to absolute import
import { example } from '@components/funny';
import GlobalStyles from '@styles/GlobalStyles';
console.log(example());

import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/DefaultTheme';

export const App: FC = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <div>PENIS</div>
    </ThemeProvider>
  );
};


export default App;

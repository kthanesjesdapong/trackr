import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/src/App';
import { RouterProvider } from 'react-router-dom';
import router from '@src/routes/Routes';
import { GlobalStyle } from '@theme/GlobalStyles';
import { theme } from '@theme/theme';
import { ThemeProvider } from 'styled-components';




const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);

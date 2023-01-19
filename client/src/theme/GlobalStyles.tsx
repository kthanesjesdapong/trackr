
import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import { fonts } from './fonts';


export const GlobalStyle = createGlobalStyle`

    //Normalizes abnormalities across browsers.
    ${normalize()}
    ${fonts}

    body {
    font-family: ${theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.8;
    min-width: 320px;
    }

    a {
    color: inherit;
    text-decoration: none;
  }


`;


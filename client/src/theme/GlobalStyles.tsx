
import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import { fonts } from './fonts';


export const GlobalStyle = createGlobalStyle`

    //Normalizes abnormalities across browsers.
    ${normalize()}
    ${fonts}

    * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    

    body {
    font-family: ${theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden; /* Hide scrollbars */
    min-width: 320px;
    width: 100%;
    height: 100vh;
    font-size: ${props => props.theme.fontSizes.xxs};
    }

    a {
    color: inherit;
    text-decoration: none;
    }


`;


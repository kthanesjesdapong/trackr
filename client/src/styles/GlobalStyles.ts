import { createGlobalStyle } from "styled-components";

//styles used by all elements within the page
const GlobalStyles = createGlobalStyle`
// No margin or padding except in places that are explicitedly stated
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif; 
  }

  #root{
    margin:0 auto;
  }
`;



export default GlobalStyles;
import styled from "styled-components";

const RootLayoutStyles = styled.div`
  //.root__layout
  display: grid;
  grid-template-columns: 256px 1fr;
  grid-template-rows: 45px 1fr 20px;
  grid-template-areas:
    'aside header'
    'aside main'
    'aside footer'
    ;
  height: 100vh;

  // Main is our child component being rendered through Outlet
  .main {
    grid-area: main;
    display: grid;
   }
 

`;



export const rIcon = styled.div``;

export default RootLayoutStyles;
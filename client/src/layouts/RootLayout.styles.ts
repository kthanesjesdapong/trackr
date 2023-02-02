import styled from "styled-components";

const RootLayoutStyles = styled.div`

  .root__layout {
  display:grid;
  background-color: red;
  grid-template-columns: 1fr;
  grid-template-rows: 75px 1fr ;
  grid-template-areas:
          'header'
          'main';
        height: 100vh;
  }

  /* .header{
    grid-area: header;
  } */

  /* .aside {
    grid-area: aside;
    position: fixed;
  } */
  // Main is the rest of childComponents being rendered
  .main {
        grid-area: main;
        /* background-color: white; */
      }
`;

export default RootLayoutStyles;
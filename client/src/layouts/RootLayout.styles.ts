import styled from "styled-components";

const RootLayoutStyles = styled.div`

  .root__layout {
    display:grid;
    /* background-color: red; */
    grid-template-columns: 1fr;
    grid-template-rows: 75px 1fr ;
    grid-template-areas:
      'header'
      'main';
    height: 100vh;
  }
  
  
  // Main is our child component being rendered through Outlet
  .main {
        grid-area: main;
      }
`;

export default RootLayoutStyles;
import styled from 'styled-components';


const SideBarStyles = styled.div`
/* position: absolute; */

 /*Grid Properties */
  grid-area: aside;
  position: fixed;

 //Container
  height: 100vh;
  width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0% 39px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: -moz-hidden-unscrollable;
  transition: padding 0.25s ease-in-out;


  @media only screen and (max-width: 1750px) {
  padding-top: 1%;
  transition: padding 0.25s ease-in-out;
  }

  @media only screen and (max-width: 1440px) {
  padding-top: 1%;
  transition: padding 0.25s ease-in-out;

    }

  @media only screen and (max-width: 844px) {
  padding-top: 1%;
  transition: padding 0.25s ease-in-out;
  }

  @media only screen and (max-width: 768px) {
  padding-top: 1%;
  transition: padding 0.25s ease-in-out;
  }
`;

export default SideBarStyles;
import styled from 'styled-components';


const SideBarStyles = styled.div`
/* position: absolute; */

 /*Grid Properties */
  grid-area: aside;
  position: fixed;

  //Container
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start; */

  height: 100vh;
  width: 256px;
  padding: 0% 2.45em;
  box-shadow: 0px 0px 1.25em rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: -moz-hidden-unscrollable;
  //When you want it hide
  /* transform: translateX(-245px); */
  transition-property: padding transform;
  transition-duration: 0.45s;
  transition-timing-function: ease-in-out;
  z-index: 2;

  //Enable this later
  /* :hover {
   transform: translateX(0);
   transition-property: transform;
   transition-duration: 0.42s;
   transition-timing-function: ease-in-out;
  } */

/* 
  .list__container {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: .9em;
    list-style-type: none;
    justify-content: flex-start;
    align-items: flex-start;

  } */

  // If you want the sidebar to pop in and out you have to apply at all of this media screens
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
import styled from 'styled-components';


const SideBarStyles = styled.div`

  /*Grid Properties */
  grid-area: aside;
 
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 256px;
  box-shadow: 0px 0px 1.25em rgba(0, 0, 0, 0.1);
  padding: 0% 2.45em;
  overflow: -moz-hidden-unscrollable;

  //Hide Sidebar
  /* transform: translateX(-245px); */
  transition-duration: 0.45s;
  transition-property: padding transform;
  transition-timing-function: ease-in-out;
  z-index: 2;

  
  // Shows Sidebar on hover
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

  //If you disable this is disable
  .aside__list {
    padding: 0;
    list-style-type: none;
  }

  // List styles
   ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
   }



   /* responsive layout */
   /* @media only screen and (min-width: 750px) {
        .grid-container {
          display: grid;
          grid-template-columns: 240px 1fr;
          grid-template-rows: 50px 1fr 50px;
          grid-template-areas:
            'aside header'
            'aside main'
            'aside footer';
          height: 100vh;
        }

        .aside {
          display: flex;
          flex-direction: column;
          position: relative;
          transform: translateX(0);
        }

      } */


  // If you want the sidebar to pop in and out you have to apply at all of this media screens
  /* @media only screen and (max-width: 1750px) {
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
  } */
`;

export default SideBarStyles;
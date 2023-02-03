import styled from "styled-components";
import { media } from '@utils/media';
import { vp } from '@utils/viewport';

const vpMin = vp({
  mobile: media.min('mobile'),
  tablet: media.min('tablet'),
  laptop: media.min('laptop'),
  desktop: media.min('desktop')
});

export const DashboardStyles = styled.div`
  /* Grid */
  //.dashboard
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  


  .footer{
    grid-area: footer;
    width: 100%;
    height: 11%;
  }

/*   

  
  //Define breakpoints


/* 
  @media only screen and (max-width: 768px)  {
    background-color: black;
  } */

`; 
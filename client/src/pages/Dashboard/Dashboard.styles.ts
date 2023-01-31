import styled from "styled-components";
import { media } from '@utils/media';
import { vp } from '@utils/viewport';

// Defining viewport min-widths
const vpMin = vp({
  mobile: media.min('mobile'),
  tablet: media.min('tablet'),
  laptop: media.min('laptop'),
  desktop: media.min('desktop')
});

export const DashboardStyles = styled.div`
  width: 100vw;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
/*   

  
  //Define breakpoints


/* 
  @media only screen and (max-width: 768px)  {
    background-color: black;
  } */

`; 
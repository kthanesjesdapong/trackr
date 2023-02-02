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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
/*   

  
  //Define breakpoints


/* 
  @media only screen and (max-width: 768px)  {
    background-color: black;
  } */

`; 
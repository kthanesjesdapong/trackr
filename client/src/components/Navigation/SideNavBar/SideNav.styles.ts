import styled from 'styled-components';


const SideNavStyles = styled.div`
/* position: absolute; */
/* height: 100vh; */
width: 256px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding: 6% 39px;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
transition: all 0.25s ease-in-out;


@media only screen and (max-width: 1750px) {
  padding-top: 8%;
  transition: all 0.25s ease-in-out;
}

@media only screen and (max-width: 1440px) {
  padding-top: 9%;
  transition: all 0.25s ease-in-out;

}

@media only screen and (max-width: 844px) {
  padding-top: 13%;
  transition: all 0.25s ease-in-out;
}

@media only screen and (max-width: 768px) {
  padding-top: 15%;
  transition: all 0.25s ease-in-out;
}
`;

export default SideNavStyles;
import styled from 'styled-components';


const SideNavStyles = styled.div`
position: absolute;
height: 100vh;
width: 256px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding-left: 35px;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

@media only screen and (max-width: 1750px) {
  padding-top: 6%;
}

@media only screen and (max-width: 1440px) {
  width: 220px;
  padding-top: 7%;
}

@media only screen and (max-width: 768px) {
  width: 220px;
}
`;

export default SideNavStyles;
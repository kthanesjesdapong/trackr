import styled from 'styled-components';

const OvCardStyles = styled.div`
  //Display
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-between;
  //Shape
  padding: 15px 25px;
  flex-basis: 200px;
  flex-grow: .2;
  height: 120px;
  max-width: 325px;
  margin: 10px 10px;
  //Border
  border-radius: 20px;
  background-color: hsla(0, 0%, 100%, 1);
  box-shadow: 5px 5px 5px rgba(0, 1, 1, 0.3);
  //Font
  font-family: ${props => props.theme.fonts.primary};
  font-weight: regular;
  color: black;

  :hover {
    opacity: 40%;
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
  }

 .subHeader__container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: ${props => props.theme.fonts.secondary};
  gap: 8px;
  font-size:  .8em;
  font-weight: normal;
  color: black;
  letter-spacing: .125em;
 }

 .header__container{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  opacity: 90%;
    h2{
    font-size: 1.1em;
    }
 }




 
 .percentage__container {
  font-family: "Poppins";
  font-weight: bolder;
  font-style: normal;
  font-size: ${props => props.theme.fontSizes.s}; 
 }
 
 .amount__container {
  display: flex;
  flex-direction: row;  
    h2, h3 {
    opacity: 80%;
    }
    h4, p{
    color: #00A389;
    }

 }


 // Reponsive layout

 @media screen and (min-width: 1580px){ 
  margin: 15px 10px;
  width: 236px;
    h2, h3, h4 {
    font-size: .9em;
    }
  }

  @media screen and (min-width: 1350px) {
    margin: 15px 0px;
    width: 200px;
    flex-wrap: wrap;
    h2, h3, h4 {
    font-size: .85em;
    }
  }

 @media screen and (min-width:1250px){
  margin: 15px 0px;
  h2, h3, h4 {
    font-size: .8em
    }
 }


  @media screen and (min-width:1150px){
  margin: 15px 0px;
  h2, h3, h4 {
    font-size: .8em
    }
 }

  @media screen and (max-width:1085px){
  margin: 15px 5px;
  h2, h3, h4 {
    font-size: .65em;
    }
 }
`;
export default OvCardStyles;
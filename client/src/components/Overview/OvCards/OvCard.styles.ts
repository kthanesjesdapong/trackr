import styled from 'styled-components';

const OvCardStyles = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  padding: 15px 35px;
  flex-basis: 250px;
  flex-grow: .5;
  height: 150px;
  margin: 15px 30px;
  /* min-width: 200px; */
  max-width: 370px;
  border-radius: 20px;
  background-color: hsla(0, 0%, 100%, 1);
  box-shadow: 5px 5px 5px rgba(0, 1, 1, 0.3);

  :hover {
    opacity: 40%;
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
  }

  font-family: ${props => props.theme.fonts.primary};
  font-weight: regular;
  color: black;


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
  justify-content: center;
  align-items: flex-start;
  opacity: 90%;
  width: 50%; 
 }

.amount__percentage__container{

  /* display: flex;
  height: 2em;
  width: 60%;
  justify-content: flex-end; */



  /* justify-content: space-evenly;
  gap: .45em; */

}


 
 .percentage__container {

  /* padding: .5em 0em;
  padding-right: 6em;
  display: flex;
  justify-content: flex-end; */






  font-family: "Poppins";
  font-weight: bolder;
  font-style: normal;
  font-size: ${props => props.theme.fontSizes.s}; 




  /* transform : translateY(-20px) */
  /* translateX(-76px) */
 }
 
 .amount__container {
  /* transform: translateX(10px) translateY(-20px); */
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  h2 {
    opacity: 80%;
  }

  h3 {
    opacity: 80%;
  }

  p{
    color: #00A389;
  }
  h4 {
    color: #00A389;
  }
 }


 @media screen and (max-width: 1580px){ 
  margin: 15px 10px;
  width: 236px;
  h2, h3, h4 {
    font-size: .9em;
  }
  }

  @media screen and (max-width: 1350) {
    margin: 15px 5px;
  }

  @media screen and (max-width: 1280) {
    flex-wrap: wrap;
    background-color: red;
  }

`;

export default OvCardStyles;
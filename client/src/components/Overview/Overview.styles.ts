import styled from 'styled-components';

const OverviewStyles = styled.div`
 display: flex;
 width: 100%;
 height: calc(30% - 30px);
 justify-content: space-evenly;
 align-items: center;
 flex-direction: row;
 border-bottom: 1px solid lightgreen;


 @media screen and (min-width:1250px){
  display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 10px 0px;
    height: calc(40% - 30px);
 }
 
 @media screen and (max-width: 1220px){
  width: 100%;
  flex-wrap: wrap;

 }
// Phones
 @media screen and (max-width: 950px){
  background-color: black;
  height: calc(50% - 30px);
  width: 100%;
 }
`;

export default OverviewStyles;
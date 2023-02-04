import styled from 'styled-components';

const OverviewStyles = styled.div`
 display: flex;
 width: 100%;
 height: calc(45% - 30px);
 justify-content: space-evenly;
 align-items: center;
 flex-direction: row;
 border-bottom: 1px solid lightgreen;


 @media screen and (max-width:1250px){
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 10px 0px;
 }
 @media screen and (max-width: 1220px){
  width: 80%;
 }
`;

export default OverviewStyles;
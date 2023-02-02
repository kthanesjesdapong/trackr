import styled from "styled-components";

const TopNavBarStyles = styled.div`
  /*Grid */
  grid-area: header;
  
  //Others
  color: ${props => props.theme.colors.main};
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  background-color: blue;
  width: 100vw;
`;

export default TopNavBarStyles;
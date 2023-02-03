import styled from "styled-components";

const TopBarStyles = styled.div`
  /* Grid */
  grid-area: header;

  //Others
  display: flex;
  color: ${props => props.theme.colors.main};
  background-color: white;
  box-shadow:  0 5px 4px -4px rgba(0,0,0,0.1); 
  justify-content: flex-end;
  align-items: center;

  padding: 0 15px;

`;

export default TopBarStyles;
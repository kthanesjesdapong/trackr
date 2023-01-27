import styled from "styled-components";

const TopNavBarStyles = styled.div`
  color: ${props => props.theme.colors.main};
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #D5D5D5;  
`;

export default TopNavBarStyles;
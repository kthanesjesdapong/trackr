import styled from "styled-components";

const TopNavBarStyles = styled.div`
  color: ${props => props.theme.colors.main};
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  /* border-bottom: 1px solid #D5D5D5;   */
  background-color: #FFFFFF;
  width: 100%
`;

export default TopNavBarStyles;
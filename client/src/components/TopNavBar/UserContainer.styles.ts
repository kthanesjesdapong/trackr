import styled from "styled-components";

const UserContainerStyles = styled.div`

  height:98px;
  /* width: 175px;  */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: ${props => props.theme.space.m}px;

  p {
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.xxxs}px;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: 2px;
  /* text-transform: capitalize; */
  }
`;

export default UserContainerStyles;
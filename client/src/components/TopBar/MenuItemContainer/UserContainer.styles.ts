import styled from "styled-components";

const UserContainerStyles = styled.div`

  padding-right: ${props => props.theme.space.xs}px;
  
  //Text Styling
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.xxxs}px;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: 2px;
`;

export default UserContainerStyles;
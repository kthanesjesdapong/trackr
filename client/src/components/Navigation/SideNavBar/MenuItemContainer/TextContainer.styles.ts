import styled from 'styled-components';


const TextContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.space.xxxs};

  li {
  list-style: none;
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: bolder;
  color: black;
  mix-blend-mode: normal;

  }
`;

export default TextContainerStyles;
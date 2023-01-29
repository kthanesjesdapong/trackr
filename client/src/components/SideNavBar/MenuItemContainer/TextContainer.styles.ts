import styled from 'styled-components';


const TextContainerStyles = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 8px;

p{
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 100;
  color: #334D6E;
}
`;

export default TextContainerStyles;
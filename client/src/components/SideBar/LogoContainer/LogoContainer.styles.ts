import styled from 'styled-components';

const LogoContainerStyles = styled.div`

box-sizing: border-box;

height:75px;

display: flex;
justify-content: center;
align-items: center;


.logo__text {
font-family: ${props => props.theme.fonts.primary};
font-weight: bolder;
line-height: 30px;
letter-spacing: 3px;
text-transform: uppercase;
color: #000000;
mix-blend-mode: normal;
}

`;

export default LogoContainerStyles;
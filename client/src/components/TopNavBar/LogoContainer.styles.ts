import styled from 'styled-components';

const LogoContainerStyles = styled.div`

box-sizing: border-box;
width: 256px;
height:98px;
left: 0px;
top: 3px;
border-bottom: 2px solid #D5D5D5;
display: flex;
justify-content: center;
align-items: center;

.logo__text {
font-family: ${props => props.theme.fonts.primary};
font-style: inherit;
font-weight: bolder;
font-size: 16;
line-height: 30px;
letter-spacing: 3px;
text-transform: uppercase;
color: #000000;
mix-blend-mode: normal;
}

`;

export default LogoContainerStyles;
import styled from 'styled-components';

const LogoContainerStyles = styled.div`

/* box-sizing: border-box;
border: 1px solid black;
font-family: ${props => props.theme.fonts.primary};
font-style: normal;
font-weight: 800;
line-height: 30px;
letter-spacing: 3px;
text-transform: uppercase;
color: #000000;
mix-blend-mode: normal; */
/* font-family:  */

box-sizing: border-box;
position: absolute;
width: 256px;
height:98px;
left: 0px;
top: 3px;
border-bottom: 2px solid #D5D5D5;


.logo__text {
position: absolute;
width: 83px;
height: 36px;
left: 88px;
top: 20px;
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
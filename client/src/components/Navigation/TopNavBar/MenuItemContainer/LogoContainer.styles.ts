import styled from 'styled-components';

const LogoContainerStyles = styled.div`

box-sizing: border-box;
width: 256px;
height:98px;
left: 0px;
top: 3px;
display: flex;
/* border-bottom: .5px solid #D5D5D5; */
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
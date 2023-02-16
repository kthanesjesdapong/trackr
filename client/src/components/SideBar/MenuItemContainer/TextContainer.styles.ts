import styled from 'styled-components';


// --c: #1095c1; 
// color: #0000;
// background: 
// linear-gradient(90deg, #fff 50%, var(--c) 0) calc(100% - var(--_p, 0%)) / 200%, 
// linear-gradient(var(--c) 0 0) 0% 100% / var(--_p, 0%) no-repeat,
// var(--_c, #0000);
// -webkit-background-clip: text, padding-box, padding-box;
//       background-clip: text, padding-box, padding-box;
// transition: 0s, color .5s, background-color .5s;


// a:hover {
//   background-color: 100% 3px;
//   transition: 0.5s, color 0s .6s, background-color 0s .5s; 

// color: #fff; 
//  --_c: var(--c);
// --_p: 100%; 
// transition: 0.5s, color 0s .6s, background-color 0s .5s; 
// }


const TextContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.space.xxxs};

  p {
  --c: #1095c1; 
  text-decoration: none;
  font-family: ${props => props.theme.fonts.secondary};
  mix-blend-mode: normal;
  font-weight: bolder;
  color: black;
  background:
    linear-gradient(90deg, #1095c1, #1095c1);
  background-size: 0% 2px;
  background-position: left bottom;
  background-repeat: no-repeat;
  transition: background-size 300ms ease;

  }
  p:hover {
    background-size: 100% 2px;
  }
`;

export default TextContainerStyles;
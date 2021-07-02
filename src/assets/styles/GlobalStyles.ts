import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import '../fonts/index.css';

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 10px;
  }
  body {
    height: 100%;
    font-family: 'AppleSDGothicNeo';
  }
  a, button {
    text-decoration: none;
    cursor: pointer;
  }
  
  @media (max-width: 1200px) {
    padding-right: 1.8vw;
  }
`;

export default GlobalStyles;

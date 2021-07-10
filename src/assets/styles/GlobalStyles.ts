import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import '../fonts/index.css';

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 10px;
    margin: 0;
    padding: 0;
  }
  body {
    height: 100%;
    font-family: 'AppleSDGothicNeo';
  }
  a, button {
    text-decoration: none;
    cursor: pointer;
  }
  ul li {list-style-type: none;}

  a { text-decoration: none; color: black; }
  a:visited { text-decoration: none; }
  a:hover { text-decoration: none; }
  a:focus { text-decoration: none; }
  a:hover, a:active { text-decoration: none; }

  @media (max-width: 1200px) {
    padding-right: 1.8vw;
  }
`;

export default GlobalStyles;

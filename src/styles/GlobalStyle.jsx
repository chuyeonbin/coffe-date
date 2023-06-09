import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 10px;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  button {
    background: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyle;

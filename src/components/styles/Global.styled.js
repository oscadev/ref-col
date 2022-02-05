import { createGlobalStyle } from "styled-components";
import font1 from "../../assets/fonts/BebasNeue-Regular.woff";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: bebas;
    src: url(${font1}) format('woff');
  }
    body {
        margin: 0
    }
`;

export default GlobalStyles;

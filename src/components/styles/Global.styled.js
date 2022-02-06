import { createGlobalStyle } from "styled-components";
import font1 from "../../assets/fonts/BebasNeue-Regular.woff";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: bebas;
    src: url(${font1}) format('woff');
  }
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
    body {
        margin: 0;
        overflow-x: hidden;
    }
    *{
      font-family: 'Poppins', sans-serif;
      
    }
`;

export default GlobalStyles;

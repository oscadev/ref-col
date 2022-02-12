import { createGlobalStyle } from "styled-components";
import font1 from "../../assets/fonts/BebasNeue-Regular.woff";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: bebas;
    src: url(${font1}) format('woff');
  }
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
    html, body {
        margin: 0;
        overflow-x: hidden;
        max-width: 100vw;
    }
    *{
      font-family: 'Poppins', sans-serif;
      
    }
    #root {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    @media (max-width: 900px) {
    p {
      /* font-size: 9px !important; */
    }
  }
`;

export default GlobalStyles;

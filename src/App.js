import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { CarFlipperSection } from "./components/CarFlipperSection";
import { AppStyled } from "./components/styles/App.styled";
import GlobalStyled from "./components/styles/Global.styled";

const theme = {
  colors: {
    yellow: "#FBC843",
    blackTitle: "#2B3144", //Large titles
    blackTrue: "#000000",
    black1B1: "#1B1E28",
    white: "#FFFFFF",
    grey414: "#414A69", //"available on the app"
    grey4B5: "#4B5168",
    grey4F5: "#4F5874", //footer links
    greyLightBox: "#F5F5F7", //boxes with info
  },
  fonts: {
    bebas: "bebas",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <AppStyled>
        <Header />
        <CarFlipperSection />
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;

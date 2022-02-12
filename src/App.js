import styled, { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { CarFlipperSection } from "./components/CarFlipperSection";
import { AppStyled } from "./components/styles/App.styled";
import GlobalStyled from "./components/styles/Global.styled";
import { DeliveredToYourDoorSection } from "./components/DeliveredToYourDoorSection";
import { TradeInYourCarSection } from "./components/TradeInYourCarSection";
import { ThreeBoxesSection } from "./components/ThreeBoxesSection";
import { BottomSection } from "./components/BottomSection";
import { useEffect, useState, useRef } from "react";
import loadCrown from "./assets/images/load-crown.png";
import ring from "./assets/images/ring.png";
import gsap from "gsap";

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
  shadow: "drop-shadow(-15px 15px 25.45px rgba(0, 0, 0, 0.54))",
  mobile: "414px",
  desktop: "1601px",
};

function App() {
  const [modal, setModal] = useState(true);

  let ringRef = useRef(null);
  let modalRef = useRef(null);

  useEffect(() => {
    window.onbeforeunload = function () {
      document.body.style.display = "none";
      window.scrollTo(0, 0);
    };
    const tim = setTimeout(() => {
      setModal(false);
    }, 2000);

    //animate logo

    gsap.to(ringRef, 1.5, {
      delay: 0,
      rotate: 45,
    });

    gsap.to(modalRef, 2, {
      delay: 1,
      // rotate: 45,
      opacity: 0,
    });
    return () => {
      clearTimeout(tim);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />

      <AppStyled>
        {modal ? (
          <ModalStyled ref={(el) => (modalRef = el)}>
            <img src={loadCrown} />
            <RingStyled src={ring} ref={(el) => (ringRef = el)} />
          </ModalStyled>
        ) : null}
        <Header />
        <CarFlipperSection />
        <DeliveredToYourDoorSection />
        <TradeInYourCarSection />
        <ThreeBoxesSection />
        <BottomSection />
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;

const ModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 5;
`;

const RingStyled = styled.img`
  position: absolute;
`;

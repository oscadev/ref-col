import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import porsche from "../assets/images/trade-porsche.png";
import phone from "../assets/images/trade-phone.png";
import { useInView } from "react-intersection-observer";
import gsap from "gsap/all";

export const TradeInYourCarSection = () => {
  const [firstView, setFirstView] = useState(true);
  //interesection observer
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  //animation refs
  let yellowBoxRef = useRef(null);
  let phoneRef = useRef(null);
  let titleRef = useRef(null);
  let subtitleRef = useRef(null);

  useEffect(() => {
    if (inView && firstView) {
      setFirstView(false);

      //animate yellow box
      gsap.to(yellowBoxRef, 1, {
        delay: 0,
        x: 0,
        opacity: 1,
      });

      //animate phone
      gsap.to(phoneRef, 1, {
        delay: 0.5,
        y: 0,
        opacity: 1,
      });

      //animate title
      gsap.to(titleRef, 1, {
        delay: 1,
        y: 0,
        opacity: 1,
      });

      //animate subtitle
      gsap.to(subtitleRef, 1, {
        delay: 1.2,
        y: 0,
        opacity: 1,
      });
    }
  }, [inView]);
  return (
    <TradeInYourCarSectionStyled ref={ref}>
      <PhoneStyled src={phone} ref={(el) => (phoneRef = el)} />
      <div>
        <YellowBoxStyled ref={(el) => (yellowBoxRef = el)}>
          <PorscheStyled src={porsche} alt="" />
        </YellowBoxStyled>
      </div>
      <RightSectionStyled>
        <h2 ref={(el) => (titleRef = el)}>
          TRADE IN YOUR CAR
          {window.matchMedia("(max-width: 700px)") ? " " : <br />}
          EVERY MONTH.
        </h2>
        <p ref={(el) => (subtitleRef = el)}>
          Use Eleanor Trade-In Credits to trade in your vehicle for something
          else in our luxurious inventory. Nothing says “June” like a new car!
        </p>
      </RightSectionStyled>
    </TradeInYourCarSectionStyled>
  );
};

const TradeInYourCarSectionStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  width: 100%;
  height: 1033px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: wrap-reverse;
    height: initial;
    margin-top: 80px;
  }
`;

const YellowBoxStyled = styled.div`
  width: 488px;
  height: 823px;
  background-color: ${(props) => props.theme.colors.yellow};
  margin-left: 100px;
  position: relative;
  opacity: 0;
  transform: translateX(-300px);
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 307px;
    margin-left: 0px;
    height: 518px;
    margin-top: 25px;
  }
`;

const PorscheStyled = styled.img`
  position: absolute;
  top: 288px;
  left: -57px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: 181px;
    left: -36px;
    width: 417px;
  }
`;

const PhoneStyled = styled.img`
  position: absolute;
  top: 52px;
  left: 392px;
  filter: ${(props) => props.theme.shadow};
  opacity: 0;
  transform: translateY(-50px);
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 213px;
    left: 184px;
    top: 400px;
    max-width: 50vw;
    filter: none;
  }
`;

const RightSectionStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  flex-direction: column;
  height: 100%;

  h2 {
    font-family: ${(props) => props.theme.fonts.bebas};
    font-size: 95px;
    color: ${(props) => props.theme.colors.blackTitle};
    margin: 0;
    margin-top: 276px;
    font-weight: 100;
    margin-left: 238px;
    line-height: 98px;
    opacity: 0;
    transform: translateY(-50px);
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 45px;
      margin: 0;
      margin-top: 169px;
      margin-left: 20px;
      font-weight: 100;
      line-height: 48px;
      letter-spacing: -0.217059px;
      width: 258px;
      max-width: calc(100vw - 40px);
    }
  }
  p {
    margin: 0;
    font-size: 16px;
    width: 397px;
    letter-spacing: -0.470588px;
    color: ${(props) => props.theme.colors.blackTrue};
    line-height: 26px;
    margin-left: 238px;
    margin-top: 27px;
    opacity: 0;
    transform: translateY(-50px);
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-left: 20px;
      margin-right: 20px;
      width: 100vw;
      margin-top: 10px;
      max-width: calc(100vw - 40px);
    }
  }
`;

//823 210
//491 - 215

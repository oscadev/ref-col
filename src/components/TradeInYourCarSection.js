import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import porsche from "../assets/images/trade-porsche.png";
import phone from "../assets/images/trade-phone.png";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const TradeInYourCarSection = () => {
  //ScrollTrigger ref
  let scrollRef = useRef(null);

  //animation refs
  let yellowBoxRef = useRef(null);
  let phoneRef = useRef(null);
  let titleRef = useRef(null);
  let subtitleRef = useRef(null);

  useEffect(() => {
    //animate yellow box
    gsap.to(yellowBoxRef, 1, {
      delay: window.matchMedia("(max-width: 414px)").matches ? 1 : 0,
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: scrollRef,
        start: "top center",
      },
    });

    //animate phone
    gsap.to(phoneRef, 1, {
      delay: 0.5,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: scrollRef,
        start: "top center",
      },
    });

    //animate title
    gsap.to(titleRef, 1, {
      delay: window.matchMedia("(max-width: 414px)").matches ? 0 : 1,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: scrollRef,
        start: "top center",
      },
    });

    //animate subtitle
    gsap.to(subtitleRef, 1, {
      delay: window.matchMedia("(max-width: 414px)").matches ? 0 : 1.2,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: scrollRef,
        start: "top center",
      },
    });
  }, []);
  return (
    <TradeInYourCarSectionStyled ref={(el) => (scrollRef = el)}>
      <PhoneStyled src={phone} ref={(el) => (phoneRef = el)} />
      <div>
        <YellowBoxStyled ref={(el) => (yellowBoxRef = el)}>
          <PorscheStyled src={porsche} alt="" />
        </YellowBoxStyled>
      </div>
      <RightSectionStyled>
        <h2 ref={(el) => (titleRef = el)}>
          TRADE IN YOUR CAR
          {window.matchMedia("(max-width: 414px)").matches ? <br /> : " "}
          EVERY MONTH.
        </h2>
        <p ref={(el) => (subtitleRef = el)}>
          Use Eleanor Trade-In Credits to trade in your vehicle
          {window.matchMedia("(max-width: 414px)").matches ? <br /> : " "} for
          something else in our luxurious inventory.
          {window.matchMedia("(max-width: 414px)").matches ? <br /> : " "}{" "}
          Nothing says “June” like a new car!
        </p>
      </RightSectionStyled>
    </TradeInYourCarSectionStyled>
  );
};

const TradeInYourCarSectionStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  height: calc(1033vw / 1600 * 100);
  position: relative;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: wrap-reverse;
    height: initial;
    margin-top: 80px;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    height: 1033px;
    width: 1600px;
  }
`;

const YellowBoxStyled = styled.div`
  width: calc(488vw / 1600 * 100);
  height: calc(823vw / 1600 * 100);
  background-color: ${(props) => props.theme.colors.yellow};
  margin-left: calc(100vw / 1600 * 100);
  position: relative;
  opacity: 0;
  transform: translateX(calc(-300vw / 1600 * 100));
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: calc(307vw / 414 * 100);
    margin-left: 0px;
    height: calc(518vw / 414 * 100);
    margin-top: calc(25vw / 414 * 100);
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 488px;
    height: 823px;
    margin-left: 100px;
    transform: translateX(-300px);
  }
`;

const PorscheStyled = styled.img`
  position: absolute;
  top: calc(288vw / 1600 * 100);
  left: calc(-57vw / 1600 * 100);
  width: calc(662vw / 1600 * 100);
  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: 181px;
    left: -36px;
    width: 417px;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    top: 288px;
    left: -57px;
    width: 662px;
  }
`;

const PhoneStyled = styled.img`
  position: absolute;
  top: calc(52vw / 1600 * 100);
  left: calc(392vw / 1600 * 100);
  filter: ${(props) => props.theme.shadow};
  opacity: 0;
  transform: translateY(calc(-50vw / 1600 * 100));
  z-index: 2;
  width: calc(338vw / 1600 * 100);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: calc(213vw / 414 * 100);
    left: calc(184vw / 414 * 100);
    top: calc(410vw / 414 * 100);
    /* max-width: calc(50vw / 414 * 100); */
    transform: translateY(calc(-50vw / 414 * 100));
    filter: none;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    top: 52px;
    left: 392px;
    filter: ${(props) => props.theme.shadow};
    opacity: 0;
    transform: translateY(-50px);
    width: 338px;
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
    font-size: calc(95vw / 1600 * 100);
    color: ${(props) => props.theme.colors.blackTitle};
    margin: 0;
    margin-top: calc(276vw / 1600 * 100);
    font-weight: 100;
    margin-left: calc(238vw / 1600 * 100);
    line-height: calc(98vw / 1600 * 100);
    opacity: 0;
    transform: translateY(calc(-50vw / 1600 * 100));
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: calc(45vw / 414 * 100);
      margin: 0;
      margin-top: calc(169vw / 414 * 100);
      margin-left: calc(20vw / 414 * 100);
      font-weight: 100;
      line-height: calc(48vw / 414 * 100);
      letter-spacing: calc(-0.217059vw / 414 * 100);
      width: 100vw;
      /* max-width: calc(100vw - 40px); */
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
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
    }
  }
  p {
    margin: 0;
    font-size: calc(16vw / 1600 * 100);
    width: calc(397vw / 1600 * 100);
    letter-spacing: calc(-0.470588vw / 1600 * 100);
    color: ${(props) => props.theme.colors.blackTrue};
    line-height: calc(26vw / 1600 * 100);
    margin-left: calc(238vw / 1600 * 100);
    margin-top: calc(27vw / 1600 * 100);
    opacity: 0;
    transform: translateY(-50px);
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-left: calc(20vw / 414 * 100);
      /* margin-right: 20px; */
      width: 100vw;
      max-width: calc(100vw - 40px);
      margin-top: 10px;
      /* max-width: calc(100vw - 9.662vw); */

      font-size: calc(16vw / 414 * 100);
      line-height: calc(26vw / 414 * 100);
      letter-spacing: calc(-0.470588vw / 414 * 100);
      /* letter-spacing: calc(0.5vw / 414 * 100); */
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 16px;
      width: 397px;
      letter-spacing: -0.470588px;
      color: ${(props) => props.theme.colors.blackTrue};
      line-height: 26px;
      margin-left: 238px;
      margin-top: 27px;
      opacity: 0;
      transform: translateY(-50px);
    }
  }
`;

//823 210
//491 - 215

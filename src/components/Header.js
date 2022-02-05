import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { AvailableBtn, AvailableBtnStyled } from "./AvailableBtn";
import { H1 } from "./H1";
import { LineLogo } from "./LineLogo";
import cars from "../assets/images/header-cars.png";
import headerPhone from "../assets/images/header-phone.png";
import { TweenMax, Power3, gsap } from "gsap";
import { H1Styled } from "./styles/H1.styled";
import arrow from "../assets/images/arrow.png";

export const Header = () => {
  let yellowBox = useRef(null);
  let phone = useRef(null);
  let bigTitle = useRef(null);
  let avText = useRef(null);

  useEffect(() => {
    //animate yellow box
    gsap.to(yellowBox, 0.8, {
      opacity: 1,
      x: 0,
      ease: Power3.easeOut,
      delay: 1,
    });

    //animate phone
    gsap.to(phone, 0.8, {
      opacity: 1,
      x: 0,
      ease: Power3.easeOut,
      delay: 1.5,
    });

    //animate big title
    gsap.to(bigTitle, 0.8, {
      opacity: 1,
      y: 0,
      x: 0,
      ease: Power3.easeOut,
      delay: 1.5,
    });

    //animate big title
    gsap.to(avText, 0.8, {
      opacity: 1,
      y: 0,

      ease: Power3.easeOut,
      delay: 1.5,
    });
  }, []);
  return (
    <HeaderStyled
      ref={(box) => {
        yellowBox = box;
      }}
    >
      <LineLogo />
      <H1Styled ref={(el) => (bigTitle = el)}>
        DRIVE A NEW
        <br /> CAR EVERY MONTH.
      </H1Styled>
      <AvailableBtnStyled ref={(el) => (avText = el)}>
        <button>Available On the App</button>
        <img src={arrow} />
      </AvailableBtnStyled>
      <HeaderCars src={cars} />
      <HeaderPhone src={headerPhone} ref={(phn) => (phone = phn)} />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  min-width: 100%;
  height: 740px;
  background-color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  transform: translateX(-100%);
`;

const HeaderCars = styled.img`
  margin-top: 55;
  position: absolute;
  bottom: -99px;
`;

const HeaderPhone = styled.img`
  position: absolute;
  top: 108.57px;
  left: 1081px;
  filter: drop-shadow(-15px 15px 25.45px rgba(0, 0, 0, 0.54));
  transform: translateX(50%);
  opacity: 0;
`;

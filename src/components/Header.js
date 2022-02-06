import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { H1 } from "./H1";
import { LineLogo } from "./LineLogo";
import cars from "../assets/images/header-cars.png";
import headerPhone from "../assets/images/header-phone.png";
import { Power3, gsap } from "gsap";
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
        {window.matchMedia("(max-width: 700px)") ? " " : <br />} CAR EVERY
        MONTH.
      </H1Styled>
      <AvailableBtnStyled
        ref={(el) => (avText = el)}
        onClick={() => alert("Just a demo!")}
      >
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

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 340px;
    max-width: 100vw;
  }
`;

const H1Styled = styled.h1`
  font-family: ${(props) => props.theme.fonts.bebas};
  font-size: 145px;
  line-height: 138px;
  letter-spacing: -4.10319px;
  color: ${(props) => props.theme.colors.white};
  width: 827px;
  font-weight: 100;
  margin: 0;
  margin-left: 95px;
  margin-top: 179px;
  transform: translateY(-30%) translateX(-5%);
  opacity: 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 53px;
    line-height: 52px;
    letter-spacing: -1.49979px;
    margin-left: 20px;
    margin-top: 100px;
    width: initial;
  }
`;

const AvailableBtnStyled = styled.div`
  width: 232px;
  height: 54px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-left: 99px;
  margin-top: 21px;
  /* border: solid 1px white; */
  opacity: 0;
  transform: translateY(-100%);
  cursor: pointer;

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.grey414};
    font-size: 16px;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 5px;
    margin-top: 0px;
    justify-content: flex-start;
  }
`;

const HeaderCars = styled.img`
  margin-top: 55;
  position: absolute;
  bottom: -99px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 100vw;
    width: 430px;
    bottom: -51px;
  }
`;

const HeaderPhone = styled.img`
  position: absolute;
  top: 108.57px;
  left: 1081px;
  filter: ${(props) => props.theme.shadow};
  transform: translateX(50%);
  opacity: 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
    filter: none;
  }
`;

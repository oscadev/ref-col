import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { H1 } from "./H1";
import { LineLogo } from "./LineLogo";
import cars from "../assets/images/header-cars.png";
import carsMobile from "../assets/images/cars-mobile.svg";
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
        {window.matchMedia("(max-width: 1601px)") ? <br /> : " "} CAR EVERY
        MONTH.
      </H1Styled>
      <AvailableBtnStyled
        ref={(el) => (avText = el)}
        onClick={() => alert("Just a demo!")}
      >
        <button>Available On the App</button>
        <img src={arrow} />
      </AvailableBtnStyled>
      <HeaderCars
        src={
          window.matchMedia("(max-width: 414px)").matches ? carsMobile : cars
        }
      />
      <HeaderPhone src={headerPhone} ref={(phn) => (phone = phn)} />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  width: 100vw;
  height: 46.25vw;
  background-color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  transform: translateX(-100vw);
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: calc(340vw / 414 * 100);
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    height: 740px;
    width: 100%;
  }
`;

const H1Styled = styled.h1`
  font-family: ${(props) => props.theme.fonts.bebas};
  font-size: 9.063vw;
  line-height: 8.625vw;
  letter-spacing: calc(-4.10319vw / 1600 * 100);
  color: ${(props) => props.theme.colors.white};
  width: 51.688vw;
  font-weight: 100;
  margin: 0;
  margin-left: 5.938vw;
  margin-top: 11.188vw;
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
  @media (min-width: ${({ theme }) => theme.desktop}) {
    line-height: 138px;
    letter-spacing: -4.10319px;
    color: ${(props) => props.theme.colors.white};
    font-size: 145px;
    width: 827px;
    font-weight: 100;
    margin: 0;
    margin-left: 95px;
    margin-top: 179px;
    transform: translateY(-30%) translateX(-5%);
    opacity: 0;
  }
`;

const AvailableBtnStyled = styled.div`
  width: calc(232vw / 1600 * 100);
  height: calc(54vw / 1600 * 100);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-left: calc(99vw / 1600 * 100);
  margin-top: calc(21vw / 1600 * 100);
  /* border: solid 1px white; */
  opacity: 0;
  transform: translateY(-100%);
  cursor: pointer;

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.grey414};
    font-size: calc(16vw / 1600 * 100);
    cursor: pointer;
  }

  img {
    width: calc(27vw / 1600 * 100);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: calc(232vw / 414 * 100);
    height: calc(54vw / 414 * 100);

    margin-left: calc(20vw / 414 * 100);
    margin-top: calc(21vw / 414 * 100);

    button {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.grey414};
      font-size: 16px;
      cursor: pointer;
      padding: 0;
    }
    img {
      width: initial;
    }
    /* margin-left: 5px; */
    margin-top: 0px;
    /* justify-content: flex-start; */
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 232px;
    height: 54px;

    margin-left: 99px;
    margin-top: 21px;
    button {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.grey414};
      font-size: 16px;
      cursor: pointer;
    }
    img {
      width: initial;
    }
  }
`;

const HeaderCars = styled.img`
  margin-top: calc(55vw / 1600 * 100);
  position: absolute;
  bottom: calc(-99vw / 1600 * 100);
  z-index: 2;
  width: calc(996vw / 1600 * 100);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: calc(271vw / 414 * 100);
    margin-top: 0;
    max-width: 100vw;
    width: calc(453vw / 414 * 100);
    bottom: calc(-51vw / 414 * 100);
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    margin-top: 55px;

    bottom: -99px;
    width: 996px;
  }
`;

const HeaderPhone = styled.img`
  position: absolute;
  top: 6.786vw;
  left: 67.563vw;
  filter: ${(props) => props.theme.shadow};
  transform: translateX(50%);
  opacity: 0;
  width: 21.313vw;
  /* width: calc(341vw / 1600 * 100); */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
    filter: none;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    position: absolute;
    top: 108.57px;
    left: 1081px;
    filter: ${(props) => props.theme.shadow};
    transform: translateX(50%);
    opacity: 0;
    width: 341px;
  }
`;

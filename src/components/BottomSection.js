import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import guy from "../assets/images/guy.png";
import car from "../assets/images/bottom-car.png";
import arrow from "../assets/images/arrow.png";
import logo from "../assets/images/black-logo.svg";
import { useInView } from "react-intersection-observer";
import { gsap, Power3 } from "gsap";

export const BottomSection = () => {
  const [firstView, setFirstView] = useState(true);
  //interesection observer
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  //animation refs

  let yellowRef = useRef(null);
  let guyRef = useRef(null);
  let carRef = useRef(null);
  let textContentRef = useRef(null);

  useEffect(() => {
    if (inView && firstView) {
      setFirstView(false);

      //animate things

      //animate yellow box
      gsap.to(yellowRef, 0.8, {
        delay: 0,
        x: 0,
        y: 0,
        opacity: 1,
        ease: Power3.easeOut,
      });

      //animate guy
      gsap.to(guyRef, 0.8, {
        delay: 0.3,
        opacity: 1,
        ease: Power3.easeOut,
      });

      //animate car
      gsap.to(carRef, 0.8, {
        delay: 0.6,
        opacity: 1,
        ease: Power3.easeOut,
        x: 0,
      });

      //animate content
      gsap.to(textContentRef, 0.8, {
        delay: 0.6,
        opacity: 1,
        ease: Power3.easeOut,
        y: 0,
      });
    }
  }, [inView]);

  return (
    <BottomSectionStyled ref={ref}>
      <CarStyled src={car} ref={(el) => (carRef = el)} />
      <YellowBoxStyled ref={(el) => (yellowRef = el)}>
        <GuyStyled src={guy} ref={(el) => (guyRef = el)} />
      </YellowBoxStyled>
      <RightSectionStyled ref={(el) => (textContentRef = el)}>
        <h2>
          Customers with
          {window.matchMedia("(max-width: 700px)") ? " " : <br />} that new car
          smell
        </h2>
        <p>
          “With Eleanor I was able to drive 2 of my dream cars this year! The
          process is always easy and affordable!”
        </p>
        <h5>Alex Bateman, Interface Designer</h5>
        <LineStyled />
        <AvailableBtnStyled onClick={() => alert("Just a demo!")}>
          <button>Available On the App</button>
          <img src={arrow} />
        </AvailableBtnStyled>
      </RightSectionStyled>
      <FooterStyled>
        <img src={logo} />
        <GroupStyled>
          <a href="/about-us">About Us</a>
          <a href="/terms-of-use">Terms of Use</a>
          <a href="/faq">FAQ</a>
        </GroupStyled>
      </FooterStyled>
    </BottomSectionStyled>
  );
};

const BottomSectionStyled = styled.div`
  width: 100%;
  height: 1080px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 101px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: wrap-reverse;
    padding-left: 0;
    height: initial;
  }
`;

const CarStyled = styled.img`
  position: absolute;
  left: 282px;
  top: 604px;
  z-index: 2;
  opacity: 0;
  transform: translateX(-400px);
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

const YellowBoxStyled = styled.div`
  width: 637px;
  height: 722px;
  background-color: ${(props) => props.theme.colors.yellow};
  position: relative;
  opacity: 0;
  transform: translate(-400px, 100px);
  img {
    position: absolute;
    bottom: 0;
    margin-left: 80px;
    opacity: 0;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 469px;
    max-width: 100vw;
    margin-bottom: 149px;
  }
`;

const RightSectionStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  padding-left: 98px;
  flex-direction: column;
  position: relative;
  h2 {
    font-family: ${(props) => props.theme.fonts.bebas};
    font-size: 95px;
    color: ${(props) => props.theme.colors.blackTitle};
    margin: 0;
    margin-top: 91px;
    font-weight: 100;
    line-height: 98px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 45px;
      margin: 0;
      max-width: calc(100vw - 40px);
      margin-top: 67px;
      margin-left: 20px;
      font-weight: 100;
      line-height: 48px;
      letter-spacing: -0.217059px;
    }
  }

  p {
    margin: 0;
    font-size: 16px;
    width: 397px;
    letter-spacing: -0.470588px;
    color: ${(props) => props.theme.colors.blackTrue};
    line-height: 26px;
    margin-top: 35px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-left: 20px;
      margin-right: 20px;
      max-width: calc(100vw - 40px);
    }
  }
  h5 {
    margin: 0;
    margin-top: 19px;
    font-size: 12px;
    line-height: 26px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding-left: 20px;
    }
  }

  opacity: 0;
  transform: translateY(-50px);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-left: 0px;
  }
`;

const LineStyled = styled.div`
  background-color: #f4f4f5;

  width: 608px;
  height: 4px;
  margin-top: 41px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: calc(100vw - 40px);
    margin-left: 20px;
    margin-top: 21px;
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
  cursor: pointer;

  margin-top: 41px;
  /* border: solid 1px white; */
  opacity: 1;

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.grey414};
    font-size: 16px;
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 20px;
  }
`;

const FooterStyled = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  bottom: 109px;
  left: 101px;
  z-index: 2;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* height: 200px; */
    max-width: 100vw;
    bottom: 0px;
    left: 0px;
    img {
      margin-bottom: 45px;
      margin-left: 20px;
    }
  }
`;

const GroupStyled = styled.div`
  margin-left: 980px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.grey4F5};
    font-size: 11px;
    line-height: 13px;
    letter-spacing: -0.323529px;
    margin-right: 64px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

const GuyStyled = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 284px;
  }
`;

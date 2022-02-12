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
    threshold: window.matchMedia("(max-width: 414px)").matches ? 0.4 : 0.6,
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
        delay: window.matchMedia("(max-width: 414px)").matches ? 0.6 : 0,
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
        delay: window.matchMedia("(max-width: 414px)").matches ? 0 : 0.6,
        opacity: 1,
        ease: Power3.easeOut,
        x: 0,
      });

      //animate content
      gsap.to(textContentRef, 0.8, {
        delay: window.matchMedia("(max-width: 414px)").matches ? 0 : 0.6,
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
          {window.matchMedia("(max-width: 414px)").matches ? " " : <br />} that
          new car smell
        </h2>
        <p>
          “With Eleanor I was able to drive 2 of my dream
          {window.matchMedia("(max-width: 414px)").matches ? <br /> : " "} cars
          this year! The process is always easy and affordable!”
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
  width: calc(1600vw / 1600 * 100);

  height: calc(1080vw / 1600 * 100);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* padding-left: 101px; */
  position: relative;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: wrap-reverse;
    padding-left: 0;
    height: initial;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 1600px;
    height: 1080px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    /* margin-left: 101px; */
    position: relative;
  }
`;

const CarStyled = styled.img`
  width: calc(912vw / 1600 * 100);
  position: absolute;
  left: calc(282vw / 1600 * 100);
  top: calc(604vw / 1600 * 100);
  z-index: 2;
  opacity: 0;
  transform: translateX(calc(-400vw / 1600 * 100));
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 912px;
    position: absolute;
    left: 282px;
    top: 604px;
    z-index: 2;
    opacity: 0;
    transform: translateX(-400px);
  }
`;

const YellowBoxStyled = styled.div`
  width: calc(637vw / 1600 * 100);
  height: calc(722vw / 1600 * 100);
  background-color: ${(props) => props.theme.colors.yellow};
  position: relative;
  opacity: 0;
  transform: translate(calc(-400vw / 1600 * 100), calc(100vw / 1600 * 100));
  margin-left: calc(101vw / 1600 * 100);
  img {
    position: absolute;
    bottom: 0;
    margin-left: calc(80vw / 1600 * 100);
    opacity: 0;
    width: calc(437vw / 1600 * 100);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 469px;
    max-width: 100vw;
    margin-bottom: 149px;
    width: 100%;
    margin-left: 0;
    img {
      width: calc(284vw / 414 * 100);
      margin-left: calc(52vw / 414 * 100);
    }
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 637px;
    height: 722px;
    background-color: ${(props) => props.theme.colors.yellow};
    position: relative;
    opacity: 0;
    transform: translate(-400px, 100px);
    margin-left: 101px;
    img {
      position: absolute;
      bottom: 0;
      margin-left: 80px;
      opacity: 0;
      width: 437px;
    }
  }
`;

const RightSectionStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  padding-left: calc(98vw / 1600 * 100);
  flex-direction: column;
  position: relative;
  opacity: 0;
  transform: translateY(calc(-50vw / 1600 * 100));
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-left: 0px;

    width: 100%;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    padding-left: 98px;
    flex-direction: column;
    position: relative;
    opacity: 0;
    transform: translateY(-50px);
  }
  h2 {
    font-family: ${(props) => props.theme.fonts.bebas};
    font-size: calc(95vw / 1600 * 100);
    color: ${(props) => props.theme.colors.blackTitle};
    margin: 0;
    margin-top: calc(91vw / 1600 * 100);
    font-weight: 100;
    line-height: calc(98vw / 1600 * 100);
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 45px;
      margin: 0;
      max-width: calc(100vw - 40px);
      margin-top: calc(57vw / 414 * 100);
      margin-left: calc(20vw / 414 * 100);
      font-weight: 100;
      line-height: calc(48vw / 414 * 100);
      letter-spacing: calc(-0.217059vw / 414 * 100);
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-family: ${(props) => props.theme.fonts.bebas};
      font-size: 95px;
      color: ${(props) => props.theme.colors.blackTitle};
      margin: 0;
      margin-top: 91px;
      font-weight: 100;
      line-height: 98px;
    }
  }

  p {
    margin: 0;
    font-size: calc(16vw / 1600 * 100);
    width: calc(397vw / 1600 * 100);
    letter-spacing: calc(-0.470588vw / 1600 * 100);
    color: ${(props) => props.theme.colors.blackTrue};
    line-height: calc(26vw / 1600 * 100);
    margin-top: calc(35vw / 1600 * 100);
    @media (max-width: ${({ theme }) => theme.mobile}) {
      /* margin-left: 20px;
      margin-right: 20px; */
      margin-left: calc(24vw / 414 * 100);
      max-width: calc(100vw - 40px);
      font-size: calc(16vw / 414 * 100);
      line-height: calc(26vw / 414 * 100);
      width: calc(370vw / 414 * 100);
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
      margin: 0;
      font-size: 16px;
      width: 397px;
      letter-spacing: -0.470588px;
      color: ${(props) => props.theme.colors.blackTrue};
      line-height: 26px;
      margin-top: 35px;
    }
  }
  h5 {
    margin: 0;
    margin-top: calc(19vw / 1600 * 100);
    font-size: calc(12vw / 1600 * 100);
    line-height: calc(26vw / 1600 * 100);
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-top: calc(5vw / 414 * 100);
      padding-left: calc(27vw / 414 * 100);
      font-size: calc(12vw / 414 * 100);
      line-height: calc(26vw / 414 * 100);
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      margin: 0;
      margin-top: 19px;
      font-size: 12px;
      line-height: 26px;
    }
  }
`;

const LineStyled = styled.div`
  background-color: #f4f4f5;

  width: calc(608vw / 1600 * 100);
  height: calc(4vw / 1600 * 100);
  margin-top: calc(41vw / 1600 * 100);
  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: calc(100vw - 40px);
    margin-left: calc(20vw / 414 * 100);
    margin-top: calc(21vw / 414 * 100);
    width: 100%;
    height: calc(4vw / 414 * 100);
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 608px;
    height: 4px;
    margin-top: 41px;
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
  cursor: pointer;

  margin-top: calc(41vw / 1600 * 100);
  /* border: solid 1px white; */
  opacity: 1;

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.grey414};
    font-size: calc(16vw / 1600 * 100);
    cursor: pointer;
    padding: 0;
  }
  img {
    width: calc(29vw / 1600 * 100);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 232px;
    height: 54px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* margin: 0; */
    cursor: pointer;
    margin: calc(10vw / 414 * 100) calc(20vw / 414 * 100);
    margin-right: 0;
    /* border: solid 1px white; */
    /* margin-left: calc(20vw / 414 * 100); */
    opacity: 1;

    button {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.grey414};
      font-size: 16px;
      cursor: pointer;
      margin: 0;
      padding: 0;
    }
    img {
      width: 29px;
    }
    /* margin-top: 20px; */
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
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
    img {
      width: 29px;
    }
  }
`;

const FooterStyled = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  bottom: calc(109vw / 1600 * 100);
  left: calc(101vw / 1600 * 100);
  z-index: 2;
  img {
    width: calc(157vw / 1600 * 100);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* height: 200px; */
    max-width: 100vw;
    bottom: 0px;
    left: 0px;
    img {
      margin-bottom: 45px;
      margin-left: 20px;
      width: 157px;
    }
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    bottom: 109px;
    left: 101px;
    z-index: 2;
    img {
      width: 157px;
      /* margin-bottom: 45px;
      margin-left: 20px; */
    }
  }
`;

const GroupStyled = styled.div`
  margin-left: calc(980vw / 1600 * 100);
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.grey4F5};
    font-size: calc(11vw / 1600 * 100);
    line-height: calc(11vw / 1600 * 100);
    letter-spacing: calc(-0.323529vw / 1600 * 100);
    margin-right: calc(64vw / 1600 * 100);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    margin-left: 980px;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.grey4F5};
      font-size: 11px;
      line-height: 13px;
      letter-spacing: -0.323529px;
      margin-right: 64px;
    }
  }
`;

const GuyStyled = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 284px;
  }
`;

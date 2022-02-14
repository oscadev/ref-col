import { gsap, Power3 } from "gsap";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import deliveredMap from "../assets/images/delivered-map.png";
import deliveredPhone from "../assets/images/delivered-phone.png";
import deliveredPorsche from "../assets/images/delivered-porsche.png";

export const DeliveredToYourDoorSection = () => {
  //animation refs
  let mapRef = useRef(null);
  let phoneRef = useRef(null);
  let carRef = useRef(null);
  let titleRef = useRef(null);
  let subtitleRef = useRef(null);

  const [firstView, setFirstView] = useState(true);
  //interesection observer
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  //big title and map come in first, then car and subtitle, and lastly phone

  useEffect(() => {
    //these animate on load for test
    if (inView && firstView) {
      setFirstView(false);
      //animate map
      gsap.fromTo(
        mapRef,
        1,
        {
          opacity: 0,
          x: 500,
          ease: Power3.easeOut,
          delay: 0,
        },
        {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          delay: 0,
        }
      );

      //animate title
      gsap.fromTo(
        titleRef,
        1,
        {
          opacity: 0,
          y: -500,
          ease: Power3.easeOut,
          delay: 0.2,
        },
        {
          opacity: 1,
          y: 0,
          ease: Power3.easeOut,
          delay: 0.2,
        }
      );

      //animate car
      gsap.fromTo(
        carRef,
        1,
        {
          opacity: 0,
          x: -200,
          ease: Power3.easeOut,
          delay: 0.5,
        },
        {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          delay: 0.5,
        }
      );

      //animate subtitle
      gsap.fromTo(
        subtitleRef,
        1,
        {
          opacity: 0,
          y: -50,
          ease: Power3.easeOut,
          delay: 0.5,
        },
        {
          opacity: 1,
          y: 0,
          ease: Power3.easeOut,
          delay: 0.5,
        }
      );

      //animate phone
      gsap.fromTo(
        phoneRef,
        1,
        {
          opacity: 0,
          y: -50,
          ease: Power3.easeOut,
          delay: 0.5,
        },
        {
          opacity: 1,
          y: 0,
          ease: Power3.easeOut,
        }
      );
    }
  }, [inView]);
  return (
    <DeliveredStyled ref={ref}>
      <LeftSectionStyled>
        <h2 ref={(el) => (titleRef = el)}>
          DELIVERED TO{" "}
          {window.matchMedia("(max-width: 414px)").matches ? " " : <br />}
          YOUR DOOR.
        </h2>
        <p ref={(el) => (subtitleRef = el)}>
          Eleanor works with your schedule to have a
          {window.matchMedia("(max-width: 414px)").matches ? <br /> : " "}{" "}
          white-glove delivery service deliver your new vehicle right to your
          door.
        </p>
        <CarStyled src={deliveredPorsche} ref={(el) => (carRef = el)} />
      </LeftSectionStyled>
      <RightSectionStyled>
        <MapStyled src={deliveredMap} ref={(el) => (mapRef = el)} />
        <PhoneStyled
          src={deliveredPhone}
          width={331}
          ref={(el) => (phoneRef = el)}
        />
      </RightSectionStyled>
    </DeliveredStyled>
  );
};

const DeliveredStyled = styled.div`
  width: calc(1600vw / 1600 * 100);
  height: calc(930vw / 1600 * 100);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: initial;
    flex-wrap: wrap;
    width: calc(414vw / 414 * 100);
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 1600px;
    height: 930px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const LeftSectionStyled = styled.div`
  width: calc(527vw / 1600 * 100);
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  flex-direction: column;
  position: relative;
  z-index: 2;
  h2 {
    font-family: ${(props) => props.theme.fonts.bebas};
    font-size: calc(95vw / 1600 * 100);
    color: ${(props) => props.theme.colors.blackTitle};
    margin: 0;
    margin-top: calc(176vw / 1600 * 100);
    font-weight: 100;
    margin-left: calc(101vw / 1600 * 100);
    line-height: calc(98vw / 1600 * 100);
    opacity: 0;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: calc(45vw / 414 * 100);
      margin: 0;
      margin-top: calc(169vw / 414 * 100);
      margin-left: calc(20vw / 414 * 100);
      font-weight: 100;
      line-height: calc(48vw / 414 * 100);
      letter-spacing: calc(-0.217059vw / 414 * 100);
      max-width: calc(100vw - 9.662vw);
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-family: ${(props) => props.theme.fonts.bebas};
      font-size: 95px;
      color: ${(props) => props.theme.colors.blackTitle};
      margin: 0;
      margin-top: 176px;
      font-weight: 100;
      margin-left: 101px;
      line-height: 98px;
      opacity: 0;
    }
  }
  p {
    margin: 0;
    font-size: calc(16vw / 1600 * 100);
    width: calc(338vw / 1600 * 100);
    letter-spacing: calc(-0.470588vw / 1600 * 100);
    color: ${(props) => props.theme.colors.blackTrue};
    line-height: calc(26vw / 1600 * 100);
    margin-left: calc(101vw / 1600 * 100);
    margin-top: calc(27vw / 1600 * 100);
    opacity: 0;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-left: calc(20vw / 414 * 100);
      /* margin-right: calc(20vw / 414 * 100); */
      width: 100vw;
      max-width: calc(100vw - 40px);
      font-size: calc(16vw / 414 * 100);
      line-height: calc(26vw / 414 * 100);
      letter-spacing: calc(0.5vw / 414 * 100);
      //
      font-size: calc(16vw / 414 * 100);
      line-height: calc(26vw / 414 * 100);
      letter-spacing: calc(-0.470588vw / 414 * 100);
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
      margin: 0;
      font-size: 16px;
      width: 338px;
      letter-spacing: -0.470588px;
      color: ${(props) => props.theme.colors.blackTrue};
      line-height: 26px;
      margin-left: 101px;
      margin-top: 27px;
      opacity: 0;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: initial;
    width: calc(414vw / 414 * 100);
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 527px;
  }
`;

const RightSectionStyled = styled.div`
  /* flex-grow: 1; */
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  flex-direction: column;

  position: relative;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-grow: initial;
    height: initial;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
  }
`;

const MapStyled = styled.img`
  width: calc(850vw / 1600 * 100);
  position: absolute;
  top: calc(100vw / 1600 * 100);
  left: calc(123vw / 1600 * 100);
  opacity: 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: initial;
    margin-top: calc(82vw / 414 * 100);
    width: calc(630vw / 414 * 100);
    /* height: 308px; */
    max-width: 100vw;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 850px;
    position: absolute;
    top: 100px;
    left: 123px;
    opacity: 0;
  }
`;

const PhoneStyled = styled.img`
  width: calc(331vw / 1600 * 100);
  left: calc(463vw / 1600 * 100);
  position: absolute;
  z-index: 2;
  opacity: 0;
  filter: ${(props) => props.theme.shadow};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: calc(198vw / 414 * 100);
    left: calc(116vw / 414 * 100);
    margin-top: calc(22vw / 414 * 100);
    filter: none;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 331px;
    left: 463px;
  }
`;

const CarStyled = styled.img`
  position: absolute;
  left: calc(429vw / 1600 * 100);
  top: calc(502vw / 1600 * 100);
  width: calc(499vw / 1600 * 100);
  opacity: 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    left: 429px;
    top: 502px;
    width: 499px;
  }
`;

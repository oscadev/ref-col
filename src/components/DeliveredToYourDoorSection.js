import { gsap, Power3 } from "gsap";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react/cjs/react.development";
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

      //animate subtitle
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
          delay: 1,
        }
      );
    }
  }, [inView]);
  return (
    <DeliveredStyled ref={ref}>
      <LeftSectionStyled>
        <h2 ref={(el) => (titleRef = el)}>
          DELIVERED TO{" "}
          {window.matchMedia("(max-width: 700px)").matches ? " " : <br />}
          YOUR DOOR.
        </h2>
        <p ref={(el) => (subtitleRef = el)}>
          Eleanor works with your schedule to have a white-glove{" "}
          {window.matchMedia("(max-width: 1100px)").matches ? " " : <br />}
          delivery service deliver your new vehicle right to your door.
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
  width: 100%;
  height: 930px;
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: initial;
    flex-wrap: wrap;
  }
`;

const LeftSectionStyled = styled.div`
  width: 527px;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  flex-direction: column;
  position: relative;
  z-index: 2;
  h2 {
    font-family: ${(props) => props.theme.fonts.bebas};
    font-size: 95px;
    color: ${(props) => props.theme.colors.blackTitle};
    margin: 0;
    margin-top: 176px;
    font-weight: 100;
    margin-left: 101px;
    line-height: 98px;
    opacity: 0;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 45px;
      margin: 0;
      margin-top: 169px;
      margin-left: 20px;
      font-weight: 100;
      line-height: 48px;
      letter-spacing: -0.217059px;
      max-width: calc(100vw - 40px);
    }
  }
  p {
    margin: 0;
    font-size: 16px;
    width: 338px;
    letter-spacing: -0.470588px;
    color: ${(props) => props.theme.colors.blackTrue};
    line-height: 26px;
    margin-left: 101px;
    margin-top: 27px;
    opacity: 0;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-left: 20px;
      margin-right: 20px;
      width: 100vw;
      max-width: calc(100vw - 40px);
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: initial;
  }
`;

const RightSectionStyled = styled.div`
  flex-grow: 1;
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
`;

const MapStyled = styled.img`
  width: 850px;
  position: absolute;
  top: 100px;
  left: 123px;
  opacity: 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: initial;
    margin-top: 82px;
    width: 630px;
    /* height: 308px; */
    max-width: 100vw;
  }
`;

const PhoneStyled = styled.img`
  width: 331px;
  left: 463px;
  position: absolute;
  z-index: 2;
  opacity: 0;
  filter: ${(props) => props.theme.shadow};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 198px;
    left: 116px;
    margin-top: 22px;
    filter: none;
  }
`;

const CarStyled = styled.img`
  position: absolute;
  left: 429px;
  top: 502px;
  opacity: 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

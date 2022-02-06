import { gsap, Power3 } from "gsap";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react/cjs/react.development";
import styled from "styled-components";
import boxCoin from "../assets/images/box-coin.svg";
import boxInsurance from "../assets/images/box-insurance.svg";
import boxWrench from "../assets/images/box-wrench.svg";

export const ThreeBoxesSection = () => {
  const [firstView, setFirstView] = useState(true);
  //interesection observer
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  //animation refs

  let boxRef1 = useRef(null);
  let boxRef2 = useRef(null);
  let boxRef3 = useRef(null);

  useEffect(() => {
    if (inView && firstView) {
      setFirstView(false);
      console.log("Ran animations");
      //animate stuff

      //animate box1

      gsap.to(boxRef1.current, 1, {
        delay: 0,
        y: 0,
        opacity: 1,
        ease: Power3.easeOut,
      });

      //animate box2

      gsap.to(boxRef2.current, 1, {
        delay: 0.3,
        y: 0,
        opacity: 1,
        ease: Power3.easeOut,
      });

      //animate box3

      gsap.to(boxRef3.current, 1, {
        delay: 0.6,
        y: 0,
        opacity: 1,
        ease: Power3.easeOut,
      });
    }
  }, [inView]);

  const boxes = [
    {
      title: "SIMPLE MONTHLY PRICING",
      subtitle:
        "Pick your plan, pay the monthly price.  Thats it.  No hidden fees!",
      img: boxCoin,
      ref: boxRef1,
    },
    {
      title: "VEHICLE INSURANCE INCLUDED",
      subtitle:
        "That’s right, you’re covered.  All Eleanor plans include insurance coverage.",
      img: boxInsurance,
      ref: boxRef2,
    },
    {
      title: "MAINTENANCE IS COVERED",
      subtitle:
        "Leave it us.  Don’t worry about maintaining your vehicle.  Eleanor covers that as well.",
      img: boxWrench,
      ref: boxRef3,
    },
  ];
  return (
    <ThreeBoxesSectionStyled ref={ref}>
      {boxes.map((box, i) => (
        <Box
          key={i}
          title={box.title}
          subtitle={box.subtitle}
          img={box.img}
          innerRef={box.ref}
        />
      ))}
    </ThreeBoxesSectionStyled>
  );
};

const ThreeBoxesSectionStyled = styled.div`
  height: 683px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;

  padding-left: 101px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: wrap;
    padding-left: 0px;
    height: initial;
    margin-top: 100px;
  }
`;

const Box = ({ title, subtitle, img, innerRef }) => {
  return (
    <BoxStyled ref={innerRef}>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </BoxStyled>
  );
};

const BoxStyled = styled.div`
  width: 453px;
  height: 453px;
  background-color: ${(props) => props.theme.colors.greyLightBox};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
  opacity: 0;
  transform: translateY(-50px);
  img {
    height: 150px;
    margin-top: 95px;
  }
  h3 {
    font-family: ${(props) => props.theme.fonts.bebas};
    font-size: 34px;
    color: ${(props) => props.theme.colors.blackTitle};
    margin: 0;

    font-weight: 100;
    line-height: 98px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      line-height: 88px;
    }
  }
  p {
    width: 258px;
    line-height: 26px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 100vw;
    margin: 0;
    margin-bottom: 10px;
  }
`;

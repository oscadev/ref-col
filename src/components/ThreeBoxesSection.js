import { gsap, Power3 } from "gsap";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import boxCoin from "../assets/images/box-coin.svg";
import boxInsurance from "../assets/images/box-insurance.svg";
import boxWrench from "../assets/images/box-wrench.svg";

export const ThreeBoxesSection = () => {
  const [firstView, setFirstView] = useState(true);
  //interesection observer
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: window.matchMedia("(max-width: 414px)").matches ? 0.2 : 0.4,
  });

  //animation refs

  let boxRef1 = useRef(null);
  let boxRef2 = useRef(null);
  let boxRef3 = useRef(null);

  useEffect(() => {
    if (inView && firstView) {
      setFirstView(false);

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
        "Pick your plan, pay the monthly price. Thats it.  No hidden fees!",
      img: boxCoin,
      ref: boxRef1,
    },
    {
      title: "VEHICLE INSURANCE INCLUDED",
      subtitle:
        "That’s right, you’re covered. All Eleanor plans include insurance coverage.",
      img: boxInsurance,
      ref: boxRef2,
    },
    {
      title: "MAINTENANCE IS COVERED",
      subtitle:
        "Leave it us. Don’t worry about maintaining your vehicle. Eleanor covers that as well.",
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
  height: calc(683vw / 1600 * 100);
  width: calc(1600vw / 1600 * 100);

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;

  /* margin-left: calc(101vw / 1600 * 100); */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: wrap;
    padding-left: 0px;
    height: initial;
    margin-top: 100px;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    height: 683px;
    width: 1600px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    margin-left: 0;
    /* margin: 100px; */
    /* padding-left: 101px; */
  }
`;

const Box = ({ title, subtitle, img, innerRef }) => {
  return (
    <BoxStyled ref={innerRef}>
      <img src={img} alt="" />
      <div>
        <h3>{title}</h3>
        <div>
          <p>{subtitle}</p>
        </div>
      </div>
    </BoxStyled>
  );
};

const BoxStyled = styled.div`
  width: calc(453vw / 1600 * 100);
  height: calc(453vw / 1600 * 100);
  background-color: ${(props) => props.theme.colors.greyLightBox};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-right: calc(20vw / 1600 * 100);
  opacity: 0;
  transform: translateY(calc(-50vw / 1600 * 100));
  &:first-child {
    margin-left: calc(101vw / 1600 * 100);
  }

  div {
    h3 {
      font-family: ${(props) => props.theme.fonts.bebas};
      font-size: calc(34vw / 1600 * 100);
      color: ${(props) => props.theme.colors.blackTitle};
      margin: 0;

      font-weight: 100;
      line-height: calc(98vw / 1600 * 100);
    }
    div {
      display: flex;
      p {
        width: 0;
        flex-grow: 1;
        line-height: calc(21vw / 1600 * 100);
        font-size: calc(14vw / 1600 * 100);
        margin: 0;
        padding: 0;
      }
    }
  }

  img {
    height: calc(150vw / 1600 * 100);
    margin-top: calc(95vw / 1600 * 100);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 100vw;
    margin: 0;
    margin-bottom: calc(10vw / 414 * 100);
    width: calc(414vw / 414 * 100);
    height: calc(452vw / 414 * 100);
    &:first-child {
      margin-left: 0;
    }
    //
    img {
      height: calc(150vw / 414 * 100);
      margin-top: calc(91vw / 414 * 100);
    }
    div {
      h3 {
        font-family: ${(props) => props.theme.fonts.bebas};
        font-size: calc(34vw / 414 * 100);
        color: ${(props) => props.theme.colors.blackTitle};
        margin: 0;
        padding: 0;
        font-weight: 100;
        line-height: calc(88vw / 414 * 100);
      }
      div {
        display: flex;
        p {
          width: 0;
          flex-grow: 1;

          line-height: calc(21vw / 414 * 100);
          font-size: calc(14vw / 414 * 100);
          margin: 0;
          padding: 0;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 453px;
    height: 453px;
    margin-right: 20px;
    transform: translateY(-50px);
    &:first-child {
      margin-left: 101px;
    }
    img {
      height: 150px;
      margin-top: 95px;
    }
    div {
      h3 {
        font-family: ${(props) => props.theme.fonts.bebas};
        font-size: 34px;
        color: ${(props) => props.theme.colors.blackTitle};
        margin: 0;

        font-weight: 100;
        line-height: 98px;
      }
      div {
        display: flex;
        p {
          width: 0;
          flex-grow: 1;
          line-height: 21px;
          font-size: 14px;
          margin: 0;
          padding: 0;
        }
      }
    }
  }
`;

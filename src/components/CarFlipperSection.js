import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import landRover from "../assets/images/land-rover.png";
import porsche from "../assets/images/porsche.png";
import arrow from "../assets/images/arrow.svg";
import arrowLeft from "../assets/images/arrow-left.svg";
import mpg from "../assets/images/mpg.png";
import hp from "../assets/images/hp.png";
import zeroTo60 from "../assets/images/0-60.png";
import { gsap, Power3 } from "gsap";
import { useInView } from "react-intersection-observer";

export const CarFlipperSection = () => {
  const [carSelected, setCarSelected] = useState(0); //two cars, 0 and 1
  const [firstRun, setFirstRun] = useState(true);
  const [firstView, setFirstView] = useState(true);
  //interesection observer
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  useEffect(() => {
    console.log(
      "what is going on here? ",
      window.matchMedia("(max-width: 1000px)").matches
    );
    if (inView && firstView) {
      setFirstView(false);
      //animate yellow box
      gsap.to(yellowBoxRef, 1, {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        delay: 0,
        // scaleX: 1,
        marginLeft: window.matchMedia("(max-width: 1000px)").matches ? 0 : 101,
        width: window.matchMedia("(max-width: 1000px)").matches ? "100vw" : 524,
      });

      //animate yellow box content
      gsap.fromTo(
        boxContentRef,
        1,
        {
          opacity: 0,
          y: -5,
          ease: Power3.easeOut,
          delay: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          ease: Power3.easeOut,
          delay: 0.8,
        }
      );

      //animate car
      gsap.fromTo(
        carRef,
        2,
        {
          opacity: 0,
          x: "100%",
          y: cars[carSelected].y,
          ease: Power3.easeOut,
          delay: 0.2,
        },
        {
          opacity: 1,
          x: 0,
          y: cars[carSelected].y,
          ease: Power3.easeOut,
          delay: 0.2,
        }
      );

      //animate large title
      gsap.fromTo(
        bigTitleRef,
        1,
        {
          opacity: 0,
          y: "-100%",
          ease: Power3.easeOut,
          delay: 0,
        },
        {
          opacity: 1,
          y: 0,
          ease: Power3.easeOut,
          delay: 0,
        }
      );

      //animate subtitle
      gsap.fromTo(
        subTitleRef,
        1,
        {
          opacity: 0,
          y: "-100%",
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

      //animate arrows
      gsap.fromTo(
        arrowsRef,
        1,
        {
          opacity: 0,

          ease: Power3.easeOut,
          delay: 0.5,
        },
        {
          opacity: 1,

          ease: Power3.easeOut,
          delay: 0.5,
        }
      );
    }
  }, [inView]);

  //refs
  let yellowBoxRef = useRef(null);
  let boxContentRef = useRef(null);
  let carRef = useRef(null);

  let bigTitleRef = useRef(null);
  let subTitleRef = useRef(null);
  let arrowsRef = useRef(null);

  const switchCars = () => {
    gsap.fromTo(
      boxContentRef,
      0.8,
      {
        opacity: 0,
        y: 30,
        ease: Power3.easeOut,
        delay: 0,
      },
      {
        scrollTrigger: yellowBoxRef,
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
        delay: 0,
      }
    );

    gsap.fromTo(
      carRef,
      2,
      {
        opacity: 0,
        x: "100%",
        ease: Power3.easeOut,
        delay: 0,
        y: cars[carSelected].y,
      },
      {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        delay: 0,
        y: cars[carSelected].y,
      }
    );
  };

  const cars = [
    {
      name: "LAND ROVER",
      subtitle: "2019 - RANGE ROVER VELAR",
      mpg: "25/29",
      hp: "247",
      "0-60": 6.4,
      img: landRover,
      y: 0,
    },
    {
      name: "PORSCHE",
      subtitle: "2019 - 911 CARRERA S",
      mpg: "19/24",
      hp: "443",
      "0-60": 3.2,
      img: porsche,
      y: window.matchMedia("(max-width: 700px)") ? 10 : 60,
    },
  ];

  useEffect(() => {
    //run on load for test, then change to "when in view"
  }, []);

  useEffect(() => {
    if (!firstRun) {
      console.log("Switch cars ran");
      switchCars();
    }
  }, [carSelected, firstRun]);

  return (
    <CarFlipperSectionStyled ref={ref}>
      <LeftSectionStyled>
        <YellowBoxStyled ref={(el) => (yellowBoxRef = el)}>
          <ArrowsStyled ref={(el) => (arrowsRef = el)}>
            <img
              src={arrowLeft}
              alt=""
              onClick={() => {
                setFirstRun(false);
                setCarSelected(carSelected === 0 ? 1 : 0);
              }}
            />
            <img
              src={arrow}
              alt=""
              onClick={() => {
                setFirstRun(false);
                setCarSelected(carSelected === 0 ? 1 : 0);
              }}
            />
          </ArrowsStyled>
          <ContentBoxStyled ref={(el) => (boxContentRef = el)}>
            <h3>{cars[carSelected].name}</h3>
            <h4>{cars[carSelected].subtitle}</h4>
            <InfoLine image={mpg} title={"MPG"} value={cars[carSelected].mpg} />
            <InfoLine image={hp} title={"HP"} value={cars[carSelected].hp} />
            <InfoLine
              image={zeroTo60}
              title={"0-60"}
              value={cars[carSelected]["0-60"]}
            />
          </ContentBoxStyled>

          <CarImageStyled
            src={cars[carSelected].img}
            ref={(el) => (carRef = el)}
          />
        </YellowBoxStyled>
      </LeftSectionStyled>
      <RightSectionStyled>
        <h2 ref={(el) => (bigTitleRef = el)}>
          SELECT A VEHICLE
          {window.matchMedia("(max-width: 700px)") ? " " : <br />}
          FROM YOUR PHONE
        </h2>
        <p ref={(el) => (subTitleRef = el)}>
          Select from a wide range of luxury vehicles in our inventory. Drive it
          for a month, trade it the next for something else you have always
          wanted to own.
        </p>
      </RightSectionStyled>
    </CarFlipperSectionStyled>
  );
};

const CarFlipperSectionStyled = styled.div`
  height: 1259px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: wrap-reverse;
    height: initial;
  }
`;

const LeftSectionStyled = styled.div`
  height: 100%;
  width: 786px;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ContentBoxStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const RightSectionStyled = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  flex-direction: column;
  h2 {
    font-family: ${(props) => props.theme.fonts.bebas};
    font-size: 95px;
    color: ${(props) => props.theme.colors.blackTitle};
    margin: 0;
    margin-top: 459px;
    font-weight: 100;
    line-height: 98px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 45px;
      margin: 0;
      margin-top: 169px;
      margin-left: 20px !important;
      font-weight: 100;
      line-height: 48px;
      letter-spacing: -0.217059px;
      max-width: calc(100vw - 40px);
    }
  }
  p {
    margin: 0;
    font-size: 16px;
    width: 456px;
    letter-spacing: -0.470588px;
    color: ${(props) => props.theme.colors.blackTrue};
    line-height: 26px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-left: 20px;
      margin-right: 20px;
      width: 100vw;
      max-width: calc(100vw - 40px);
    }
  }
`;

const YellowBoxStyled = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  height: 661px;
  width: 0;
  margin-top: 338px;
  margin-left: 626px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  max-width: 524px;
  /* transform: scaleX(0); */

  h3 {
    font-family: ${(props) => props.theme.fonts.bebas};
    margin: 0;
    margin-top: 181px;
    margin-left: 129px;
    color: ${(props) => props.theme.colors.blackTrue};
    font-size: 64px;
    line-height: 75px;
    font-weight: 100;
  }
  h4 {
    font-family: ${(props) => props.theme.fonts.bebas};
    margin: 0;
    color: ${(props) => props.theme.colors.grey4B5};
    font-size: 17px;
    margin-top: 3px;
    margin-left: 129px;
    margin-bottom: 62px;
    font-weight: 100;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90vw;
    margin-left: 0;
    height: 394px;
    border: solid white 20px;
    box-sizing: border-box;
    margin-top: 0;
    max-width: 500px;

    h3 {
      font-family: ${(props) => props.theme.fonts.bebas};
      margin: 0;
      margin-top: 38px;
      margin-left: 30px;
      color: ${(props) => props.theme.colors.blackTrue};
      font-size: 40px;
      line-height: 47px;
      font-weight: 100;
    }
    h4 {
      font-family: ${(props) => props.theme.fonts.bebas};
      margin: 0;
      color: ${(props) => props.theme.colors.grey4B5};
      font-size: 17px;
      margin-top: 3px;
      margin-left: 30px;
      margin-bottom: 30px;
      font-weight: 100;
    }
  }
`;

const ArrowsStyled = styled.div`
  position: absolute;
  top: 45px;
  right: 30px;
  opacity: 0;
  img {
    margin-left: 21px;
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: 56px;
  }
`;

const CarImageStyled = styled.img`
  position: absolute;
  top: 469px;
  left: 91px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 388px;
    max-width: 90vw;
    top: 300px;
    left: 0px;
  }
`;

const InfoLine = ({ image, title, value }) => {
  return (
    <InfoLineStyled>
      <img src={image} />
      <h5>{title}</h5>
      <div>{value}</div>
    </InfoLineStyled>
  );
};

const InfoLineStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 129px;
  margin-bottom: 21px;
  div {
    font-family: ${(props) => props.theme.fonts.bebas};
    font-size: 31px;
    color: ${(props) => props.theme.colors.black1B1};
    margin-left: 31px;
    font-weight: 100;
  }
  h5 {
    width: 24px;
    font-family: ${(props) => props.theme.fonts.bebas};
    font-size: 16px;
    color: ${(props) => props.theme.colors.black1B1};
    margin: 0;
    margin-left: 10px;
    font-weight: 100;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 30px;
  }
`;

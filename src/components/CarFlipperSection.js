import React, { useState } from "react";
import styled from "styled-components";
import landRover from "../assets/images/land-rover.png";
import porsche from "../assets/images/porsche.png";
import arrow from "../assets/images/arrow.png";
import mpg from "../assets/images/mpg.png";
import hp from "../assets/images/hp.png";
import zeroTo60 from "../assets/images/0-60.png";

export const CarFlipperSection = () => {
  const [carSelected, setCarSelected] = useState(0); //two cars, 0 and 1

  const cars = [
    {
      name: "LAND ROVER",
      subtitle: "2019 - RANGE ROVER VELAR",
      mpg: "25/29",
      hp: "247",
      "0-60": 6.4,
      img: landRover,
    },
    {
      name: "PORSCHE",
      subtitle: "2019 - 911 CARRERA S",
      mpg: "19/24",
      hp: "443",
      "0-60": 3.2,
      img: porsche,
    },
  ];
  return (
    <CarFlipperSectionStyled>
      <LeftSectionStyled>
        <YellowBoxStyled>
          <h3>{cars[carSelected].name}</h3>
          <h4>{cars[carSelected].subtitle}</h4>
          <InfoLine image={mpg} title={"MPG"} value={cars[carSelected].mpg} />
          <InfoLine image={hp} title={"HP"} value={cars[carSelected].hp} />
          <InfoLine
            image={zeroTo60}
            title={"0-60"}
            value={cars[carSelected]["0-60"]}
          />
        </YellowBoxStyled>
      </LeftSectionStyled>
      <RightSectionStyled>
        <h2>
          SELECT A VEHICLE
          <br />
          FROM YOUR PHONE
        </h2>
        <p>
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
  background-color: pink;
`;

const LeftSectionStyled = styled.div`
  height: 100%;
  width: 786px;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
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
  }
  p {
    margin: 0;
    font-size: 16px;
    width: 456px;
    letter-spacing: -0.470588px;
    color: ${(props) => props.theme.colors.blackTrue};
    line-height: 26px;
  }
`;

const YellowBoxStyled = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  height: 661px;
  width: 524px;
  margin-top: 338px;
  margin-left: 101px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
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
  margin-left: 128.5px;
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
`;

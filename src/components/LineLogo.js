import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo-line.png";

export const LineLogo = () => {
  return <LineLogoStyled src={logo} />;
};

const LineLogoStyled = styled.img`
  position: absolute;
  top: 42px;
  left: 101px;
`;

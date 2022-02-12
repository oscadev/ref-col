import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo-line.png";

export const LineLogo = () => {
  return <LineLogoStyled src={logo} />;
};

const LineLogoStyled = styled.img`
  position: absolute;
  top: calc(42vw / 1600 * 100);
  left: calc(101vw / 1600 * 100);
  width: calc(226vw / 1600 * 100);
  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: 42px;
    left: 20px;
    width: initial;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    top: 42px;
    left: 101px;
    width: initial;
  }
`;

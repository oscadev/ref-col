import React from "react";
import { H1Styled } from "./styles/H1.styled";

export const H1 = () => {
  return (
    <H1Styled>
      DRIVE A NEW
      {window.matchMedia("(max-width: 700px)") ? " " : <br />} CAR EVERY MONTH.
    </H1Styled>
  );
};

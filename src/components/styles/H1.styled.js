import React from "react";
import styled from "styled-components";

export const H1Styled = styled.h1`
  font-family: ${(props) => props.theme.fonts.bebas};
  font-size: 145px;
  line-height: 138px;
  letter-spacing: -4.10319px;
  color: ${(props) => props.theme.colors.white};
  width: 827px;
  font-weight: 100;
  margin: 0;
  margin-left: 95px;
  margin-top: 179px;
  transform: translateY(-30%) translateX(-5%);
  opacity: 0;
`;

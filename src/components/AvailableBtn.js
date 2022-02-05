import React from "react";
import styled from "styled-components";
import arrow from "../assets/images/arrow.png";

export const AvailableBtnStyled = styled.div`
  width: 232px;
  height: 54px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-left: 99px;
  margin-top: 21px;
  /* border: solid 1px white; */
  opacity: 0;
  transform: translateY(-100%);

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.grey414};
    font-size: 16px;
  }
`;

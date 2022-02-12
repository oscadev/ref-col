import React from "react";
import styled from "styled-components";

export const AppStyled = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

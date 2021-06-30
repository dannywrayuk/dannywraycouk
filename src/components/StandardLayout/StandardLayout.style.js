import styled, { css } from "styled-components";
import Config from "../../config";

const {
  Theme: {
    Breakpoints: { OnMediumUp },
  },
} = Config;

export const ChildrenContainer = styled.div`
  flex-grow: 1;
  ${({ sideMargin }) =>
    sideMargin &&
    css`
      margin-left: 15px;
      margin-right: 15px;
      @media ${OnMediumUp} {
        margin-left: 100px;
        margin-right: 100px;
      }
    `}
  ${({ topMargin }) =>
    topMargin &&
    css`
      margin-top: 100px;
    `}
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

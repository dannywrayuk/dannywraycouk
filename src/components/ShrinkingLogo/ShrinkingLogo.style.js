import styled, { css } from "styled-components";

export const Sticky = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;

export const LogoContainer = styled.div`
  margin: 12px;
  height: 100px;
  ${({ shouldShrink }) =>
    shouldShrink &&
    css`
      height: 50px;
    `}
`;

export const StyledLogo = styled.div`
  transition: 1s;
  transform-origin: top left;
  ${({ shouldShrink }) =>
    shouldShrink &&
    css`
      transform: scale(0.5);
    `}
`;

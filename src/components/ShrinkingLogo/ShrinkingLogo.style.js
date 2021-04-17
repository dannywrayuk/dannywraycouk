import styled, { css } from "styled-components";

export const Sticky = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
`;

export const LogoContainer = styled.div`
  margin: 12px 12px 0 auto;
  height: 100px;
  ${({ shouldShrink }) =>
    shouldShrink &&
    css`
      height: 50px;
    `}
`;

export const StyledLogo = styled.div`
  transition: 2s;
  transform-origin: top right;
  ${({ shouldShrink }) =>
    shouldShrink &&
    css`
      transform: scale(0.5);
    `}
`;

import styled, { css } from "styled-components";

export const StickyContainer = styled.div`
  position: fixed;
  margin: 12px;
  text-align: right;
  top: 0;
  left: 0;
  width: 80px;
`;

export const Transformer = styled.div`
  height: 100px;
  ${({ shouldShrink }) =>
    shouldShrink &&
    css`
      height: 50px;
    `}
`;

export const Animation = styled.div`
  transition: 1s;
  transform-origin: top left;
  ${({ shouldShrink }) =>
    shouldShrink &&
    css`
      transform: scale(0.5);
    `}
`;

export const Line = styled.div`
  display: inline-block;
  font-size: 24px;
  color: white;
`;

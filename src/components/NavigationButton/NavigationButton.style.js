import styled, { css } from "styled-components";

export const Sticky = styled.div`
  transition: 0.5s;
  position: fixed;
  top: 20px;
  left: 20px;
  border-radius: 5px;
  background-color: ${({ theme, open }) =>
    open ? theme.colours.SECONDARY1 : ""};
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;

export const Icon = styled.div`
  transition: 0.5s;
  width: 30px;
  height: 30px;
  padding: 10px;
  margin-left: 10px;
  stroke: ${({ theme }) => theme.colours.PRIMARY1};
  ${({ open }) =>
    open &&
    css`
      transform: rotateX(180deg);
    `};
`;

export const Line = styled.p`
  font-weight: bold;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  :hover {
    background-color: ${({ theme }) => theme.colours.TERTIARY1};
  }
`;

export const Content = styled.div`
  transition: 0.5s;
  overflow: hidden;
  color: white;
  max-height: 0px;
  max-width: 0px;
  opacity: 0;
  ${({ open, height }) =>
    open &&
    css`
      max-height: ${`${height}px`};
      max-width: 200px;
      opacity: 1;
    `};
`;

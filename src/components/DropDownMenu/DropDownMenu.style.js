import styled, { css } from "styled-components";

export const Sticky = styled.div`
  position: fixed;
  transition: 0.5s;
  top: 20px;
  right: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme, menuOpen }) =>
    menuOpen ? theme.colours.SECONDARY1 : ""};
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-left: auto;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  transition: 0.5s;
  width: 30px;
  height: 30px;
  stroke: ${({ theme }) => theme.colours.PRIMARY1};
  ${({ menuOpen }) =>
    menuOpen &&
    css`
      transform: rotateX(180deg);
    `};
`;

export const Option = styled.p`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  :hover {
    background-color: ${({ theme }) => theme.colours.TERTIARY1};
  }
`;

export const MenuText = styled.div`
  color: ${({ theme }) => theme.colours.PRIMARY1};
  flex-grow: 1;
  text-align: center;
  overflow-x: hidden;
  transition: 0.5s;
  width: 0;
  ${({ menuOpen }) =>
    menuOpen ||
    css`
      opacity: 0;
    `};
`;

export const Content = styled.div`
  transition: 0.5s;
  overflow: hidden;
  color: ${({ theme }) => theme.colours.PRIMARY3};
  max-height: 0px;
  max-width: 0px;
  opacity: 0;
  ${({ menuOpen, height }) =>
    menuOpen &&
    css`
      max-height: ${`${height}px`};
      max-width: 200px;
      opacity: 1;
    `};
`;

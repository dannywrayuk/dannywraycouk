import React from 'react';

import styled, { css } from 'styled-components';

import { ReactComponent as SvgCircle } from '../../../images/svg/circle.svg';
import { ReactComponent as SvgArrow } from '../../../images/svg/triangle.svg';
import Button from '../../_molecules/Button';
import LinkButton from '../../_molecules/LinkButton';
import Paragraph from '../../styled/Paragraph';
import SmallTitle from '../../styled/SmallTitle';

export const DropDown = styled.div`
  transition: 0.5s;
  overflow: hidden;
  max-height: 0;
  opacity: 0;

  ${({ isOpen, height }) => isOpen && css`
    max-height: ${`${height}px`};
    opacity: 1;
    margin-bottom: 20px;
  `}
`;

export const TitleButton = styled(Button)`
  display: flex;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 5px;
  transition: 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.varAccent};
    padding-left: 25px;
    transform: scale(1.03);
  }

  ${({ isOpen }) => isOpen && css`
    background-color: ${({ theme }) => theme.colors.accent};
    padding-left: 25px;
  `}

`;

export const Title = styled(SmallTitle)`
  margin-left: 10px;
  margin-bottom: 0;
  text-align:left;
`;

export const Link = styled(LinkButton)`
  display: flex;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;
  padding: 10px 20px;
  margin: 2px;
  transition: 0.1s;
  justify-content: left;
  text-align: left;
  white-space: pre-wrap;
  transform: scale(0.97);

  &:hover {
    transform: scale(1);
    padding-left: 20px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;


export const ElementDescription = styled(Paragraph)`
  padding-left: 20px;
`;

export const Arrow = styled(({ isOpen, ...props }) => <SvgArrow {...props} />)`
  transition: 0.5s;
  height: 15px;
  margin: auto 0;
  fill: ${({ theme }) => theme.colors.icon};
  ${({ isOpen }) => isOpen && css`
    transform: rotate(90deg);
  `}
`;

export const Circle = styled(SvgCircle)`
  max-width: 7px;
  margin: auto 15px auto 0 ;
  fill: ${({ theme }) => theme.colors.mainYellow};
  `;

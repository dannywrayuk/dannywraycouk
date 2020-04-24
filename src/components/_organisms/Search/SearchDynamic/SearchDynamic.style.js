import React from 'react';

import styled, { css } from 'styled-components';

import { ReactComponent as SvgClose } from '../../../../images/svg/close.svg';
import { ReactComponent as SvgSearch } from '../../../../images/svg/search.svg';
import AlignCenter from '../../../styled/AlignCenter';

export const Wrapper = styled(AlignCenter)`
  height: 100%;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  background-color: #d3d3d3;
  height: 30px;
  border-radius: 5px;
  width: 100%;
`;


export const InputContainer = styled(AlignCenter)`
  width: 100%;
  transition: 0.5s;

  ${({ isExtended }) => !isExtended && css`
    opacity: 0;
    visibility: hidden;
  `}
`;

export const Field = styled.fieldset`
  display: inline-flex;
  position: relative;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  position: absolute;
  left: 0;
  width: 100%;
  -webkit-appearance: none;
  border: none;
  outline: none;
  height: 100%;
  background-color: #d3d3d3;
  border-radius: 5px;
`;

export const Search = styled(SvgSearch)`
  fill: #494949;
  height: 20px;
  margin: 0px 5px;
`;

export const Close = styled(({ isExtended, ...props }) => <SvgClose {...props} />)`
  display: inline-flex;
  fill: #494949;
  margin: 0px 5px;
  height: 15px;
  transition: 0.5s;

  ${({ isExtended }) => !isExtended && css`
    width: 0px;
    max-width: 0px;
    opacity: 0;
    max-width: 15px;
    margin: 0;
  `}
`;

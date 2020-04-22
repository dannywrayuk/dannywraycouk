import styled, { css } from 'styled-components';

import { ReactComponent as close } from '../../../../images/svg/close.svg';
import { ReactComponent as search } from '../../../../images/svg/search.svg';
import Button from '../../../_molecules/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const SearchButton = styled(Button)`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;

  ${({ isExtended }) => isExtended && css`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    transition: 0.5s;
  `}
`;

export const CloseButton = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
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

export const Search = styled(search)`
  fill: #494949;
  height: 20px;
  margin: 0px 5px;
`;

export const Close = styled(close)`
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

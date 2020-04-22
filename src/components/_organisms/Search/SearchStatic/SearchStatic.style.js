import styled from 'styled-components';

import { ReactComponent as search } from '../../../../images/svg/search.svg';
import Button from '../../../_molecules/Button';

export const Box = styled.div`
  display: flex;
  background-color: #d3d3d3;
  height: 30px;
  border-radius: 5px;
`;

export const ImageContainer = styled(Button)`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 5px; 
`;

export const Search = styled(search)`
  display: inline-flex;
  height: 20px;
  fill: #494949;
`;

export const Input = styled.input`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  background-color: #d3d3d3;
  border: none;
  border-radius: 5px;
`;

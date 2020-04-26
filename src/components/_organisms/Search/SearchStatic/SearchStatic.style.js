import styled from 'styled-components';

import { ReactComponent as SvgSearch } from '../../../../images/svg/search.svg';
import Button from '../../../_molecules/Button';
import AlignCenter from '../../../styled/AlignCenter';

export const Box = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.accent};
  height: 30px;
  border-radius: 5px;
`;

export const ImageContainer = styled(AlignCenter).attrs({
  as: Button,
})`
  margin: 0px 5px; 
`;

export const Search = styled(SvgSearch)`
  display: inline-flex;
  height: 20px;
  fill: ${({ theme }) => theme.colors.varAccent};
`;

export const Input = styled(AlignCenter).attrs({
  as: 'input',
})`
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: 5px;
`;

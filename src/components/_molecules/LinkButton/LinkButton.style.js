import styled from 'styled-components';

import AbstractElement from '../../_atoms/AbstractElement';

export const StyledElement = styled(AbstractElement)`
  color: unset;
  border: none; 
  background: inherit;
  outline: none;
  cursor: pointer;
  text-decoration: inherit;

  &:visited, &:hover, &:active { 
    outline: none;
    cursor: pointer;
    text-decoration: inherit;
  }
`;

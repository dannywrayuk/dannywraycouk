import styled, { css } from 'styled-components';

import AlignCenter from '../../styled/AlignCenter';

export const Container = styled(AlignCenter)`
  margin: 20px;
  transition:1s;
  
  ${({ shadow }) => shadow && css`
    -webkit-box-shadow: 0 2px 4px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);
    box-shadow: 0 2px 4px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);
  `}
  ${({ square }) => !square && css`
    border-radius: 50%;
  `}
`;

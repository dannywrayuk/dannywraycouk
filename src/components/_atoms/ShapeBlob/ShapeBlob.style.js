import styled, { css } from 'styled-components';

import AlignCenter from '../../styled/AlignCenter';

export const Container = styled(AlignCenter)`
  margin: 20px;
  transition: 1s;
  
  ${({ shadow }) => shadow && css`
    box-shadow: ${({ theme }) => theme.shadow};
  `}
  ${({ square }) => !square && css`
    border-radius: 50%;
  `}
`;

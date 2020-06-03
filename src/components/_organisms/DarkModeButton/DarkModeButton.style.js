import styled from 'styled-components';

import AlignCenter from '../../styled/AlignCenter';

export const Icon = styled.div`
  height:25px;
  fill: ${({ theme }) => theme.colors.icon};
`;

export const Wrapper = styled(AlignCenter)`
  margin-left: auto;
  padding: 0 20px;
  @media screen and (max-width: 390px) {
    padding: 0 10px;
  }
`;

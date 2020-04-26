import styled from 'styled-components';

import AlignCenter from '../../styled/AlignCenter';

export const Wrapper = styled.div`
  display: flex;
  min-width: 270px;
  transition: 0.2s;
  justify-content: center;

  &:hover{
    transform: scale(1.1);
  }
`;

export const Content = styled(AlignCenter)`
  text-align: left;
  min-width: 170px;
`;

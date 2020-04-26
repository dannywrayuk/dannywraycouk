import styled from 'styled-components';

import { ReactComponent as SvgAtom } from '../../../images/svg/atom.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

export const Spinner = styled(SvgAtom)`
  width: 50px;
  animation: spin 2s linear infinite;
  fill: ${({ theme }) => theme.colors.mainYellow};

  @keyframes spin {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
  }
`;

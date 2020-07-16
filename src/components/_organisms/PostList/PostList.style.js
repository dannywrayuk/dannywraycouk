import styled from 'styled-components';

import Link from '../../_molecules/LinkButton';

export const Wrapper = styled(Link)`
  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.background};
  width:100%;
  border: 2px solid ${({ theme }) => theme.colors.varIcon};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  margin-bottom:20px;
  overflow: hidden;
`;

export const Stripe = styled.div`
  width: 10vw;
  max-width: 200px;
  min-width: 50px;
  background-color: ${({ theme }) => theme.colors.mainYellow};
`;

export const Image = styled.img`
    min-width: 50px;
    min-height: 50px;
    max-width: 200px;
    max-height:200px;
    width: 10vw;
    height: 10vw;
`;

export const TextRegion = styled.div`
    margin: 20px 20px 0;
`;

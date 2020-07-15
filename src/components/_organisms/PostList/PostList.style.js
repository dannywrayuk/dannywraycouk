import styled from 'styled-components';

import Link from '../../_molecules/LinkButton';

export const Wrapper = styled(Link)`
  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.background};
  width:100%;
  border: 1px solid ${({ theme }) => theme.colors.varIcon};
  border-radius: 10px;
  max-height:200px;
  box-shadow: ${({ theme }) => theme.shadow};
  margin-bottom:20px;
  overflow: hidden;
`;

export const Image = styled.img`
    min-width: 100px;
    min-height: 100px;
    max-width: 200px;
    max-height:200px;
    width: 10vw;
    height: 10vw;
`;

export const TextRegion = styled.div`
    height: 6vw;
    margin: 20px;
`;

import styled from 'styled-components';

import LinkButton from '../../_molecules/LinkButton';
import AlignCenter from '../../styled/AlignCenter';

export const Link = styled(AlignCenter).attrs({
  as: LinkButton,
})`
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.varAccent};
  letter-spacing: -1px;

  &:hover {
    border: solid;
    border-width: 3px 0px;
    border-top-color: ${({ theme }) => theme.colors.header};
  }

  @media screen and (max-width: 390px) {
    padding: 0 10px;
  }
`;

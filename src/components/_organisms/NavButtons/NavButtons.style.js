import styled from 'styled-components';

import LinkButton from '../../_molecules/LinkButton';
import AlignCenter from '../../styled/AlignCenter';

export const Link = styled(AlignCenter).attrs({
  as: LinkButton,
})`
  text-decoration: none;
  padding: 0 20px;
  color: #686868;
  font-size: 1rem;
  letter-spacing: -1px;
  border-top-color: white;

  &:hover {
    border: solid;
    border-width: 3px 0px;
    border-top-color: white;
  }

  @media screen and (max-width: 390px) {
    padding: 0 10px;
  }
`;

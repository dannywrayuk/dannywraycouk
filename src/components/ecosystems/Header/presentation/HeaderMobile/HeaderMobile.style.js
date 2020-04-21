import styled, { css } from 'styled-components';

import LinkButton from '../../../../_molecules/LinkButton';

export const MenuContainer = styled.div`
  display: inline-flex;
  transition: 0.5s;
  ${({ isExtended }) => isExtended && css`
      flex-grow:1;
  `}
`;

export const LogoContainer = styled.div`
  display: inline-flex;
  overflow: hidden;
  max-width: 90vw;
  flex-grow: 1;
  transition: 0.5s;
  ${({ isExtended }) => isExtended && css`
    width: 0px;
    max-width: 0px;
    opacity: 0;
  `}
`;

export const SearchContainer = styled.div`
  display: inline-flex;
  margin-left: auto;
  padding-right: 10px;
  order: 2;
  transition: 0.5s;
  ${({ isExtended }) => isExtended && css`
  flex-grow: 1;
  `}
`;

export const AlignLogo = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
`;

export const Link = styled(LinkButton)`
    height: 30px;
`;

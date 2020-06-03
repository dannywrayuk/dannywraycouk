import styled, { css } from 'styled-components';

import { ReactComponent as SvgHamburger } from '../../../images/svg/hamburger.svg';
import AlignCenter from '../../styled/AlignCenter';

export const Hamburger = styled(SvgHamburger)`
    height: 20px;
    fill: ${({ theme }) => theme.colors.varAccent};
  `;

export const Menu = styled.div`
  display: inline-flex;
  max-width: calc(100vw - 90px);
  transition: 0.5s;
  ${({ isExtended }) => !isExtended && css`
      max-width: 0px;
      opacity: 0;
      overflow: hidden;
      visibility: hidden;
      @media screen and (max-width: 325 px) {
        overflow: scroll;
      }
  `}
`;

export const ButtonWrapper = styled(AlignCenter)`
  order: 2;
  margin: 0px 10px 0px auto;
  padding-left: 10px;
  transition: 0.5s;
  ${({ isExtended }) => (isExtended && css`
    padding-left:0px;
    transform: rotate(90deg);
  `)}
`;

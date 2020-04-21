import styled, { css } from 'styled-components';

import { ReactComponent as hamburger } from '../../../images/svg/hamburger.svg';

export const Hamburger = styled(hamburger)`
    height: 20px;
    fill: #494949;
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

export const ButtonWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  order: 2;
  margin: 0px 10px 0px auto;
  padding-left: 10px;
  transition: 0.5s;
  ${({ isExtended }) => (isExtended && css`
  padding-left:0px;
  transform: rotate(90deg);
  `)}
`;

// .Button {

// }

// .ButtonClicked {

// }


// .menuContainer{
//   display: inline-flex;
//   max-width: 0px;
//   overflow: hidden;

//   opacity: 0;
//   visibility: hidden;
//   transition: 0.5s;
// }

// .menuFill{
//   display: inline-flex;
//   max-width: calc(100vw - 90px);
//   transition: 0.5s;
// }
// }

import React, { useState } from 'react';

import AppConstants from '../../../../../utilities/AppConstants';
import Logo from '../../../../_atoms/Logo';
import withText from '../../../../_atoms/Text';
import Search from '../../../../_organisms/Search';
import HamburgerMenu from '../../../HamburgerMenu';
import { Bar } from '../../container/Header.style';
import {
  AlignLogo,
  Link,
  LogoContainer,
  MenuContainer,
  SearchContainer,
} from './HeaderMobile.style';

const { ROUTES } = AppConstants;

const HeaderMobile = () => {
  const [searchExtended, setSearchExtended] = useState(false);
  const [menuExtended, setMenuExtended] = useState(false);

  const searchClick = () => {
    setSearchExtended(!searchExtended);
    setMenuExtended(false);
  };

  const closeClick = () => {
    setSearchExtended(false);
  };

  const hamburgerClick = () => {
    setMenuExtended(!menuExtended);
    setSearchExtended(false);
  };

  return (
    <Bar>
      <MenuContainer isExtended={menuExtended}>
        <HamburgerMenu
          onClick={hamburgerClick}
          isExtended={menuExtended}
        />
      </MenuContainer>
      <LogoContainer isExtended={searchExtended || menuExtended}>
        <AlignLogo>
          <Link to={ROUTES.BASE}>
            <Logo showText />
          </Link>
        </AlignLogo>
      </LogoContainer>
      <SearchContainer isExtended={searchExtended}>
        <Search
          onSearchClick={searchClick}
          onCloseClick={closeClick}
          isExtended={searchExtended}
          dynamic
        />
      </SearchContainer>
    </Bar>
  );
};


export default withText('Header')(HeaderMobile);

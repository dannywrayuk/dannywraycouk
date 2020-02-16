import React, { useState } from 'react';

import { withText } from '../../../../../text/textStore';
import AppConstants from '../../../../../utilities/AppConstants';
import Logo from '../../../../_atoms/Logo';
import HamburgerMenu from '../../../../_molecules/HamburgerMenu';
import LinkButton from '../../../../_molecules/LinkButton';
import Search from '../../../../_molecules/Search';

import sharedStyle from '../../container/Header.css';
import style from './HeaderMobile.css';

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
    <div className={sharedStyle.bar}>
      <div className={menuExtended ? style.menuFill : style.menuContainer}>
        <HamburgerMenu
          onClick={hamburgerClick}
          isExtended={menuExtended}
        />
      </div>
      <div className={(searchExtended || menuExtended) ? style.logoHide : style.logoContainer}>
        <div className={style.alignLogo}>
          <LinkButton className={style.linkfix} to={ROUTES.BASE}>
            <Logo showText />
          </LinkButton>
        </div>
      </div>
      <div className={searchExtended ? style.searchFill : style.searchContainer}>
        <Search
          onSearchClick={searchClick}
          onCloseClick={closeClick}
          isExtended={searchExtended}
          dynamic
        />
      </div>
    </div>
  );
};


export default withText('HomePageMain.Header')(HeaderMobile);

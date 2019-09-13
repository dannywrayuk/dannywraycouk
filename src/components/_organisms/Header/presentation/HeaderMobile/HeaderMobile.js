import React, { useState } from 'react';
import { withText } from '../../../../../text/textStore';
import LogoWithText from '../../../../_atoms/LogoWithText';
import SearchButton from '../../../../_molecules/SearchButton';
import HamburgerMenu from '../../../../_molecules/HamburgerMenu';

import style from './HeaderMobile.css';


const Header = () => {
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
    <div className={style.bar}>
      <div className={menuExtended ? style.menuFill : style.menuContainer}>
        <HamburgerMenu
          onClick={hamburgerClick}
          isExtended={menuExtended}
        />
      </div>
      <div className={(searchExtended || menuExtended) ? style.logoHide : style.logoContainer}>
        <div className={style.alignLogo}>
          <LogoWithText />
        </div>
      </div>
      <div className={searchExtended ? style.searchFill : style.searchContainer}>
        <SearchButton
          onSearchClick={searchClick}
          onCloseClick={closeClick}
          isExtended={searchExtended}
        />
      </div>
    </div>
  );
};


export default withText('HomePageMain.Header')(Header);

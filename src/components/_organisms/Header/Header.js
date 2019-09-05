import React from 'react';
import Logo from '../../_atoms/Logo';

import style from './Header.css';

const Header = () => (
  <div className={style.bar}>
    <div className={style.logo}>
      <Logo />
    </div>
    {/* <div className={style.controls}>
      <div className={style.navitems}>
        <div>navitems</div>
      </div>
      <div className={style.search}>
        <div>search</div>
      </div>
    </div> */}
  </div>
);

export default Header;

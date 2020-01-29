import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Hamburger } from '../../../images/svg/hamburger.svg';
import Button from '../Button';
import NavButtons from '../NavButtons';

import style from './HamburgerMenu.css';

const HamburgerMenu = ({ onClick, isExtended }) => {
  const [menuStyle, setMenuStyle] = useState(style.menuContainer);
  const [buttonStyle, setButtonStyle] = useState(style.Button);
  useEffect(() => {
    setMenuStyle(isExtended ? style.menuFill : style.menuContainer);
    setButtonStyle(isExtended ? style.ButtonClicked : style.Button);
  }, [isExtended]);

  return (
    <>
      <div className={menuStyle}>
        <NavButtons />
      </div>
      <div className={buttonStyle}>
        <Button onClick={onClick}>
          <Hamburger className={style.hamburger} />
        </Button>
      </div>
    </>
  );
};

HamburgerMenu.propTypes = {
  onClick: PropTypes.func,
  isExtended: PropTypes.bool,
};

HamburgerMenu.defaultProps = {
  onClick: () => {},
  isExtended: false,
};

export default HamburgerMenu;

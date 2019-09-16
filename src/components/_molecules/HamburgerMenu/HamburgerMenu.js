import PropTypes from 'prop-types';
import React from 'react';

import HamburgerButton from '../../_atoms/HamburgerButton';
import NavButtons from '../../_atoms/NavButtons';
import style from './HamburgerMenu.css';

const HamburgerMenu = ({ onClick, isExtended }) => (
  <>
    <div className={isExtended ? style.menuFill : style.menuContainer}>
      <NavButtons />
    </div>
    <div className={isExtended ? style.ButtonClicked : style.Button}>
      <HamburgerButton onClick={onClick} />
    </div>
  </>
);

HamburgerMenu.propTypes = {
  onClick: PropTypes.func,
  isExtended: PropTypes.bool,
};

HamburgerMenu.defaultProps = {
  onClick: () => {},
  isExtended: false,
};

export default HamburgerMenu;

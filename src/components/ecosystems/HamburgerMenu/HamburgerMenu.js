import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../_molecules/Button';
import NavButtons from '../../_organisms/NavButtons';
import { ButtonWrapper, Hamburger, Menu } from './HamburgerMenu.style';

const HamburgerMenu = ({ onClick, isExtended }) => (
  <>
    <Menu isExtended={isExtended}>
      <NavButtons />
    </Menu>
    <ButtonWrapper isExtended={isExtended}>
      <Button onClick={onClick}>
        <Hamburger />
      </Button>
    </ButtonWrapper>
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

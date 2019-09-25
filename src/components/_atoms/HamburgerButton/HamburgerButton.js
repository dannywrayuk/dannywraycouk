import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Hamburger } from '../../../images/svg/hamburger.svg';
import Button from '../../_molecules/Button';

import style from './HamburgerButton.css';

const HamburgerButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <Hamburger className={style.hamburger} />
  </Button>
);

HamburgerButton.propTypes = {
  onClick: PropTypes.func,
};

HamburgerButton.defaultProps = {
  onClick: () => {},
};

export default HamburgerButton;

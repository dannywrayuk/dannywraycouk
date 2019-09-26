import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../_molecules/Button';
import Icon from '../Icon';

import style from './HamburgerButton.css';

const HamburgerButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <Icon icon="menu" rounded className={style.hamburger} />
  </Button>
);

HamburgerButton.propTypes = {
  onClick: PropTypes.func,
};

HamburgerButton.defaultProps = {
  onClick: () => {},
};

export default HamburgerButton;

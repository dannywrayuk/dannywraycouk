import React from 'react';
import PropTypes from 'prop-types';

import AbstractElement from '../../_atoms/AbstractElement';

import style from './Button.css';

const Button = ({
  children,
  className,
  ...props
}) => (
  <AbstractElement
    className={`${style.root} ${className}`}
    as="button"
    {...props}
  >
    {children}
  </AbstractElement>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  className: null,
};

export default Button;

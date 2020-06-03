import React from 'react';
import PropTypes from 'prop-types';

import { StyledElement } from './Button.style';

const Button = ({
  children,
  ...props
}) => (
  <StyledElement
    as="button"
    {...props}
  >
    {children}
  </StyledElement>
);

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: null,
};

export default Button;

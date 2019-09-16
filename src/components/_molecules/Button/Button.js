import PropTypes from 'prop-types';
import React from 'react';

import AbstractElement from '../../_atoms/AbstractElement';
import mergeStyles from '../../../utilities/css/mergeStyles';
import baseStyle from './Button.css';

const Button = ({
  children,
  className,
  ...props
}) => {
  const style = mergeStyles(baseStyle, { root: className });
  return (
    <AbstractElement
      modifierStyles={style}
      as="button"
      {...props}
    >
      {children}
    </AbstractElement>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  className: null,
};

export default Button;

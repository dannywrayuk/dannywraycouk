import React from 'react';
import PropType from 'prop-types';
import AbstractElement from '../../_atoms/AbstractElement';
import mergeStyles from '../../../utilities/css/mergeStyles';

import baseStyle from './Button.css';

const Button = ({
  children,
  modifierStyles,
  ...props
}) => {
  const style = mergeStyles(baseStyle, modifierStyles);
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
  children: PropType.node,
  modifierStyles: PropType.PropTypes.shape({}),
};

Button.defaultProps = {
  children: null,
  modifierStyles: null,
};

export default Button;

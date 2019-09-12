import React from 'react';
import PropType from 'prop-types';
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
  children: PropType.node,
  className: PropType.PropTypes.shape({}),
};

Button.defaultProps = {
  children: null,
  className: null,
};

export default Button;

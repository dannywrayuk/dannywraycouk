import React from 'react';
import PropTypes from 'prop-types';

import mergeStyles from '../../../utilities/css/mergeStyles';

import baseStyle from './AbstractElement.css';

const resolveCSS = (styles, cssType) => styles[cssType] || styles.root;

const AbstractElement = ({
  modifierStyles,
  children,
  as: ElementType,
  cssType,
  ...props
}) => {
  const style = mergeStyles(baseStyle, modifierStyles);
  return (
    <ElementType
      className={resolveCSS(style, cssType)}
      {...props}
    >
      {children}
    </ElementType>
  );
};

AbstractElement.propTypes = {
  children: PropTypes.node,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({})]).isRequired,
  modifierStyles: PropTypes.shape({}),
  cssType: PropTypes.string,
};

AbstractElement.defaultProps = {
  children: null,
  modifierStyles: null,
  cssType: 'root',
};

export default AbstractElement;

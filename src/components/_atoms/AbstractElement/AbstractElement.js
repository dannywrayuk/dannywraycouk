import React from 'react';
import PropTypes from 'prop-types';

import style from './AbstractElement.css';

const AbstractElement = ({
  children,
  className,
  as: ElementType,
  ...props
}) => (
  <ElementType
    className={`${style.root} ${className}`}
    {...props}
  >
    {children}
  </ElementType>
);
AbstractElement.propTypes = {
  children: PropTypes.node,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({})]).isRequired,
  className: PropTypes.string,
};

AbstractElement.defaultProps = {
  children: null,
  className: null,
};

export default AbstractElement;

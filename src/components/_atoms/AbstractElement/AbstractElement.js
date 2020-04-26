import React from 'react';
import PropTypes from 'prop-types';

import { Element } from './AbstractElement.style';

const AbstractElement = ({
  children,
  as,
  ...props
}) => (
  <Element
    as={as}
    {...props}
  >
    {children}
  </Element>
);
AbstractElement.propTypes = {
  children: PropTypes.node,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({})]).isRequired,
};

AbstractElement.defaultProps = {
  children: null,
};

export default AbstractElement;

import React from 'react';
import PropTypes from 'prop-types';

import { Element } from './Heading.style';

const Heading = ({
  children, level, center, ...props
}) => (
  <Element tag={level} center={center} {...props}>
    {children}
  </Element>
);
Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.oneOf([1, 2, 3, 4]),
  center: PropTypes.bool,
};

Heading.defaultProps = {
  children: null,
  level: 1,
  center: false,
};

export default Heading;

import React from 'react';
import PropTypes from 'prop-types';

import { Element } from './Heading.style';

const Heading = ({
  children, ...props
}) => (
  <Element {...props}>
    {children}
  </Element>
);

Heading.propTypes = {
  children: PropTypes.node,
};

Heading.defaultProps = {
  children: null,
};

export default Heading;

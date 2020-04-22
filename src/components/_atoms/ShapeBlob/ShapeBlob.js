import React from 'react';
import PropTypes from 'prop-types';

import { Align, Container } from './ShapeBlob.style';

const ShapeBlob = ({
  children, shadow, square, ...props
}) => (
  <Container shadow={shadow} square={square} {...props}>
    <Align>
      {children}
    </Align>
  </Container>
);

ShapeBlob.propTypes = {
  children: PropTypes.node,
  shadow: PropTypes.bool,
  square: PropTypes.bool,
};
ShapeBlob.defaultProps = {
  children: null,
  shadow: false,
  square: false,
};

export default ShapeBlob;

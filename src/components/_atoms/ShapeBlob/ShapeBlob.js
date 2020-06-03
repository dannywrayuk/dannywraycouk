import React from 'react';
import PropTypes from 'prop-types';

import AlignCenter from '../../styled/AlignCenter';
import { Container } from './ShapeBlob.style';

const ShapeBlob = ({
  children, shadow, square, ...props
}) => (
  <Container shadow={shadow} square={square} {...props}>
    <AlignCenter>
      {children}
    </AlignCenter>
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

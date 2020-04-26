import React from 'react';
import PropTypes from 'prop-types';

import { Fill, Wrapper } from './ResponsiveWrapper.style';

const ResponsiveWrapper = ({ children }) => (
  <Fill>
    <Wrapper>
      {children}
    </Wrapper>
  </Fill>
);

ResponsiveWrapper.propTypes = {
  children: PropTypes.node,
};

ResponsiveWrapper.defaultProps = {
  children: null,
};

export default ResponsiveWrapper;

import React from 'react';
import PropTypes from 'prop-types';

import { Content, Wrapper } from './ResponsiveDivider.style';

export const ResponsiveDivider = ({ children, isStatic }) => (
  <Wrapper isStatic={isStatic}>
    {children}
  </Wrapper>
);

export const ResponsiveElement = ({ children, width }) => (
  <Content flexWidth={width}>
    {children}
  </Content>
);

ResponsiveDivider.propTypes = {
  children: PropTypes.node,
  isStatic: PropTypes.bool,
};

ResponsiveDivider.defaultProps = {
  children: null,
  isStatic: false,
};

ResponsiveElement.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
};

ResponsiveElement.defaultProps = {
  children: null,
  width: 1,
};

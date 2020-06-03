import React from 'react';
import PropTypes from 'prop-types';

import { Content, Wrapper } from './ResponsiveDivider.style';

export const ResponsiveDivider = ({ children, isStatic, className }) => (
  <Wrapper isStatic={isStatic} className={className}>
    {children}
  </Wrapper>
);

export const ResponsiveElement = ({ children, width }) => (
  <Content flexWidth={width}>
    {children}
  </Content>
);

ResponsiveDivider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isStatic: PropTypes.bool,
};

ResponsiveDivider.defaultProps = {
  className: '',
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

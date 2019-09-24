import PropTypes from 'prop-types';
import React from 'react';

import style from './ResponsiveDivider.css';

export const ResponsiveDivider = ({ children, Static }) => (
  <div className={Static ? style.WrapperStatic : style.Wrapper}>
    {children}
  </div>
);

export const ResponsiveElement = ({ children, width }) => (
  <div className={style.Content} style={{ flex: `${width}` }}>
    {children}
  </div>
);

ResponsiveDivider.propTypes = {
  children: PropTypes.node,
  Static: PropTypes.bool,
};

ResponsiveDivider.defaultProps = {
  children: null,
  Static: false,
};

ResponsiveElement.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
};

ResponsiveElement.defaultProps = {
  children: null,
  width: 1,
};

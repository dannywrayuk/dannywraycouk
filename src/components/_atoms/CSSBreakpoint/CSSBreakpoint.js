import React from 'react';
import PropTypes from 'prop-types';

import style from './CSSBreakpoint.css';

const CSSBreakpoint = ({ children, type }) => (
  <div className={style[type]}>{children}</div>
);

CSSBreakpoint.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
};

CSSBreakpoint.defaultProps = {
  children: null,
};

export default CSSBreakpoint;

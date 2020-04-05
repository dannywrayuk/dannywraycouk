import React from 'react';
import PropTypes from 'prop-types';

import style from './ResponsiveWrapper.css';

const ResponsiveWrapper = ({ children }) => (
  <div className={style.fillContainer}>
    <div className={style.Wrapper}>
      {children}
    </div>
  </div>
);

ResponsiveWrapper.propTypes = {
  children: PropTypes.node,
};

ResponsiveWrapper.defaultProps = {
  children: null,
};

export default ResponsiveWrapper;

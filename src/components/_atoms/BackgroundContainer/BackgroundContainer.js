import React from 'react';
import PropTypes from 'prop-types';

// import style from './BackgroundContainer.css';

const BackgroundContainer = ({ children, image }) => (
  <div style={{ background: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    {children}
  </div>
);

BackgroundContainer.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
};

BackgroundContainer.defaultProps = {
  children: null,
  image: '',
};

export default BackgroundContainer;

import React from 'react';
import PropTypes from 'prop-types';

import { Background } from './BackgroundContainer.style';

const BackgroundContainer = ({ children, image }) => (
  <Background image={image}>
    {children}
  </Background>
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

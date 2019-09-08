import React from 'react';
import PropTypes from 'prop-types';
import image from '../../../images/svg/logoicon.svg';


const Logo = ({ className }) => (
  <img src={image} alt="" className={className} />
);

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;

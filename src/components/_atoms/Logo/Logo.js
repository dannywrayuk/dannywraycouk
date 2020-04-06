import React from 'react';
import PropTypes from 'prop-types';

import image from '../../../images/svg/logoicon.svg';
import withText from '../Text';

import style from './Logo.css';

const Logo = ({ Text, showText, className }) => (
  <div className={style.container}>
    <img src={image} alt="" className={`${style.icon} ${className}`} />
    {showText
      && (
        <div className={style.url}>
          <Text path="name" />
        </div>
      )}
  </div>
);

Logo.propTypes = {
  Text: PropTypes.func.isRequired,
  showText: PropTypes.bool,
  className: PropTypes.string,
};

Logo.defaultProps = {
  showText: false,
  className: '',
};

export default withText('Meta.Logo')(Logo);

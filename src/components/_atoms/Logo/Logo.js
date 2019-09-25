import React from 'react';
import PropTypes from 'prop-types';

import image from '../../../images/svg/logoicon.svg';
import { withText } from '../../../text/textStore';

import style from './Logo.css';

const Logo = ({ Text, showText }) => (
  <div className={style.container}>
    <img src={image} alt="" className={style.icon} />
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
};

Logo.defaultProps = {
  showText: false,
};

export default withText('Logo')(Logo);

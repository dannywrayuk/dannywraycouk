import React from 'react';
import PropTypes from 'prop-types';

import { withText } from '../../../text/textStore';
import Logo from '../Logo';


import style from './LogoWithText.css';

const LogoWithText = ({ Text }) => (
  <div className={style.container}>
    <Logo className={style.icon} />
    <div className={style.url}>
      <Text path="name" />
    </div>
  </div>
);

LogoWithText.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Logo')(LogoWithText);

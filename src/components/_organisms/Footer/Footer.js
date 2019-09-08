import React from 'react';
import PropTypes from 'prop-types';
import { withText } from '../../../text/textStore';

import style from './Footer.css';

const Footer = ({ Text }) => (
  <div className={style.container}>
    <Text path="copyright" />
  </div>
);

Footer.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Footer')(Footer);

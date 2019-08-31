import React from 'react';
import textStore from '../../../text/SharedContent';

import style from './Footer.css';

const Footer = () => (
  <div className={style.container}>
    <p className={style.text}>{textStore.footer.copyright}</p>
  </div>
);

export default Footer;

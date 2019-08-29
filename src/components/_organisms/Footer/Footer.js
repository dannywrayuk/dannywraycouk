import React from 'react';
import textStore from '../../../text/SharedContent';

import style from './Footer.css';

const Footer = () => (
  <div className={style.container}>
    <p>{textStore.footer.copyright}</p>
  </div>
);

export default Footer;

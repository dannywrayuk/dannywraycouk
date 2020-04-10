import React from 'react';
import propTypes from 'prop-types';

import Footer from '../../_organisms/Footer';
import Header from '../../ecosystems/Header';

import style from './AppBase.css';

const AppBase = ({ header, children, footer }) => (
  <section className={style.App}>
    <section>
      {header}
    </section>
    <div className={style.content}>
      {children}
    </div>
    <section>
      {footer}
    </section>
  </section>
);

AppBase.propTypes = {
  header: propTypes.element,
  children: propTypes.element.isRequired,
  footer: propTypes.element,
};

AppBase.defaultProps = {
  header: <Header />,
  footer: <Footer />,
};


export default AppBase;

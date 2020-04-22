import React from 'react';
import propTypes from 'prop-types';

import Footer from '../../_organisms/Footer';
import Header from '../../ecosystems/Header';
import { App, Content } from './AppBase.style';

const AppBase = ({ header, children, footer }) => (
  <App>
    <section>
      {header}
    </section>
    <Content>
      {children}
    </Content>
    <section>
      {footer}
    </section>
  </App>
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

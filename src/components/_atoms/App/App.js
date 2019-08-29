import React from 'react';
import propTypes from 'prop-types';

import style from './App.css';

const App = ({ header, content, footer }) => (
  <section className={style.App}>
    <section className="header">
      {header}
    </section>
    <section className={style.content}>
      {content}
    </section>
    <section className="footer">
      {footer}
    </section>
  </section>
);

App.propTypes = {
  header: propTypes.func.isRequired,
  content: propTypes.func.isRequired,
  footer: propTypes.func.isRequired,
};


export default App;

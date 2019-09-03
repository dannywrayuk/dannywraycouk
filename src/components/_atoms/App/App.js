import React from 'react';
import propTypes from 'prop-types';

import style from './App.css';

const App = ({ header, content, footer }) => (
  <section className={style.App}>
    <section>
      {header}
    </section>
    <div className={style.content}>
      {content}
    </div>
    <section>
      {footer}
    </section>
  </section>
);

App.propTypes = {
  header: propTypes.element.isRequired,
  content: propTypes.element.isRequired,
  footer: propTypes.element.isRequired,
};


export default App;

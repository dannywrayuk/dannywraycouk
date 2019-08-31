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
  header: propTypes.func.isRequired,
  content: propTypes.func.isRequired,
  footer: propTypes.func.isRequired,
};


export default App;

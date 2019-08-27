import React from 'react';
import propTypes from 'prop-types';

const App = ({ header, content, footer }) => (
  <section id="app">
    <section id="header">
      {header}
    </section>
    <section id="content">
      {content}
    </section>
    <section id="footer">
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

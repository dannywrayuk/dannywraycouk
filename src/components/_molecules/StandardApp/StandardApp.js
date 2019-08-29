import React from 'react';
import propTypes from 'prop-types';
import Header from '../../_organisms/Header';
import Footer from '../../_organisms/Footer/Footer';

import style from './StandardApp.css';

const StandardApp = ({ content }) => (
  <>
    <Header />
    <div className={style.container}>
      { content }
    </div>
    <Footer />
  </>
);

StandardApp.propTypes = {
  content: propTypes.shape().isRequired,
};

export default StandardApp;

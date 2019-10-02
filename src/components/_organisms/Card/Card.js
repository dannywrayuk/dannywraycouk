import React from 'react';
import PropTypes from 'prop-types';

import style from './Card.css';

const Card = ({ children }) => (
  <div className={style.Card}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
};
Card.defaultProps = {
  children: null,
};

const CardContent = ({ children }) => (
  <div className={style.CardContent}>
    {children}
  </div>
);

CardContent.propTypes = {
  children: PropTypes.node,
};
CardContent.defaultProps = {
  children: null,
};

const CardFooter = ({ children }) => (
  <div className={style.CardFooter}>{children}</div>
);

CardFooter.propTypes = {
  children: PropTypes.node,
};
CardFooter.defaultProps = {
  children: null,
};

export { Card, CardContent, CardFooter };

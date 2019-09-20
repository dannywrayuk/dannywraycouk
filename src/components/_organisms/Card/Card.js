import PropTypes from 'prop-types';
import React from 'react';

import style from './Card.css';

const Card = ({ children }) => (
  <div className={style.Card}>
    {children}
  </div>
);

Card.propTypes = { children: PropTypes.node };
Card.defaultProps = { children: null };

export default Card;

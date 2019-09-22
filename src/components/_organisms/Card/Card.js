import PropTypes from 'prop-types';
import React from 'react';

import style from './Card.css';

const Card = ({ children, footer }) => (
  <>
    <div className={style.Card}>
      <div className={style.CardContent}>
        {children}
      </div>
      {footer && <div className={style.CardFooter}>{footer}</div>}
    </div>
  </>
);

Card.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.node,
};
Card.defaultProps = {
  children: null,
  footer: null,
};

export default Card;

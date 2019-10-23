import React from 'react';
import PropTypes from 'prop-types';

import { withText } from '../../../text/textStore';

import style from './IconCard.css';

const IconCard = ({ Text, children, strings }) => (
  <div className={style.wrapper}>
    {children}
    <div className={style.textContent}>
      <div>
        <Text path={`${strings}.Title`} />
      </div>
      <div className={style.subtitle}>
        <Text path={`${strings}.SubTitle`} />
      </div>
    </div>
  </div>
);

IconCard.propTypes = {
  Text: PropTypes.func.isRequired,
  children: PropTypes.node,
  strings: PropTypes.string.isRequired,
};

IconCard.defaultProps = {
  children: null,
};

export default withText()(IconCard);
import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Spinner } from '../../../images/svg/atom.svg';
import { withText } from '../../../text/textStore';

import style from './LoadingSpinner.css';

const LoadingSpinner = ({ Text }) => (
  <div className={style.wrapper}>
    <div>
      <Spinner className={style.spinner} />
      <p>
        <Text path="Loading" />
      </p>
    </div>
  </div>
);

LoadingSpinner.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(LoadingSpinner);

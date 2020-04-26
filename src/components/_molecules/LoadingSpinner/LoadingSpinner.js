import React from 'react';
import PropTypes from 'prop-types';

import withText from '../../_atoms/Text';
import { Spinner, Wrapper } from './LoadingSpinner.style';

const LoadingSpinner = ({ Text }) => (
  <Wrapper>
    <div>
      <Spinner />
      <p>
        <Text path="Loading" />
      </p>
    </div>
  </Wrapper>
);

LoadingSpinner.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(LoadingSpinner);

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import withText from '../../_atoms/Text';

const More = ({ Text }) => (
  <>
    <Helmet>
      <title>{`${Text.get('defaultTitle')}`}</title>
    </Helmet>
    <p>more</p>
  </>
);
More.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(More);

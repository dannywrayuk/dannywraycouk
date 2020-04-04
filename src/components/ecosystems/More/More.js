import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { withText } from '../../../text/textStore';

const More = ({ Text: text }) => (
  <>
    <Helmet>
      <title>{`${text({ path: 'defaultTitle' })}`}</title>
    </Helmet>
    <p>more</p>
  </>
);
More.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(More);

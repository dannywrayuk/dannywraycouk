import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { withText } from '../../../../../text/textStore';

const MorePageMain = ({ Text: text }) => (
  <>
    <Helmet>
      <title>{`${text({ path: 'defaultTitle' })}`}</title>
    </Helmet>
    <p>more</p>
  </>
);
MorePageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(MorePageMain);

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { withText } from '../../../../../text/textStore';

const BlogPageMain = ({ Text: text }) => (
  <>
    <Helmet>
      <title>{`${text({ path: 'defaultTitle' })}`}</title>
    </Helmet>
    <p>blog</p>
  </>
);

BlogPageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(BlogPageMain);

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import withText from '../../_atoms/Text';

const Blog = ({ Text }) => (
  <>
    <Helmet>
      <title>{`${Text.get('defaultTitle')}`}</title>
    </Helmet>
    <p>blog</p>
  </>
);

Blog.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(Blog);

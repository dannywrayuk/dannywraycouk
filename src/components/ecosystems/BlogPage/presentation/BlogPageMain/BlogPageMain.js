import React from 'react';
import PropTypes from 'prop-types';

import { withText } from '../../../../../text/textStore';
import Head from '../../../../_atoms/Head';

const BlogPageMain = ({ Text: text }) => (
  <>
    <Head title={text({ path: 'defaultTitle' })} />
    <p>blog</p>
  </>
);

BlogPageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(BlogPageMain);

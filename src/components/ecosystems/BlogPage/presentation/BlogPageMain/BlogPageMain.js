import React from 'react';
import PropTypes from 'prop-types';
import Head from '../../../../_atoms/Head';
import { withText } from '../../../../../text/textStore';


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

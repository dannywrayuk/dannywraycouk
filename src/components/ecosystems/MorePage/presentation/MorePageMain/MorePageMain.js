import React from 'react';
import PropTypes from 'prop-types';
import Head from '../../../../_atoms/Head';
import { withText } from '../../../../../text/textStore';


const MorePageMain = ({ Text: text }) => (
  <>
    <Head title={text({ path: 'defaultTitle' })} />
    <p>more</p>
  </>
);
MorePageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(MorePageMain);

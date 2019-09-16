import PropTypes from 'prop-types';
import React from 'react';

import Head from '../../../../_atoms/Head';
import { withText } from '../../../../../text/textStore';


const HomePageMain = ({ Text: text }) => (
  <Head title={text({ path: 'defaultTitle' })} />
);

HomePageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(HomePageMain);

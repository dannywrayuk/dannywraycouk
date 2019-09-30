import React from 'react';
import PropTypes from 'prop-types';

import { withText } from '../../../../../text/textStore';
import Head from '../../../../_atoms/Head';
import ResponsiveWrapper from '../../../../_molecules/ResponsiveWrapper';

// import style from './HomePageMain.css';

const HomePageMain = ({ Text, Text: text }) => (
  <>
    <Head title={text({ path: 'Title' })} />
    <ResponsiveWrapper>
      <Text path="Title" />
    </ResponsiveWrapper>
  </>
);

HomePageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('HomePageMain')(HomePageMain);

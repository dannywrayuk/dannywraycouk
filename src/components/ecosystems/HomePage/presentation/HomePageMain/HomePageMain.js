import React from 'react';
import PropTypes from 'prop-types';
import Head from '../../../../_atoms/Head';
import { withText } from '../../../../../text/textStore';


const HomePageMain = ({ Text }) => (
  <>
    <Head title="howdy" />
    <Text path="Title" />
  </>
);

HomePageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('HomePageMain')(HomePageMain);

import PropTypes from 'prop-types';
import React from 'react';

import Head from '../../../../_atoms/Head';
import { withText } from '../../../../../text/textStore';


const ProjectPageMain = ({ Text: text }) => (
  <>
    <Head title={text({ path: 'defaultTitle' })} />
    <p>project</p>
  </>
);

ProjectPageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(ProjectPageMain);

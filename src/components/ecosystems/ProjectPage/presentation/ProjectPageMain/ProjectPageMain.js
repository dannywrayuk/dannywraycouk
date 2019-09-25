import React from 'react';
import PropTypes from 'prop-types';

import { withText } from '../../../../../text/textStore';
import Head from '../../../../_atoms/Head';

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

import React from 'react';
import PropTypes from 'prop-types';

import { withText } from '../../../../../text/textStore';
import Head from '../../../../_atoms/Head';

const PhysicsPageMain = ({ Text: text }) => (
  <>
    <Head title={text({ path: 'defaultTitle' })} />
    <p>physics</p>
  </>
);

PhysicsPageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(PhysicsPageMain);

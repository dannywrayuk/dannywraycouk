import React from 'react';
import PropTypes from 'prop-types';

import { withText } from '../../../text/textStore';
import Head from '../../_atoms/Head';

const ErrorPage = ({ Text: text }) => (
  <>
    <Head title={text({ path: 'defaultDescription' })} />
    <p>error</p>
  </>
);

ErrorPage.propTypes = {
  Text: PropTypes.func.isRequired,
};
export default withText('Meta')(ErrorPage);

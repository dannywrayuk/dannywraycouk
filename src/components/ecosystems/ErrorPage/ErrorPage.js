import PropTypes from 'prop-types';
import React from 'react';

import Head from '../../_atoms/Head';
import { withText } from '../../../text/textStore';

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

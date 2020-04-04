import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { withText } from '../../../text/textStore';

const Project = ({ Text: text }) => (
  <>
    <Helmet>
      <title>{`${text({ path: 'HeadTitle' })}`}</title>
    </Helmet>
    <p>project</p>
  </>
);

Project.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(Project);

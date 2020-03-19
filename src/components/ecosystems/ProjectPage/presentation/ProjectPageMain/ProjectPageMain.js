import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { withText } from '../../../../../text/textStore';

const ProjectPageMain = ({ Text: text }) => (
  <>
    <Helmet>
      <title>{`${text({ path: 'HeadTitle' })}`}</title>
    </Helmet>
    <p>project</p>
  </>
);

ProjectPageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(ProjectPageMain);

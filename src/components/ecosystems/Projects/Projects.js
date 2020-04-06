import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import withText from '../../_atoms/Text';

const Projects = ({ Text }) => (
  <>
    <Helmet>
      <title>{`${Text.get('HeadTitle')}`}</title>
    </Helmet>
    <p>project</p>
  </>
);

Projects.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(Projects);

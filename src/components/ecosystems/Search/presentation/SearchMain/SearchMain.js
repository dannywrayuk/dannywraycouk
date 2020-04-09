import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import withText from '../../../../_atoms/Text';

const SearchMain = ({ Text, searchTerm }) => (
  <>
    <Helmet>
      <title>{`${Text.get('defaultTitle')}`}</title>
    </Helmet>
    <p>{searchTerm}</p>
  </>
);

SearchMain.propTypes = {
  Text: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default withText('Meta')(SearchMain);

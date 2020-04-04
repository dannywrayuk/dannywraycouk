import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { withText } from '../../../../../text/textStore';

const SearchMain = ({ Text: text, searchTerm }) => (
  <>
    <Helmet>
      <title>{`${text({ path: 'defaultTitle' })}`}</title>
    </Helmet>
    <p>{searchTerm}</p>
  </>
);

SearchMain.propTypes = {
  Text: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default withText('Meta')(SearchMain);

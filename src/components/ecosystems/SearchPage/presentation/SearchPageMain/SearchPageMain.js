import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { withText } from '../../../../../text/textStore';

const SearchPageMain = ({ Text: text, match }) => {
  const searchTerm = match.params.term;

  return (
    <>
      <Helmet>
        <title>{`${text({ path: 'defaultTitle' })}`}</title>
      </Helmet>
      <p>{searchTerm}</p>
    </>
  );
};

SearchPageMain.propTypes = {
  Text: PropTypes.func.isRequired,
  match: PropTypes.shape().isRequired,
};

export default withText('Meta')(SearchPageMain);

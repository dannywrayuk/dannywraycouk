import React from 'react';
import PropTypes from 'prop-types';

import SearchMain from '../presentation/SearchMain';

const Search = (props) => {
  const { match: { params: { term: searchTerm } } } = props;

  return (
    <SearchMain {...props} searchTerm={searchTerm} />
  );
};

Search.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Search;

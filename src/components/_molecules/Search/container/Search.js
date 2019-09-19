import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import SearchDynamic from '../SearchDynamic';
import SearchStatic from '../SearchStatic';

const Search = ({ history, dynamic, ...props }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    history.push(`/search/${searchValue}`);
    document.activeElement.blur();
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleSearch();
    }
  };

  const handlers = {
    handleSearch, handleChange, handleKeyPress, searchValue, setSearchValue,
  };

  return dynamic
    ? <SearchDynamic {...props} handlers={handlers} />
    : <SearchStatic handlers={handlers} />;
};

Search.propTypes = {
  history: PropTypes.shape().isRequired,
  dynamic: PropTypes.bool,
};

Search.defaultProps = {
  dynamic: false,
};

export default withRouter(Search);

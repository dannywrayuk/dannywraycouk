import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { ReactComponent as SvgImage } from '../../../images/svg/search.svg';
import { withText } from '../../../text/textStore';
import Buton from '../Button';
import style from './SearchBox.css';

const SearchBox = ({ Text: text, history }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    history.push(`/search/${searchValue}`);
  };
  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className={style.box}>
      <Buton
        className={style.imageContainer}
        onClick={handleSearch}
      >
        <SvgImage className={style.image} />
      </Buton>
      <input
        type="text"
        className={style.input}
        placeholder={text({ path: 'placeholder' })}
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

SearchBox.propTypes = {
  Text: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default withRouter(withText('Search')(SearchBox));

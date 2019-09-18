import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { ReactComponent as SvgImage } from '../../../images/svg/search.svg';
import * as Actions from '../../../state/Search/SearchActionCreators';
import { withText } from '../../../text/textStore';
import Buton from '../Button';
import style from './SearchBox.css';

const SearchBox = ({
  Text: text,
  searchValue,
  handleSearch,
  handleChange,
  startSearch,
}) => {
  let Redirector = () => (<></>);
  if (startSearch && searchValue !== '') {
    handleSearch();
    Redirector = () => (
      <>
        <Redirect to="/search/" />
        <Redirect to={searchValue} />
      </>
    );
  }
  return (
    <>
      <Redirector />
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
          onKeyDown={(event) => {
            if (event.keyCode === 13) {
              event.preventDefault(); handleSearch();
            }
          }}
        />
      </div>
    </>
  );
};

SearchBox.propTypes = {
  Text: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
  startSearch: PropTypes.bool,
  handleSearch: PropTypes.func,
  handleChange: PropTypes.func,
};

SearchBox.defaultProps = {
  searchValue: '',
  startSearch: false,
  handleSearch: () => {},
  handleChange: () => {},
};

const mapStateToProps = ({ Search }) => ({
  searchValue: Search.searchTerm,
  startSearch: Search.redirect,
});

const mapDispatchToProps = {
  handleSearch: Actions.Search,
  handleChange: Actions.Change,
};

export default connect(mapStateToProps, mapDispatchToProps)(withText('Search')(SearchBox));

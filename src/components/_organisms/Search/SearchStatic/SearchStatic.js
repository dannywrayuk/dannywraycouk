import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Search } from '../../../../images/svg/search.svg';
import withText from '../../../_atoms/Text';
import Button from '../../../_molecules/Button';

import style from './SearchStatic.css';

const SearchStatic = ({ Text, handlers }) => (
  <div className={style.box}>
    <Button
      className={style.imageContainer}
      onClick={handlers.handleSearch}
    >
      <Search className={style.image} />
    </Button>
    <input
      type="text"
      className={style.input}
      placeholder={Text.get('placeholder')}
      value={handlers.searchValue}
      onChange={handlers.handleChange}
      onKeyDown={handlers.handleKeyPress}
    />
  </div>
);

SearchStatic.propTypes = {
  Text: PropTypes.func.isRequired,
  handlers: PropTypes.shape().isRequired,
};

export default withText('Meta.Search')(SearchStatic);

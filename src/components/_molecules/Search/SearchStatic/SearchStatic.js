import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as SvgImage } from '../../../../images/svg/search.svg';
import { withText } from '../../../../text/textStore';
import Button from '../../Button';
import style from './SearchStatic.css';

const SearchStatic = ({ Text: text, handlers }) => (
  <div className={style.box}>
    <Button
      className={style.imageContainer}
      onClick={handlers.handleSearch}
    >
      <SvgImage className={style.image} />
    </Button>
    <input
      type="text"
      className={style.input}
      placeholder={text({ path: 'placeholder' })}
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

export default withText('Search')(SearchStatic);
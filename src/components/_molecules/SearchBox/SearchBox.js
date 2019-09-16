import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as SvgImage } from '../../../images/svg/search.svg';
import { withText } from '../../../text/textStore';
import style from './SearchBox.css';

const SearchBox = ({ Text: text }) => (

  <div className={style.box}>
    <div className={style.imageContainer}>
      <SvgImage className={style.image} />
    </div>
    <input
      type="text"
      className={style.input}
      placeholder={text({ path: 'placeholder' })}
    />
  </div>

);

SearchBox.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Search')(SearchBox);

import React from 'react';
import PropTypes from 'prop-types';
import { withText } from '../../../text/textStore';
import Button from '../Button';

import { ReactComponent as SvgImage } from '../../../images/svg/search.svg';
import style from './SearchBoxButton.css';

const SearchBoxMobile = ({ Text: text, handleClick, isExtended }) => (
  <div className={isExtended ? style.box : style.hidebox}>
    <div className={style.imageContainer}>
      <Button
        onClick={handleClick}
      >
        <SvgImage className={style.image} />
      </Button>
    </div>
    <input
      type="text"
      className={isExtended ? style.input : style.hideinput}
      placeholder={text({ path: 'placeholder' })}
    />
  </div>
);

SearchBoxMobile.propTypes = {
  Text: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  isExtended: PropTypes.bool.isRequired,
};

export default withText('Search')(SearchBoxMobile);

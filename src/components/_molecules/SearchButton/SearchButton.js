import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as CloseIcon } from '../../../images/svg/close.svg';
import { ReactComponent as SearchIcon } from '../../../images/svg/search.svg';
import { withText } from '../../../text/textStore';
import Button from '../Button';
import style from './SearchButton.css';

const SearchButton = ({
  Text: text,
  onSearchClick,
  onCloseClick,
  isExtended,
}) => (
  <div className={style.wrapper}>
    <div className={style.box}>
      <Button
        className={style.closeContainer}
        onClick={onCloseClick}
      >
        <CloseIcon className={isExtended ? style.closeimage : style.closeHide} />
      </Button>
      <div className={isExtended ? style.inputContainer : style.inputHide}>
        <fieldset className={style.field}>
          <input
            type="text"
            className={style.input}
            placeholder={text({ path: 'placeholder' })}
          />
        </fieldset>
      </div>
      <Button
        className={style.searchContainer}
        onClick={onSearchClick}
      >
        <SearchIcon className={style.searchimage} />
      </Button>
    </div>
  </div>
);

SearchButton.propTypes = {
  Text: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  isExtended: PropTypes.bool.isRequired,
};

export default withText('Search')(SearchButton);

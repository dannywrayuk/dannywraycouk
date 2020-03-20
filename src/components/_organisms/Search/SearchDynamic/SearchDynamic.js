import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Close } from '../../../../images/svg/close.svg';
import { ReactComponent as Search } from '../../../../images/svg/search.svg';
import { withText } from '../../../../text/textStore';
import Button from '../../../_molecules/Button';

import style from './SearchDynamic.css';

const SearchDynamic = ({
  Text: text,
  onSearchClick,
  onCloseClick,
  isExtended,
  handlers,
}) => {
  const [closeStyle, setCloseStyle] = useState(style.closeHide);
  const [inputStyle, setInputStyle] = useState(style.inputHide);
  useEffect(() => {
    setCloseStyle(isExtended ? style.closeimage : style.closeHide);
    setInputStyle(isExtended ? style.inputContainer : style.inputHide);
  }, [isExtended]);
  return (
    <div className={style.wrapper}>
      <div className={style.box}>
        <Button
          className={style.closeContainer}
          onClick={() => { onCloseClick(); handlers.setSearchValue(''); }}
        >
          <Close className={closeStyle} />
        </Button>
        <div className={inputStyle}>
          <fieldset className={style.field}>
            <input
              type="text"
              className={style.input}
              placeholder={text({ path: 'placeholder' })}
              value={handlers.searchValue}
              onChange={handlers.handleChange}
              onKeyDown={handlers.handleKeyPress}
            />
          </fieldset>
        </div>
        <Button
          className={style.searchContainer}
          onClick={isExtended ? handlers.handleSearch : onSearchClick}
        >
          <Search className={style.searchimage} />
        </Button>
      </div>
    </div>
  );
};

SearchDynamic.propTypes = {
  Text: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  isExtended: PropTypes.bool.isRequired,
  handlers: PropTypes.shape().isRequired,
};

export default withText('Search')(SearchDynamic);

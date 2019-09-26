import React from 'react';
import PropTypes from 'prop-types';

import { withText } from '../../../../text/textStore';
import Icon from '../../../_atoms/Icon';
import Button from '../../Button';

import style from './SearchDynamic.css';

const SearchDynamic = ({
  Text: text,
  onSearchClick,
  onCloseClick,
  isExtended,
  handlers,
}) => (
  <div className={style.wrapper}>
    <div className={style.box}>
      <Button
        className={style.closeContainer}
        onClick={() => { onCloseClick(); handlers.setSearchValue(''); }}
      >
        <Icon icon="highlight_off" twotone className={isExtended ? style.closeimage : style.closeHide} />
      </Button>
      <div className={isExtended ? style.inputContainer : style.inputHide}>
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
        <Icon icon="search" rounded className={style.searchimage} />
      </Button>
    </div>
  </div>
);

SearchDynamic.propTypes = {
  Text: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  isExtended: PropTypes.bool.isRequired,
  handlers: PropTypes.shape().isRequired,
};

export default withText('Search')(SearchDynamic);

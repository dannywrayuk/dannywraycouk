import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../../../../_atoms/Logo';
import NavButtons from '../../../../_atoms/NavButtons';
import LinkButton from '../../../../_molecules/LinkButton';
import SearchBox from '../../../../_molecules/SearchBox';
import AppConstants from '../../../../../utilities/AppConstants';
import sharedStyle from '../../container/Header.css';
import style from './HeaderDesktop.css';

const { ROUTES } = AppConstants;

const HeaderDesktop = ({ Tablet }) => (
  <div className={sharedStyle.bar}>
    <div className={style.logo}>
      <LinkButton to={ROUTES.BASE}>
        <Logo showText={!Tablet} />
      </LinkButton>
    </div>
    <div className={style.controls}>
      <NavButtons />
      <div className={style.search}>
        <SearchBox />
      </div>
    </div>
  </div>
);

HeaderDesktop.propTypes = {
  Tablet: PropTypes.bool,
};

HeaderDesktop.defaultProps = {
  Tablet: false,
};

export default HeaderDesktop;

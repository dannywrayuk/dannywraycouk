import React from 'react';
import PropTypes from 'prop-types';

import AppConstants from '../../../../../utilities/AppConstants';
import Logo from '../../../../_atoms/Logo';
import NavButtons from '../../../../_atoms/NavButtons';
import LinkButton from '../../../../_molecules/LinkButton';
import Search from '../../../../_molecules/Search';

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
        <Search />
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

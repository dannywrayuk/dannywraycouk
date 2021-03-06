import React from 'react';
import PropTypes from 'prop-types';

import AppConstants from '../../../../../utilities/AppConstants';
import Logo from '../../../../_atoms/Logo';
import DarkModeButton from '../../../../_organisms/DarkModeButton';
import NavButtons from '../../../../_organisms/NavButtons';
import Search from '../../../../_organisms/Search';
import { Bar } from '../../container/Header.style';
import {
  Controls,
  Link,
  LogoWrapper,
  SearchWrapper,
} from './HeaderDesktop.style';

const { LINKS } = AppConstants;

const HeaderDesktop = ({ Tablet }) => (
  <Bar>
    <LogoWrapper>
      <Link to={LINKS.BASE}>
        <Logo showText={!Tablet} />
      </Link>
    </LogoWrapper>
    <Controls>
      <NavButtons />
      <DarkModeButton />
      <SearchWrapper>
        <Search />
      </SearchWrapper>
    </Controls>
  </Bar>
);

HeaderDesktop.propTypes = {
  Tablet: PropTypes.bool,
};

HeaderDesktop.defaultProps = {
  Tablet: false,
};

export default HeaderDesktop;

import React from 'react';
import PropTypes from 'prop-types';
import { withText } from '../../../text/textStore';
import LogoWithText from '../../_atoms/LogoWithText';
import LinkButton from '../../_molecules/LinkButton';
import SearchBox from '../../_molecules/SearchBox';

import style from './Header.css';
import AppConstants from '../../../utilities/AppConstants';

const links = AppConstants.ROUTES.HOMEPAGE;

const Header = ({ Text }) => (
  <div className={style.bar}>
    <div className={style.logo}>
      <LogoWithText />
    </div>
    <div className={style.controls}>
      <div className={style.navitems}>
        <LinkButton
          to={links.BLOG}
          modifierStyles={{
            root: style.link,
          }}
        >
          <Text path="BlogLink" />
        </LinkButton>
        <LinkButton
          to={links.PHYSICS}
          modifierStyles={{
            root: style.link,
          }}
        >
          <Text path="PhysicsLink" />
        </LinkButton>
        <LinkButton
          to={links.PROJECTS}
          modifierStyles={{
            root: style.link,
          }}
        >
          <Text path="ProjectLink" />
        </LinkButton>
        <LinkButton
          to={links.MORE}
          modifierStyles={{
            root: style.link,
          }}
        >
          <Text path="MoreLink" />
        </LinkButton>
      </div>
      <div className={style.search}>
        <SearchBox />
      </div>
    </div>
  </div>
);

Header.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('HomePageMain.Header')(Header);

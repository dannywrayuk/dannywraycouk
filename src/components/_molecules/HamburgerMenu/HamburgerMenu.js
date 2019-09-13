import React from 'react';
import PropTypes from 'prop-types';
import HamburgerButton from '../../_atoms/HamburgerButton';
import LinkButton from '../LinkButton';
import AppConstants from '../../../utilities/AppConstants';
import { withText } from '../../../text/textStore';

import style from './HamburgerMenu.css';

const links = AppConstants.ROUTES.HOMEPAGE;

const HamburgerMenu = ({ Text, onClick, isExtended }) => (
  <>
    <div className={isExtended ? style.menuFill : style.menuContainer}>
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
    <div className={isExtended ? style.ButtonClicked : style.Button}>
      <HamburgerButton onClick={onClick} />
    </div>
  </>
);

HamburgerMenu.propTypes = {
  Text: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  isExtended: PropTypes.bool,
};

HamburgerMenu.defaultProps = {
  onClick: () => {},
  isExtended: false,
};

export default withText('HomePageMain.Header')(HamburgerMenu);

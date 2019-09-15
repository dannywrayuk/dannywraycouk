import React from 'react';
import PropTypes from 'prop-types';

import LinkButton from '../../_molecules/LinkButton';
import AppConstants from '../../../utilities/AppConstants';
import { withText } from '../../../text/textStore';

import style from './NavButtons.css';

const links = AppConstants.ROUTES.HOMEPAGE;

const NavButtons = ({ Text }) => (
  <>
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
  </>
);

NavButtons.propTypes = {
  Text: PropTypes.func.isRequired,
};


export default withText('HomePageMain.Header')(NavButtons);

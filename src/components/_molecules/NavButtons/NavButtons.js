import React from 'react';
import PropTypes from 'prop-types';

import { withText } from '../../../text/textStore';
import AppConstants from '../../../utilities/AppConstants';
import LinkButton from '../LinkButton';

import style from './NavButtons.css';

const { ROUTES } = AppConstants;

const NavButtons = ({ Text }) => (
  <>
    <LinkButton
      to={ROUTES.BLOG}
      className={style.link}
    >
      <Text path="BlogLink" />
    </LinkButton>
    <LinkButton
      to={ROUTES.PHYSICS}
      className={style.link}
    >
      <Text path="PhysicsLink" />
    </LinkButton>
    <LinkButton
      to={ROUTES.PROJECTS}
      className={style.link}
    >
      <Text path="ProjectLink" />
    </LinkButton>
    <LinkButton
      to={ROUTES.MORE}
      className={style.link}
    >
      <Text path="MoreLink" />
    </LinkButton>
  </>
);

NavButtons.propTypes = {
  Text: PropTypes.func.isRequired,
};


export default withText('HomePageMain.Header')(NavButtons);

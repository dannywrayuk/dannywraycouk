import React from 'react';
import PropTypes from 'prop-types';

import AppConstants from '../../../utilities/AppConstants';
import withText from '../../_atoms/Text';
import LinkButton from '../../_molecules/LinkButton';

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


export default withText('Header')(NavButtons);

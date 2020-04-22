import React from 'react';
import PropTypes from 'prop-types';

import AppConstants from '../../../utilities/AppConstants';
import withText from '../../_atoms/Text';
import { Link } from './NavButtons.style';

const { ROUTES } = AppConstants;

const NavButtons = ({ Text }) => (
  <>
    <Link to={ROUTES.BLOG}>
      <Text path="BlogLink" />
    </Link>
    <Link to={ROUTES.PHYSICS}>
      <Text path="PhysicsLink" />
    </Link>
    <Link to={ROUTES.PROJECTS}>
      <Text path="ProjectLink" />
    </Link>
    <Link to={ROUTES.MORE}>
      <Text path="MoreLink" />
    </Link>
  </>
);

NavButtons.propTypes = {
  Text: PropTypes.func.isRequired,
};


export default withText('Header')(NavButtons);

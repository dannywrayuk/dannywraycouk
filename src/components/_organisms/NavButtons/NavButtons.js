import React from 'react';
import PropTypes from 'prop-types';

import AppConstants from '../../../utilities/AppConstants';
import withText from '../../_atoms/Text';
import Paragraph from '../../styled/Paragraph';
import { Link } from './NavButtons.style';

const { ROUTES } = AppConstants;

const NavButtons = ({ Text }) => (
  <>
    <Link to={ROUTES.BLOG}>
      <Paragraph>
        <Text path="BlogLink" />
      </Paragraph>
    </Link>
    <Link to={ROUTES.PHYSICS}>
      <Paragraph>
        <Text path="PhysicsLink" />
      </Paragraph>
    </Link>
    <Link to={ROUTES.PROJECTS}>
      <Paragraph>
        <Text path="ProjectLink" />
      </Paragraph>
    </Link>
    <Link to={ROUTES.MORE}>
      <Paragraph>
        <Text path="MoreLink" />
      </Paragraph>
    </Link>
  </>
);

NavButtons.propTypes = {
  Text: PropTypes.func.isRequired,
};


export default withText('Header')(NavButtons);

import React from 'react';
import PropTypes from 'prop-types';

import AppConstants from '../../../utilities/AppConstants';
import withText from '../../_atoms/Text';
import Paragraph from '../../styled/Paragraph';
import { Link } from './NavButtons.style';

const { LINKS } = AppConstants;

const NavButtons = ({ Text }) => (
  <>
    <Link to={LINKS.BLOG}>
      <Paragraph>
        <Text path="BlogLink" />
      </Paragraph>
    </Link>
    <Link to={LINKS.PHYSICS}>
      <Paragraph>
        <Text path="PhysicsLink" />
      </Paragraph>
    </Link>
    <Link to={LINKS.PROJECTS}>
      <Paragraph>
        <Text path="ProjectLink" />
      </Paragraph>
    </Link>
    <Link to={LINKS.MORE}>
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

import React from 'react';
import PropTypes from 'prop-types';

import AppConstants from '../../../utilities/AppConstants';
import withText from '../../_atoms/Text';
import { Container } from './Footer.style';

const Footer = ({ Text }) => (
  <Container>
    <Text path="copyright" />
    <div>
      {AppConstants.version}
    </div>
  </Container>
);

Footer.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Footer')(Footer);

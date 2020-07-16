import React from 'react';
import PropTypes from 'prop-types';

import AppConstants from '../../../utilities/AppConstants';
import withText from '../../_atoms/Text';
import Paragraph from '../../styled/Paragraph';
import { Container } from './Footer.style';

const Footer = ({ Text }) => (
  <Container>
    <Paragraph dark>
      <Text path="copyright" />
    </Paragraph>
    <Paragraph dark>
      {AppConstants.version}
    </Paragraph>
  </Container>
);

Footer.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Footer')(Footer);

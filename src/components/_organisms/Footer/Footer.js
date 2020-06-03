import React from 'react';
import PropTypes from 'prop-types';

import AppConstants from '../../../utilities/AppConstants';
import withText from '../../_atoms/Text';
import { Container, DarkParagraph } from './Footer.style';

const Footer = ({ Text }) => (
  <Container>
    <DarkParagraph>
      <Text path="copyright" />
    </DarkParagraph>
    <DarkParagraph>
      {AppConstants.version}
    </DarkParagraph>
  </Container>
);

Footer.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Footer')(Footer);

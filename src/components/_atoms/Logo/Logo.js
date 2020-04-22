import React from 'react';
import PropTypes from 'prop-types';

import image from '../../../images/svg/logoicon.svg';
import withText from '../Text';
import { Container, Icon, NameText } from './Logo.style';

const Logo = ({ Text, showText }) => (
  <Container>
    <Icon src={image} alt="" />
    {showText
      && (
        <NameText>
          <Text path="name" />
        </NameText>
      )}
  </Container>
);

Logo.propTypes = {
  Text: PropTypes.func.isRequired,
  showText: PropTypes.bool,
};

Logo.defaultProps = {
  showText: false,
};

export default withText('Meta.Logo')(Logo);

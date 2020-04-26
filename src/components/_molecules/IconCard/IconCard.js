import React from 'react';
import PropTypes from 'prop-types';

import withText from '../../_atoms/Text';
import Paragraph from '../../styled/Paragraph';
import { Content, Wrapper } from './IconCard.style';

const IconCard = ({ Text, children, strings }) => (
  <Wrapper>
    {children}
    <Content>
      <Paragraph dark>
        <Text path={`${strings}.Heading`} />
      </Paragraph>
      <Paragraph>
        <Text path={`${strings}.SubHeading`} />
      </Paragraph>
    </Content>
  </Wrapper>
);

IconCard.propTypes = {
  Text: PropTypes.func.isRequired,
  children: PropTypes.node,
  strings: PropTypes.string.isRequired,
};

IconCard.defaultProps = {
  children: null,
};

export default withText()(IconCard);
